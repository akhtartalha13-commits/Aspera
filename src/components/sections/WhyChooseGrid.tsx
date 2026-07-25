import styles from './WhyChooseGrid.module.css'

export interface WhyChooseItem {
  title: string
  desc?: string
}

interface WhyChooseGridProps {
  items: WhyChooseItem[]
  /** Minimum column width; smaller for dense single-line lists. */
  minColumn?: number
  /**
   * Force all items onto a single row on desktop (collapsing to fewer
   * columns on narrower screens). Used for the 6-up home "Why Aspera USA".
   */
  singleRow?: boolean
}

/**
 * Bordered feature grid. Accepts either single-line statements
 * (title only) or title + description pairs (home "Why Aspera USA").
 */
export function WhyChooseGrid({ items, minColumn = 240, singleRow = false }: WhyChooseGridProps) {
  return (
    <ul
      className={`${styles.grid} ${singleRow ? styles.singleRow : ''}`}
      style={
        singleRow
          ? { ['--cols' as string]: items.length }
          : { gridTemplateColumns: `repeat(auto-fit, minmax(${minColumn}px, 1fr))` }
      }
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
