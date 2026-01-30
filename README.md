# J2Systems - Landing Page

Landing page profesional para J2Systems, especialista en integración de sistemas y desarrollo web en Ecuador.

## Stack Tecnológico

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + shadcn/ui
- **Email:** Nodemailer (Gmail SMTP)

## Requisitos Previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

1. **Clonar el repositorio:**
```bash
git clone <tu-repositorio>
cd j2systems
```

2. **Instalar dependencias:**
```bash
cd frontend
npm install
```

3. **Configurar variables de entorno:**
```bash
cp .env.template .env
```

4. **Editar `.env` con tus credenciales:**
```env
GMAIL_USER=tu-email@gmail.com
GMAIL_PASS=tu-app-password
EMAIL_FROM=tu-email@gmail.com
EMAIL_FROM_NAME=tu-email@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+593XXXXXXXXX
```

> **Nota:** Para `GMAIL_PASS` necesitas generar una "Contraseña de aplicación" en tu cuenta de Google:
> 1. Ve a [myaccount.google.com/security](https://myaccount.google.com/security)
> 2. Activa la verificación en 2 pasos
> 3. En "Contraseñas de aplicaciones", genera una nueva contraseña

## Ejecutar en Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## Construir para Producción

```bash
npm run build
npm run start
```

## Estructura del Proyecto

```
frontend/
├── app/
│   ├── actions/
│   │   └── contact.ts       # Server Action para emails
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── ui/                  # Componentes shadcn/ui
│   ├── Home.tsx             # Componente landing page
│   ├── Logo.tsx             # Logo SVG
│   ├── TechStackCategorized.tsx
│   ├── ThemeToggle.tsx      # Toggle Light/Dark
│   └── theme-provider.tsx
├── lib/
│   ├── utils.ts
│   └── validations.ts       # Schemas de validación
└── public/
    ├── case-logos/          # Logos de casos de éxito
    └── tech-logos/          # Logos de tecnologías
```

## Características

- ✅ Diseño responsive
- ✅ Tema Light/Dark/Sistema
- ✅ Formulario de contacto con envío de emails
- ✅ Botón de WhatsApp
- ✅ SEO optimizado
- ✅ Rendimiento optimizado (SSG)

## Licencia

© 2025 J2Systems. Todos los derechos reservados.
