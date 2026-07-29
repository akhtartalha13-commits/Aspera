import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { PageHero } from '@/components/sections/PageHero'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { ComingSoonCard } from '@/components/sections/ComingSoonCard'
import { CTABand } from '@/components/sections/CTABand'
import { services } from '@/data/services'
import styles from './ServicesPage.module.css'

export default function ServicesPage() {
  usePageMeta(
    'Our Services',
    'Customized manufacturing solutions — outdoor apparel, organization wear, industrial solutions, pet products, personalized gifts, and OEM & private label.',
  )

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Customized Manufacturing Solutions for Your Business"
        subtitle="From product development to final delivery, we are committed to quality, flexibility, and long-term partnerships."
      />

      <section className="section">
        <Container>
          <div className={styles.grid}>
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <ServiceCard
                  to={`/services/${service.slug}`}
                  icon={service.icon}
                  image={`/service-icons/${service.slug}.jpg?v=3`}
                  title={service.title}
                  desc={service.servicesDesc}
                  variant="cream"
                />
              </Reveal>
            ))}

            {/* OEM highlight card */}
            <Reveal delay={services.length * 60}>
              <div className={styles.oemCard}>
                <span className={styles.oemIcon}>
                  <Icon name="oem" size={42} color="var(--brass-300)" />
                </span>
                <h3 className={styles.oemTitle}>OEM &amp; Private Label</h3>
                <p className={styles.oemDesc}>
                  From concept to production, our team works closely with every client to develop
                  products that meet quality, branding, and delivery goals.
                </p>
                <Link to="/contact" className={styles.oemLink}>
                  Talk to Us →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={(services.length + 1) * 60}>
              <ComingSoonCard />
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABand title="Let's Build Your Next Project Together" />
    </>
  )
}
