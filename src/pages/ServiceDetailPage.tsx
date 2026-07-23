import { useParams } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { InfoCard } from '@/components/sections/InfoCard'
import { Chips } from '@/components/sections/Chips'
import { WhyChooseGrid } from '@/components/sections/WhyChooseGrid'
import { CTABand } from '@/components/sections/CTABand'
import { getServiceBySlug } from '@/data/services'
import styles from './ServiceDetailPage.module.css'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  usePageMeta(service ? service.title : 'Service Not Found', service?.introHeading)

  if (!service) {
    return (
      <>
        <PageHero eyebrow="Services" title="Service Not Found" />
        <section className="section">
          <Container narrow>
            <p className={styles.introPara}>
              We couldn't find that service. Explore our full range of manufacturing solutions
              instead.
            </p>
            <div style={{ marginTop: 24 }}>
              <Button to="/services" size="lg">
                View All Services →
              </Button>
            </div>
          </Container>
        </section>
      </>
    )
  }

  // Alternate section backgrounds (cream / white) for visual rhythm.
  const offersCream = true
  const categoriesCream = false
  const industriesCream = true
  const whyChooseCream = !service.industries // white when Industries block precedes it

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.heroTitle}
        align="left"
        imageLabel={service.heroPlaceholder}
      />

      {/* Intro */}
      <section className="section">
        <Container narrow>
          <Reveal className={styles.intro}>
            <h2 className={styles.introHeading}>{service.introHeading}</h2>
            {service.introParagraphs.map((p) => (
              <p key={p} className={styles.introPara}>
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* What We Offer */}
      <section className={`section ${offersCream ? 'section--cream' : ''}`}>
        <Container>
          <Reveal>
            <SectionHeading title="What We Offer" />
          </Reveal>
          <div className={styles.offerGrid}>
            {service.offers.map((offer, i) => (
              <Reveal key={offer.title} delay={i * 70}>
                <InfoCard title={offer.title} desc={offer.desc} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Categories */}
      <section className={`section ${categoriesCream ? 'section--cream' : ''}`}>
        <Container>
          <Reveal>
            <SectionHeading title="Product Categories" />
          </Reveal>
          <Reveal>
            <Chips items={service.categories} variant="solid" />
          </Reveal>
        </Container>
      </section>

      {/* Industries We Serve (Industrial only) */}
      {service.industries && (
        <section className={`section ${industriesCream ? 'section--cream' : ''}`}>
          <Container narrow>
            <Reveal>
              <SectionHeading
                title="Industries We Serve"
                subtitle="We support customers across a wide range of industries, including:"
              />
            </Reveal>
            <Reveal>
              <Chips items={service.industries} variant="outline" />
            </Reveal>
          </Container>
        </section>
      )}

      {/* Why Choose (optional) */}
      {service.whyChoose && (
        <section className={`section ${whyChooseCream ? 'section--cream' : ''}`}>
          <Container>
            <Reveal>
              <SectionHeading title="Why Choose Aspera USA?" />
            </Reveal>
            <Reveal>
              <WhyChooseGrid items={service.whyChoose.map((title) => ({ title }))} minColumn={220} />
            </Reveal>
          </Container>
        </section>
      )}

      <CTABand title={service.ctaHeading} text={service.ctaText} />
    </>
  )
}
