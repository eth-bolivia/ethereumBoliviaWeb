"use client"

import type { ReactNode } from "react"
import Link from "next/link";
import Image from "next/image";

import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import FrostedGlassIcon from "../frosted-glass-icon";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 

interface FormsCardProps {
  icon: ReactNode
  title: string
  description: string
  accentColor?: string
  availableButton: boolean
  urlButton?: string
  urlImage: string
}

export default function FormsFeatureCard({
  icon,
  title,
  description,
  accentColor = "rgba(120, 120, 255, 0.5)",
  availableButton,
  urlButton, urlImage = "/sectionForms1.jpg"
}: FormsCardProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Adjust accent color opacity for dark mode
  const adjustedAccentColor = isDark
    ? accentColor.replace(/rgba$$(\d+),\s*(\d+),\s*(\d+),\s*[\d.]+$$/, "rgba($1, $2, $3, 0.3)")
    : accentColor

  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full overflow-hidden bg-background/60 backdrop-blur-sm border transition-all duration-300 hover:shadow-lg dark:bg-background/80">
        <div className="p-6 h-full flex flex-col relative z-10">
          <FrostedGlassIcon icon={icon} color={accentColor} className="mb-4 self-start" />

          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground flex-grow pb-3">{description}</p>
          <div className="flex justify-center">
            <Image src={urlImage}
            width={250}
            height={250}
            alt="Picture" />
          </div>
           
          {availableButton && urlButton && (
            <div className="m-3 "> 
              <Link href={urlButton}>
                <Button className="w-full px-5 py-6 h-[60px] rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-[15px] font-medium text-foreground">
                  <Zap className="h-5 w-5 mr-2" />  
                  Ingresar
                </Button>
              </Link>
            </div>
          )}

   

        </div>

        {/* Always visible animated gradient background */}
        <motion.div
          className="absolute inset-0 z-0 opacity-20 dark:opacity-30"
          initial={{ opacity: 0 }}
          animate={{
            background: [
              `radial-gradient(circle at 30% 30%, ${adjustedAccentColor} 0%, transparent 60%)`,
              `radial-gradient(circle at 70% 70%, ${adjustedAccentColor} 0%, transparent 60%)`,
            ],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </Card>
    </motion.div>
  )
}
