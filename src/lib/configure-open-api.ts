import type { AppOpenAPI } from "./type.js";
import packageJSON from "../../package.json"

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: packageJSON.version,
    info: {
      version: "1.0.0",
      title: "Tasks API",
    },
  });
}
