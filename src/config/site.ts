import type { SiteConfig } from '@/types/site'

export const siteConfig: SiteConfig = {
  basic: {
    title: 'Mars导航',
    description: '个人精品甄选严选收藏',
    keywords: '设计导航,设计资源,设计工具,设计素材,设计教程'
  },
  appearance: {
    logo: '/logo.webp',
    favicon: '/favicon.webp',
    theme: 'system'
  },
  navigation: {
    linkTarget: '_blank'
  }
}

export function getSiteConfig(): SiteConfig {
  return siteConfig
}
