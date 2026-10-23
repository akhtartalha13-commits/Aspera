import { useEffect, useRef, useState } from 'react'
import styles from './MakingCarousel.module.css'

const industrialVideos = [
  { src: '/industrial-videos/production.mp4', title: 'Factory Tour' },
  { src: '/industrial-videos/factory.mp4', title: 'Making of Training Belt' },
  { src: '/industrial-videos/making.mp4', title: 'Making in Action' },
]

interface MakingCarouselProps {
  videos?: { src: string; title: string }[]
  label?: string
  tag?: string
}

export function MakingCarousel({ videos = industrialVideos, label = 'Making videos', tag = 'Making' }: MakingCarouselProps) {
  const [active, setActive] = useState(0)
  const players = useRef<(HTMLVideoElement | null)[]>([])
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const player = players.current[active]
    players.current.forEach((video, index) => {
      if (index !== active) video?.pause()
    })
    if (!player || !root.current) return
    // Start muted so browser autoplay policies allow playback.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void player.play().catch(() => { /* Native controls remain available. */ })
      } else {
        player.pause()
      }
    }, { threshold: 0.35 })
    observer.observe(root.current)
    return () => {
      observer.disconnect()
      player.pause()
    }
  }, [active])

  const select = (index: number) => {
    players.current.forEach((player) => player?.pause())
    const next = (index + videos.length) % videos.length
    const player = players.current[next]
    if (player) {
      player.muted = true
      void player.play().catch(() => { /* Native controls remain available. */ })
    }
    setActive(next)
  }

  return (
    <div ref={root} className={styles.carousel} role="region" aria-roledescription="carousel" aria-label={label}>
      <div className={styles.stage}>
        {videos.map((video, index) => {
          const position = index === active ? 'center' : index === (active + 1) % videos.length ? 'right' : 'left'
          return (
            <figure key={video.src} className={`${styles.card} ${styles[position]}`}>
              <div className={styles.media}>
                <video
                  ref={(element) => { players.current[index] = element }}
                  src={video.src}
                  controls={index === active}
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  tabIndex={index === active ? 0 : -1}
                  aria-label={video.title}
                  aria-hidden={index !== active}
                  onPlay={() => players.current.forEach((player, i) => { if (i !== index) player?.pause() })}
                >
                  Your browser does not support embedded video. <a href={video.src}>Download {video.title}</a>.
                </video>
                {index !== active && (
                  <button type="button" className={styles.preview} onClick={() => select(index)} aria-label={`Play ${video.title}`}>
                    <span aria-hidden="true">{position === 'left' ? '\u2039' : '\u203a'}</span>
                  </button>
                )}
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.number}>0{index + 1}</span>
                <h3>{video.title}</h3>
                <span className={styles.tag}>{tag}</span>
              </figcaption>
            </figure>
          )
        })}
      </div>
      <div className={styles.navigation}>
        <button type="button" onClick={() => select(active - 1)} aria-label="Previous video">&#8249;</button>
        <p aria-live="polite" aria-atomic="true">{videos[active].title} <span>{active + 1} / {videos.length}</span></p>
        <button type="button" onClick={() => select(active + 1)} aria-label="Next video">&#8250;</button>
      </div>
    </div>
  )
}
