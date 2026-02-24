import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Геодезист.Онлайн',
  tagline: 'Открытая база знаний для геодезистов',
  favicon: 'img/favicon.ico',

  url: 'https://geodesist-online.vercel.app',
  baseUrl: '/',

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
    // navbar ПОЛНОСТЬЮ УДАЛЁН
    // footer ПОЛНОСТЬЮ УДАЛЁН
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;