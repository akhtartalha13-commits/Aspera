import { usePageMeta } from '@/hooks/usePageMeta'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'
import { ImageSlot } from '@/components/ui/ImageSlot'
import { PageHero } from '@/components/sections/PageHero'
import { contact, socials } from '@/data/site'
import type { IconKey } from '@/data/types'
import styles from './ContactPage.module.css'

interface ContactRow {
  icon: IconKey
  label: string
  value: string
  href: string
  external?: boolean
}

const rows: ContactRow[] = [
  { icon: 'phone', label: 'Mobile', value: contact.phoneDisplay, href: contact.phoneHref },
  { icon: 'mail', label: 'Email', value: contact.email, href: contact.emailHref },
  {
    icon: 'globe',
    label: 'Website',
    value: contact.website,
    href: contact.websiteHref,
    external: true,
  },
]

export default function ContactPage() {
  usePageMeta(
    'Contact Us',
    'Reach out to Aspera USA — we typically respond within one business day. Call, email, or connect on WeChat.',
  )

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start Your Next Project"
        subtitle="Reach out to our team directly — we typically respond within one business day."
      />

      <section className="section">
        <Container narrow>
          <div className={styles.grid}>
            {/* Contact card */}
            <Reveal className={styles.contactCard}>
              <div className={styles.person}>
                <span className={styles.avatar} aria-hidden="true">
                  LZ
                </span>
                <div>
                  <div className={styles.name}>{contact.person}</div>
                  <div className={styles.role}>{contact.role}</div>
                </div>
              </div>

              <ul className={styles.rows}>
                {rows.map((row) => (
                  <li key={row.label}>
                    <a
                      className={styles.row}
                      href={row.href}
                      {...(row.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      <span className={styles.rowIcon}>
                        <Icon name={row.icon} size={20} color="var(--navy-800)" />
                      </span>
                      <span>
                        <span className={styles.rowLabel}>{row.label}</span>
                        <span className={styles.rowValue}>{row.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <ul className={styles.socials}>
                {socials.map((s) => (
                  <li key={s.label}>
                    <a className={styles.socialPill} href={s.href}>
                      {s.label}
                      {s.handle ? ` ${s.handle}` : ''}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Aside: WeChat + email */}
            <div className={styles.aside}>
              <Reveal className={styles.wechatCard}>
                <div className={styles.wechatTitle}>Scan to Connect on WeChat</div>
                <ImageSlot
                  label="Drop WeChat QR code"
                  height={220}
                  maxWidth={220}
                  radius={16}
                />
              </Reveal>

              <Reveal delay={100} className={styles.emailCard}>
                <div className={styles.emailTitle}>Prefer email?</div>
                <p className={styles.emailText}>
                  Send us your product idea, quantities, and timeline — we'll follow up with next
                  steps.
                </p>
                <Button href={contact.emailHref} size="md">
                  Email Us →
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
