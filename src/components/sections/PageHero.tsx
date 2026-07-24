import type { ReactNode } from 'react'
import { ImageSlot } from '@/components/ui/ImageSlot'
import styles from './PageHero.module.css'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  /** When provided, renders a real background photo behind the copy. */
  image?: string
  /** Fallback placeholder slot, used when no `image` is supplied. */
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
  image,
  imageLabel,
}: PageHeroProps) {
  const hasImage = Boolean(image || imageLabel)
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
          {image ? (
            <img className={styles.bgImage} src={image} alt="" aria-hidden="true" decoding="async" />
          ) : (
            <ImageSlot fill label={imageLabel!} radius={0} />
          )}
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
