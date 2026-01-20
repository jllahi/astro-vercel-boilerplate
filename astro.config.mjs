import vercel from '@astrojs/vercel'
import metaTags from 'astro-meta-tags'
import { defineConfig } from 'astro/config'
import process from 'node:process'
import { loadEnv } from 'vite'

const { ISR_BYPASS_TOKEN } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-vercel-boilerplate.vercel.app',
  trailingSlash: 'never',
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true,
    // devImageService: 'squoosh',
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 1280],
      domains: [],
      remotePatterns: [
        {
          protocol: 'https',
          // hostname: '^via\\.placeholder\\.com$',
          // pathname: '^/1280x640/.*$',
        },
      ],
    },
    webAnalytics: {
      enabled: true,
    },
    // isr: true,
    isr: {
      // almacena todas las páginas en la primera solicitud y las guarda por 1 día
      expiration: 60 * 60 * 24,
      // Un string aleatoria secreta que creas.
      bypassToken: ISR_BYPASS_TOKEN || 'y96k60yj06yij06jy06ijy0i6jy60yjyj60yj60',
      // Rutas que siempre se servirán frescas.
      exclude: ['/api/revalidate', '/ssr', '/edge.json'],
    },
  }),
  integrations: [
    // tailwind({
    //   applyBaseStyles: false,
    // }),
    metaTags(),
  ],
  redirects: {
    '/redirect': '/',
  },
})
