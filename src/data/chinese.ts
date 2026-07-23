import type { IconKey } from './types'

/** Content for the standalone Chinese (中文) landing page. */

export interface CnProduct {
  label: string
  icon: IconKey
  to: string
}

export const cnProducts: CnProduct[] = [
  { label: '户外服装', icon: 'outdoor', to: '/services/outdoor-apparel' },
  { label: '团体服装', icon: 'organization', to: '/services/organization-wear' },
  { label: '宠物用品', icon: 'pet', to: '/services/pet-collections' },
  { label: '个性化礼品', icon: 'gift', to: '/services/personalized-gifts' },
  { label: '工业解决方案', icon: 'industrial', to: '/services/industrial-solutions' },
]

export const cnAbout: string[] = [
  '三代人的制造经验',
  '总部位于纽约',
  '服务美国及全球客户',
  '专注 OEM / ODM 与全球采购',
]

export const cnServices: string[] = [
  'OEM / ODM 定制',
  '产品开发',
  '品质检验',
  '包装设计',
  '全球物流',
  '一站式采购',
]

export const cnWhyChoose: string[] = [
  '三代制造经验',
  '美国本地公司',
  '稳定供应链',
  '专业国际贸易服务',
]
