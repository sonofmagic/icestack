import glass from './glass'
import variables from './variables'
import type { CssValue } from '@/types'
const _utilitiesMap = {
  glass,
  variables,
  custom: (value: CssValue) => {
    if (Array.isArray(value)) {
      return value.join('\n')
    }
    return value
  }
} as unknown as Record<string, () => string>

const utilitiesMap = {} as Record<string, () => string>
for (const componentName of Object.keys(_utilitiesMap)) {
  const o = _utilitiesMap[componentName]
  utilitiesMap[componentName] = (...args) => {
    return o(...args)
  }
}

const utilitiesNames = Object.keys(utilitiesMap) as (keyof typeof utilitiesMap)[]
export { utilitiesNames, utilitiesMap }
