import { logger } from "hono-pino";
import pino, { levels } from "pino";
import pretty from "pino-pretty";
import env from "./env.js";


export function pinoLogger() {
    return logger({
        pino: pino(
            {
                level: env.LOG_LEVEL || "info",
            },
            import { OpenAPIHono } from '@hono/zod-openapi'
            import { error } from 'console'
            import { logger } from 'hono/logger'
            import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'
            import { pinoLogger } from './middlewares/pino-logger.js'
            import { PinoLogger } from 'hono-pino'
            
            
            
            interface AppBindings{
              Variables: {
                logger: PinoLogger
              }
            }
            
            const app = new OpenAPIHono<AppBindings>()
            
            app.use(serveEmojiFavicon("📝"))
            app.use(pinoLogger())
            
            app.get('/', (c) => {
              return c.text('Hello Hono! hello')
            })
            
            app.get("/error", (c) => {
                c.status(422)
                c.var.logger.debug("")
                throw new Error("Ho no!")
            })
            
            app.notFound(notFound)
            app.onError(onError)
            
            export default appenv.NODE_ENV === "production" ? undefined : pretty()),
        http: {
            reqId: () => crypto.randomUUID(),
        }
    })
}