import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ImageSlot } from '@/components/ui/ImageSlot'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Hero } from '@/components/sections/Hero'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { WhyChooseGrid } from '@/components/sections/WhyChooseGrid'
import { CTABand } from '@/components/sections/CTABand'
import { services } from '@/data/services'
import { homeStats, homeWhyChoose, homeStory } from '@/data/content'
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

      {/* Story intro */}
      <Container narrow as="section" className={styles.story}>
        <Reveal>
          <p className="eyebrow">Our Story</p>
          <h2 className={styles.storyTitle}>Three Generations. One Promise.</h2>
          {homeStory.paragraphs.map((p) => (
            <p key={p} className={styles.storyPara}>
              {p}
            </p>
          ))}
          <Link to="/about" className={styles.storyLink}>
            Read Our Full Story →
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <ImageSlot label="Drop a factory / craftsmanship photo" height={420} radius={24} />
        </Reveal>
      </Container>

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
            <WhyChooseGrid items={homeWhyChoose} />
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="Let's Build Your Next Project Together"
        text="Whether you're launching a new product or expanding your existing line, Aspera USA is ready to support your business."
      />
    </>
  )
}
