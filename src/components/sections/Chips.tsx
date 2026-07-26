import { useEffect, useRef, useState } from 'react'
import styles from './Chips.module.css'

interface ChipsProps {
  items: string[]
  /** 'solid' = navy cards (product categories); 'outline' = white pills (industries). */
  variant?: 'solid' | 'outline'
}

/**
 * Single-row chip carousel. Keeps every item on one line and, when the row
 * overflows its container, reveals left/right arrows that scroll the cards.
 */
export function Chips({ items, variant = 'solid' }: ChipsProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)
  const [overflowing, setOverflowing] = useState(false)

  const update = () => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setOverflowing(max > 1)
    setCanLeft(el.scrollLeft > 1)
    setCanRight(el.scrollLeft < max - 1)
  }

  useEffect(() => {
    update()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  const scrollByDir = (dir: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className={`${styles.carousel} ${overflowing ? styles.hasArrows : ''}`}>
      {overflowing && (
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          aria-label="Scroll left"
          disabled={!canLeft}
          onClick={() => scrollByDir(-1)}
        >
          <Chevron dir="left" />
        </button>
      )}

      <ul ref={trackRef} className={`${styles.track} ${styles[variant]}`}>
        {items.map((item) => (
          <li key={item} className={styles.chip}>
            {item}
          </li>
        ))}
      </ul>

      {overflowing && (
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          aria-label="Scroll right"
          disabled={!canRight}
          onClick={() => scrollByDir(1)}
        >
          <Chevron dir="right" />
        </button>
      )}
    </div>
  )
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  )
}
