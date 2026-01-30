import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J2Systems | Integración de Sistemas y Desarrollo Web en Ecuador",
  description:
    "Especialista en integración de ERP, facturación electrónica y desarrollo de soluciones empresariales para Ecuador. Automatiza procesos y conecta tus sistemas críticos.",
  keywords: [
    "integración de sistemas",
    "ERP",
    "facturación electrónica",
    "desarrollo web",
    "Ecuador",
    "Odoo",
    "Datil",
    "Contifico",
    "Paypal",
    "Stripe",
    "Payphone",
    "Automatizacion de procesos",
  ],
};

interface Children {
  children: React.ReactNode;
}

//Readonly: TypeScript no te deja modificarlo.
export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ThemeProvider Necesario para que todas las pages puedan usar useTheme() the next-themes  */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
