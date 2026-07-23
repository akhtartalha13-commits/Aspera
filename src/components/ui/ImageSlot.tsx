import type { CSSProperties } from 'react'
import styles from './ImageSlot.module.css'

interface ImageSlotProps {
  /** Empty-state caption shown when no image is provided. */
  label: string
  /** Optional real image source. When set, renders the image instead. */
  src?: string
  alt?: string
  /** Corner radius in px. Ignored when `fill` is used. */
  radius?: number
  /** Fixed CSS height (e.g. 420 or '100%'). */
  height?: number | string
  /** Absolutely fill the positioned parent (for hero backgrounds). */
  fill?: boolean
  maxWidth?: number | string
  className?: string
}

/**
 * Replacement for the original `<image-slot>` web component.
 * Renders a branded placeholder that can later accept a real `src`
 * without touching call sites — a single content swap point.
 */
export function ImageSlot({
  label,
  src,
  alt,
  radius = 24,
  height,
  fill = false,
  maxWidth,
  className,
}: ImageSlotProps) {
  const style: CSSProperties = fill
    ? {}
    : {
        borderRadius: radius,
        height: typeof height === 'number' ? `${height}px` : height,
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
      }

  const cls = [styles.slot, fill ? styles.fill : '', className].filter(Boolean).join(' ')

  if (src) {
    return (
      <div className={cls} style={style}>
        <img className={styles.img} src={src} alt={alt ?? ''} loading="lazy" decoding="async" />
      </div>
    )
  }

  return (
    <div className={cls} style={style} role="img" aria-label={label}>
      <span className={styles.inner}>
        <svg
          className={styles.icon}
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.6" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className={styles.caption}>{label}</span>
      </span>
    </div>
  )
}
