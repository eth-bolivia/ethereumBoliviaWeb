// components/faq-section.tsx

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ  
const faqData = [
  {
    id: "item-1",
    question: "¿Qué es una Buildathon y quiénes pueden participar?",
    answer:
      "Una Buildathon es un evento intensivo de 3 días donde desarrolladores, diseñadores, estudiantes y emprendedores colaboran para construir soluciones tecnológicas innovadoras. No necesitas ser un experto programador; todos los perfiles son bienvenidos para aportar ideas, diseñar y gestionar proyectos.",
  },
  {
    id: "item-2",
    question: "¿Puedo participar solo/a o necesito un equipo?",
    answer:
      "¡Ambas opciones son válidas! Puedes registrarte individualmente y te ayudaremos a encontrar un equipo en nuestra sesión de 'team building' al inicio del evento. También puedes inscribirte con tu equipo ya formado (de 2 a 5 personas).",
  },
  {
    id: "item-3",
    question: "¿Tiene algún costo la inscripción?",
    answer:
      "No. La participación es totalmente gratuita. Queremos fomentar el talento y la colaboración. La inscripción incluye alimentación completa, materiales, mentorías y un espacio para trabajar durante los tres días del evento. Pero si debes depositar 10 Bs como pago simbolico, sobretodo para evitar falsos inscritos o personas sin compromiso a participar.",
  },
  {
    id: "item-4",
    question: "¿Qué debo llevar al evento?",
    answer:
      "Es indispensable que traigas tu laptop con su cargador y tu documento de identidad. Además, te recomendamos traer un kit de descanso (sleeping bag, almohada, etc.) si planeas quedarte a dormir para aprovechar al máximo la experiencia.",
  },
  {
    id: "item-5",
    question: "¿Dónde y cuándo será la Buildathon?",
    answer:
      "El evento se realizará del 1 al 3 de agosto de 2025 en el Eco Campus de Univalle, en Santa Cruz. Puedes encontrar la ubicación exacta en Google Maps aquí: https://maps.app.goo.gl/aMrsR9W41zDtoRvf8",
  },
  {
    id: "item-6",
    question: "Si soy de otra ciudad, ¿la inscripción incluye hospedaje o viaje?",
    answer:
      "¡Nos encantaría que vengas! Durante el evento, tienes la opción de quedarte a dormir en las instalaciones. Sin embargo, los costos de traslado corren por cuenta del participante. Habilitaremos un formulario de postulación para becas de viaje para casos específicos.",
  },
  {
    id: "item-7",
    question: "¿Cómo y hasta cuándo puedo registrarme?",
    answer:
      'El registro es en línea a través del formulario en la sección "Convocatoria para Hackers" de esta página. ¡los cupos son limitados y se llenan rápido!',
  },
  {
    id: "item-8",
    question: "¿Qué son los 'tracks' y cuáles son los premios?",
    answer:
      "Los 'tracks' son las categorías temáticas para tu proyecto: DeFi, IA x Web3, y Retos Sociales/Empresariales. Habrá premios económicos y en especie para los mejores proyectos de cada track, además de reconocimientos y oportunidades de incubación para los equipos más destacados.",
  },
  {
    id: "item-9",
    question: "¿Quiénes serán los jurados y mentores?",
    answer:
      "Contaremos con un panel de jurados y mentores compuesto por líderes de la industria, desarrolladores experimentados e inversores del ecosistema Web3. Anunciaremos los nombres completos en nuestras redes sociales en las semanas previas al evento.",
  },
  {
    id: "item-10",
    question: "Tengo otra pregunta, ¿dónde puedo contactarlos?",
    answer:
      "Para cualquier duda adicional, puedes escribirnos a nuestro correo ethbolivia@gmail.com, contactarnos por nuestras redes sociales, o enviarnos un mensaje por WhatsApp al +591 69131888.",
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