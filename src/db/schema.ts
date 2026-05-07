import { pgTable, serial, text, timestamp, date } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  fullName: text("full_name").notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  targetGoal: text("target_goal").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
