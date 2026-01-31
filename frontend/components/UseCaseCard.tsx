import React from 'react'
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CheckCircle2 } from 'lucide-react';

const cases = [
    {
      title: "Grobandeli - Banaexport",
      description:
        "Sistema de gestión documental, monitoreo y tracking de contenedores en tiempo real.",
      result:
        "Oferta de valor agregado y canal de CRM para que los clientes puedan ir gestionando su documentación y monitoreo de su contenedor.",
      logo: "/case-logos/grobandeli.png",
    },
    {
      title: "Ecuaweb",
      description:
        "Automatización completa: Checkout, pago con tarjeta de crédito, activación de servicios, facturación electrónica e integración con el flujo de ERP.",
      result:
        "Procesamiento automático del 100% de las transacciones y reducción de un 95% de carritos de compras abandonados.",
      logo: "/case-logos/ecuaweb.png",
    },
    {
      title: "Ecuahosting",
      description:
        "Automatización completa: Checkout, pago con tarjeta de crédito, activación de servicios, facturación electrónica e integración con el flujo de ERP.",
      result:
        "Procesamiento automático del 100% de las transacciones y reducción de un 95% de carritos de compras abandonados.",
      logo: "/case-logos/ecuahosting.png",
    },
    {
      title: "ECUADORDOMAIN S.A.",
      description:
        "Asesoría para mejores practicas de diseño de infraestructura y Capacitaciones.",
      result:
        "Infraestructura estable, tolerante a fallos, resiliencia óptima.",
      logo: "/case-logos/nicec.png",
    },
  ];

export const UseCaseCard = () => {
  return cases.map((caseItem, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow overflow-hidden"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden border border-gray-100 dark:border-gray-700  relative">
                      <Image
                        src={caseItem.logo}
                        alt={caseItem.title}
                        //className="w-full h-full object-contain p-2"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 dark:text-white mb-2">
                        {caseItem.title}
                      </CardTitle>
                      <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                        {caseItem.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {caseItem.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
}
