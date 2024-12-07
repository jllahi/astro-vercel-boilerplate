// This helper automatically types middleware params
import type { APIContext, MiddlewareNext } from 'astro'
import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware((context: APIContext, next: MiddlewareNext) => {
  // intercept data from a request
  // optionally, modify the properties in `locals`
  // context.locals.title = 'New Title'
  // context.locals.property = 'New Property'

  // eslint-disable-next-line no-console
  console.log(context.url.href)

  // return a Response or the result of calling `next()`
  return next()
})
