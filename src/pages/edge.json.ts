import type { APIContext, APIRoute } from 'astro'

export const prerender = false

// context.params from APIContext
// export const GET: APIRoute = ({ params, request }: APIContext) => {
export const GET: APIRoute = (context: APIContext) => {
  return new Response(
    JSON.stringify({
      time: new Date(),
      clientAddress: context.clientAddress,
      site: context.site,
      url: context.url,
      generator: context.generator,
      userAgent: context.request.headers.get('user-agent'),
      // request: context.request,
      // params: context.params,
      // headers: context.request.headers,
      // cookies: context.cookies,
      // locals: context.locals,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=10, stale-while-revalidate',
      },
    }
  )
}
