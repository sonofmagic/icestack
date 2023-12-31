import { cva } from 'class-variance-authority'

import { expands, addPrefix, sizePrefix } from '@/shared'
import { InternalOptions } from '@/types'

export default function (opts: InternalOptions) {
  const { prefix } = opts
  const className = 'loading'
  const baseClass = prefix + className
  const basePrefix = baseClass + '-'
  const sizes = sizePrefix(basePrefix)
  const shapes = addPrefix(basePrefix, ['audio', 'ball-triangle', 'bars', 'circles', 'grid', 'hearts', 'oval', 'puff', 'rings', 'spinning-circles', 'tail-spin', 'three-dots'])
  return {
    cva: cva([baseClass], {
      variants: {
        size: expands(sizes),
        shape: expands(shapes)
      },
      defaultVariants: {}
    }),
    prefix,
    className,
    baseClass,
    sizes,
    shapes
  }
}
