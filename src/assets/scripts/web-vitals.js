import { webVitals } from '../../lib/vitals'

const analyticsId = import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID

if (analyticsId) {
  webVitals({
    path: location.pathname,
    params: location.search,
    analyticsId,
  })
}
