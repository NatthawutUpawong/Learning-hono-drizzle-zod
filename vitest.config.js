import { alias } from "drizzle-orm/mysql-core"
import path, { resolve } from "node:path"

export default {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
}