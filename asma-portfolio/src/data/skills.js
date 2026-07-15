import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiPhp,
  SiJsonwebtokens,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiRender,
  SiXampp,
  SiLaragon,
  SiPhpmyadmin,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'

export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React JS', icon: SiReact, level: 88 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
      { name: 'Framer Motion', icon: SiFramer, level: 76 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'PHP', icon: SiPhp, level: 85 },
      { name: 'REST APIs', icon: TbApi, level: 82 },
      { name: 'JWT Authentication', icon: SiJsonwebtokens, level: 78 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 85 },
      { name: 'phpMyAdmin', icon: SiPhpmyadmin, level: 88 },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, level: 88 },
      { name: 'HTML5', icon: SiHtml5, level: 95 },
      { name: 'CSS3', icon: SiCss, level: 92 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'VS Code', icon: VscVscode, level: 92 },
      { name: 'XAMPP', icon: SiXampp, level: 85 },
      { name: 'Laragon', icon: SiLaragon, level: 82 },
    ],
  },
  {
    id: 'version-control',
    label: 'Version Control',
    skills: [
      { name: 'Git', icon: SiGit, level: 85 },
      { name: 'GitHub', icon: SiGithub, level: 88 },
    ],
  },
  {
    id: 'deployment',
    label: 'Deployment',
    wide: true,
    skills: [
      { name: 'Vercel', icon: SiVercel, level: 82 },
      { name: 'Netlify', icon: SiNetlify, level: 85 },
      { name: 'Render', icon: SiRender, level: 70 },
    ],
  },
]
