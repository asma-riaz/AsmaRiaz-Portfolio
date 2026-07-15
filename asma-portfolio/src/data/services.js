import {
  HiCodeBracket,
  HiServerStack,
  HiDevicePhoneMobile,
  HiCircleStack,
  HiSwatch,
} from 'react-icons/hi2'
import { TbApi } from 'react-icons/tb'

export const services = [
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    icon: HiCodeBracket,
    description:
      'Interfaces built in React and Tailwind CSS, componentized from the start so new features drop in without a rewrite.',
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    icon: HiServerStack,
    description:
      'PHP and MySQL services with a clear data model, prepared statements throughout, and JWT-based auth where a login is involved.',
  },
  {
    id: 'responsive-websites',
    title: 'Responsive Websites',
    icon: HiDevicePhoneMobile,
    description:
      'Layouts tested from a 360px phone up to a wide desktop, so nothing overlaps, truncates, or breaks at the in-between sizes.',
  },
  {
    id: 'rest-apis',
    title: 'REST APIs',
    icon: TbApi,
    description:
      'Endpoints structured around resources and status codes, documented well enough that a frontend team can build against them blind.',
  },
  {
    id: 'ui-implementation',
    title: 'UI Implementation',
    icon: HiSwatch,
    description:
      'Design files turned into pixel-accurate, accessible markup, with the spacing, states, and motion the design actually called for.',
  },
  {
    id: 'database-design',
    title: 'Database Design',
    icon: HiCircleStack,
    description:
      'Schemas normalized around real relationships, indexed for the queries the app actually runs, not just the ones in the demo.',
  },
]
