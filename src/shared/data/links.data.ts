import { APP_PAGES } from '../constants'

// It's used in burger menu
export const LINKS_DATA = [
  {
    label: 'Головна',
    href: APP_PAGES.HOME,
    scroll: true,
    order: 'order-1',
  },
  {
    label: 'Меню',
    href: APP_PAGES.MENU,
    scroll: true,
    order: 'order-2',
  },
  {
    label: 'Про нас',
    href: APP_PAGES.ABOUT,
    scroll: true,
    order: 'order-3',
  },
  {
    label: 'Контакти',
    href: `/#contacts`,
    scroll: true,
    order: 'order-5',
  },
] as const

export const FOOTER_LINKS = [
  {
    label: 'Про нас',
    href: `${APP_PAGES.ABOUT}`,
  },
  {
    label: 'Меню',
    href: `${APP_PAGES.MENU}`,
  },
  {
    label: 'Доставка і оплата',
    href: `${APP_PAGES.DELIVERY}`,
  },
] as const

// FIXME: Add valid links
export const ADDITIONAL_LINKS = [
  {
    label: 'Контакти',
    href: `${APP_PAGES.CONTACTS}`,
  },
  {
    label: 'Договір публічної оферти',
    href: `${APP_PAGES.HOME}`,
  },
  {
    label: 'Політика конфіденційності',
    href: `${APP_PAGES.HOME}`,
  },
] as const
