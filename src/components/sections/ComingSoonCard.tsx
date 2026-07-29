import { Link } from 'react-router-dom'
import styles from './ComingSoonCard.module.css'

/**
 * "More Categories — Coming Soon" teaser card. Renders as the last cell in the
 * service grids on the home and services pages. Uses /coming-soon.jpg as a
 * background with a light-blue gradient overlay (which also serves as a
 * graceful fallback before the image is added).
 */
export function ComingSoonCard() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          More Categories
          <span className={styles.titleSub}>Coming Soon</span>
        </h3>
        <p className={styles.desc}>
          New collections are on the way. Stay tuned for more industrial, outdoor, lifestyle, and
          personalized products.
        </p>
        <Link to="/contact" className={styles.button}>
          Stay Tuned
        </Link>
      </div>
    </div>
  )
}
