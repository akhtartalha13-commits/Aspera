import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import styles from './Button.module.css'

type Variant = 'primary' | 'outline' | 'link'
type Size = 'md' | 'lg'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

interface AsInternalLink extends BaseProps {
  /** Internal SPA route → renders react-router <Link>. */
  to: string
  href?: never
  onClick?: never
  type?: never
}

interface AsExternalLink extends BaseProps {
  /** External / protocol link (tel:, mailto:, https:) → renders <a>. */
  href: string
  to?: never
  onClick?: never
  type?: never
}

interface AsButton extends BaseProps {
  onClick: () => void
  to?: never
  href?: never
  type?: 'button' | 'submit'
}

type ButtonProps = AsInternalLink | AsExternalLink | AsButton

function classesFor(variant: Variant, size: Size, extra?: string) {
  return [styles.btn, styles[variant], styles[size], extra].filter(Boolean).join(' ')
}

/**
 * Brand button/CTA. Polymorphic: pass `to` for an internal route,
 * `href` for an external/protocol link, or `onClick` for an action.
 */
export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className } = props
  const cls = classesFor(variant, size, className)

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const external = /^https?:/.test(props.href)
    return (
      <a
        href={props.href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={cls}>
      {children}
    </button>
  )
}
