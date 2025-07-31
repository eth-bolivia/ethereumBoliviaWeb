import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CalendarDays,  // Se cambió el ícono de Rocket a CalendarDays
} from "lucide-react";
import Link from "next/link";
import React from "react";

export function  RegistrationSection  () {
  return (
    <section className="  ">
      <div className=" ">
        <div className="mx-auto max-w-3xl text-center mb-12 px-4 py-4">
          <Card className="bg-gradient-to-br from-primary/10 to-transparent  ">
            <CardHeader>
              <CardTitle className="text-2xl">Información Importante</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Si eres hacker, ya nos comunicamos contigo por correo electrónico donde te enviamos el link del grupo exclusivo de WhatsApp. Si eres asistente a conferencias, el 31 de Julio recibirás un correo electrónico confirmando tu participación. En el siguiente botón están las agendas. Recuerda que las agendas de hackers y asistente de conferencias es diferente.
              </p>
              
              {/* Se actualizó el botón para que lleve a las agendas */}
              <Link href="https://drive.google.com/drive/folders/1AbCUOE1ozpYzmyLgcKl5T-Q0fdHbAEdF?usp=sharing"> 
                <Button size="lg" className="w-full sm:w-auto">
                  Ver Agendas <CalendarDays className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              
              <p className="text-xs text-muted-foreground mt-4">
                Sigue a @EthereumBo en redes para actualizaciones y anuncios especiales.
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                Nos vemos pronto!.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
};