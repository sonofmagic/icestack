// import type { CssInJs } from 'postcss-js'

export type CssValue = string | string[] // | CssInJs | (CssInJs | string)[]

export interface CreatePresetOptions {
  types: string[]
}

export type CssSchemaDefaults = {
  styled: CssValue
  base: CssValue
  utils: CssValue
}

export type CssSchema = {
  selector?: string
  defaults: Partial<CssSchemaDefaults>
}
// baseDefault: CssValue
export type GetCssSchemaMethodOptions<T extends Record<string, any> = Record<string, any>> = CreatePresetOptions & { selector: string; params: T }

export type GetCssSchemaMethod<T extends Record<string, any> = Record<string, any>> = (opts: GetCssSchemaMethodOptions<T>) => CssSchema

export { type CssInJs } from 'postcss-js'
