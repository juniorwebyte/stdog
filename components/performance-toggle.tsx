"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Zap, ZapOff } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function PerformanceToggle() {
  const [isLowPerfMode, setIsLowPerfMode] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Verificar se já existe uma preferência salva
    const savedPref = localStorage.getItem("lowPerfMode")
    if (savedPref) {
      setIsLowPerfMode(savedPref === "true")
    }
  }, [])

  const togglePerformanceMode = () => {
    const newMode = !isLowPerfMode
    setIsLowPerfMode(newMode)

    // Salvar a preferência
    localStorage.setItem("lowPerfMode", newMode ? "true" : "false")

    // Adicionar ou remover a classe do body
    if (newMode) {
      document.body.classList.add("low-perf-mode")
    } else {
      document.body.classList.remove("low-perf-mode")
    }

    // Mostrar toast
    toast({
      title: newMode ? "Modo de baixa performance ativado" : "Modo de alta performance ativado",
      description: newMode
        ? "Animações e efeitos visuais foram reduzidos para melhorar a performance."
        : "Todas as animações e efeitos visuais foram ativados.",
      duration: 3000,
    })

    // Recarregar a página para aplicar as mudanças
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="fixed bottom-4 right-4 z-50 bg-black/50 border-purple-800/30 hover:bg-purple-900/20"
      onClick={togglePerformanceMode}
      title={isLowPerfMode ? "Ativar modo de alta performance" : "Ativar modo de baixa performance"}
    >
      {isLowPerfMode ? (
        <>
          <Zap className="h-4 w-4 mr-2 text-yellow-400" />
          <span className="text-xs">Modo Leve</span>
        </>
      ) : (
        <>
          <ZapOff className="h-4 w-4 mr-2 text-gray-400" />
          <span className="text-xs">Modo Leve</span>
        </>
      )}
    </Button>
  )
}

