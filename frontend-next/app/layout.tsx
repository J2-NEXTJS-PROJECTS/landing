import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J2Systems | Integración de Sistemas y Desarrollo Web en Ecuador",
  description: "Especialista en integración de ERP, facturación electrónica y desarrollo de soluciones empresariales para Ecuador. Automatiza procesos y conecta tus sistemas críticos.",
  keywords: ["integración de sistemas", "ERP", "facturación electrónica", "desarrollo web", "Ecuador", "Odoo", "Datil", "Contifico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}