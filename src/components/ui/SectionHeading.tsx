import type { ReactNode } from 'react'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  /** Use light text on dark backgrounds. */
  onDark?: boolean
  /** Heading level for correct document outline (default h2). */
  as?: 'h1' | 'h2'
  className?: string
}

/** Reusable eyebrow + title + subtitle block used across every section. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  onDark = false,
  as: Heading = 'h2',
  className,
}: SectionHeadingProps) {
  const cls = [
    styles.heading,
    align === 'center' ? styles.center : styles.left,
    onDark ? styles.onDark : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls}>
      {eyebrow && (
        <p className={`eyebrow ${onDark ? 'eyebrow--onDark' : ''}`}>{eyebrow}</p>
      )}
      <Heading className={styles.title}>{title}</Heading>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
