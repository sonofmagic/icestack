import { transformCss2Js } from '@/components/shared'

export const options = () => {
  return {
    defaults: transformCss2Js(`.no-animation {
      --animation-btn: 0;
      --animation-input: 0;
    }
    .tab-border-none {
      --tab-border: 0px;
    }
    .tab-border {
      --tab-border: 1px;
    }
    .tab-border-2 {
      --tab-border: 2px;
    }
    .tab-border-3 {
      --tab-border: 3px;
    }
    .tab-rounded-none {
      --tab-radius: 0;
    }
    .tab-rounded-lg {
      --tab-radius: 0.5rem;
    }
    `)
  }
}
