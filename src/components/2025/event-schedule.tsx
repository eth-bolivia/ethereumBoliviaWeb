// components/event-schedule.tsx

'use client'; // Tabs es un componente interactivo, por lo que necesita ser un Client Component.

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Clock, Mic, Utensils, PartyPopper } from "lucide-react"

// 1. Estructura de datos para el cronograma. Fácil de modificar o cargar desde una API.
const scheduleData = [
  {
    day: "Día 1",
    date: "1 de Agosto",
    value: "day-1",
    events: [
      { time: "13:00", title: "Registro abierto", type: "Networking", icon: <Utensils className="h-4 w-4" /> },
      { time: "15:00", title: "Ceremonia de Apertura", type: "Keynote", icon: <Mic className="h-4 w-4" /> },
      { time: "16:00", title: "Snaks y Networking", type: "Networking", icon: <Clock className="h-4 w-4" /> },
      { time: "15:00", title: "Comienza a hackear! Mentores disponibles", type: "Workshop", icon: <Utensils className="h-4 w-4" /> },
      { time: "19:30", title: "Cena para Hackers y Mentores", type: "Networking", icon: <Mic className="h-4 w-4" /> },
      { time: "20:00", title: "Cierre del Día 1", type: "Anuncio", icon: <PartyPopper className="h-4 w-4" /> },
    ],
  },
  {
    day: "Día 2",
    date: "2 de Agosto",
    value: "day-2",
    events: [
      { time: "08:00", title: "Apertura y Resumen", type: "Anuncio", icon: <Mic className="h-4 w-4" /> },
      { time: "08:00", title: "Desayuno", type: "Networking", icon: <Mic className="h-4 w-4" /> },
      { time: "09:00", title: "Workshop y Mentores Disponibles", type: "Workshop", icon: <Clock className="h-4 w-4" /> },
      { time: "10:00", title: "Regrigerio", type: "Networking", icon: <Mic className="h-4 w-4" /> },
      { time: "13:00", title: "Almuerzo", type: "Networking", icon: <Utensils className="h-4 w-4" /> },
      { time: "14:30", title: "Conferencias", type: "Hacking", icon: <Clock className="h-4 w-4" /> },
      { time: "19:00", title: "Cena para Hackers y Mentores", type: "Networking", icon: <Utensils className="h-4 w-4" /> },
    ],
  },
  {
    day: "Día 3",
    date: "3 de Agosto",
    value: "day-3",
    events: [
      { time: "08:00", title: "Apertura y Resumen", type: "Anuncio", icon: <Mic className="h-4 w-4" /> },
      { time: "08:00", title: "Desayuno", type: "Networking", icon: <Mic className="h-4 w-4" /> },
      { time: "09:00", title: "Hora limite para subir los proyectos", type: "Hacking", icon: <Clock className="h-4 w-4" /> },
      { time: "10:00", title: "Regrigerio", type: "Networking", icon: <Mic className="h-4 w-4" /> },
      { time: "13:00", title: "Almuerzo Final", type: "Networking", icon: <Utensils className="h-4 w-4" /> },
      { time: "14:00", title: "Conferencias", type: "Hacking", icon: <PartyPopper className="h-4 w-4" /> },
      { time: "16:00", title: "Presentación de Proyectos (Demos)", type: "Presentación", icon: <Mic className="h-4 w-4" /> },
      { time: "17:00", title: "Deliberación del Jurado", type: "Anuncio", icon: <Clock className="h-4 w-4" /> },
      { time: "17:30", title: "Ceremonia de Premiación y Cierre del Evento", type: "Premiación", icon: <PartyPopper className="h-4 w-4" /> },
    ],
  },
];

export function EventSchedule() {
  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Cronograma del Evento
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No te pierdas ninguna actividad. Planifica tus tres días de inmersión total.
          </p>
        </div>

        <Tabs defaultValue="day-1" className="w-full max-w-4xl mx-auto">
          {/* 2. Los disparadores (botones) de las pestañas */}
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
            {scheduleData.map((day) => (
              <TabsTrigger key={day.value} value={day.value} className="py-2 sm:py-0">
                <div className="text-center">
                  <div>{day.day}</div>
                  <div className="text-xs font-normal text-muted-foreground">{day.date}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* 3. El contenido de cada pestaña */}
          {scheduleData.map((day) => (
            <TabsContent key={day.value} value={day.value}>
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>{day.day}: Agenda Completa</CardTitle>
                  <CardDescription>Actividades programadas para el {day.date}.</CardDescription>
                </CardHeader>
                <div className="p-6 pt-0">
                  <div className="space-y-6">
                    {day.events.map((event, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-20 text-right">
                          <p className="pr-6 font-mono text-sm text-muted-foreground">{event.time}</p>
                        </div>
                        <div className="relative w-full">
                          {/* Línea de tiempo vertical */}
                          <div className="absolute left-[-24px] top-1 h-full w-px bg-border"></div>
                          <div className="absolute left-[-28px] top-1 h-3 w-3 rounded-full bg-primary"></div>
                          
                          <p className="font-semibold">{event.title}</p>
                          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                            {event.icon}
                            <span>{event.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}