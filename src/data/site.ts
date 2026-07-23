/** Global site metadata: navigation, contact details, socials, footer. */

export interface NavLink {
  label: string
  to: string
}

export const primaryNav: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
  { label: '中文', to: '/zh' },
]

export const brand = {
  name: 'ASPERA',
  suffix: 'USA',
  tagline:
    'Three generations of family manufacturing, connecting trusted partners with businesses across the United States.',
  since: 'Since 1984',
} as const

export const contact = {
  person: 'Laura Zhang',
  role: 'President, Aspera USA',
  phoneDisplay: '+1 (917) 683-5639',
  phoneHref: 'tel:+19176835639',
  email: 'asperausa@gmail.com',
  emailHref: 'mailto:asperausa@gmail.com',
  website: 'asperausa.com',
  websiteHref: 'https://asperausa.com',
} as const

export interface SocialLink {
  label: string
  handle?: string
  href: string
}

export const socials: SocialLink[] = [
  { label: 'Facebook', handle: '@asperainc', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'RedNote', handle: '@asperausa', href: '#' },
  { label: 'LinkedIn', handle: '@asperausa', href: '#' },
]

export const copyright = '© 2026 Aspera USA. All rights reserved.'
