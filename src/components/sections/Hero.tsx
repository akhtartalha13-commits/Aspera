import { Button } from '@/components/ui/Button'
import { HeroSlideshow } from '@/components/ui/HeroSlideshow'
import { brand } from '@/data/site'
import styles from './Hero.module.css'

/** Home page hero — full-bleed dark section with headline + dual CTAs. */
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <HeroSlideshow />
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
