"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import {
  Rocket,
  Target,
  Coins,
  Users,
  Heart,
  Github,
  Twitter,
  Linkedin,
  DogIcon,
  Mail,
  CheckCircle,
  Award,
  BookOpen,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PerformanceToggle from "@/components/performance-toggle"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <GalaxyAnimation />
      <Navbar isWalletConnected={false} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
              Sobre o Street Dog Coin
            </h1>
            <p className="text-xl text-gray-300">
              Uma criptomoeda com propósito, unindo tecnologia blockchain e impacto social para ajudar cães de rua em
              todo o mundo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História - NOVA SEÇÃO */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Nossa História</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  O STDOG surgiu em 2021 para unir tecnologia e impacto social. Em 2022, estruturamos o whitepaper e o
                  tokenomics. Entre 2023 e 2024, estudamos a viabilidade da fábrica de ração e do abrigo para cães. Em
                  2025, lançaremos o token e o airdrop, seguido pela expansão do ecossistema. O projeto inclui
                  marketplace pet, exchange (DEX), NFTs sociais e um sistema de doações rastreáveis.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-blue-300">Fundação</h4>
                  <p className="text-sm text-gray-400 mt-1">2021</p>
                </div>

                <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-blue-300">Comunidade</h4>
                  <p className="text-sm text-gray-400 mt-1">10.000+ membros</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-16%2004.47.43%20-%20A%20heartwarming%20digital%20painting%20illustrating%20the%20journey%20of%20a%20stray%20dog%20with%20the%20support%20of%20Street%20Dog%20Coin.%20In%20the%20foreground%2C%20a%20sad%20and%20lonely%20stree-0Wj43TGmXhIC8sy2WrMG8dH1D65YvD.webp"
                  alt="Street Dog Coin História"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Nossa Jornada</h3>
                    <p className="text-gray-300 text-sm">Do conceito à realidade: transformando vidas caninas</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Nossa Missão</h2>
              <p className="text-gray-300">
                Criar um ecossistema descentralizado que conecte amantes de criptomoedas e defensores dos animais,
                gerando recursos para apoiar organizações que cuidam de cães de rua em todo o mundo. Queremos ser a
                ponte entre a tecnologia blockchain e o impacto social positivo.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                  <p className="text-gray-300">Financiar abrigos e ONGs de proteção animal</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                  <p className="text-gray-300">Promover campanhas de castração e vacinação</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                  <p className="text-gray-300">Facilitar a adoção responsável de cães de rua</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Nossa Visão</h2>
              <p className="text-gray-300">
                Ser a principal criptomoeda focada em causas sociais, estabelecendo um novo padrão para projetos que
                combinam retorno financeiro com impacto positivo na sociedade. Queremos criar um mundo onde nenhum cão
                de rua sofra por abandono ou falta de cuidados.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                  <p className="text-gray-300">Criar um modelo sustentável de filantropia via blockchain</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                  <p className="text-gray-300">Expandir o impacto para diferentes regiões do mundo</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                  <p className="text-gray-300">Inspirar outros projetos cripto com propósito social</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores - NOVA SEÇÃO */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Nossos Valores</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Os princípios que guiam todas as nossas decisões e ações</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-800/30 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Compaixão</h3>
              <p className="text-gray-400">
                Colocamos o bem-estar dos animais em primeiro lugar, agindo com empatia e respeito por todas as formas
                de vida. Nossa compaixão pelos cães de rua é o que impulsiona nossa missão diariamente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-800/30 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Transparência</h3>
              <p className="text-gray-400">
                Mantemos total transparência em nossas operações, finanças e tomadas de decisão. Acreditamos que a
                confiança é construída através da abertura e da prestação de contas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-800/30 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Comunidade</h3>
              <p className="text-gray-400">
                Valorizamos o poder da comunidade e acreditamos que juntos podemos alcançar muito mais. Incentivamos a
                participação ativa e a colaboração entre todos os membros do ecossistema.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-blue-400"
          >
            Nossa Equipe
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Rogério Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-800/30 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-600/30">
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
                  Apaixonado por tecnologia e proteção animal, combina expertise em blockchain com um forte compromisso
                  com causas sociais. Com a visão de criar um impacto real, lidera o desenvolvimento do Street Dog Coin,
                  unindo inovação financeira e solidariedade para transformar a vida de cães de rua.
                </p>
                <div className="flex gap-4">
                  <Link href="https://x.com/pedreira32910?t=CIUYjiTUFWBnqJo7xYJhQw&s=09" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/rogerio-resende-2b96a237/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Júnior Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-800/30 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-600/30">
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
                <p className="text-purple-400 mb-4">Arquiteto Blockchain e Especialista em Tecnologia Full Stack</p>
                <p className="text-gray-300 text-center mb-6">
                  Profissional sênior em desenvolvimento full stack e blockchain, é o arquiteto por trás da
                  infraestrutura tecnológica do Street Dog Coin. Com vasta experiência em criptoativos, contratos
                  inteligentes e sistemas descentralizados, ele lidera a inovação do projeto, garantindo segurança,
                  escalabilidade e impacto real. Sua paixão pela tecnologia e pela causa animal impulsiona a criação de
                  um ecossistema robusto, conectando blockchain e transformação social.
                </p>
                <div className="flex gap-4">
                  <Link href="https://x.com/juniorwebyte" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/j%C3%BAnior-alves-6a625049/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="https://github.com/juniorwebyte" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Ana Card - NOVO MEMBRO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-800/30 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-600/30 bg-blue-900/30 flex items-center justify-center">
                  <Users className="h-16 w-16 text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Ana Oliveira</h3>
                <p className="text-purple-400 mb-4">Diretora de Parcerias</p>
                <p className="text-gray-300 text-center mb-6">
                  Especialista em relações públicas com mais de 10 anos de experiência em ONGs de proteção animal.
                  Responsável por estabelecer parcerias estratégicas.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parcerias - NOVA SEÇÃO */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Nossas Parcerias</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Trabalhamos com organizações comprometidas com o bem-estar animal
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 p-6 rounded-xl border border-blue-800/20 flex items-center justify-center h-32"
              >
                <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center">
                  <DogIcon className="h-8 w-8 text-blue-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-400">
              Interessado em se tornar um parceiro?{" "}
              <Link href="#" className="text-blue-400 hover:text-blue-300 underline">
                Entre em contato
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-blue-400"
          >
            Roadmap
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -5 }}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-purple-400">2021-2022 - Concepção</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-blue-400" />
                      Primeiro post oficial no Facebook
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-400" />
                      Desenvolvimento do conceito STDOG
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-400" />
                      Estruturação do whitepaper e tokenomics
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -5 }}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-purple-400">2023-2024 - Estudos e Viabilidade</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-blue-400" />
                      Pesquisa para fábrica de ração e abrigo
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-blue-400" />
                      Desenvolvimento de parcerias estratégicas
                    </li>
                    <li className="flex items-center gap-2">
                      <DogIcon className="h-4 w-4 text-blue-400" />
                      Análise técnica e econômica
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Q1 2025 - Lançamento</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-blue-400" />
                      Lançamento do token $STDOG
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-400" />
                      Airdrop para early adopters
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-400" />
                      Construção da comunidade inicial
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-purple-400">S2 2025 - Expansão</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-blue-400" />
                      Marketplace pet e exchange (DEX)
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-blue-400" />
                      NFTs sociais e doações rastreáveis
                    </li>
                    <li className="flex items-center gap-2">
                      <DogIcon className="h-4 w-4 text-blue-400" />
                      Infraestrutura para fábrica e abrigo
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
            className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 md:p-12 border border-blue-800/30 backdrop-blur-sm"
          >
            <div className="text-center max-w-3xl mx-auto">
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
          </motion.div>
        </div>
      </section>

      <PerformanceToggle />
    </main>
  )
}

