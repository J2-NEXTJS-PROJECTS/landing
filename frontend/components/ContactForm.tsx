"use client";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { Card, CardContent } from "./ui/card";
import { MessageSquare, Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { sendContactEmail, ContactActionState } from "@/actions/contact";
import { Button } from "./ui/button";
import { toast } from "sonner";

const initialState: ContactActionState = {
  success: false,
  message: "",
};

export const ContactForm = () => {
  const handleSubmit = async (
    prevState: ContactActionState,
    formData: FormData,
  ) => {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || undefined,
      message: formData.get("message") as string,
    };

    const sendContact = await sendContactEmail(prevState, data);
    if (sendContact.success) {
      toast.success("Mensaje enviado", {
        description: "Gracias por contactarme. Te responderé pronto.",
      });
    } else {
      sendContact.errors?.map((error) => console.log(error.message));
      toast.error("Error al enviar", {
        description:
          sendContact.message ||
          "No se pudo enviar el mensaje. Intenta nuevamente.",
      });
    }

    return sendContact;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction] = useActionState(handleSubmit, initialState);

  const whatsappNumber = "+593997154016";
  const whatsappMessage =
    "Hola, me interesa conocer más sobre los servicios de integración de sistemas.";
  //encodeURIComponent(): Sirve para codificar (escapar) un texto para que pueda ir dentro de una URL sin romperla.
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <Card className="border-gray-200 dark:border-gray-700">
      <CardContent className="p-8">
        <form action={formAction} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Nombre completo
              </label>
              <Input
                name="name"
                placeholder="Tu nombre"
                required
                className="border-gray-300 dark:border-gray-600"
                onInvalid={(e) =>
                  e.currentTarget.setCustomValidity("El nombre es obligatorio")
                }
                onInput={(e) => e.currentTarget.setCustomValidity("")}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <Input
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="border-gray-300 dark:border-gray-600"
                onInvalid={(e) =>
                  e.currentTarget.setCustomValidity("El correo es obligatorio")
                }
                onInput={(e) => e.currentTarget.setCustomValidity("")}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Empresa
            </label>
            <Input
              name="company"
              // value={formData.company}
              // onChange={handleInputChange}
              placeholder="Nombre de tu empresa"
              className="border-gray-300 dark:border-gray-600"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Mensaje
            </label>
            <Textarea
              name="message"
              placeholder="Cuéntame sobre tu proyecto o necesidad..."
              rows={5}
              required
              className="border-gray-300 dark:border-gray-600"
              onInvalid={(e) =>
                  e.currentTarget.setCustomValidity("El mensaje es obligatorio")
                }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
          </div>
          {/* {state.errors && (
            <div className="text-sm text-red-600">
              {Array.isArray(state.errors) ? (
                state.errors.map((error, index) => (
                  <p key={index}>
                    {error.path[0]}: {error.message}
                  </p>
                ))
              ) : (
                <p>{state.errors}</p>
              )}
            </div>
          )} */}
          <div className="flex flex-col sm:flex-row gap-4">
            <SubmitButton />
            <Button
              type="button"
              onClick={() => window.open(whatsappLink, "_blank")}
              size="lg"
              variant="outline"
              className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Escribir por WhatsApp
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
      disabled={pending}
    >
      <Mail className="w-5 h-5 mr-2" />
      {pending ? "Enviando..." : "Enviar mensaje"}
    </Button>
  );
};
