import { sql } from "@vercel/postgres";
import { pgTable, varchar, serial, integer } from "drizzle-orm/pg-core";
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { createInsertSchema, createSelectSchema, } from 'drizzle-zod';
import { z } from "zod"

export const cartTable = pgTable("cart", {
    id: serial('id').primaryKey(),
    productid: varchar("productid", {
        length: 255
    }).notNull(),
    userid: varchar("userid", {
        length: 255
    }).notNull(),
    quantity: integer('quantity').notNull()
})

export const insertSchema = createInsertSchema(cartTable, {
    // Other fields in the schema
    userid: () => z.string().optional()
});

export const updateSchema = createInsertSchema(cartTable, {
    // Other fields in the schema
    userid: () => z.string().optional(),
    productid: () => z.string().optional(),
    id: () => z.number().refine(value => value !== undefined, {
        message: "id is required",
        path: ["id"],
    }),
})

export const db = drizzle(sql);