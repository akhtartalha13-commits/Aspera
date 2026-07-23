import { Link } from 'react-router-dom'
import { brand } from '@/data/site'
import styles from './Logo.module.css'

interface LogoProps {
  /** Render the wordmark in light colors (for dark backgrounds). */
  light?: boolean
  /** Optional link target; when omitted the logo is a plain mark. */
  to?: string
}

export function Logo({ light = false, to = '/' }: LogoProps) {
  const content = (
    <span className={`${styles.logo} ${light ? styles.light : ''}`}>
      <img
        className={styles.mark}
        src="/logo-mark.png"
        alt=""
        aria-hidden="true"
        width={763}
        height={451}
      />
      <span className={styles.word}>
        {brand.name} <span className={styles.suffix}>{brand.suffix}</span>
      </span>
    </span>
  )

  if (!to) return content

  return (
    <Link to={to} className={styles.link} aria-label={`${brand.name} ${brand.suffix} — home`}>
      {content}
    </Link>
  )
}
