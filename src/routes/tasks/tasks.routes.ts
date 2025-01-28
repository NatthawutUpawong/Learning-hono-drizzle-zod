import { insertTasksSchema, selectTasksSchema } from "@/db/schema";
import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import { createErrorSchema, IdParamsSchema } from "stoker/openapi/schemas";

const tage = ["Tasks"]

export const list = createRoute({
  path: "/tasks",
  method: "get",
  tags: tage,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(
        selectTasksSchema
      ),
      "The list of tasks"
    ),
  },
});

export const create = createRoute({
  path: "/tasks",
  method: "post",
  request: {
    body: jsonContentRequired(
      insertTasksSchema,
      "The tasks to create"
    )
  },
  tags: tage,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      selectTasksSchema,
      "The created tasks"
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(insertTasksSchema),
      "The validation error(s)"
    )
  },
});

export const getOne = createRoute({
  path: "/tasks/{id}",
  method: "get",
  request:{
    params: IdParamsSchema,
  },
  tags: tage,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      selectTasksSchema,
      "The requested tasks"
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(IdParamsSchema),
      "invalid id error"
    )
  },
});

export type ListRoute = typeof list
export type CreateRoute = typeof create
export type GetOneRoute = typeof getOne