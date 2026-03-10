import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
  whatsapp: z
    .string()
    .min(10, "WhatsApp deve ter pelo menos 10 dígitos")
    .max(15, "WhatsApp muito longo")
    .regex(/^[\d\s()+-]+$/, "Formato de WhatsApp inválido"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
