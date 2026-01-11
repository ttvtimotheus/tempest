export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config')
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config')
  }
}

export const onRequestError = async (
  err: unknown,
  request: {
    path: string
    method: string
  },
  context: {
    routerKind: string
  }
) => {
  const Sentry = await import('@sentry/nextjs')
  Sentry.captureException(err, {
    contexts: {
      request: {
        path: request.path,
        method: request.method,
      },
      router: {
        kind: context.routerKind,
      },
    },
  })
}
