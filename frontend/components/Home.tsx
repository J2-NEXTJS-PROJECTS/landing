"use client";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { TechStackCategorized } from "./TechStackCategorized";
import { ThemeToggle } from "./ThemeToggle";
import { CheckCircle2, MessageSquare, Mail } from "lucide-react";
import Image from "next/image";
import { ServiceCard } from "./ServiceCard";
import { UseCaseCard } from "./UseCaseCard";
import { ProcessContent } from "./ProcessContent";
import { ContactForm } from "./ContactForm";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
        <div className=" max-w-7xl mx-auto px-6 lg:px-8 py-1">
          <div className=" flex justify-between items-center">
            <div className="leading-none">
              <Image
                className="block h-24 w-auto"
                src="/logo-opcion-3.png"
                width={1015}
                height={565}
                alt="J2 Systems"
                priority
              />
            </div>

            <nav className=" hidden md:flex gap-8 items-center">
              <a
                href="#servicios"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Servicios
              </a>
              <a
                href="#proceso"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Proceso
              </a>
              <a
                href="#casos"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Casos
              </a>
              <a
                href="#contacto"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Contacto
              </a>
            </nav>
            <div className=" flex items-center gap-3">
              <ThemeToggle />
              <Button
                onClick={() =>
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Contáctame
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Integración de Sistemas
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Automatiza procesos y conecta tus sistemas críticos
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Especialista en integración de ERP, facturación electrónica y
                desarrollo de soluciones empresariales para Ecuador.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img-main.jpeg"
                  alt="Equipo de desarrollo profesional"
                  // className="w-full h-full object-cover"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      +15 años
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      de experiencia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className=" py-20 px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Servicios
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              Soluciones empresariales completas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Desde la integración de sistemas hasta la automatización con IA
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="proceso"
        className=" py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-950"
      >
        <div className=" max-w-7xl mx-auto">
          <div className=" text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Metodología
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              Cómo trabajamos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Un proceso estructurado y profesional para garantizar resultados
            </p>
          </div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessContent />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Stack Tecnológico
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              Tecnologías y herramientas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experiencia con tecnologías modernas y herramientas empresariales
            </p>
          </div>
          <TechStackCategorized />
        </div>
      </section>

      {/* Cases Section */}
      <section
        id="casos"
        className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Casos de Éxito
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              Proyectos reales, resultados medibles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Soluciones implementadas para empresas ecuatorianas
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <UseCaseCard />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Contacto
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              ¿Utilizas ERP o facturación electrónica?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Conversemos sobre cómo optimizar tus procesos y sistemas
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Image
                  className="block h-16 w-auto"
                  src="/logo-opcion-3.png"
                  width={1015}
                  height={565}
                  alt="J2 Systems"
                  priority
                />
              </div>
              <p className="text-gray-400">
                Integración de sistemas y desarrollo de soluciones empresariales
                en Ecuador.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Integración de Sistemas</li>
                <li>Facturación Electrónica</li>
                <li>Desarrollo Web</li>
                <li>Automatización con IA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  juan@collantes.ec
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp: +593 997 154 016
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} J2Systems. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
