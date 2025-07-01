"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useMotionValue, useSpring, animate } from "framer-motion"
import { useTheme } from "next-themes"

export default function FramerSpotlight() {
  const [isMounted, setIsMounted] = useState(false)
  const [isMouseInHero, setIsMouseInHero] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement | null>(null)
  const defaultPositionRef = useRef({ x: 0, y: 0 })
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Motion values for the spotlight position with spring physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Add spring physics for smoother movement
  const springX = useSpring(mouseX, { damping: 20, stiffness: 300 })
  const springY = useSpring(mouseY, { damping: 20, stiffness: 300 })


  const spotlightColors = [
    { color: "rgba(36, 101, 237, 0.2)", darkColor: "rgba(36, 101, 237, 0.25)" },
    { color: "rgba(236, 72, 153, 0.15)", darkColor: "rgba(236, 72, 153, 0.2)" },
    { color: "rgba(16, 185, 129, 0.15)", darkColor: "rgba(16, 185, 129, 0.2)" },
  ]

  // 2. Envuelve cada función en useCallback con sus dependencias
  const updateDefaultPosition = useCallback(() => {
    if (heroRef.current) {
      const heroRect = heroRef.current.getBoundingClientRect()
      const centerX = heroRect.left + heroRect.width / 2
      const centerY = heroRect.top + heroRect.height / 3

      defaultPositionRef.current = { x: centerX, y: centerY }
      mouseX.set(centerX)
      mouseY.set(centerY)
    }
  }, [mouseX, mouseY]) // <-- Dependencias de esta función

  const handleMouseEnter = useCallback(() => {
    setIsMouseInHero(true)
  }, []) // <-- No tiene dependencias, array vacío

  const handleMouseLeave = useCallback(() => {
    setIsMouseInHero(false)
    animate(mouseX, defaultPositionRef.current.x, { duration: 1.2, ease: "easeInOut" })
    animate(mouseY, defaultPositionRef.current.y, { duration: 1.2, ease: "easeInOut" })
  }, [mouseX, mouseY]) // <-- Dependencias de esta función

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // No necesitamos 'isMouseInHero' aquí, ya que el listener se añade/quita
    // dinámicamente. Pero para el ejemplo original, la dependencia era isMouseInHero.
    // Lo simplificaremos un poco en el useEffect.
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }, [mouseX, mouseY]) // <-- Dependencias de esta función

  // Setup effect
  useEffect(() => {
    setIsMounted(true)
    heroRef.current = document.getElementById("hero")
    updateDefaultPosition()

    window.addEventListener("resize", updateDefaultPosition)

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mouseenter", handleMouseEnter)
      heroElement.addEventListener("mouseleave", handleMouseLeave)
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateDefaultPosition)
      if (heroElement) {
        heroElement.removeEventListener("mouseenter", handleMouseEnter)
        heroElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  // 3. Usa las funciones memoizadas como dependencias.
  // El useEffect ahora solo se ejecuta una vez al montar.
  }, [updateDefaultPosition, handleMouseEnter, handleMouseLeave])

  // Efecto separado para manejar el movimiento del ratón
  // Esto es más limpio, ya que solo depende de `isMouseInHero`
  useEffect(() => {
    if (isMouseInHero) {
      window.addEventListener("mousemove", handleMouseMove)
    } else {
      window.removeEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMouseInHero, handleMouseMove])


  if (!isMounted) {
    return null
  }


  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary spotlight that follows mouse/animation */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${
            isDark ? spotlightColors[0].darkColor : spotlightColors[0].color
          } 0%, transparent 70%)`,
          width: "1000px",
          height: "1000px",
          borderRadius: "50%",
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Secondary spotlights with independent animations */}
      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          x: ["0%", "10%", "5%", "0%"],
          y: ["0%", "5%", "10%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          background: `radial-gradient(circle, ${
            isDark ? spotlightColors[1].darkColor : spotlightColors[1].color
          } 0%, transparent 70%)`,
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          left: "20%",
          top: "30%",
        }}
      />

      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          x: ["0%", "-10%", "-5%", "0%"],
          y: ["0%", "-5%", "-10%", "0%"],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          background: `radial-gradient(circle, ${
            isDark ? spotlightColors[2].darkColor : spotlightColors[2].color
          } 0%, transparent 70%)`,
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          right: "20%",
          bottom: "30%",
        }}
      />

      {/* Additional colored spotlights */}
      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          background: `radial-gradient(circle, ${
            isDark ? "rgba(168, 85, 247, 0.2)" : "rgba(168, 85, 247, 0.15)"
          } 0%, transparent 70%)`,
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          left: "60%",
          top: "20%",
        }}
      />

      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
        style={{
          background: `radial-gradient(circle, ${
            isDark ? "rgba(251, 191, 36, 0.2)" : "rgba(251, 191, 36, 0.15)"
          } 0%, transparent 70%)`,
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          left: "30%",
          bottom: "15%",
        }}
      />
    </div>
  )
}
