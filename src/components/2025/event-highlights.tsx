// components/event-highlights.tsx

import {
  Card, 
} from "@/components/ui/card"
import {
  Users,
  Code,
  Star,
  Trophy,
  Network,
  Handshake,
  Bitcoin,
} from "lucide-react"

// 1. Definimos los datos de los highlights en un array para mantener el JSX limpio.
const highlightsData = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: "400",
    label: "Asistentes",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    value: "250",
    label: "Hackers",
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    value: "20",
    label: "Experts",
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    value: "+1000$",
    label: "en Premios",
  },
  {
    icon: <Network className="h-10 w-10 text-primary" />,
    value: "10",
    label: "Comunidades Tech",
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    value: "5",
    label: "Sponsors Internacionales",
  },
  {
    icon: <Bitcoin className="h-10 w-10 text-primary" />,
    value: "+20",
    label: "Horas de Workshops",
  },
]

export function EventHighlights() {
  return (
    <section className="w-full py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            El Evento en Números
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un vistazo al impacto y la escala de nuestra última edición.
          </p>
        </div>

        {/* 2. Usamos un grid responsivo para mostrar los highlights */}
        <div className="mt-12 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {highlightsData.map((item, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-6">
              <div className="mb-4">{item.icon}</div>
              <p className="text-4xl font-bold tracking-tighter">{item.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}