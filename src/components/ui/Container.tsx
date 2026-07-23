import type { ElementType, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  narrow?: boolean
  className?: string
  /** Render as a different element (e.g. 'section'). Defaults to 'div'. */
  as?: ElementType
}

/** Constrains content width and applies the responsive page gutter. */
export function Container({ children, narrow = false, className, as: Tag = 'div' }: ContainerProps) {
  const cls = ['container', narrow ? 'container--narrow' : '', className].filter(Boolean).join(' ')
  return <Tag className={cls}>{children}</Tag>
}
