import type { RouteConfig, RouteHandler } from "@hono/zod-openapi";
import type { ListRoute } from "./tasks.routes.js";
import type { AppRouteHandler } from "@/lib/type.js";

export const list: AppRouteHandler<ListRoute> = (c) => {
  return c.json([
    {
      name: "Learn Hono",
      done: false,
    },
  ]);
};
