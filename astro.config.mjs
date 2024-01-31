import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
	site: 'https://astro-vercel-boilerplate.vercel.app',
	trailingSlash: 'always',
	output: 'server',
	adapter: vercel({
		devImageService: 'squoosh',
		imageService: true,
		// imagesConfig: {
		// 	sizes: [320, 640, 1280],
		// },
		webAnalytics: {
			enabled: true,
		},
	}),
})
