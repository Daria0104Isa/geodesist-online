import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Геодезист.Онлайн',
  tagline: 'Открытая база знаний для геодезистов',
  favicon: 'img/favicon.ico',

  url: 'https://daria0104isa.github.io',
  baseUrl: '/geodesist-online/',

  organizationName: 'Daria0104Isa',
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
        docs: false,
        blog: false,
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
        alt: 'Логотип',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/knowledge',
          label: 'База знаний',
          position: 'left',
        },
        {
          to: '/calculators',
          label: 'Калькуляторы',
          position: 'left',
        },
        {
          to: '/equipment',
          label: 'Оборудование',
          position: 'left',
        },
        {
          to: '/standards',
          label: 'Стандарты',
          position: 'left',
        },
        {
          to: '/community',
          label: 'Сообщество',
          position: 'left',
        },
        {
          href: 'https://t.me/GeodezistOnlineBot',
          label: 'Telegram-бот',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'База знаний',
          items: [
            {
              label: 'Теория и основы',
              to: '/knowledge/teoriya',
            },
            {
              label: 'Полевые методы',
              to: '/knowledge/polevye-metody',
            },
            {
              label: 'Оборудование',
              to: '/equipment',
            },
            {
              label: 'Стандарты',
              to: '/standards',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'Telegram-бот',
              href: 'https://t.me/GeodezistOnlineBot',
            },
            {
              label: 'Форум',
              to: '/forum',
            },
            {
              label: 'Предложить статью',
              to: '/community/suggest-article',
            },
          ],
        },
        {
          title: 'Проект',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Daria0104Isa/geodesist-online',
            },
            {
              label: 'О проекте',
              to: '/about',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Геодезист.Онлайн. Открытая база знаний.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;