import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
	site: 'https://astro-vercel-boilerplate.vercel.app',
	trailingSlash: 'always',
	output: 'server',
	adapter: vercel({
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
	}),
})
