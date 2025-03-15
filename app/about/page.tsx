import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, Target, Coins, Users, Heart, Github, Twitter, Linkedin, DogIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PerformanceToggle from "@/components/performance-toggle"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <GalaxyAnimation />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
              Sobre o Street Dog Coin
            </h1>
            <p className="text-xl text-gray-300">
              Uma criptomoeda com propósito, unindo tecnologia blockchain e impacto social para ajudar cães de rua em
              todo o mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Nossa Missão</h2>
              <p className="text-gray-300">
                Criar um ecossistema descentralizado que conecte amantes de criptomoedas e defensores dos animais,
                gerando recursos para apoiar organizações que cuidam de cães de rua.
              </p>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Nossa Visão</h2>
              <p className="text-gray-300">
                Ser a principal criptomoeda focada em causas sociais, estabelecendo um novo padrão para projetos que
                combinam retorno financeiro com impacto positivo na sociedade.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Rogério Card */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-blue-600/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rogerio.jpg-JFlGa73HMZxNwfaZRgjTGp1XH94sTB.jpeg"
                    alt="Rogério Resende"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Rogério Resende</h3>
                <p className="text-purple-400 mb-4">CEO & Fundador</p>
                <p className="text-gray-300 text-center mb-6">
                  Especialista em blockchain com mais de 8 anos de experiência em desenvolvimento de projetos
                  descentralizados.
                </p>
                <div className="flex gap-4">
                  <Link href="https://x.com/pedreira32910?t=CIUYjiTUFWBnqJo7xYJhQw&s=09" target="_blank" className="text-blue-400 hover:text-blue-300">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/rogerio-resende-2b96a237/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-blue-400 hover:text-blue-300">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-blue-400 hover:text-blue-300">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </Card>

            {/* Júnior Card */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-blue-600/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junior.jpg-zFPRff8Jhen8iTF5ePi28czOQ0dAqQ.jpeg"
                    alt="Júnior Alves"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Júnior Alves</h3>
                <p className="text-purple-400 mb-4">Desenvolvedor Líder</p>
                <p className="text-gray-300 text-center mb-6">
                  Especialista em desenvolvimento full-stack com experiência em aplicações Web3 e DeFi.
                </p>
                <div className="flex gap-4">
                  <Link href="https://x.com/juniorwebyte" target="_blank" className="text-blue-400 hover:text-blue-300">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/jos%C3%A9-de-figueredo-alves-j%C3%BAnior-6a625049/" target="_blank" className="text-blue-400 hover:text-blue-300">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="https://github.com/juniorwebyte" target="_blank" className="text-blue-400 hover:text-blue-300">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Fase 1 - Lançamento</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-blue-400" />
                      Lançamento do token $STDOG
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-400" />
                      Construção da comunidade inicial
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-400" />
                      Airdrop para early adopters
                    </li>
                  </ul>
                </Card>

                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Fase 2 - Expansão</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-blue-400" />
                      Listagem em exchanges
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-blue-400" />
                      Parcerias com ONGs
                    </li>
                    <li className="flex items-center gap-2">
                      <DogIcon className="h-4 w-4 text-blue-400" />
                      Programa de doações
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Fase 3 - Consolidação</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-blue-400" />
                      Desenvolvimento da plataforma DeFi
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-400" />
                      Expansão global da comunidade
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-400" />
                      Novas parcerias estratégicas
                    </li>
                  </ul>
                </Card>

                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Fase 4 - Futuro</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-blue-400" />
                      Governança descentralizada
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-blue-400" />
                      Expansão para novas causas sociais
                    </li>
                    <li className="flex items-center gap-2">
                      <DogIcon className="h-4 w-4 text-blue-400" />
                      Desenvolvimento do ecossistema
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Supply Total</h3>
                <p className="text-2xl font-bold text-blue-400">1,000,000,000</p>
                <p className="text-gray-300">$STDOG</p>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Taxa de Transação</h3>
                <p className="text-2xl font-bold text-blue-400">2%</p>
                <p className="text-gray-300">Para fundo de doações</p>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Tokens Queimados</h3>
                <p className="text-2xl font-bold text-blue-400">50%</p>
                <p className="text-gray-300">Do supply inicial</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 md:p-12 border border-blue-800/30 backdrop-blur-sm max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-blue-300">Faça Parte desta História</h2>
              <p className="text-gray-300 text-lg mb-8">
                Junte-se a nós nesta missão de transformar a vida dos cães de rua através da tecnologia blockchain.
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

      <PerformanceToggle />
    </main>
  )
}

