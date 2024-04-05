import type { APIRoute } from 'astro'
// import type { APIContext } from 'astro'

export const prerender = false

// export function GET({ params, request }): APIRoute {
export function GET({}): APIRoute {
	return (context) => {
		return new Response(JSON.stringify({ time: new Date() }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 's-maxage=10, stale-while-revalidate',
			},
		})
	}
}

// import type { APIRoute } from 'astro'

// export const prerender = false

// export const GET: APIRoute = ({ params, request }) => {
// 	return new Response(
// 		JSON.stringify({
// 			path: new URL(request.url).pathname,
// 		})
// 	)
// }

// import type { APIContext } from 'astro'

// // export function GET({ request }: APIContext) {
// export async function GET(context: APIContext) {
// 	return {
// 		// body: `Hola ${request.url}`,
// 		body: `Hola ${context.site}`,
// 	}
// }
