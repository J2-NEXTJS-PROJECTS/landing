"use client";

import React, { useState } from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { TechStackCategorized } from './TechStackCategorized';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';
import { sendContactEmail } from '@/app/actions/contact';
import { Menu, X, Send, MessageCircle, Mail, Phone, MapPin, CheckCircle, Users, Zap, Shield, ChevronRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Success Cases Data
const successCases = [
  {
    name: "Ecuahosting",
    logo: "/case-logos/ecuahosting.png",
    description: "Automatización de facturación electrónica para servicios de hosting con integración WHMCS y Dátil.",
    impact: "Reducción del 80% en tiempo de facturación"
  },
  {
    name: "Ecuaweb",
    logo: "/case-logos/ecuaweb.png",
    description: "Sistema completo de gestión de clientes y facturación automatizada para agencia web.",
    impact: "Gestión centralizada de +500 clientes"
  },
  {
    name: "Grobandeli",
    logo: "/case-logos/grobandeli.png",
    description: "Desarrollo de plataforma e-commerce con integración de pasarelas de pago locales.",
    impact: "Incremento del 150% en ventas online"
  },
  {
    name: "NICEC",
    logo: "/case-logos/nicec.png",
    description: "Integración de sistema ERP Odoo con facturación electrónica y reportería avanzada.",
    impact: "Automatización del 90% de procesos contables"
  }
];

// Navigation Links
const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Tecnologías", href: "#tecnologias" },
  { name: "Casos de Éxito", href: "#casos" },
  { name: "Contacto", href: "#contacto" }
];

export function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        toast.success('¡Mensaje enviado correctamente!', {
          description: 'Nos pondremos en contacto contigo pronto.'
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        toast.error('Error al enviar el mensaje', {
          description: result.message || 'Por favor, inténtalo de nuevo.'
        });
      }
    } catch (error) {
      toast.error('Error inesperado', {
        description: 'Por favor, inténtalo de nuevo más tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+593997154016';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center" data-testid="header-logo">
              <Logo width={160} height={45} />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6" data-testid="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button 
                asChild 
                className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700"
                data-testid="contact-btn-header"
              >
                <a href="#contacto">Contáctame</a>
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="mobile-menu-btn"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4" data-testid="mobile-nav">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button asChild className="mt-2 bg-blue-600 hover:bg-blue-700">
                  <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                    Contáctame
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 md:py-32 overflow-hidden" data-testid="hero-section">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:via-background dark:to-indigo-950/20" />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Soluciones tecnológicas a medida
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Integración de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Sistemas
                </span>{' '}
                y Desarrollo Web
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Especialista en conectar sistemas empresariales, automatizar procesos y desarrollar 
                soluciones web modernas para empresas ecuatorianas. ERP, facturación electrónica y más.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                  data-testid="hero-contact-btn"
                >
                  <a href="#contacto">
                    Solicitar Cotización
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  data-testid="hero-cases-btn"
                >
                  <a href="#casos">
                    Ver Casos de Éxito
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10 pt-10 border-t border-border">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-muted-foreground">+10 años experiencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-muted-foreground">+50 proyectos exitosos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-muted-foreground">Soporte garantizado</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl -rotate-3 opacity-10" />
                <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
                  <div className="p-8 flex flex-col items-center justify-center h-full min-h-[400px]">
                    <Logo width={200} height={60} className="mb-8" />
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {['React', 'Node.js', 'Python', 'PostgreSQL', 'Odoo', 'AWS'].map((tech) => (
                        <div 
                          key={tech}
                          className="bg-muted/50 rounded-lg p-3 text-center text-xs font-medium"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <p className="text-muted-foreground text-sm">
                        Soluciones empresariales modernas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-20 bg-muted/30" data-testid="tech-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tecnologías que Domino</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trabajo con las tecnologías más modernas y confiables del mercado para entregar 
              soluciones robustas y escalables.
            </p>
          </div>
          <TechStackCategorized />
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="casos" className="py-20" data-testid="cases-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Casos de Éxito</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proyectos reales que han transformado la operación de empresas ecuatorianas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {successCases.map((caseItem, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500/50"
                data-testid={`case-card-${index}`}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-white dark:bg-gray-800 border border-border flex items-center justify-center p-2 overflow-hidden">
                    <Image 
                      src={caseItem.logo} 
                      alt={caseItem.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{caseItem.name}</CardTitle>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      {caseItem.impact}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-muted/30" data-testid="contact-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Tienes un Proyecto en Mente?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cuéntame sobre tu proyecto y encontraremos la mejor solución tecnológica para tu negocio.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a href="mailto:juan@collantes.ec" className="font-medium hover:text-blue-600 transition-colors">
                            juan@collantes.ec
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">WhatsApp</p>
                          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-green-600 transition-colors">
                            +593 997 154 016
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Ubicación</p>
                          <p className="font-medium">Quito, Ecuador</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp Button */}
                <Button 
                  asChild 
                  className="w-full bg-green-600 hover:bg-green-700 text-white h-12"
                  data-testid="whatsapp-btn"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Escribir por WhatsApp
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Nombre *
                          </label>
                          <Input
                            id="name"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            data-testid="input-name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            data-testid="input-email"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Empresa
                        </label>
                        <Input
                          id="company"
                          placeholder="Nombre de tu empresa (opcional)"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          data-testid="input-company"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Mensaje *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Cuéntame sobre tu proyecto..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          data-testid="input-message"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 h-12"
                        disabled={isSubmitting}
                        data-testid="submit-btn"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Enviar Mensaje
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card" data-testid="footer">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <Logo width={140} height={40} />
              <p className="text-sm text-muted-foreground">
                Soluciones de integración de sistemas y desarrollo web para empresas ecuatorianas.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  juan@collantes.ec
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +593 997 154 016
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Quito, Ecuador
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} J2Systems. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Hecho con dedicación en Ecuador
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
