import type { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { contact } from '@/data/site'
import styles from './CTABand.module.css'

interface CTABandProps {
  eyebrow?: string
  title: ReactNode
  text?: string
  buttonLabel?: string
  /** Pass an internal route to override; defaults to the quote mailto. */
  to?: string
  href?: string
}

/** Navy closing call-to-action band used at the foot of most pages. */
export function CTABand({
  eyebrow,
  title,
  text,
  buttonLabel = 'Request a Quote →',
  to,
  href = contact.quoteHref,
}: CTABandProps) {
  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.title}>{title}</h2>
        {text && <p className={styles.text}>{text}</p>}
        <div className={styles.action}>
          {to ? (
            <Button to={to} size="lg">
              {buttonLabel}
            </Button>
          ) : (
            <Button href={href} size="lg">
              {buttonLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
