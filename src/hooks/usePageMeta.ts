import { useEffect } from 'react'

const DEFAULT_TITLE = 'Aspera USA — Trusted Manufacturing. Customized Solutions.'

/**
 * Lightweight document-title + meta-description manager.
 * Avoids pulling in react-helmet for a handful of static pages.
 */
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title ? `${title} — Aspera USA` : DEFAULT_TITLE

    let metaEl: HTMLMetaElement | null = null
    let previousDescription: string | null = null

    if (description) {
      metaEl = document.querySelector('meta[name="description"]')
      if (metaEl) {
        previousDescription = metaEl.getAttribute('content')
        metaEl.setAttribute('content', description)
      }
    }

    return () => {
      document.title = previousTitle
      if (metaEl && previousDescription !== null) {
        metaEl.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}
