import React from "react";
import { Code2, Database, FileText, Workflow, Layers, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
const services = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Integración de Sistemas",
    description:
      "Conecta tus sistemas internos o POS con Odoo, Datil, Contifico y otras plataformas mediante APIs robustas y escalables.",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Facturación Electrónica",
    description:
      "Implementación completa de facturación electrónica cumpliendo con la normativa ecuatoriana del SRI.",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Desarrollo Web a Medida",
    description:
      "Aplicaciones web personalizadas para operaciones internas o plataformas de negocio con tecnologías modernas.",
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Automatización con IA",
    description:
      "Automatiza flujos de trabajo complejos y crea agentes inteligentes usando n8n y tecnologías de IA.",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Consultoría Técnica",
    description:
      "Asesoría especializada en arquitectura de software, optimización de procesos y selección de tecnologías.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Optimización de Procesos",
    description:
      "Análisis y mejora de procesos empresariales mediante soluciones tecnológicas eficientes y escalables.",
  },
];

export const ServiceCard = () => {
  return services.map((service, index) => (
    <Card
      key={index}
      className="border-2 border-gray-100 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
    >
      <CardHeader>
        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 mb-4">
          {service.icon}
        </div>
        <CardTitle className="text-xl text-gray-900 dark:text-white">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-600 dark:text-gray-400">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  ));
};
