// This helper automatically types middleware params
import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware((context, next) => {
  // intercept data from a request
  // optionally, modify the properties in `locals`
  // context.locals.title = 'New Title'
  // context.locals.property = 'New Property'

  // return a Response or the result of calling `next()`
  return next()
})
