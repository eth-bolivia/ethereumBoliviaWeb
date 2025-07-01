import Link from "next/link" 
import { Zap } from "lucide-react"

import FramerSpotlight from "@/components/framer-spotlight"
import CssGridBackground from "@/components/css-grid-background" 

export function HeroSection() {
  return (
    <>
        <CssGridBackground />
          <FramerSpotlight />
          <div className="container px-4 md:px-6 py-16 md:py-20">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-6">El evento cripto más grande de Bolivia</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                Buildathon 2025
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mb-12">
                1, 2 y 3 de Agosto, en Santa Cruz.
              </p>
 

              <div className="flex flex-wrap justify-center gap-3 mt-16">
 
                <Link href="#convocatorias"   className="flex px-5 py-6 h-[70px] rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-[15px] font-medium text-foreground">
                <Zap className="h-5 w-5 pr-1 text-white relative z-10" />
                  Convocatoria abierta
                </Link>
              </div>
            </div>
          </div> 
    </>
  )
}
