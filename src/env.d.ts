/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_VERCEL_ANALYTICS_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

type EdgeLocals = import('@astrojs/vercel').EdgeLocals

declare namespace App {
	interface Locals extends EdgeLocals {
		// ...
	}
}
