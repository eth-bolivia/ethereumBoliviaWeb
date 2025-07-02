  import React from "react";
 
import { CheckSquare } from "lucide-react";


const checklistData = [
  
      { text: "Laptop y Cargador: ¡Doble chequeo! Asegúrate de que tu cargador funciona correctamente." },
      { text: "Audífonos: Esenciales para bloquear distracciones y entrar en 'la zona'." },
      { text: "Alargador de Corriente: En el caso que tengas muchos dispositivos." },
      { text: "Botella de Agua Reutilizable: Mantente hidratado. Habrá puntos de recarga." },
      { text: "Ropa Cómoda: Prioriza la comodidad" },
      { text: "Saco de Dormir (Sleeping Bag): Indispensable si planeas quedarte a dormir en la sede." },
      { text: "Almohada de Viaje o Cojín: Tu cuello te lo agradecerá." },
      { text: "Manta Pequeña: Para abrigarte mientras trabajas o para una siesta rápida." },
      { text: "Desodorante: Por favor, por ti y por tus compañeros de equipo." },
      { text: "Cepillo y Pasta de Dientes: Un rápido cepillado te despierta y te refresca." },
      { text: "Toallitas Húmedas o Limpiador Facial: Para refrescarte la cara rápidamente." },
      { text: "Gel Desinfectante para Manos y Medicamentos Personales (si los necesitas)." },
      { text: "¡Mucha Energía y una Mente Abierta! Ven listo para aprender, colaborar y, sobre todo, divertirte." }
      
    ]
  
   
 

export function StepReady() { // Renombrado para ser un componente de página
 

  return (
  <section className="w-full py-12 md:py-20  ">
    <div className="container mx-auto px-4 md:px-6"> 
 
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 pl-4">
          {checklistData.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> 
                <p className="text-base text-foreground text-start">{item.text}</p>
            </div>
          ))}
        </div>
         <p className="text-center text-xl font-semibold mt-12">¡Nos vemos en la Buildathon!</p>
      </div>
    </div>
  </section>
  );
}