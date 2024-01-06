import type { APIRoute } from 'astro';

export async function GET({ params, request }): APIRoute {
	return new Response(JSON.stringify({ time: new Date() }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 's-maxage=10, stale-while-revalidate',
		},
	});
}