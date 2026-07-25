import { Link } from 'react-router-dom'
import { brand } from '@/data/site'
import styles from './Logo.module.css'

interface LogoProps {
  /** Render the logo in light colors (for dark backgrounds). */
  light?: boolean
  /** Optional link target; when omitted the logo is a plain mark. */
  to?: string
}

export function Logo({ light = false, to = '/' }: LogoProps) {
  const content = (
    <img
      className={`${styles.logo} ${light ? styles.light : ''}`}
      src="/logo.png"
      alt={`${brand.name} ${brand.suffix}`}
      width={496}
      height={256}
    />
  )

  if (!to) return content

  return (
    <Link to={to} className={styles.link} aria-label={`${brand.name} ${brand.suffix} — home`}>
      {content}
    </Link>
  )
}
