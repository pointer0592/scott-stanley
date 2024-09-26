import { resolve } from 'pathe'
import presetIcons from '@unocss/preset-icons'
import { bundledLanguages } from 'shiki'

import site from './site'
const {
  name,
  description,
  url,
  defaultLocale,
  identity,
  twitter,
  trailingSlash,
  titleSeparator,
} = site

export default defineNuxtConfig({

  // Preparation for Nuxt 4 migration
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    componentIslands: true,
  },
  build: {
    transpile: ['shiki'], // Workaround as per https://github.com/nuxt/nuxt/issues/28127
  },
  app: {
    baseURL: '/', // defaulted by nuxt
    // Look into HeadAndMeta.vue for the rest
    head: {
      meta: [{ charset: 'utf-8' }], // defaulted by nuxt
    },
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-fonts',
    '@vee-validate/nuxt',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontaine',
    '@nuxtjs/critters',
  ],

  // https://dev.to/jacobandrewsky/optimizing-css-performance-in-nuxt-with-critters-4k8i
  critters: {
    // Options passed directly to critters: https://github.com/GoogleChromeLabs/critters#critters-2
    config: {
      // Default: 'media'
      preload: 'swap',
    },
  },
  css: [
    '@/assets/css/tailwind.css',
    // 'lite-youtube-embed/src/lite-yt-embed.css',
  ],
  googleFonts: {
    families: {
      'Titillium+Web': [100, 200, 300, 400, 500, 600, 700],
      'DM+Sans': [100, 200, 300, 400, 500, 600, 700],
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          NuxtImg: ['src'],
          OgImage: ['image'],
        },
      },
    },
  },

  image: {
    // dir: 'assets/images', // doesn't always work, for eg, with vercel etc, https://github.com/nuxt/image/issues/1006. Therefore, we are storing the images in public folder, to have them not processed by vite, but rather by nuxt-image module on-demand
    // sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw', // Global sizes not yet supported, has to be specified in NuxtImg or NuxtPicture tags - https://github.com/nuxt/image/issues/216
    // densities: [1,2], // default
    // quality: 80, // can be overridden as NuxtImg prop
    format: ['webp, png, jpg'], // default is ['webp']
    // The screen sizes predefined by `@nuxt/image`:
    // screens: {
    //   xs: 320,
    //   sm: 640,
    //   md: 768,
    //   lg: 1024,
    //   xl: 1280,
    //   xxl: 1536,
    //   '2xl': 1536,
    // },

    // TODO: Currently image optimization is paused until some bugs in Nuxt Image modules are fixed
    // provider: 'ipx',
    provider: 'none',

    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 80,
          height: 80,
        },
      },
    },
    // netlify: {
    //   baseURL: url,
    // },
    domains: [
      'images.unsplash.com',
      'fakestoreapi.com',
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'gravatar.com',
    ],

    alias: {
      unsplash: 'https://images.unsplash.com',
    },
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  content: {
    // Before Nuxt 4 migration
    sources: {
      content: {
        driver: 'fs',
        base: resolve(__dirname, 'app/content'),
      },
    },
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      //@ts-ignore
      langs: Object.keys(bundledLanguages),
      theme: 'dracula-soft',
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  imports: {
    // dirs: ['my-components'],
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'lite-youtube',
    },
  },

  sourcemap: {
    client: false,
    server: false,
  },

  routeRules: {
    '/hidden': { robots: false },
  },

  // Used by all modules in the @nuxtjs/seo collection
  // https://nuxtseo.com/nuxt-seo/guides/configuring-modules
  site: {
    url,
    name,
    description,
    defaultLocale,
    // https://nuxtseo.com/nuxt-seo/guides/setting-an-identity
    identity,
    twitter,
    trailingSlash,
    titleSeparator,
  },
  robots: {
    // https://nuxtseo.com/robots/api/config#blocknonseobots
    blockNonSeoBots: true,
  },
  sitemap: {
    // https://nuxtseo.com/sitemap/guides/i18n#debugging-hreflang
    // Open {{site.url}}/sitemap.xml
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '12.5%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      {
        label: 'Change Frequency',
        select: 'sitemap:changefreq',
        width: '12.5%',
      },
      { label: 'Hreflangs', select: 'count(xhtml:link)', width: '12.5%' },
    ],
    // To turn off xls file when viewing sitemap.xml
    // xsl: false,
    // Remove strictNuxtContentPaths if using nuxt-content in documentDriven mode
    strictNuxtContentPaths: true,
  },
  linkChecker: {
    enabled: false,
    excludeLinks: ['https://twitter.com/vuedesigner'],
    report: {
      html: true,
      markdown: true,
    },
  },

  unocss: {
    presets: [
      presetIcons({
        prefix: 'i-', // default prefix, do not change
      }),
    ],
  },

  eslint: {
    // config: {
    //   stylistic: {
    //     // All are default values
    //     semi: false,
    //     quotes: 'single',
    //     blockSpacing: true,
    //     indent: 2,
    //     commaDangle: 'always-multiline',
    //     // ...
    //   },
    // },
    // ...
  },

  compatibilityDate: '2024-04-03',

})
