import type { APIRoute } from 'astro'
// import { purgeCache } from '../../utils/purge-cache'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  const { tag } = await request.json()

  // if (!Array.isArray(tags)) {
  // 	return new Response(
  // 		`Bad Request: expected tags attribute with array of strings in the body, got ${typeof tags}`,
  // 		{ status: 400 }
  // 	)
  // }

  return new Response(JSON.stringify(tag), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'x-prerender-revalidate': '115556d774a8115556d774a8115556d774a8', // import.meta.env.BYPASS_TOKEN,
    },
  })
  // Astro.response.headers.set( 'x-prerender-revalidate': env.BYPASS_TOKEN,)
  // // await purgeCache({ tags })
  // return new Response(
  // 	JSON.stringify({
  // 		invalidated: tags,
  // 	})
  // )
}
