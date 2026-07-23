import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

/** Shared chrome (skip link + header + footer) for all English pages. */
export function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
