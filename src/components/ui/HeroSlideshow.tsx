import { useEffect, useState } from 'react'
import styles from './HeroSlideshow.module.css'

/** Background slides shared by the English and Chinese hero sections. */
const slides = [
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
  '/hero/hero-3.jpg',
  '/hero/hero-4.jpg',
]

/** How long each slide stays before cross-fading to the next. */
const SLIDE_MS = 1500

/**
 * Full-bleed cross-fading background slideshow. Drop it inside a positioned
 * hero background wrapper, underneath the gradient overlay.
 */
export function HeroSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // Honour reduced-motion preferences: hold on the first slide instead of cycling.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) return

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_MS,
    )
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className={styles.slides} aria-hidden="true">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`${styles.slide} ${i === index ? styles.slideActive : ''}`}
          decoding="async"
        />
      ))}
    </div>
  )
}
