// components/community-partners.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
 
const communitiesData = [

  {
    name: "Taikai",
    logoUrl: "/taikai-white.svg",
    websiteUrl: "https://taikai.network/",
  },
  {
    name: "AsoBlockchain",
    logoUrl: "/communities/aso-logo.jpg",
    websiteUrl: "#",
  },
  {
    name: "Builders",
    logoUrl: "/communities/build-logo.jpg",
    websiteUrl: "#",
  }, 
  {
    name: "GDG Santa Cruz",
    logoUrl: "/communities/GDG-blanco.png",  
    websiteUrl: "#",
  },
  {
    name: "Mujeres Tics",
    logoUrl: "/communities/mujeres-blanco.png",
    websiteUrl: "#",
  },
  {
    name: "Populi",
    logoUrl: "/communities/pop-blanco.png",
    websiteUrl: "#",
  },
  {
    name: "Women Techmakers",
    logoUrl: "/communities/wtm-blanco.png",
    websiteUrl: "#",
  }, 

];

export function CommunityPartners() {
  return (
    <section className="w-full py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Partners & Comunidades Aliadas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Colaborando juntos para fortalecer el ecosistema tecnológico local y regional.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 md:grid-cols-6 md:gap-8">
          {communitiesData.map((community) => (
            <Link
              key={community.name}
              href={community.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-4 bg-black dark:bg-background rounded-lg border transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={community.logoUrl}
                alt={`Logo de ${community.name}`}
                width={150}
                height={60}
                className="w-auto h-15 object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}