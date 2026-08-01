import type { UserConfig } from './types'

export const defaultConfig: UserConfig = {
  title:       'Patrika',
  description: 'A field notebook, kept in the open',
  url:         'https://example.com',
  locale:      'en',

  author: {
    name: 'Your Name',
  },

  navigation: [
    { title: 'Essays',  url: '/artiklid' },
    { title: 'Notes',   url: '/markmed' },
    { title: 'Archive', url: '/arhiiv' },
    { title: 'About',   url: '/about' },
  ],

  footerLinks: [
    { title: 'RSS', url: '/rss.xml' },
  ],

  social: [],

  heroText:     'A field notebook, kept in the open',
  tagline:      '',
  postsPerPage: 10,
  recentPosts:  5,
  showLogo:     false,
}