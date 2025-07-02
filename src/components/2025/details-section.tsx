 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 
import {
  Sparkles,
  Users,
  Calendar,
  Target,
  HeartHandshake, 
  CheckCircle,
} from "lucide-react";

import { InfoSection } from "./info-section";
import React from "react";
 
const keyDates = [
  { date: "1, 2 y 3 de agosto de 2025", event: "Fechas de la Buildathon" },
  { date: "Eco Campus Univalle, Santa Cruz", event: "Lugar del Evento" },
  { date: "1 al 23 de julio de 2025", event: "Período de Registro" },
];

const whoCanParticipate = [
  "Personas de todas las edades (no hay límite de edad).",
  "Estudiantes, desarrolladores, diseñadores, emprendedores y curiosos.",
  "Participantes de cualquier ciudad de Bolivia y del extranjero.",
  "No necesitas ser un experto. ¡Te ayudaremos a formar equipo!",
];

const tracks = [
  { title: "DeFi", description: "Finanzas Descentralizadas." },
  { title: "IA x Web3", description: "Inteligencia Artificial aplicada a blockchain." },
  { title: "Social & Enterprise", description: "Retos reales propuestos por patrocinadores." },
];

const benefits = [
  "Participación 100% gratuita.",
  "Alimentación completa durante los 3 días.",
  "Espacio opcional para dormir en el campus.",
  "Mentorías personalizadas con expertos.",
  "Workshops técnicos y de negocio.",
  "Premios, kits y oportunidades de incubación.",
];
 

export function DetailsSection() {
  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
         <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Detalles de la Buildathon
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Revisa con detalle esta info, por favor.
          </p>
        </div>

        <InfoSection icon={<Sparkles />} title="¿Qué es una Buildathon?">
          <p>
            Una Buildathon es un evento colaborativo intensivo donde equipos de desarrolladores, diseñadores, emprendedores y entusiastas se unen para crear soluciones reales usando tecnología blockchain. Durante 3 días, vivirás charlas, mentorías, talleres técnicos y el desafío de construir un prototipo funcional que podrá ser premiado e impulsado.
          </p>
        </InfoSection>

        <InfoSection icon={<Calendar />} title="Fechas Importantes">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {keyDates.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary text-2xl">{item.date}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </InfoSection>

        <InfoSection icon={<Users />} title="¿Quiénes pueden participar?">
          <div className="grid md:grid-cols-2 gap-4">
            {whoCanParticipate.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </InfoSection>

        <InfoSection icon={<Target />} title="Tracks Temáticos">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <Card key={track.title} className="p-6 text-center">
                <CardTitle className="text-xl">{track.title}</CardTitle>
                <p className="text-muted-foreground mt-2">{track.description}</p>
              </Card>
            ))}
          </div>
        </InfoSection>

        <InfoSection icon={<HeartHandshake />} title="Beneficios para Participantes">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </InfoSection>

         
      </div>
    </section>
  );
}