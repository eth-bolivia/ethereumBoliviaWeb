// components/event-timeline.tsx

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowRight, Rocket } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils"; // Asegúrate de tener esta utilidad de Shadcn

// Los datos siguen siendo los mismos
const timelineEvents = [
  {
    city: "Santa Cruz",
    date: "25 de Octubre, 2024",
    title: "Kick-off: Intro a Web3 y Smart Contracts",
    description: "El punto de partida. Únete para una introducción intensiva al mundo de Web3 y conoce a la comunidad local.",
    place: "Cowork 'El Nido'",
    registrationLink: "https://ti.ke.to/scz-event",
    status: "past",
  },
  {
    city: "La Paz",
    date: "01 de Noviembre, 2024",
    title: "Workshop: Construyendo tu primera dApp",
    description: "Manos a la obra. Aprende paso a paso a crear y desplegar una aplicación descentralizada simple.",
    place: "UMSA, Auditorio Principal",
    registrationLink: "https://ti.ke.to/lpz-event",
    status: "upcoming",
  },
  {
    city: "Cochabamba",
    date: "08 de Noviembre, 2024",
    title: "Meetup: DeFi y el Futuro de las Finanzas",
    description: "Explora el ecosistema de las finanzas descentralizadas y debate sobre las tendencias que marcarán el futuro.",
    place: "Impact Hub Cocha",
    registrationLink: "https://ti.ke.to/cbba-event",
    status: "upcoming",
  },
  {
    city: "GRAN FINAL",
    date: "15-17 de Noviembre, 2024",
    title: "La Buildathon",
    description: "El evento principal. 48 horas de hacking, mentoría y creación para construir el futuro de la web.",
    place: "Centro de Convenciones El Portal",
    registrationLink: "https://ti.ke.to/buildathon-final",
    status: "upcoming",
  },
];


export function RoadToBuildathon() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Road to the <span className="text-primary">Buildathon</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sigue nuestra ruta de eventos presenciales y prepárate para la gran final.
          </p>
        </div>

        {/* Contenedor principal de la línea de tiempo */}
        <div className="relative max-w-3xl mx-auto pl-12">
          {/* Línea vertical central */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-border -translate-x-1/2 ml-6"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// Sub-componente para cada elemento. Ahora es mucho más simple.
const TimelineItem = ({ event }: { event: (typeof timelineEvents)[0] }) => {
  const isFinalEvent = event.title === "La Buildathon";

  return (
    <div className="relative">
      {/* El punto en la línea de tiempo */}
      <div className={cn(
        "absolute left-[-48px] top-1 flex h-6 w-6 items-center justify-center rounded-full",
        isFinalEvent ? "bg-primary" : "bg-muted-foreground/30 border-2 border-primary"
      )}>
        {isFinalEvent ? (
          <Rocket className="h-4 w-4 text-primary-foreground" />
        ) : (
          <div className="h-2 w-2 rounded-full bg-primary"></div>
        )}
      </div>

      <Card className="transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
            <Badge variant="secondary" className="w-fit">{event.city}</Badge>
            {event.status === 'past' && <Badge variant="destructive">Finalizado</Badge>}
          </div>
          <CardTitle>{event.title}</CardTitle>
          <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-2">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {event.date}</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {event.place}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
          {event.status !== 'past' && (
            <Button asChild>
              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                Inscríbete <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};