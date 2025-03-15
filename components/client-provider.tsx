"use client"

import { type ReactNode, useEffect, useState } from "react"
import { initializeStorage } from "@/lib/storage-service"

interface ClientProviderProps {
  children: ReactNode
}

export default function ClientProvider({ children }: ClientProviderProps) {
  const [isLowPerfMode, setIsLowPerfMode] = useState(false)

  useEffect(() => {
    // Inicializar o armazenamento local quando o componente for montado
    if (typeof window !== "undefined") {
      initializeStorage()

      // Detectar dispositivos de baixa performance
      const detectLowPerformanceDevice = () => {
        // Verificar se é um dispositivo móvel
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

        // Verificar se tem poucos núcleos de CPU
        const isLowEndDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false

        // Verificar se o usuário prefere reduzir animações
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

        // Verificar se a memória é limitada (apenas em Chrome)
        const hasLimitedMemory = (navigator as any).deviceMemory ? (navigator as any).deviceMemory <= 4 : false

        return isMobile || isLowEndDevice || prefersReducedMotion || hasLimitedMemory
      }

      const isLowPerf = detectLowPerformanceDevice()
      setIsLowPerfMode(isLowPerf)

      // Adicionar classe ao body para CSS específico para dispositivos de baixa performance
      if (isLowPerf) {
        document.body.classList.add("low-perf-mode")
      }

      // Armazenar a preferência para que outros componentes possam acessá-la
      localStorage.setItem("lowPerfMode", isLowPerf ? "true" : "false")
    }
  }, [])

  return <>{children}</>
}

