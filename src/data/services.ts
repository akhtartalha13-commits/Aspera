import type { Service } from './types'

/**
 * All five service offerings. The detail pages share one template
 * (ServiceDetailPage) and are fully data-driven from this array.
 */
export const services: Service[] = [
  {
    slug: 'outdoor-apparel',
    title: 'Outdoor Apparel',
    icon: 'outdoor',
    shortDesc:
      'Performance jackets and outerwear built for every adventure, with flexible OEM manufacturing.',
    servicesDesc:
      'High-quality outdoor apparel designed for performance, comfort, and durability. OEM and private label manufacturing tailored to your brand.',
    heroTitle: 'Built for Adventure. Made to Endure.',
    heroPlaceholder: 'Drop outdoor apparel hero image (jacket / mountains)',
    introHeading: 'Premium Outdoor Apparel for Every Journey',
    introParagraphs: [
      "At Aspera USA, we specialize in manufacturing high-quality outdoor apparel that combines performance, comfort, and durability. Whether you're building your own brand or expanding an existing product line, we provide flexible OEM and private label solutions tailored to your business needs.",
      'From lightweight jackets to insulated outerwear, our products are designed to perform in demanding environments while maintaining exceptional quality and style.',
    ],
    offers: [
      {
        title: 'OEM & Private Label Manufacturing',
        desc: 'Customized production tailored to your brand, specifications, and market requirements.',
      },
      {
        title: 'Product Development',
        desc: 'From concept to production, we help bring your ideas to life with experienced manufacturing support.',
      },
      {
        title: 'Quality Materials',
        desc: 'We carefully select durable fabrics and performance materials to ensure long-lasting comfort and protection.',
      },
      {
        title: 'Flexible Production',
        desc: 'Whether you need small production runs or large-volume manufacturing, we provide scalable solutions to fit your business.',
      },
    ],
    categories: [
      'Outdoor Jackets',
      'Softshell Jackets',
      'Windbreakers',
      'Rain Jackets',
      'Fleece Jackets',
      'Insulated Outerwear',
      'Hiking Apparel',
      'Workwear & Safety Outerwear',
    ],
    whyChoose: [
      '40+ Years of Manufacturing Experience',
      'OEM & Private Label Expertise',
      'Premium Quality Materials',
      'Strict Quality Control',
      'Reliable Production & Delivery',
      'Dedicated Customer Support',
    ],
    ctaHeading: "Let's Create Your Next Collection",
    ctaText:
      'Partner with Aspera USA to develop outdoor apparel that reflects your brand, meets your quality standards, and performs in every environment.',
  },
  {
    slug: 'organization-wear',
    title: 'Organization Wear',
    icon: 'organization',
    shortDesc:
      'Custom apparel for businesses, schools, teams, and events that strengthens brand identity.',
    servicesDesc:
      'Professional custom apparel for businesses, schools, teams, and organizations — from T-shirts to uniforms and promotional apparel.',
    heroTitle: 'One Team. One Identity.',
    heroPlaceholder: 'Drop organization wear hero image (team apparel)',
    introHeading: 'Custom Apparel That Brings People Together',
    introParagraphs: [
      'At Aspera USA, we help organizations create a strong and professional image through high-quality custom apparel. Whether for businesses, schools, sports teams, nonprofits, or special events, we provide apparel solutions that reflect your identity and strengthen your brand.',
      'With flexible OEM and private label manufacturing, we work closely with every client to deliver products that combine comfort, quality, and lasting value.',
    ],
    offers: [
      {
        title: 'Corporate Apparel',
        desc: 'Professional clothing for employees, company events, trade shows, and promotional campaigns.',
      },
      {
        title: 'School Apparel',
        desc: 'Custom T-shirts, polos, hoodies, and spirit wear for schools, clubs, and educational organizations.',
      },
      {
        title: 'Team & Event Wear',
        desc: 'Coordinated apparel for sports teams, volunteer groups, conferences, and community events.',
      },
      {
        title: 'Private Label & OEM',
        desc: 'Customized manufacturing with your logo, colors, labels, and packaging to match your brand.',
      },
    ],
    categories: [
      'T-Shirts',
      'Polo Shirts',
      'Hoodies & Sweatshirts',
      'Jackets',
      'Workwear',
      'Team Apparel',
      'School Spirit Wear',
      'Event Merchandise',
    ],
    whyChoose: [
      'Premium Quality Fabrics',
      'Custom Logo & Embroidery',
      'OEM & Private Label Manufacturing',
      'Flexible Order Quantities',
      'Strict Quality Control',
      'Reliable Production & On-Time Delivery',
    ],
    ctaHeading: "Let's Build Your Team Identity",
    ctaText:
      'From corporate uniforms to school apparel and event merchandise, Aspera USA delivers customized solutions that represent your brand with confidence.',
  },
  {
    slug: 'industrial-solutions',
    title: 'Industrial Solutions',
    icon: 'industrial',
    shortDesc:
      'Reliable industrial belts and components engineered for consistent, dependable performance.',
    servicesDesc:
      'Reliable industrial belts and components engineered for consistent performance, with strict quality control on every OEM run.',
    heroTitle: 'Powering Industry. Delivering Reliability.',
    heroPlaceholder: 'Drop industrial hero image (belts / factory)',
    introHeading: 'Precision Engineered Solutions for Modern Manufacturing',
    introParagraphs: [
      'At Aspera USA, we provide reliable industrial products and manufacturing solutions designed to keep your business moving. With over 40 years of manufacturing experience, we partner with businesses worldwide to deliver high-quality industrial components, OEM production, and customized solutions that meet demanding performance standards.',
      'From power transmission products to custom-engineered components, we are committed to quality, consistency, and long-term partnerships.',
    ],
    offers: [
      {
        title: 'Industrial Belts',
        desc: 'High-performance timing belts, V-belts, Poly-V belts, conveyor belts, and specialty belts built for reliability.',
      },
      {
        title: 'OEM Manufacturing',
        desc: 'Customized manufacturing solutions tailored to your specifications, branding, and technical requirements.',
      },
      {
        title: 'Product Sourcing',
        desc: 'Access to a trusted global manufacturing network with carefully selected suppliers and strict quality standards.',
      },
      {
        title: 'Quality Assurance',
        desc: 'Every product undergoes thorough inspection to ensure consistent performance, precision, and dependable quality.',
      },
    ],
    categories: [
      'Timing Belts',
      'Poly-V Belts',
      'V-Belts',
      'Conveyor Belts',
      'PU Round Belts',
      'Industrial Components',
      'Power Transmission Products',
      'Custom OEM Parts',
    ],
    industries: [
      'Manufacturing',
      'Automation',
      'Packaging',
      'Food Processing',
      'Agriculture',
      'Textile Machinery',
      'Logistics & Material Handling',
      'Industrial Equipment',
    ],
    whyChoose: [
      '40+ Years of Manufacturing Experience',
      'OEM & Private Label Solutions',
      'Reliable Global Manufacturing Network',
      'Strict Quality Control',
      'Competitive Pricing',
      'On-Time Delivery',
      'Dedicated Customer Support',
    ],
    ctaHeading: "Let's Power Your Business",
    ctaText:
      "Whether you're sourcing industrial belts, developing OEM products, or looking for a dependable manufacturing partner, Aspera USA is committed to your success.",
  },
  {
    slug: 'pet-collections',
    title: 'Pet Collections',
    icon: 'pet',
    shortDesc:
      'Premium pet products designed with comfort, safety, and style for retailers and brands.',
    servicesDesc:
      'Premium pet products designed with comfort, safety, and style — customized for retailers, distributors, and private label brands.',
    heroTitle: 'Made for Pets. Trusted by Families.',
    heroPlaceholder: 'Drop pet collections hero image (dog and cat)',
    introHeading: 'Premium Pet Products Designed for Comfort, Quality, and Care',
    introParagraphs: [
      "At Aspera USA, we offer thoughtfully designed pet products that combine comfort, functionality, and durability. Whether you're developing your own pet brand or expanding your product line, we provide flexible OEM and private label manufacturing tailored to your business needs.",
      'From everyday essentials to premium accessories, we are committed to delivering products that pet owners can trust and pets will love.',
    ],
    offers: [
      {
        title: 'OEM & Private Label Manufacturing',
        desc: 'Customized pet products with your branding, packaging, and product specifications.',
      },
      {
        title: 'Product Development',
        desc: 'From concept to production, we help bring innovative pet products to market.',
      },
      {
        title: 'Quality & Safety',
        desc: 'Every product is carefully selected and inspected to ensure durability, comfort, and safety.',
      },
      {
        title: 'Flexible Manufacturing',
        desc: 'Whether launching a new collection or expanding an existing line, we offer scalable production solutions.',
      },
    ],
    categories: [
      'Pet Toys',
      'Pet Beds',
      'Pet Collars & Leashes',
      'Pet Harnesses',
      'Pet Bowls & Feeders',
      'Pet Travel Accessories',
      'Grooming Products',
      'Pet Apparel',
    ],
    whyChoose: [
      'Premium Quality Materials',
      'OEM & Private Label Expertise',
      'Strict Quality Control',
      'Innovative Product Development',
      'Flexible Production Capacity',
      'Reliable Global Manufacturing Network',
    ],
    ctaHeading: "Let's Grow Your Pet Brand",
    ctaText:
      "Whether you're launching a new pet collection or expanding your existing product line, Aspera USA is your trusted manufacturing partner.",
  },
  {
    slug: 'personalized-gifts',
    title: 'Personalized Gifts',
    icon: 'gift',
    shortDesc:
      'Custom jewelry and keepsakes that help brands create memorable, lasting impressions.',
    servicesDesc:
      'Creative promotional products and customized gifts that help businesses build stronger, more memorable customer relationships.',
    heroTitle: 'Crafted for Every Meaningful Moment.',
    heroPlaceholder: 'Drop personalized gifts hero image (jewelry / keepsakes)',
    introHeading: 'Personalized Creations That Leave a Lasting Impression',
    introParagraphs: [
      "At Aspera USA, we create personalized jewelry and custom gifts that celebrate life's special moments. Whether you're building a retail collection, developing a private label brand, or sourcing promotional gifts, we provide high-quality products with exceptional craftsmanship and flexible customization options.",
      "From elegant jewelry to thoughtfully designed keepsakes, every piece is created to reflect your brand and your customers' unique stories.",
    ],
    offers: [
      {
        title: 'Personalized Jewelry',
        desc: 'Custom necklaces, bracelets, rings, earrings, and keychains featuring names, initials, logos, or meaningful engravings.',
      },
      {
        title: 'Custom Gifts',
        desc: 'Personalized gifts for holidays, corporate events, weddings, schools, and promotional campaigns.',
      },
      {
        title: 'OEM & Private Label',
        desc: 'Complete manufacturing solutions with custom branding, packaging, and product development tailored to your business.',
      },
      {
        title: 'Quality Craftsmanship',
        desc: 'Premium materials, precision engraving, and careful quality inspection ensure every product meets high standards.',
      },
    ],
    categories: [
      'Name Necklaces',
      'Bracelets',
      'Rings',
      'Earrings',
      'Keychains',
      'Engraved Gifts',
      'Corporate Gifts',
      'Promotional Merchandise',
      'Holiday Gifts',
    ],
    ctaHeading: "Let's Create Something Meaningful",
    ctaText:
      'Partner with Aspera USA to develop personalized jewelry and gifts that reflect your brand and delight your customers.',
  },
]

/** Lookup a single service by slug (used by the dynamic detail route). */
export function getServiceBySlug(slug: string | undefined): Service | undefined {
  return services.find((s) => s.slug === slug)
}
