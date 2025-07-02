import React from "react";
import { CheckSquare } from "lucide-react";

const checklistData = [
  
  { text: "Únete a nuestro Grupo de WhatsApp, el link está en el mail." },
  { text: "El Grupo de WhatsApp es nuestro medio de comunicación principal para actualizaciones." },
  { text: "Por favor preséntate con tu nombre y ciudad en el Grupo de WhatsApp. ¡No te quedes fuera!." },
  { text: "Si buscas equipo comparte que habilidades puedes aportar en el proyecto o si ya tiene una idea." },
  { text: "Si ya formas parte del equipo, asegurate que todos los miembros llenen el formulario de registro." },
  { text: "Invita a tus Amigos: La experiencia es mejor acompañada. Comparte la convocatoria con tus amigos. " },
  
      
]
  
   

export function StepJoinGroup() { // Renombrado para ser un componente de página
 

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="container mx-auto px-4 md:px-6"> 
 
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 pl-4">
            {checklistData.map((item, index) => (
              <div key={index} className="flex items-start gap-3 lg:mx-10">
                <CheckSquare className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> 
                  <p className="text-base text-foreground text-start">{item.text}</p>
              </div>
            ))}
          </div>
            
        </div>
      </div>
    </div>
  );
}