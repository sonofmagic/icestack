import { getCodegenOptions } from '@icestack/ui'

import preset from '@/index'

describe('options', () => {
  it('daisyui options', () => {
    const opt = getCodegenOptions({
      presets: [preset()]
    })
    expect(opt).toMatchSnapshot()
  })
})
