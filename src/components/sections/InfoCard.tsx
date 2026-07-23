import { Icon } from '@/components/ui/Icon'
import type { IconKey } from '@/data/types'
import styles from './InfoCard.module.css'

interface InfoCardProps {
  title: string
  desc: string
  /** Optional line icon (used for About values). */
  icon?: IconKey
}

/** White rounded card. Used for "What We Offer" and "Our Values". */
export function InfoCard({ title, desc, icon }: InfoCardProps) {
  return (
    <div className={styles.card}>
      {icon && (
        <span className={styles.iconWrap}>
          <Icon name={icon} size={34} color="var(--brass-500)" />
        </span>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}
