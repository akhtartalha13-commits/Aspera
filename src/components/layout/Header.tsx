import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { primaryNav } from '@/data/site'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Elevate the header once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.active : ''}`

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.bar}>
        <Logo />

        <nav className={styles.desktopNav} aria-label="Primary">
          {primaryNav.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.desktopCta}>
          <Button to="/contact" size="md">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.burgerLine} ${open ? styles.line1 : ''}`} />
          <span className={`${styles.burgerLine} ${open ? styles.line2 : ''}`} />
          <span className={`${styles.burgerLine} ${open ? styles.line3 : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {primaryNav.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" size="lg" className={styles.mobileCta}>
            Request a Quote
          </Button>
        </nav>
      </div>

      {open && <div className={styles.scrim} onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  )
}
