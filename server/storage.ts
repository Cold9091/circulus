import { users, type User, type InsertUser, ContactFormData } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactForm(data: ContactFormData): Promise<{ id: string }>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  currentId: number;
  private contactForms: Map<string, ContactFormData> = new Map();

  constructor() {
    this.users = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactForm(data: ContactFormData): Promise<{ id: string }> {
    const id = Math.random().toString(36).substring(7);
    this.contactForms.set(id, data);
    return { id };
  }
}

export const storage = new MemStorage();
