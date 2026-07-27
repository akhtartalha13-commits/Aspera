import type { FeatureItem, StatItem, ValueItem } from './types'

/* ---- Home: headline statistics strip -------------------------------- */
export const homeStats: StatItem[] = [
  { value: '40+', label: 'Years of Experience' },
  { value: '3', label: 'Generations of Family Commitment' },
  { value: '100%', label: 'Quality-Inspected Products' },
  { value: '50', label: 'States Served Nationwide' },
]

/* ---- Home: "Why Aspera USA" feature grid ---------------------------- */
export const homeWhyChoose: FeatureItem[] = [
  { title: '40+ Years', desc: 'Of manufacturing experience across three generations.' },
  { title: 'OEM & Private Label', desc: 'Flexible, fully customized manufacturing solutions.' },
  { title: 'Global Network', desc: 'Reliable partners selected for consistent quality.' },
  {
    title: 'Strict Quality Control',
    desc: 'Every product carefully inspected before delivery.',
  },
  { title: 'On-Time Delivery', desc: 'Dependable lead times you can plan around.' },
  { title: 'Dedicated Support', desc: 'A responsive team invested in your success.' },
]

/* ---- About: brand story paragraphs ---------------------------------- */
export const aboutStory: string[] = [
  'For over 40 years, our family has been dedicated to manufacturing with integrity, quality, and long-term commitment.',
  'Our story began in the early 1980s with our grandparents, who built a small manufacturing workshop through hard work and perseverance. For many years, they worked more than 360 days a year, often from before sunrise until late at night. Our grandfather managed factory operations, production, and customer relationships, while our grandmother oversaw accounting, human resources, supply chain coordination, and cared for the family. Together, they laid the foundation for everything we are today.',
  'The second generation expanded the business across different regions, relying on paper records, telephone calls, and personal relationships long before the digital era. Their dedication helped transform a small workshop into a growing manufacturing network. Like many traditional businesses, they also faced challenges, including manual management systems, limited operational efficiency, and a customer base concentrated in a few markets.',
  "Our generation grew up in a different world—one shaped by computers, the internet, social media, artificial intelligence, and global connectivity. Educated at leading universities around the world, we bring a new perspective to our family's decades of manufacturing experience. Our vision is to combine the craftsmanship, reliability, and values passed down through three generations with modern technology, digital communication, and international business practices.",
  "Today, Aspera USA proudly connects trusted manufacturing partners with businesses throughout the United States and beyond. We specialize in outdoor apparel, organization wear, industrial solutions, pet products, and personalized gifts, offering flexible OEM, ODM, and private label manufacturing tailored to each customer's unique needs.",
  "At Aspera USA, we believe successful partnerships are built on trust, transparency, and consistent quality. Our mission is not simply to manufacture products—it is to help businesses build stronger brands, create lasting value, and bring our family's manufacturing heritage to customers around the world.",
  'From a family workshop to a global partner—our journey continues, one trusted partnership at a time.',
]

/* ---- About: core values --------------------------------------------- */
export const aboutValues: ValueItem[] = [
  {
    icon: 'integrity',
    title: 'Integrity',
    desc: 'We build lasting relationships through honesty, transparency, and accountability.',
  },
  {
    icon: 'quality',
    title: 'Quality',
    desc: 'Every product is carefully inspected to meet the highest standards.',
  },
  {
    icon: 'partnership',
    title: 'Partnership',
    desc: 'We work closely with every customer to create long-term business success.',
  },
  {
    icon: 'innovation',
    title: 'Innovation',
    desc: 'We continuously improve our products and manufacturing solutions to meet changing market needs.',
  },
]

/* ---- About: "Why Choose" checklist ---------------------------------- */
export const aboutWhyChoose: string[] = [
  '40+ Years of Manufacturing Experience',
  'Three Generations of Family Commitment',
  'OEM & Private Label Solutions',
  'Reliable Global Manufacturing Network',
  'Strict Quality Control',
  'On-Time Delivery',
  'Dedicated Customer Support',
]

/* ---- Services index: "Why Partner" checklist ------------------------ */
export const servicesWhyPartner: string[] = [
  '40+ Years of Manufacturing Experience',
  'OEM & Private Label Expertise',
  'Flexible Production Solutions',
  'Strict Quality Control',
  'Reliable Global Manufacturing Network',
  'On-Time Delivery',
  'Dedicated Customer Support',
]

/* ---- Home story intro copy ------------------------------------------ */
export const homeStory = {
  paragraphs: [
    'What began as a small family business in the 1980s has grown across three generations, combining traditional craftsmanship with modern manufacturing expertise.',
    'Today, Aspera USA connects trusted manufacturing partners with businesses across the country — specializing in outdoor apparel, organization wear, industrial solutions, pet products, and personalized gifts, with flexible OEM and private label services tailored to each client.',
  ],
} as const
