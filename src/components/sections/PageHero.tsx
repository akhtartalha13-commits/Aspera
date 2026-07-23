import type { ReactNode } from 'react'
import { ImageSlot } from '@/components/ui/ImageSlot'
import styles from './PageHero.module.css'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  /** When provided, renders a background image slot behind the copy. */
  imageLabel?: string
}

/**
 * Inner-page hero. Centered text-only for section landing pages, or
 * left-aligned over a background image for service detail pages.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  imageLabel,
}: PageHeroProps) {
  const hasImage = Boolean(imageLabel)
  const cls = [
    styles.hero,
    align === 'center' ? styles.center : styles.left,
    hasImage ? styles.withImage : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={cls}>
      {hasImage && (
        <div className={styles.bg}>
          <ImageSlot fill label={imageLabel!} radius={0} />
          <div className={styles.overlay} />
        </div>
      )}
      <div className={styles.inner}>
        <div className={styles.content}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
