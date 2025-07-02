import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

 
export function StepForm() { // Renombrado para ser un componente de página
 

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:items-start">
        
          
          <Link href="./buildathon2025#convocatorias">
            <Button 
              variant="secondary" 
              size="lg" 
              className="flex-shrink-0 w-full sm:w-auto bg-muted/100 "
            >
              Regístrate Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
         
      </div>
    </div>
  );
}