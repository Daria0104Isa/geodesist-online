import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Геодезист.Онлайн',
  tagline: 'Открытая база знаний для геодезистов',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'geodesist-online',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Геодезист.Онлайн',
      logo: {
        alt: 'Логотип Геодезист.Онлайн',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'База знаний',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'База знаний',
          items: [
            {
              label: 'Введение',
              to: '/docs/intro',
            },
            {
              label: 'Приборы',
              to: '/docs/category/приборы',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'Telegram',
              href: '#',
            },
            {
              label: 'Форум Geodesist.ru',
              href: 'https://geodesist.ru',
            },
          ],
        },
        {
          title: 'Проект',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Для сообщества',
              to: '/docs/soobschestvo',
            },
          ],
        },
      ],
      copyright: "Copyright © 2024 Геодезист.Онлайн. Открытая база знаний.",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;