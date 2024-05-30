import vercel from '@astrojs/vercel/serverless'
import metaTags from 'astro-meta-tags'
import { defineConfig } from 'astro/config'
// import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://astro-vercel-boilerplate.vercel.app',
  trailingSlash: 'never',
  output: 'server',
  adapter: vercel({
    // edgeMiddleware: true,
    devImageService: 'squoosh',
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 1280],
      domains: [],
      remotePatterns: [
        {
          // protocol: 'https',
          // hostname: '^via\\.placeholder\\.com$',
          // pathname: '^/1280x640/.*$',
        },
      ],
    },
    webAnalytics: {
      enabled: true,
    },
    // isr: {
    // almacena todas las páginas en la primera solicitud y las guarda por 1 día
    // expiration: 60 * 60 * 24,
    // Un string aleatoria secreta que creas.
    // bypassToken: '005556d774a8',
    // Rutas que siempre se servirán frescas.
    // exclude: ['/api/invalidate'],
    // },
  }),
  integrations: [
    // tailwind({
    //   applyBaseStyles: false,
    // }),
    metaTags(),
  ],
})
