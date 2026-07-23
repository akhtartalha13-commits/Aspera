import styles from './Chips.module.css'

interface ChipsProps {
  items: string[]
  /** 'solid' = navy cards (product categories); 'outline' = white pills (industries). */
  variant?: 'solid' | 'outline'
}

export function Chips({ items, variant = 'solid' }: ChipsProps) {
  return (
    <ul className={styles[variant]}>
      {items.map((item) => (
        <li key={item} className={styles.chip}>
          {item}
        </li>
      ))}
    </ul>
  )
}
