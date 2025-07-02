// components/event-timeline.tsx

import {
  Card,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image"; 
import { MapPin, Calendar, ArrowRight, Rocket } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    city: "La Paz",
    date: "28 de Junio, 2025",
    title: "Introducción a Web3: Tecnologías Descentralizadas para el Futuro de la Ingeniería ",
    description: "Esta capacitación gratuita está diseñada para estudiantes y personas no técnicas interesadas en descubrir el potencial de las tecnologías descentralizadas.",
    place: "Universidad Católica Boliviana (UCB), Bloque D, Auditorio 2",
    registrationLink: "https://app.unlock-protocol.com/event/introduccin-a-web-3-tecnologas-descentralizadas-para-el-futuro-de-la-ingeniera",
    status: "past",
    imageUrl: "/lapazposter.png",
  },
  {
    city: "Santa Cruz",
    date: "30 de Julio, 2025",
    title: "Celebración de los 10 años de Ethereum ",
    description: "Evento Satelite desde Ethereum Foundation",
    place: "Cowork 'El Nido'",
    registrationLink: "https://linktr.ee/ethbolivia",
    status: "upcoming",
    imageUrl: "/prontoposter.png",
  },
  {
    city: "Santa Cruz",
    date: "01 de Agosto, 2025",
    title: "Buildathon Ehereum Bolivia 2025",
    description: "La Buildathon.",
    place: "Univalle",
    registrationLink: "https://linktr.ee/ethbolivia",
    status: "upcoming",
    imageUrl: "/sczposter.png",
  },
  {
    city: "Brazil",
    date: "08 de Noviembre, 2025",
    title: "Ethereum Latam 2025",
    description: "",
    place: "Sao Paulo",
    registrationLink: "https://www.ethlatam.org/es",
    status: "upcoming",
    imageUrl: "/ethlatamposter.png",
  },
  {
    city: "GRAN FINAL - Argentina",
    date: "17 de Noviembre, 2025",
    title: "Devconnect 2025",
    description: "",
    place: "Centro de Convenciones El Portal, Buenos Aires",
    registrationLink: "https://ti.ke.to/buildathon-final",
    status: "upcoming",
    imageUrl: "https://devconnect.org/",
  },
];


export function RoadToBuildathon() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Próximo Eventos <span className="text-primary">Destino Devconnect</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sigue nuestra ruta de eventos presenciales y prepárate para la gran final en Devconnect.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto pl-12">
       
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


const TimelineItem = ({ event }: { event: (typeof timelineEvents)[0] }) => {
  const isFinalEvent = event.title === "La Buildathon";

  return (
    <div className="relative">
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

      <Card className="transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg overflow-hidden">
       
        <div className="flex flex-col md:flex-row">
    
          {/* ---  Imagen --- */}
          <div className="w-full md:w-1/3 relative h-48 md:h-auto">
            <Image
              src={event.imageUrl}
              alt={`Imagen del evento ${event.title}`}
              fill 
              className="object-cover"
            />
          </div>

          {/* --- Column --- */}
          <div className="w-full md:w-2/3 flex flex-col">
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                <Badge variant="secondary" className="w-fit">{event.city}</Badge>
                {event.status === 'past' && <Badge variant="destructive">Finalizado</Badge>}
              </div>
        
              <CardTitle className="mt-2">{event.title}</CardTitle>
        
              <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-2">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {event.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {event.place}</span>
              </CardDescription>

              <p className="text-sm text-muted-foreground my-4 flex-grow">{event.description}</p>

              {event.status !== 'past' && (
                <Button asChild className="mt-auto w-full sm:w-auto">
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                    Inscríbete <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              )}
            </div>
          </div>

        </div>
      </Card>
    </div>
  );
};