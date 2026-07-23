import styles from './WhyChooseGrid.module.css'

export interface WhyChooseItem {
  title: string
  desc?: string
}

interface WhyChooseGridProps {
  items: WhyChooseItem[]
  /** Minimum column width; smaller for dense single-line lists. */
  minColumn?: number
}

/**
 * Bordered feature grid. Accepts either single-line statements
 * (title only) or title + description pairs (home "Why Aspera USA").
 */
export function WhyChooseGrid({ items, minColumn = 240 }: WhyChooseGridProps) {
  return (
    <ul
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${minColumn}px, 1fr))` }}
    >
      {items.map((item) => (
        <li key={item.title} className={styles.cell}>
          <span className={styles.title}>{item.title}</span>
          {item.desc && <span className={styles.desc}>{item.desc}</span>}
        </li>
      ))}
    </ul>
  )
}
