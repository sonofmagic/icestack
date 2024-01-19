import { GetCssSchemaMethod, css } from '@/types'

const schema: GetCssSchemaMethod = (opts) => {
  const { selector } = opts
  return {
    selector,
    defaults: {
      base: css`
        ${selector} {
          @apply grid w-full place-items-center bg-cover bg-center;
          & > * {
            @apply col-start-1 row-start-1;
          }
          &-overlay {
            @apply col-start-1 row-start-1 h-full w-full;
          }
          &-content {
            @apply z-0 flex items-center justify-center;
          }
        }
      `,
      styled: css`
        ${selector} {
          &-overlay {
            @apply bg-neutral bg-opacity-50;
          }
          &-content {
            @apply max-w-7xl gap-4 p-4;
          }
        }
      `
    }
  }
}

export default {
  schema
}
