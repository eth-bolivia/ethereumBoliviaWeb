// components/why-participate.tsx

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Users, Star, Globe } from "lucide-react";

 const reasonsToParticipate = [
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Aprendes Construyendo",
    description:
      "Nada acelera más tu aprendizaje que aplicar tus conocimientos para resolver un reto real. Durante la Buildathon experimentarás cómo es crear un producto en Web3 desde cero.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Conectas con Personas Clave",
    description:
      "Conocerás a otras personas apasionadas por la tecnología, programadores, diseñadores y mentores. ¡Perfecto para hacer equipo o encontrar futuros socios!",
  },
  {
    icon: <Star className="h-6 w-6 text-primary" />,
    title: "Accedes a Oportunidades Exclusivas",
    description:
      "Tendrás acceso a expertos que te guiarán durante el evento, y muchas veces las mejores ideas reciben seguimiento de incubadoras o becas para continuar su desarrollo.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Contribuyes al Ecosistema Local",
    description:
      "Al participar, formas parte del crecimiento de la comunidad en Bolivia y Latinoamérica, ayudando a que más personas construyan desde aquí para el mundo.",
  },
];

export function WhyParticipate() {
  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Por qué participar en la Buildathon?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cuatro razones poderosas para que no te quedes fuera.
          </p>
        </div>

         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {reasonsToParticipate.map((reason, index) => (
            <Card key={index} className="flex flex-col"> {/* flex-col para que las tarjetas tengan la misma altura */}
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {reason.icon}
                </div>
                <CardTitle>{reason.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow"> {/* flex-grow para expandir el contenido */}
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}