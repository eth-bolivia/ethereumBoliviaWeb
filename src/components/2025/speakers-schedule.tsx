// components/speakers-schedule.tsx

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// 1. Definimos los datos de las conferencias. Esto podría venir de una API.
// Usamos Pravatar para imágenes de avatar de marcador de posición.
const speakersData = [
  {
    time: "10:00",
    speaker: {
      name: "Ana Gómez",
      title: "Blockchain Core Developer",
      avatarSrc: "https://i.pravatar.cc/150?u=ana-gomez",
    },
    talk: {
      title: "Escalando Ethereum: Una Inmersión Profunda en L2 Rollups",
      description: "Exploraremos las soluciones de capa 2 más prometedoras y cómo están resolviendo el trilema de la escalabilidad.",
      category: "Técnica",
    },
  },
  {
    time: "11:00",
    speaker: {
      name: "David Chen",
      title: "Investigador en IA y Web3",
      avatarSrc: "https://i.pravatar.cc/150?u=david-chen",
    },
    talk: {
      title: "Agentes de IA Autónomos en la Blockchain",
      description: "Descubre cómo los agentes inteligentes pueden interactuar con smart contracts para crear sistemas descentralizados autónomos.",
      category: "Innovación",
    },
  },
  {
    time: "12:00",
    speaker: {
      name: "Laura Evans",
      title: "CEO de SecureWallet Inc.",
      avatarSrc: "https://i.pravatar.cc/150?u=laura-evans",
    },
    talk: {
      title: "El Futuro de la Identidad Digital en Web3",
      description: "Un análisis sobre la identidad soberana (SSI) y cómo cambiará la forma en que interactuamos en línea.",
      category: "Visión",
    },
  },
  {
    time: "14:00",
    speaker: {
      name: "Marco Rossi",
      title: "Estratega de Inversión Cripto",
      avatarSrc: "https://i.pravatar.cc/150?u=marco-rossi",
    },
    talk: {
      title: "Navegando el Mercado Cripto: Estrategias para 2025",
      description: "Consejos prácticos y análisis de mercado para inversores que buscan capitalizar las próximas tendencias.",
      category: "Finanzas",
    },
  },
];

export function SpeakersSchedule() {
  return (
    <section className="w-full py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Agenda de Conferencias
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conoce a nuestros expertos y las charlas que han preparado para ti.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto space-y-8">
          {/* Línea de tiempo vertical decorativa (solo visible en pantallas grandes) */}
          <div className="absolute left-3 sm:left-24 top-0 h-full w-0.5 bg-border -z-10 hidden sm:block"></div>
          
          {speakersData.map((talk, index) => (
            <div key={index} className="sm:flex items-start gap-8">
              {/* Columna de la Hora */}
              <div className="w-full sm:w-24 text-left sm:text-right flex-shrink-0 mb-4 sm:mb-0">
                <p className="font-mono text-lg font-semibold text-primary">{talk.time}</p>
              </div>

              {/* Tarjeta de la Charla */}
              <Card className="w-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={talk.speaker.avatarSrc} alt={talk.speaker.name} />
                    <AvatarFallback>{talk.speaker.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{talk.speaker.name}</h3>
                    <p className="text-sm text-muted-foreground">{talk.speaker.title}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-bold text-xl mb-2">{talk.talk.title}</h4>
                  <p className="text-muted-foreground mb-4">{talk.talk.description}</p>
                  <Badge variant="secondary">{talk.talk.category}</Badge>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}