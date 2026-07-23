import type { ReactNode } from 'react'
import type { IconKey } from '@/data/types'

export interface IconProps {
  name: IconKey
  size?: number
  /** Stroke color; defaults to currentColor so it inherits from CSS. */
  color?: string
  className?: string
  strokeWidth?: number
}

/**
 * Line-icon set extracted from the original site's inline SVGs.
 * All paths render on a 24×24 viewBox and inherit `currentColor`
 * unless an explicit `color` is passed.
 */
const paths: Record<IconKey, ReactNode> = {
  outdoor: <path d="M12 2l3 3-1 4 4 2-2 3 2 8H8l2-8-2-3 4-2-1-4z" />,
  organization: <path d="M8 4l4 2 4-2 3 4-2 2v10H7V10L5 8z" />,
  industrial: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  pet: (
    <>
      <circle cx="8" cy="7" r="1.6" />
      <circle cx="12.5" cy="5" r="1.6" />
      <circle cx="17" cy="7" r="1.6" />
      <circle cx="19" cy="11.5" r="1.6" />
      <path d="M8 12c0-2 2-3 4.5-3s4.5 1 4.5 3c0 3-2 4-2 6.5 0 1.5-1.2 2.5-2.5 2.5s-2.5-1-2.5-2.5C10 16 8 15 8 12z" />
    </>
  ),
  gift: (
    <path d="M12 8v13M4 8h16v4H4zM12 8c-2 0-3.5-1.5-3.5-3S9.5 2 11 2s1 2 1 6zM12 8c2 0 3.5-1.5 3.5-3S13.5 2 12 2s-1 2-1 6z" />
  ),
  oem: <path d="M8 12a4 4 0 118 0 4 4 0 01-8 0zM3 12h2M19 12h2M12 3v2M12 19v2" />,
  integrity: <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />,
  quality: <path d="M20 6L9 17l-5-5" />,
  partnership: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M2 21c0-3.5 2.7-6 6-6s6 2.5 6 6M10 21c0-3.5 2.7-6 6-6s6 2.5 6 6" />
    </>
  ),
  innovation: (
    <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 3a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c1 .3 2 .5 3 .6a2 2 0 011.7 2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
    </>
  ),
}

export function Icon({ name, size = 24, color, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color ?? 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}
