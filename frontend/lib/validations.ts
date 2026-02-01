import { z } from "zod";

//Creamos el esquema de validacion
export const contactSchema = z.object({
  name: z.string().min(1, "El nombre es requerido").max(200),
  email: z.string().email("Email inválido"),
  company: z.string().max(200).optional(),
  //message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(2000),
  message: z.string().max(2000),
});

//Creamos el type infiriendo el esquema de zod
export type ContactFormData = z.infer<typeof contactSchema>;