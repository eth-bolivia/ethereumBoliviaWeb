import Link from "next/link";
import { Button } from "../ui/button"; 

 
export function StepJoinGroup() { // Renombrado para ser un componente de página
 

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:items-start">
        <Button
          asChild
          className="hidden md:flex items-center gap-3 px-4 py-2 bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 h-auto dark:bg-gray-800 dark:hover:bg-primary/90 dark:shadow-[0_0_10px_rgba(36,101,237,0.4)]"
        >
          <Link href="./buildathon2025#convocatorias">
             
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium">Ingresar</span> 
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}