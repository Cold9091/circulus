import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { ContactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate input
      const contactData = ContactFormSchema.parse(req.body);
      
      // Store contact form data
      const result = await storage.saveContactForm(contactData);
      
      // Return success
      res.status(200).json({ 
        success: true, 
        message: "Formulário de contato recebido com sucesso",
        data: result
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: "Erro de validação no formulário",
          errors: validationError.details
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false,
          message: "Erro interno do servidor ao processar o formulário de contato"
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
