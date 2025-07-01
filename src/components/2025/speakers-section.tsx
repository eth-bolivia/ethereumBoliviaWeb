// components/speakers-section.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from 'lucide-react';
import { motion } from "framer-motion"
 
const speakersData = [
  {
    name: "Elena Rodriguez",
    title: "Lead Blockchain Engineer",
    imageUrl: "https://i.pravatar.cc/150?u=elena-rodriguez",
    socials: {
      linkedin: "https://linkedin.com/in/elena-rodriguez",
      twitter: "https://twitter.com/elena_dev",
    },
  },
  {
    name: "Samuel Jones",
    title: "DeFi Architect & Strategist",
    imageUrl: "https://i.pravatar.cc/150?u=samuel-jones",
    socials: {
      linkedin: "https://linkedin.com/in/samuel-jones",
      twitter: "https://twitter.com/samuel_defi",
    },
  },
  {
    name: "Aisha Khan",
    title: "AI & Web3 Researcher",
    imageUrl: "https://i.pravatar.cc/150?u=aisha-khan",
    socials: {
      linkedin: "https://linkedin.com/in/aisha-khan",
      twitter: "https://twitter.com/aisha_research",
    },
  },
  {
    name: "Ben Carter",
    title: "Founder, ChainSecure",
    imageUrl: "https://i.pravatar.cc/150?u=ben-carter",
    socials: {
      linkedin: "https://linkedin.com/in/ben-carter",
      twitter: "https://twitter.com/bencarter_sec",
    },
  },
  {
    name: "Maria Garcia",
    title: "UX Lead for dApps",
    imageUrl: "https://i.pravatar.cc/150?u=maria-garcia",
    socials: {
      linkedin: "https://linkedin.com/in/maria-garcia",
      twitter: "https://twitter.com/maria_ux",
    },
  },
  {
    name: "Chao Li",
    title: "Core Protocol Developer",
    imageUrl: "https://i.pravatar.cc/150?u=chao-li",
    socials: {
      linkedin: "https://linkedin.com/in/chao-li",
      twitter: "https://twitter.com/chao_protocol",
    },
  },
  {
    name: "Fatima Al-Jamil",
    title: "Venture Capitalist, Web3 Fund",
    imageUrl: "https://i.pravatar.cc/150?u=fatima-al-jamil",
    socials: {
      linkedin: "https://linkedin.com/in/fatima-al-jamil",
      twitter: "https://twitter.com/fatima_vc",
    },
  },
  {
    name: "Kenji Tanaka",
    title: "NFT Marketplace CEO",
    imageUrl: "https://i.pravatar.cc/150?u=kenji-tanaka",
    socials: {
      linkedin: "https://linkedin.com/in/kenji-tanaka",
      twitter: "https://twitter.com/kenji_nft",
    },
  },
]; 

export function SpeakersSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
              Speakers
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expertos en Blockchain</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Te presentamos a nuestros speakers que estaran en el Ciclo de Conferencias y mentores durante la Buildathon.
            </p>
          </div>
        </motion.div>

        <motion.div
          className=" container mx-auto px-4 md:px-6 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {speakersData.map((speaker, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 pt-8">
                <Avatar className="w-24 h-24 mb-4 border-2 border-primary/20">
                  <AvatarImage src={speaker.imageUrl} alt={`Foto de ${speaker.name}`} />
                  <AvatarFallback>
                    {/* Genera iniciales a partir del nombre */}
                    {speaker.name.split(' ').map((n) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <CardTitle className="text-lg">{speaker.name}</CardTitle>
                <CardDescription className="mb-4">{speaker.title}</CardDescription>

                <CardFooter className="p-0 flex gap-2">
                  <Link href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Perfil de LinkedIn de {speaker.name}</span>
                    </Button>
                  </Link>
                  <Link href={speaker.socials.twitter} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Perfil de Twitter de {speaker.name}</span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
