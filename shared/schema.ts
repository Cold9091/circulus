import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User model (keeping it as it was)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form model for storing contact form submissions
export const contactForms = pgTable("contact_forms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  service: z.string().min(1, "Serviço é obrigatório"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
export type ContactForm = typeof contactForms.$inferSelect;
export type InsertContactForm = typeof contactForms.$inferInsert;

// Extend the storage interface
declare module "./storage" {
  interface IStorage {
    saveContactForm(data: z.infer<typeof ContactFormSchema>): Promise<ContactForm>;
  }
}
