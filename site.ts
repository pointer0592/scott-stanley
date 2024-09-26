// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'Scott Stanley Site',
  description: 'A website for Scott Stanley',
  logo: 'i-noto:lime',
  author: 'Scott Stanley',
  url: 'xxx',
  github: 'xxx',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Code', link: '/code', type: 'primary', icon: 'i-iconoir-code' },
    {
      text: 'diy-projects',
      link: '/diy-projects',
      type: 'secondary',
      icon: 'i-iconoir-hammer',
    },
    {
      text: 'Reading',
      link: '/reading',
      type: 'secondary',
      icon: 'i-iconoir-bookmark-book',
    },
    { text: 'Advice', link: '/advice', type: 'secondary', icon: 'i-iconoir-megaphone' },
  ],
}
