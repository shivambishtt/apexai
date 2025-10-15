import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set in environment variables");
}

export default defineConfig({
    out: "./drizzle",
    dialect: 'postgresql',
    schema: './src/db/schema.ts',
    dbCredentials: {
        url: process.env.DATABASE_URL,
    }
})