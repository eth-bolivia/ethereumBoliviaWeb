// components/sponsors-section.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 1. Datos de los sponsors. Usaremos placeholders. Reemplázalos con tus logos reales.
const sponsorsData = [
  {
    name: "Quantum Solutions",
    logoUrl: "/logos/sponsor-quantum.svg", // Reemplaza con la ruta a tu logo
    websiteUrl: "https://example.com",
  },
  {
    name: "Nexus Dynamics",
    logoUrl: "/logos/sponsor-nexus.svg",
    websiteUrl: "https://example.com",
  },
  {
    name: "Vertex Innovations",
    logoUrl: "/logos/sponsor-vertex.svg",
    websiteUrl: "https://example.com",
  },
  {
    name: "Apex Financial",
    logoUrl: "/logos/sponsor-apex.svg",
    websiteUrl: "https://example.com",
  },
];

export function SponsorsSection() {
  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestros Sponsors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Agradecemos enormemente el apoyo de las empresas que hacen posible este evento.
          </p>
        </div>

        {/* 2. Grid responsivo para los sponsors. Menos columnas = logos más grandes. */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {sponsorsData.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-6 bg-muted/30 rounded-lg border transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={sponsor.logoUrl}
                alt={`Logo de ${sponsor.name}`}
                width={200}
                height={80}
                className="w-auto h-14 object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}