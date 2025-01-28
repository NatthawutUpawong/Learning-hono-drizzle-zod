import { createMessageObjectSchema } from "stoker/openapi/schemas";
import * as HttpstatusPhrases from "stoker/http-status-phrases"

export const notFoundSchema = createMessageObjectSchema(HttpstatusPhrases.NOT_FOUND) 