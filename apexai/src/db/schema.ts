import { pgTable, integer, varchar, uuid } from "drizzle-orm/pg-core"

export const userTable = pgTable("user", {
    id: uuid(),
}) 

