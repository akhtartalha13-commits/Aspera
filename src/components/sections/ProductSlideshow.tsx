import { useEffect, useRef, useState } from 'react'
import styles from './ProductSlideshow.module.css'

export interface ProductSlide {
  src: string
  /** Optional caption shown on the image. When omitted, no caption is drawn. */
  name?: string
  /** Optional alt text; falls back to the name or a generic label. */
  alt?: string
}

interface ProductSlideshowProps {
  slides: ProductSlide[]
  /** Autoplay interval in ms. */
  intervalMs?: number
}

/**
 * Captioned product slideshow with clickable dot navigation.
 * Cross-fades between slides; each image shows its name, and the dots
 * let the visitor jump straight to any picture.
 */
export function ProductSlideshow({ slides, intervalMs = 4000 }: ProductSlideshowProps) {
  const [index, setIndex] = useState(0)
  const timer = useRef<number | undefined>(undefined)

  // (Re)start the autoplay timer. Called on mount and whenever the visitor
  // jumps via a dot, so the new slide gets a full interval before advancing.
  const startTimer = () => {
    window.clearInterval(timer.current)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timer.current = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      intervalMs,
    )
  }

  useEffect(() => {
    startTimer()
    return () => window.clearInterval(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length, intervalMs])

  const goTo = (i: number) => {
    setIndex(i)
    startTimer()
  }

  return (
    <div className={styles.slideshow}>
      <div className={styles.frame}>
        {slides.map((slide, i) => (
          <figure
            key={slide.src}
            className={`${styles.slide} ${i === index ? styles.active : ''}`}
            aria-hidden={i !== index}
          >
            <img
              className={styles.img}
              src={slide.src}
              alt={slide.alt ?? slide.name ?? `Slide ${i + 1}`}
              decoding="async"
            />
            {slide.name && <figcaption className={styles.caption}>{slide.name}</figcaption>}
          </figure>
        ))}
      </div>

      <div className={styles.dots} role="tablist" aria-label="Product slides">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            aria-label={slide.name ?? `Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
