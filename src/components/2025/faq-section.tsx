// components/faq-section.tsx

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// 1. Datos de las preguntas y respuestas.
const faqData = [
  {
    id: "item-1",
    question: "¿Qué necesito para participar?",
    answer:
      "Solo necesitas tu laptop, muchas ganas de aprender y construir. Es ideal venir con un equipo de 2 a 4 personas. Si no tienes equipo, no te preocupes, organizaremos una sesión de 'team building' al inicio del evento para que puedas unirte a uno.",
  },
  {
    id: "item-2",
    question: "¿Necesito conocimientos avanzados en Web3?",
    answer:
      "No es un requisito indispensable. La Buildathon está diseñada para todos los niveles. Habrá mentores y workshops introductorios para ayudarte a empezar. Lo más importante es la curiosidad y la motivación para aprender.",
  },
  {
    id: "item-3",
    question: "¿Cuál es el costo de inscripción?",
    answer:
      "¡La participación es completamente gratuita! Nuestro objetivo es fomentar el crecimiento del ecosistema. Solo necesitas registrarte para asegurar tu cupo, ya que son limitados.",
  },
  {
    id: "item-4",
    question: "¿Cómo y dónde me registro?",
    answer:
      'El registro se realiza a través de un formulario en línea. Busca "Convocatoria para Hackers" en la parte superior de esta página. ¡Asegúrate de hacerlo pronto, los cupos se llenan rápido!',
  },
  {
    id: "item-5",
    question: "¿Dónde puedo ver el programa y la agenda?",
    answer:
      "Puedes consultar la agenda detallada en la sección 'Cronograma del Evento' y 'Agenda de Conferencias' en esta misma página. Publicaremos cualquier actualización en nuestras redes sociales.",
  },
  {
    id: "item-6",
    question: "¿Quiénes serán los jurados?",
    answer:
      "Contaremos con un panel de jurados compuesto por líderes de la industria, desarrolladores experimentados e inversores del ecosistema Web3. Anunciaremos los nombres completos en las semanas previas al evento.",
  },
  {
    id: "item-7",
    question: "¿Dónde se realizará el evento?",
    answer:
      "El evento se llevará a cabo en la Universidad Privada del Valle, Santa Cruz. Maps: https://maps.app.goo.gl/aMrsR9W41zDtoRvf8 ",
  },
  {
    id: "item-8",
    question: "¿Con quién puedo contactarme para más información?",
    answer:
      "Para cualquier duda adicional, puedes escribirnos por WhatsApp a Alison +591 77636809",
  },
];

export function FaqSection() {
  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Resolvemos tus dudas más comunes para que vengas preparado.
          </p>
        </div>

        {/* 2. Componente Accordion de Shadcn/ui */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faqItem) => (
              <AccordionItem key={faqItem.id} value={faqItem.id}>
                <AccordionTrigger className="text-left text-lg">
                  {faqItem.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {faqItem.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}