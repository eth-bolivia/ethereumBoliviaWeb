import FormsFeatureCard from "@/components/2025/forms-card"
import {
  BotIcon,
  SparklesIcon,
  ZapIcon 
} from "@/components/feature-icons"

export function FormsSection() {
  const features = [
    {
      icon: <BotIcon />,
      title: "Convocatoria para Hackers",
      description:
        "Pon a prueba tu talento creando ideas innovadoras, (como Hacker participas en la Buildathon y en las Conferencias).",
      accentColor: "rgba(36, 101, 237, 0.5)",
      availableButton: true,
      urlButton: "https://tally.so/r/mOZy7p",
      urlImage: "/sectionForms2.jpg"
    },
    {
      icon: <SparklesIcon />,
      title: "Registro SOLO para conferencias",
      description: "El registro para participar en solo las Conferencias se abriran el 17 de Julio.",
      accentColor: "rgba(236, 72, 153, 0.5)",
      availableButton: false,
      urlButton: "",
      urlImage: "/sectionForms1.jpg"
    },
    {
      icon: <ZapIcon />,
      title: "Compra Merch exclusiva del evento",
      description: "Visita nuestra tienda de Merch.",
      accentColor: "rgba(34, 211, 238, 0.5)",
      availableButton: true,
      urlButton: "/shop",
      urlImage: "/sectionForms3.jpg"
    } 
  ]

  return (
    <section   className="min-h-screen  flex flex-col items-center justify-center bg-muted/50 dark:bg-muted/10"   aria-labelledby="features-heading">
      <div className=" container px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <div className="space-y-2 mt-12">
            
            <h2 id="features-heading" className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Inscripciones
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FormsFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
              availableButton={feature.availableButton}
              urlButton={feature.urlButton}
              urlImage={feature.urlImage}
              
            />
          ))}
        </div>
      </div>
    </section>
  )
}
