"use server";
import nodemailer from "nodemailer";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { z } from "zod";

export interface ContactActionState {
  success: boolean;
  message: string;
  errors?: z.ZodIssue[];
}
export const sendContactEmail = async (
  _prevState: ContactActionState,
  formData: ContactFormData,
): Promise<ContactActionState> => {
  try {
    //1. Parsear y validar datos
    //console.log(formData)
    //const data =Object.fromEntries(formData)
    const validated = contactSchema.parse(formData);

    //2. Configurar transporte de email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    //3. Verificar conexión
    await transporter.verify();

    // HTML del email con logo J2Systems
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f3f4f6;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <svg width="180" height="50" viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 0 auto 15px;">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#e0e7ff;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path d="M 18 12 L 36 3 L 54 12 L 54 30 L 36 39 L 18 30 Z" fill="url(#logoGradient)"/>
              <text x="36" y="27" font-family="Arial, sans-serif" font-size="19" font-weight="700" fill="#1d4ed8" text-anchor="middle">J2</text>
              <text x="65" y="30" font-family="Arial, sans-serif" font-size="28" font-weight="600" fill="white" letter-spacing="-0.5">Systems</text>
              <line x1="65" y1="37" x2="185" y2="37" stroke="white" stroke-width="2.5" opacity="0.3"/>
            </svg>
            <h1 style="color: white; margin: 10px 0 0 0; font-size: 24px;">Nuevo Mensaje de Contacto</h1>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Detalles del Contacto</h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #3b82f6;">
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Nombre:</strong> ${validated.name}</p>
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Email:</strong> <a href="mailto:${validated.email}" style="color: #1d4ed8;">${validated.email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Empresa:</strong> ${validated.company || "No especificada"}</p>
            </div>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1f2937; margin-top: 0; font-size: 16px;">Mensaje:</h3>
              <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${validated.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px; text-align: center; margin: 5px 0;">
                Este mensaje fue enviado desde el formulario de contacto de J2Systems
              </p>
              <p style="color: #6b7280; font-size: 12px; text-align: center; margin: 5px 0;">
                <a href="mailto:juan@collantes.ec" style="color: #3b82f6;">juan@collantes.ec</a> | <a href="https://wa.me/593997154016" style="color: #3b82f6;">+593 997 154 016</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar email
    await transporter.sendMail({
      from: `"J2Systems - Contacto" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: validated.email,
      subject: `Nuevo Contacto: ${validated.name} - ${validated.company || "Sin empresa"}`,
      html,
    });

    return { success: true, message: "Email enviado exitosamente" };
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof z.ZodError) {
      //console.log(JSON.stringify(error.errors,null,2))
      return {
        success: false,
        message: "Datos inválidos",
        errors: error.errors,
      };
    }

    return {
      success: false,
      message: "Error al enviar el email. Por favor, intenta de nuevo.",
    };
  }
};
