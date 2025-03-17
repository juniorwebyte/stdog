"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Github, Rocket, Users, Wallet, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function RecursosPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <GalaxyAnimation />
      <Navbar isWalletConnected={false} />

      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
              Recursos
            </h1>
            <p className="text-xl text-gray-300">
              Ferramentas e recursos para ajudar você a explorar e aproveitar ao máximo o Street Dog Coin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Whitepaper */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-400">Whitepaper</CardTitle>
                  <CardDescription className="text-gray-400">
                    Documento técnico detalhando a visão, tecnologia e tokenomics do Street Dog Coin.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Nosso whitepaper explica como estamos utilizando a tecnologia blockchain para criar um impacto
                    positivo na vida dos cães de rua.
                  </p>
                  <Link href="/whitepaper">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Download className="mr-2 h-4 w-4" /> Acessar Whitepaper
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Documentação */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-400">Documentação</CardTitle>
                  <CardDescription className="text-gray-400">
                    Guias e tutoriais para usuários e desenvolvedores.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Nossa documentação abrangente inclui guias para comprar, armazenar e utilizar o token $STDOG, além
                    de recursos para desenvolvedores.
                  </p>
                  <Link href="/documentacao">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <FileText className="mr-2 h-4 w-4" /> Acessar Documentação
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tokenomics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-400">Tokenomics</CardTitle>
                  <CardDescription className="text-gray-400">
                    Detalhes sobre a economia do token $STDOG.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Entenda a distribuição, mecanismos de queima, taxas e como parte de cada transação é direcionada
                    para ajudar cães de rua.
                  </p>
                  <Link href="/tokenomics">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Zap className="mr-2 h-4 w-4" /> Ver Tokenomics
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-400">Roadmap</CardTitle>
                  <CardDescription className="text-gray-400">
                    Plano de desenvolvimento e marcos futuros.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Conheça nossos planos para o futuro, incluindo novos recursos, parcerias e expansão do ecossistema
                    Street Dog Coin.
                  </p>
                  <Link href="/roadmap">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Rocket className="mr-2 h-4 w-4" /> Ver Roadmap
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Parcerias */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-400">Parcerias</CardTitle>
                  <CardDescription className="text-gray-400">
                    Organizações e projetos que colaboram conosco.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Conheça as ONGs, abrigos e outras organizações que trabalham conosco para melhorar a vida dos cães
                    de rua.
                  </p>
                  <Link href="/parcerias">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Users className="mr-2 h-4 w-4" /> Ver Parcerias
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-400">Código Aberto</CardTitle>
                  <CardDescription className="text-gray-400">Acesse nosso repositório no GitHub.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    O Street Dog Coin é um projeto de código aberto. Acesse nosso GitHub para ver o código, contribuir
                    ou reportar problemas.
                  </p>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Github className="mr-2 h-4 w-4" /> Ver no GitHub
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

