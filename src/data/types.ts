/** Shared content types for the data layer. */

export type IconKey =
  | 'outdoor'
  | 'organization'
  | 'industrial'
  | 'pet'
  | 'gift'
  | 'oem'
  | 'integrity'
  | 'quality'
  | 'partnership'
  | 'innovation'
  | 'phone'
  | 'mail'
  | 'globe'

export interface Offer {
  title: string
  desc: string
}

export interface Service {
  /** URL slug — rendered at /services/:slug */
  slug: string
  /** Card + nav label */
  title: string
  icon: IconKey
  /** Short blurb used on the Home services grid */
  shortDesc: string
  /** Slightly longer blurb used on the Services index grid */
  servicesDesc: string
  /** Detail page hero */
  heroTitle: string
  heroPlaceholder: string
  /** Detail page intro block */
  introHeading: string
  introParagraphs: string[]
  /** "What We Offer" cards */
  offers: Offer[]
  /** Product category chips */
  categories: string[]
  /** Optional "Industries We Serve" chips (Industrial only) */
  industries?: string[]
  /** Optional "Why Choose" list — omitted on some pages */
  whyChoose?: string[]
  /** Closing CTA band copy */
  ctaHeading: string
  ctaText: string
}

export interface StatItem {
  value: string
  label: string
}

export interface FeatureItem {
  title: string
  desc: string
}

export interface ValueItem {
  icon: IconKey
  title: string
  desc: string
}
