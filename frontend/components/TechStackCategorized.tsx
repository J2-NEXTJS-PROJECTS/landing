import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';

export const TechStackCategorized = () => {
  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: 'Next.js', image: null },
        { name: 'React', image: null },
        { name: 'Tailwind CSS', image: null },
        { name: 'shadcn/ui', image: '/tech-logos/shadcn.png' }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: 'Node.js', image: null },
        { name: 'NestJS', image: '/tech-logos/nestjs.svg' },
        { name: 'Python', image: null },
        { name: 'FastAPI', image: '/tech-logos/fastapi.svg' }
      ]
    },
    {
      category: "Automatización & IA",
      items: [
        { name: 'n8n', image: '/tech-logos/n8n.png' },
        { name: 'ChatGPT', image: '/tech-logos/openai.png' },
        { name: 'Claude', image: '/tech-logos/claude.svg' }
      ]
    },
    {
      category: "Bases de Datos",
      items: [
        { name: 'PostgreSQL', image: null },
        { name: 'MongoDB', image: null }
      ]
    },
    {
      category: "ERP & Facturación",
      items: [
        { name: 'Odoo', image: '/tech-logos/odoo.png' },
        { name: 'Datil', image: '/tech-logos/datil.png' },
        { name: 'Contifico', image: '/tech-logos/contifico.png' }
      ]
    },
    {
      category: "Pasarelas de Pago",
      items: [
        { name: 'Stripe', image: '/tech-logos/stripe.png' },
        { name: 'PayPal', image: '/tech-logos/paypal.png' },
        { name: 'Payphone', image: '/tech-logos/payphone.jpg' },
        { name: 'Kushki', image: '/tech-logos/kushki.png' },
        { name: 'Nuvei', image: '/tech-logos/nuvei.svg' }
      ]
    },
    {
      category: "Infraestructura",
      items: [
        { name: 'Vercel', image: '/tech-logos/vercel.png' },
        { name: 'DigitalOcean', image: null },
        { name: 'Docker', image: '/tech-logos/docker.png' }
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((category, index) => (
        <Card key={index} className="border-2 border-gray-100 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {category.items.map((tech, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center justify-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.image ? (
                      <Image 
                        src={tech.image} 
                        alt={tech.name} 
                        width={40} 
                        height={40} 
                        className="object-contain w-10 h-10" 
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {tech.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
