import React from 'react'
import {
  ContactInstagramIcon,
  ContactPhoneIcon,
  ContactPinIcon,
  ContactTimeIcon
} from '@/components/icons-pack'

export const contactList = [
  {
    label: 'Наша адреса',
    value: 'вул. Еспланадна, 34/2, м. Київ',
    icon: React.createElement(ContactPinIcon)
  },
  {
    label: 'Графік роботи',
    value: 'Пн-нд: 12:00 – 20:00',
    icon: React.createElement(ContactTimeIcon)
  },
  {
    label: 'Телефонуйте',
    value: '+380 (96) 612 27 20',
    icon: React.createElement(ContactPhoneIcon)
  },
  {
    label: 'Instagram',
    value: 'приєднуйтесь до нас ',
    icon: React.createElement(ContactInstagramIcon)
  }
] as const
