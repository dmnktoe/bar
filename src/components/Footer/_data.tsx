import { Badge } from '@healform/liquid'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'

export interface LinkGroup {
  title: string
  links: Array<{
    label: string
    href: string
    badge?: React.ReactElement
    newTab?: boolean
  }>
}

export const links: LinkGroup[] = [
  {
    title: 'Locations',
    links: [
      { label: 'Cryocenter Kassel', href: '/locations/kassel' },
      { label: 'Cryocenter Baunatal', href: '/locations/baunatal' },
      {
        label: 'Cryocenter Warburg',
        href: '/locations/warburg',
        badge: (
          <Badge colorScheme="violet" fontSize="0.625rem">
            Neu
          </Badge>
        ),
      },
    ],
  },
  {
    title: 'myHEALFORM',
    links: [
      { label: 'Termin vereinbaren', href: 'https://my.healform.de/', newTab: true },
      { label: 'Gutschein kaufen', href: 'https://my.healform.de/', newTab: true },
      { label: '10er-Karte kaufen', href: 'https://my.healform.de/', newTab: true },
      { label: '50er-Karte kaufen', href: 'https://my.healform.de/', newTab: true },
      { label: '100er-Karte kaufen', href: 'https://my.healform.de/', newTab: true },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Widerrufsrecht', href: '/legal/widerrufsrecht' },
      { label: 'Rechtliche Hinweise', href: '/legal/rechtliche-hinweise' },
      { label: 'Allgemeine Geschäftsbedingungen', href: '/legal/allgemeine-geschaeftsbedingungen' },
    ],
  },
  {
    title: 'Hilfe-Center',
    links: [
      { label: 'Wie buche ich einen Termin?', href: '#', newTab: true },
      { label: 'Was muss ich zum Termin mitbringen?', href: '#', newTab: true },
      { label: 'Was muss ich beachten?', href: '#', newTab: true },
    ],
  },
  {
    title: 'Wichtige Hinweise',
    links: [{ label: 'Stornierungsbedingungen', href: '/legal/stornierungsbedingungen' }],
  },
]

interface SocialLink {
  label: string
  icon: React.ReactElement
  href: string
}

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', icon: <FaFacebook />, href: 'https://fb.me/healform' },
  { label: 'Instagram', icon: <FaInstagram />, href: '' },
  { label: 'Telegram', icon: <FaTelegram />, href: 'https://t.me/HealformBot' },
  { label: 'Twitter', icon: <FaTwitter />, href: '#' },
]

type FooterLink = {
  label: string
  href: string
}

export const footerLinks: FooterLink[] = [
  { label: 'Datenschutz', href: '/legal/datenschutz' },
  { label: 'Impressum', href: '/legal/impressum' },
]
