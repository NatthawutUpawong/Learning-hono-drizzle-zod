import { OpenAPIHono } from '@hono/zod-openapi'
import { error } from 'console'
import { logger } from 'hono/logger'
import { notFound, onError } from 'stoker/middlewares'
import { pinoLogger } from './middlewares/pino-logger.js'

const app = new OpenAPIHono()

app.use(pinoLogger())

app.get('/', (c) => {
  return c.text('Hello Hono! hello')
})

app.get("/error", (c) => {
    c.status(422)
    c.var.logger.info("Wow!!!!")
    throw new Error("Ho no!")
})

app.notFound(notFound)
app.onError(onError)

export default app