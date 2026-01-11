import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  tracesSampleRate: 1.0,

  debug: false,

  _experiments: {
    enableLogs: true,
  },

  environment: process.env.NODE_ENV,
})
