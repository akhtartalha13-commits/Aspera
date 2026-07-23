import type { ElementType, ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import styles from './Reveal.module.css'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in ms for sequenced reveals. */
  delay?: number
  as?: ElementType
  className?: string
}

/**
 * Fades + lifts children into view on scroll. Honors reduced-motion
 * automatically (global CSS neutralizes the transition).
 */
export function Reveal({ children, delay = 0, as: Tag = 'div', className }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()
  const cls = [styles.reveal, inView ? styles.visible : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={cls} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
