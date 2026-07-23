import { Link } from 'react-router-dom'
import { Icon } from '@/components/ui/Icon'
import type { IconKey } from '@/data/types'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  to: string
  icon: IconKey
  title: string
  desc: string
  /** 'white' for the home grid, 'cream' for the services index grid. */
  variant?: 'white' | 'cream'
}

export function ServiceCard({ to, icon, title, desc, variant = 'white' }: ServiceCardProps) {
  return (
    <Link to={to} className={`${styles.card} ${styles[variant]}`}>
      <span className={styles.iconWrap}>
        <Icon name={icon} size={40} color="var(--brass-500)" />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <span className={styles.cta}>
        Explore <span aria-hidden="true">→</span>
      </span>
    </Link>
  )
}
