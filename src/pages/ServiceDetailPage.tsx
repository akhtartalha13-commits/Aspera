import { useParams } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { InfoCard } from '@/components/sections/InfoCard'
import { Chips } from '@/components/sections/Chips'
import { CTABand } from '@/components/sections/CTABand'
import { ProductSlideshow, type ProductSlide } from '@/components/sections/ProductSlideshow'
import { MakingCarousel } from '@/components/sections/MakingCarousel'
import { getServiceBySlug } from '@/data/services'
import styles from './ServiceDetailPage.module.css'

/** Per-service "Product Showcase" slideshows, keyed by slug. */
const productSlidesBySlug: Record<string, ProductSlide[]> = {
  'industrial-solutions': [
    { src: '/industrial-slides/synchronous-belt.jpg', name: 'Synchronous Belt' },
    { src: '/industrial-slides/rubber-synchronous-belt.jpg', name: 'Rubber Synchronous Belt' },
    { src: '/industrial-slides/pu-synchronous-belt.jpg', name: 'PU Synchronous Belt' },
    { src: '/industrial-slides/ribbed-belt-series.jpg', name: 'Ribbed Belt Series' },
    { src: '/industrial-slides/ele-tool-belt-series.jpg', name: 'Ele Tool Belt Series' },
    { src: '/industrial-slides/synchronous-belt-wheel.jpg', name: 'Synchronous Belt Wheel' },
    { src: '/industrial-slides/26mm-pu-timing-belt.jpg', name: '26 mm Wide Polyurethane Timing Belt' },
    { src: '/industrial-slides/pu-timing-belt-roll.jpg', name: 'PU Timing Belt Roll' },
    { src: '/industrial-slides/open-ended-timing-belts.jpg', name: 'Open-Ended Timing Belts' },
  ],
  'outdoor-apparel': [
    { src: '/outdoor-slides/outdoor-2.jpg', name: 'Ultralight Jacket' },
    { src: '/outdoor-slides/outdoor-3.jpg', name: 'Seam-Sealed Softshell Jacket' },
    { src: '/outdoor-slides/outdoor-4.jpg', name: 'Seam-Sealed Hardshell Single Layer Jacket' },
    { src: '/outdoor-slides/outdoor-5.jpg', name: 'Unisex 3-in-1 Jacket' },
  ],
}

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

  const productSlides = productSlidesBySlug[service.slug]

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.heroTitle}
        align="left"
        image={`/services/${service.slug}.jpg`}
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
          {service.slug === 'outdoor-apparel' && (
            <div className={styles.videoGrid}>
              {[
                { src: '/outdoor-videos/outdoor-showcase.mp4', title: 'Outdoor Apparel Showcase', label: '01' },
                { src: '/outdoor-videos/three-in-one.mp4', title: '3-in-1 Jacket Showcase', label: '02' },
              ].map((video) => (
                <figure className={styles.videoCard} key={video.src}>
                  <video
                    className={styles.videoPlayer}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={video.title}
                    onPlay={(event) => {
                      const current = event.currentTarget
                      current.closest('section')?.querySelectorAll('video').forEach((player) => {
                        if (player !== current) player.pause()
                      })
                    }}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support embedded video.{' '}
                    <a href={video.src}>Download {video.title}</a>.
                  </video>
                  <figcaption className={styles.videoCaption}>
                    <span className={styles.videoNumber}>{video.label}</span>
                    <h3>{video.title}</h3>
                    <span className={styles.videoTag}>Product film</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </Container>
      </section>

      {service.slug === 'personalized-gifts' && (
        <section className="section" aria-label="Design your gift">
          <Container>
            <Reveal>
              <SectionHeading
                title="Design your gift for beloved/children/respected/friends"
                subtitle="At Holidays, Valentine's Day, Mother's Day/Father's Day/Graduation/Baby Shower"
              />
            </Reveal>
            <MakingCarousel
              label="Personalized gift videos"
              tag="Gift design"
              videos={[
                { src: '/gift-videos/gift-showcase-4.mp4', title: 'A Gift with a Story' },
                { src: '/gift-videos/handwoven.mp4', title: 'Handwoven' },
                { src: '/gift-videos/steampunk.mp4', title: 'SteamPunk' },
                { src: '/gift-videos/making-steampunk.mp4', title: 'Making of SteamPumk' },
                { src: '/gift-videos/gift-showcase-5.mp4', title: 'Personalized Gift Showcase 5' },
              ]}
            />
          </Container>
        </section>
      )}

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

      {/* Product Showcase slideshow (services that define slides) */}
      {productSlides && (
        <section className="section">
          <Container>
            <Reveal>
              <SectionHeading title="Product Showcase" />
            </Reveal>
            <Reveal>
              <ProductSlideshow slides={productSlides} intervalMs={4000} />
            </Reveal>
          </Container>
        </section>
      )}

      {/* Industrial manufacturing videos */}
      {service.slug === 'industrial-solutions' && (
        <section className="section" aria-label="Making">
          <Container>
            <Reveal>
              <SectionHeading title="Making" />
            </Reveal>
            <MakingCarousel />
          </Container>
        </section>
      )}

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

      <CTABand title={service.ctaHeading} text={service.ctaText} />
    </>
  )
}
