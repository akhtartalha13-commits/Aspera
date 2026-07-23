import { usePageMeta } from '@/hooks/usePageMeta'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ImageSlot } from '@/components/ui/ImageSlot'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { InfoCard } from '@/components/sections/InfoCard'
import { WhyChooseGrid } from '@/components/sections/WhyChooseGrid'
import { CTABand } from '@/components/sections/CTABand'
import { aboutStory, aboutValues, aboutWhyChoose } from '@/data/content'
import styles from './AboutPage.module.css'

export default function AboutPage() {
  usePageMeta(
    'About Us',
    'For over 40 years and three generations, Aspera USA has manufactured with integrity, quality, and long-term commitment.',
  )

  return (
    <>
      <PageHero eyebrow="About Us" title="Three Generations. One Promise." />

      {/* Story */}
      <Container narrow as="section" className={styles.story}>
        <Reveal>
          <ImageSlot label="Drop a family / factory heritage photo" height={460} radius={24} />
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">Our Story</p>
          <h2 className={styles.storyTitle}>Built on Craft. Grown Across Generations.</h2>
          {aboutStory.map((p) => (
            <p key={p} className={styles.storyPara}>
              {p}
            </p>
          ))}
        </Reveal>
      </Container>

      {/* Values */}
      <section className="section section--cream">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our Values" title="What We Stand For" />
          </Reveal>
          <div className={styles.valueGrid}>
            {aboutValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 70}>
                <InfoCard icon={value.icon} title={value.title} desc={value.desc} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="section">
        <Container>
          <Reveal>
            <SectionHeading title="Why Choose Aspera USA?" />
          </Reveal>
          <Reveal>
            <WhyChooseGrid items={aboutWhyChoose.map((title) => ({ title }))} />
          </Reveal>
        </Container>
      </section>

      <CTABand
        eyebrow="Our Promise"
        title={
          <>
            Delivering Quality. Building Trust.
            <br />
            Growing Together.
          </>
        }
      />
    </>
  )
}
