"use client"

import { useRouter } from "next/navigation"
import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"
import { ArrowDown, Coins, DogIcon, Globe2, Heart, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Adicionar importações para lazy loading no topo do arquivo
import dynamic from "next/dynamic"

// Carregar o componente CountdownTimer de forma lazy
const CountdownTimer = dynamic(() => import("@/components/countdown-timer"), {
  loading: () => <div className="h-24 w-full animate-pulse bg-purple-900/20 rounded-lg"></div>,
  ssr: false,
})

// Adicionar o componente PerformanceToggle à página inicial
import PerformanceToggle from "@/components/performance-toggle"

export default function Home() {
  // Adicionar useRouter para navegação
  const router = useRouter()

  // Função para lidar com a rolagem suave
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Função para lidar com o clique no botão Conectar Carteira
  const handleConnectClick = () => {
    router.push("/claim")
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <GalaxyAnimation />
      <Navbar onConnectClick={handleConnectClick} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 fade-in">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
                Street Dog Coin
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                O primeiro token cripto com propósito social para ajudar cães de rua. Participe do nosso airdrop e faça
                parte desta revolução.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/claim">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    Participar do Airdrop
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-400 hover:bg-blue-900/20"
                  onClick={() => scrollToSection("about")}
                >
                  Saiba Mais
                </Button>
              </div>

              {/* Adicionar o componente CountdownTimer */}
              <div className="mt-8">
                <CountdownTimer />
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto animate-float">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/street-logo-Lwlo4CyibHQIRkaFgNMeF9P1QNF4B1.png"
                  alt="Street Dog Coin Logo"
                  width={400}
                  height={400}
                  className="rounded-full animate-glow"
                  priority // Adicionar priority para melhorar o LCP
                  loading="eager" // Carregar imediatamente
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-blue-400" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative overflow-hidden fade-in" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">Por que Street Dog Coin?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Combinamos tecnologia blockchain com impacto social para criar um ecossistema que beneficia tanto
              investidores quanto cães de rua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-800/30 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Impacto Social</h3>
              <p className="text-gray-400">
                Parte dos tokens é destinada a ONGs e abrigos que cuidam de cães de rua, gerando impacto social real.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-800/30 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Coins className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Tokenomics</h3>
              <p className="text-gray-400">
                Sistema econômico transparente e sustentável, com mecanismos de queima e redistribuição.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-800/30 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Globe2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Comunidade Global</h3>
              <p className="text-gray-400">
                Uma comunidade ativa e engajada, unida pela causa dos cães de rua em todo o mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/street-banner-JgZA12ksFSsQCl9cfg4bUBPkxPVfoE.jpeg"
                alt="Street Dog Banner"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
                loading="lazy" // Usar lazy loading para imagens abaixo da dobra
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
                Junte-se à Revolução Street Dog Coin
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mt-1">
                    <DogIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-300">Ajuda Real</h3>
                    <p className="text-gray-400">
                      Cada transação contribui para o fundo de auxílio aos cães de rua, garantindo impacto direto.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mt-1">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-300">Comunidade Engajada</h3>
                    <p className="text-gray-400">
                      Faça parte de uma comunidade que compartilha o amor pelos animais e a paixão por criptomoedas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Mascot */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-black to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sobre-D0RZ4hVBvEIqGVceS3ltCXHK3Asf6T.webp"
                alt="Street Dog Mascot"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
                loading="lazy" // Usar lazy loading para imagens abaixo da dobra
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Conheça o Street Dog</h2>
              <p className="text-gray-300 text-lg mb-6">
                Nosso mascote representa a união entre o mundo cripto e a causa dos cães de rua. Com estilo urbano e
                coração solidário, ele simboliza nossa missão de usar a tecnologia blockchain para fazer a diferença.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">Tokenomics Transparentes</h4>
                  <p className="text-gray-400">2% de cada transação é destinado ao fundo de auxílio aos cães de rua</p>
                </div>
                <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">Airdrop em Andamento</h4>
                  <p className="text-gray-400">Participe agora e receba 1000 $STDOG tokens gratuitamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 md:p-12 border border-blue-800/30 backdrop-blur-sm">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
                Pronto para fazer parte desta revolução?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Não perca a oportunidade de participar do airdrop do Street Dog Coin e fazer parte de uma comunidade que
                está mudando o mundo dos cães de rua.
              </p>
              <Link href="/claim">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Participar do Airdrop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Toaster />
      <PerformanceToggle />
    </main>
  )
}

