import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { date } from "drizzle-orm/mysql-core";

export const tasks = sqliteTable("tasks", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  done: integer("done", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(CURRENT_TIMESTAMP)`
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .default(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => new Date()),
});
