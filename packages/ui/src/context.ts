import fs from 'node:fs'
import path from 'node:path'
import plugin from 'tailwindcss/plugin'
import { set } from 'lodash'
import * as sass from 'sass'
import postcssJs, { CssInJs } from 'postcss-js'
import postcss, { Root, AcceptedPlugin } from 'postcss'
import defu from 'defu'
import { CodegenOptions, IBuildScssOptions } from './types'
import { generateComponentsIndexCode, generateIndexCode } from './js/generate'
import { getColors } from './colors'
import { walkScssSync } from './utils'
import { createFunctions } from './sass/functions'
import { transformJsToSass } from './sass/utils'
import { resolveJsDir, scssDir, getCssPath, getJsPath, getCssResolvedpath, componentTemplate } from '@/dirs'
import { someExtends, stages } from '@/constants'
import allComponents from '@/allComponents'
import { logger } from '@/log'
// import { merge } from 'merge'
import { ensureDirSync } from '@/utils'
import { resolveTailwindcss, initConfig } from '@/postcss/tailwindcss'
import { getPlugin as getCssVarsPrefixerPlugin } from '@/postcss/custom-property-prefixer'
import prefixer from '@/postcss/prefixer'

export function createContext(options: CodegenOptions) {
  const { outdir, dryRun, prefix, varPrefix } = options

  function compileScss(filename: string, functions: Record<string, sass.CustomFunction<'sync'>> = {}) {
    const sassOptions: sass.Options<'sync'> = {
      functions: {
        ...createFunctions(options),
        ...functions
      }
    }
    const result = sass.compile(filename, sassOptions)
    const plugins: AcceptedPlugin[] = [getCssVarsPrefixerPlugin(varPrefix)]
    if (typeof prefix === 'string') {
      plugins.push(
        prefixer({
          prefix,
          ignore: []
        })
      )
    } else if (typeof prefix === 'object') {
      plugins.push(prefixer(prefix))
    }

    return postcss(plugins).process(result.css, {
      from: undefined
    })
  }

  function buildScss(opts: IBuildScssOptions) {
    const { filename, resolveConfig } = opts

    // const name = path.basename(filename, '.scss')
    const { dryRun, tailwindcssConfig } = options
    const { css: cssOutput } = compileScss(filename)

    const relPath = path.relative(scssDir, filename)
    const cssPath = getCssPath(relPath, outdir)
    const jsPath = getJsPath(relPath, outdir)
    const cssResolvedPath = getCssResolvedpath(relPath, outdir)

    if (!dryRun) {
      ensureDirSync(path.dirname(cssPath))
      ensureDirSync(path.dirname(jsPath))
      ensureDirSync(path.dirname(cssResolvedPath))
    }

    const config = defu(tailwindcssConfig, initConfig())

    resolveConfig?.(config)

    // scss -> css
    !dryRun && fs.writeFileSync(cssPath, cssOutput, 'utf8')
    const { root, css } = resolveTailwindcss({
      css: cssOutput,
      config,
      options
    })

    !dryRun && fs.writeFileSync(cssResolvedPath, css, 'utf8')
    const cssJsObj = postcssJs.objectify(root as Root)

    if (!dryRun) {
      const data = 'module.exports = ' + JSON.stringify(cssJsObj, null, 2)
      // css -> js
      fs.writeFileSync(jsPath, data, 'utf8')
    }

    return cssJsObj
  }

  function compileScssWithCp(componentName: string, stage: string) {
    return compileScss(componentTemplate, {
      'cp()': () => {
        return transformJsToSass(`${componentName}.defaults.${stage}`)
      }
    })
  }

  function buildComponents(opts: IBuildScssOptions) {
    const { resolveConfig } = opts

    const res: Record<string, Record<string, CssInJs>> = {}
    for (const componentName of allComponents) {
      for (const stage of stages) {
        const { css: cssOutput } = compileScssWithCp(componentName, stage)
        const relPath = `components/${componentName}/${stage}.scss`
        const cssPath = getCssPath(relPath, outdir)
        const jsPath = getJsPath(relPath, outdir)
        const cssResolvedPath = getCssResolvedpath(relPath, outdir)

        if (!dryRun) {
          ensureDirSync(path.dirname(cssPath))
          ensureDirSync(path.dirname(jsPath))
          ensureDirSync(path.dirname(cssResolvedPath))
        }

        const config = initConfig()

        resolveConfig?.(config)

        // scss -> css
        !dryRun && fs.writeFileSync(cssPath, cssOutput, 'utf8')
        const { root, css } = resolveTailwindcss({
          css: cssOutput,
          config,
          options
        })

        !dryRun && fs.writeFileSync(cssResolvedPath, css, 'utf8')
        const cssJsObj = postcssJs.objectify(root as Root)

        if (!dryRun) {
          const data = 'module.exports = ' + JSON.stringify(cssJsObj, null, 2)
          // css -> js
          fs.writeFileSync(jsPath, data, 'utf8')
        }
        set(res, `${componentName}.${stage}`, cssJsObj)
        // res[componentName][stage] = cssJsObj
      }
    }
    return res
  }

  function generate(outSideLayerCss: 'base' | 'utilities' | 'components') {
    const colors = getColors(options)
    switch (outSideLayerCss) {
      case 'base': {
        const res = []
        for (const file of walkScssSync(path.resolve(scssDir, 'base'))) {
          res.push(
            buildScss({
              filename: file.path,
              outSideLayerCss
            })
          )
        }
        return res
      }
      case 'utilities': {
        const utilitiesPath = path.resolve(scssDir, 'utilities')
        const basenameArray = []
        const fromDir = path.resolve(scssDir, 'utilities')
        const utilitiesJsOutputPath = path.resolve(resolveJsDir(outdir), 'utilities')
        const res = []
        for (const file of walkScssSync(path.resolve(utilitiesPath, 'global'))) {
          basenameArray.push(path.relative(fromDir, file.path).replace(/\.scss$/, ''))
          res.push(
            buildScss({
              filename: file.path,
              outSideLayerCss,
              resolveConfig(config) {
                set(config, 'theme.extend.colors', colors)
              }
            })
          )
        }
        !dryRun && fs.writeFileSync(path.resolve(utilitiesJsOutputPath, 'index.js'), generateIndexCode(basenameArray), 'utf8')

        return res
      }
      case 'components': {
        const res = buildComponents({
          filename: '',
          outSideLayerCss: 'components',
          resolveConfig: (config) => {
            set(config, 'theme.extend.colors', colors)
            config.plugins = [
              plugin(() => {}, {
                theme: {
                  extend: {
                    ...someExtends
                  }
                }
              })
            ]
          }
        })

        if (!dryRun) {
          const componentsJsOutputPath = path.resolve(resolveJsDir(outdir), 'components')
          const code = generateComponentsIndexCode(allComponents)
          fs.writeFileSync(path.resolve(componentsJsOutputPath, 'index.js'), code, 'utf8')
        }

        return res
      }
      default:
    }
  }

  return {
    options,
    generate,
    compileScssWithCp,
    buildComponents,
    buildScss,
    compileScss
  }
}

export type IContext = ReturnType<typeof createContext>