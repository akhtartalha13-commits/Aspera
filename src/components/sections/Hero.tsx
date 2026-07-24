import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { brand } from '@/data/site'
import styles from './Hero.module.css'

/** Background slides for the hero. Order matches the supplied artwork. */
const slides = [
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
  '/hero/hero-3.jpg',
  '/hero/hero-4.jpg',
]

/** How long each slide stays before cross-fading to the next. */
const SLIDE_MS = 1500

/** Home page hero — full-bleed dark section with headline + dual CTAs. */
export function Hero() {
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
    <section className={styles.hero}>
      <div className={styles.bg}>
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
        <div className={styles.overlay} />
        <div className={styles.glow} aria-hidden="true" />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {brand.name} {brand.suffix} · {brand.since}
          </p>
          <h1 className={styles.title}>
            Trusted Manufacturing.
            <br />
            Customized Solutions.
          </h1>
          <p className={styles.lead}>
            Over 40 years of family manufacturing experience, connecting trusted global partners
            with businesses across the United States — with reliability, integrity, and quality
            built into every product.
          </p>
          <div className={styles.actions}>
            <Button to="/contact" size="lg">
              Request a Quote →
            </Button>
            <Button to="/about" size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
