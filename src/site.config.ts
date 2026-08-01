import type { UserConfig } from './types'

export const defaultConfig: UserConfig = {
  title:       'Digifookus',
  description: 'Digitaalsest maailmast, tehnoloogiast ja tehisintellektist',
  url:         'https://digifookus.ee',
  locale:      'et',

  author: {
    name: 'Sergei',
  },

  navigation: [
    { title: 'Artiklid', url: '/artiklid' },
    { title: 'Märkmed',  url: '/markmed' },
    { title: 'Arhiiv',   url: '/arhiiv' },
    { title: 'Meist',    url: '/meist' },
  ],

  footerLinks: [
    { title: 'RSS', url: '/rss.xml' },
  ],

  social: [],

  heroText:     'Digitaalsest maailmast, tehnoloogiast ja tehisintellektist',
  tagline:      '',
  postsPerPage: 10,
  recentPosts:  5,
  showLogo:     false,
}