// components/buildathon-recap.tsx

import React from 'react';

// BONUS: Un componente reutilizable para videos de YouTube, como creamos antes.
// Es una buena práctica tenerlo separado para usarlo en cualquier lugar.
interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => {
  return (
    // Contenedor que mantiene la proporción 16:9
    <div className="aspect-w-16 aspect-h-9 w-full h-[250px] sm:h-[350px] md:h-[350px] lg:h-[500px]">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?si=vw9cQ_lvrbg2OjwP`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy" // Carga el video de forma perezosa para mejorar el rendimiento
      ></iframe>
    </div>
  );
};


// El componente principal que solicitaste
export function BuildathonRecap() {
  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Título y descripción */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Esto es la <span className="text-primary">Buildathon</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Revive la energía, la creatividad y la colaboración de nuestro último evento. ¡Prepárate para lo que viene!
            </p>
          </div>

          {/* Contenedor del video con sombra y bordes redondeados */}
          <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl border">
            <YouTubeEmbed 
              videoId="Q8aUQTLjtRI" // <- REEMPLAZA ESTE ID con el de tu video
              title="Video Recap Oficial de la Buildathon Anterior"
            />
          </div>

        </div>
      </div>
    </section>
  );
}