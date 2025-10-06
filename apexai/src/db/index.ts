import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!); // initiating neon client db connection
export const db = drizzle(sql); // ensures to query through drizzle orm 
