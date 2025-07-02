
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Rocket,  
} from "lucide-react";
import Link from "next/link";
import React from "react";

export function  RegistrationSection  () {
return (
  <section className="  ">
  <div className=" ">
    <div className="mx-auto max-w-3xl text-center mb-12 px-4 ">
      <Card className="bg-gradient-to-br from-primary/10 to-transparent  ">
        <CardHeader>
          <CardTitle className="text-2xl">¿Listo para construir el futuro?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Regístrate de forma individual o con tu equipo (hasta 5 personas). Al hacerlo, aseguras tu espacio, merch exclusivo, alimentación y acceso total a todas las actividades.
          </p>
          <p className="font-semibold">
            ¡Los cupos son limitados! No te quedes fuera de la Buildathon más grande del país.
          </p>
          <Link href="#convocatorias">
            <Button size="lg" className="w-full sm:w-auto">
              ¡Quiero Registrarme! <Rocket className="h-5 w-5 ml-2" />
            </Button>
          </Link>
          <p className="text-xs text-muted-foreground mt-4">
            Sigue a @EthereumBo en redes para actualizaciones, workshops previos y anuncios especiales.
          </p>
        </CardContent>
      </Card>
    </div>
    </div></section>

)
};