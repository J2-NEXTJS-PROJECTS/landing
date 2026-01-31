import { ArrowRight } from "lucide-react";
import React from "react";
const processSteps = [
  {
    number: "01",
    title: "Análisis",
    description: "Evaluación detallada de procesos y necesidades del negocio",
  },
  {
    number: "02",
    title: "Diseño",
    description: "Arquitectura de solución y definición de alcance técnico",
  },
  {
    number: "03",
    title: "Implementación",
    description: "Desarrollo, integración y pruebas exhaustivas",
  },
  {
    number: "04",
    title: "Soporte",
    description: "Acompañamiento continuo y optimización del sistema",
  },
];
export const ProcessContent = () => {
  return processSteps.map((step, index) => (
    <div key={index} className=" relative">
      <div className="text-6xl font-bold text-blue-100 dark:text-blue-900/50 mb-4">
        {step.number}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {step.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
      {index < processSteps.length - 1 && (
        <div className="hidden lg:block absolute top-8 -right-4 text-blue-300 dark:text-blue-700">
          <ArrowRight className="w-8 h-8" />
        </div>
      )}
    </div>
  ));
};
