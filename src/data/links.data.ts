import { APP_PAGES } from '@/config/pages-url.config'

export const navLinks = [
  {
    label: 'Про нас',
    href: `${APP_PAGES.ABOUT}`
  },
  {
    label: 'Меню',
    href: `${APP_PAGES.MENU}`
  },
  {
    label: 'Доставка і оплата',
    href: `${APP_PAGES.DELIVERY}`
  }
] as const

// FIXME: Add valid links
export const additionalLinks = [
  {
    label: 'Контакти',
    href: `${APP_PAGES.CONTACTS}`
  },
  {
    label: 'Договір публічної оферти',
    href: `${APP_PAGES.HOME}`
  },
  {
    label: 'Політика конфіденційності',
    href: `${APP_PAGES.HOME}`
  }
] as const
