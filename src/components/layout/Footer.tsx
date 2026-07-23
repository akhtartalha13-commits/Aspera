import { Link } from 'react-router-dom'
import { brand, contact, copyright, primaryNav, socials } from '@/data/site'
import { Logo } from '@/components/ui/Logo'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <Logo light />
          </div>
          <p className={styles.tagline}>{brand.tagline}</p>
        </div>

        <nav className={styles.col} aria-label="Footer">
          <h2 className={styles.colTitle}>Quick Links</h2>
          <ul className={styles.linkList}>
            {primaryNav.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/zh" className={styles.link} lang="zh">
                中文 (Chinese)
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Contact</h2>
          <ul className={styles.linkList}>
            <li className={styles.plain}>{contact.person}, President</li>
            <li>
              <a className={styles.link} href={contact.phoneHref}>
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a className={styles.link} href={contact.emailHref}>
                {contact.email}
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href={contact.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.website}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>{copyright}</p>
        <ul className={styles.socials}>
          {socials.map((s) => (
            <li key={s.label}>
              <a className={styles.social} href={s.href} aria-label={s.label}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
