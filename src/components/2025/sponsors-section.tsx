// components/sponsors-section.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 1. Datos de los sponsors. Usaremos placeholders. Reemplázalos con tus logos reales.
const sponsorsData = [
  {
    name: "ETH LATAM",
    logoUrl: "/sponsor0.png", // Reemplaza con la ruta a tu logo
    websiteUrl: "https://example.com",
  },
  {
    name: "Devconnect",
    logoUrl: "/sponsor1.png",
    websiteUrl: "https://example.com",
  },
  {
    name: "Univalle",
    logoUrl: "/sponsor2.png",
    websiteUrl: "https://example.com",
  },
  {
    name: "Arbitrum",
    logoUrl: "/sponsor3.png",
    websiteUrl: "https://example.com",
  },
  {
    name: "Avalanche",
    logoUrl: "/sponsor4.png",
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
            Agradecemos enormemente el apoyo de los sponsors que hacen posible este evento.
          </p>
        </div>

        {/* 2. Grid responsivo para los sponsors. Menos columnas = logos más grandes. */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
          {sponsorsData.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-6 bg-white rounded-lg border transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={sponsor.logoUrl}
                alt={`Logo de ${sponsor.name}`}
                width={200}
                height={100}
                className="w-auto h-[100px] object-contain transition-all duration-300 hover:grayscale-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}