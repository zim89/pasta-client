import { APP_PAGES } from "../constants" 

// It's used in burger menu
export const LINKS_DATA = [
  {
    label: 'Головна',
    href: APP_PAGES['HOME']
  },
  {
    label: 'Меню',
    href: APP_PAGES['MENU']
  },
  {
    label: 'Про нас',
    href: APP_PAGES['ABOUT']
  },
  {
    label: 'Доставка і оплата',
    href: APP_PAGES['DELIVERY']
  },
  {
    label: 'Контакти',
    href: APP_PAGES['CONTACTS']
  }
] as const

export const FOOTER_LINKS = [
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
export const ADDITIONAL_LINKS = [
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
