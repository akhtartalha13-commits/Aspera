import { usePageMeta } from '@/hooks/usePageMeta'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Hero } from '@/components/sections/Hero'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { WhyChooseGrid } from '@/components/sections/WhyChooseGrid'
import { CTABand } from '@/components/sections/CTABand'
import { services } from '@/data/services'
import { homeStats, homeWhyChoose } from '@/data/content'
import styles from './HomePage.module.css'

export default function HomePage() {
  usePageMeta(
    undefined,
    'Aspera USA — three generations of family manufacturing, connecting trusted global partners with businesses across the United States.',
  )

  return (
    <>
      <Hero />
      <StatsStrip items={homeStats} />

      {/* Services */}
      <section className="section section--cream">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Customized Manufacturing Solutions"
              subtitle="From product development to final delivery, committed to quality, flexibility, and long-term partnerships."
            />
          </Reveal>
          <div className={styles.serviceGrid}>
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 70}>
                <ServiceCard
                  to={`/services/${service.slug}`}
                  icon={service.icon}
                  title={service.title}
                  desc={service.shortDesc}
                  variant="white"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="section">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Aspera USA"
              title="Built on Trust. Proven Over Time."
            />
          </Reveal>
          <Reveal>
            <WhyChooseGrid items={homeWhyChoose} singleRow />
          </Reveal>
        </Container>
      </section>

      <CTABand title="Let's Build Your Next Project Together" />
    </>
  )
}
