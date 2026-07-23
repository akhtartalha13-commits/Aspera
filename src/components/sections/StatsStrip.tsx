import type { StatItem } from '@/data/types'
import styles from './StatsStrip.module.css'

interface StatsStripProps {
  items: StatItem[]
}

/** Navy metrics band shown beneath the home hero. */
export function StatsStrip({ items }: StatsStripProps) {
  return (
    <section className={styles.strip} aria-label="Company highlights">
      <div className={styles.grid}>
        {items.map((stat) => (
          <div key={stat.label} className={styles.item}>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
