import { usePageMeta } from '@/hooks/usePageMeta'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/sections/PageHero'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  usePageMeta('Page Not Found')

  return (
    <>
      <PageHero
        eyebrow="Error 404"
        title="This Page Wandered Off"
        subtitle="The page you're looking for doesn't exist or may have moved."
      />
      <section className="section">
        <Container>
          <div className={styles.actions}>
            <Button to="/" size="lg">
              Back to Home
            </Button>
            <Button to="/services" size="lg" variant="link">
              Browse Services →
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
