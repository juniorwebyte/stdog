"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

export default function WhitepaperPage() {
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
              Whitepaper
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Documento técnico detalhando a visão, tecnologia e tokenomics do Street Dog Coin.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-5 w-5" /> Baixar PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Resumo Executivo</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  O Street Dog Coin ($STDOG) é um token de utilidade baseado na blockchain que combina inovação
                  tecnológica com impacto social positivo. Nosso objetivo é criar um ecossistema descentralizado que
                  gere recursos contínuos para apoiar organizações que cuidam de cães de rua em todo o mundo.
                </p>
                <p className="text-gray-300">
                  Este whitepaper apresenta a visão, tecnologia, tokenomics e roadmap do projeto Street Dog Coin,
                  detalhando como pretendemos revolucionar a forma como a tecnologia blockchain pode ser utilizada para
                  causas sociais.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">O Problema</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  Estima-se que existam centenas de milhões de cães de rua em todo o mundo, muitos vivendo em condições
                  precárias, sem acesso a alimentação adequada, cuidados veterinários ou abrigo. As organizações que
                  trabalham para ajudar esses animais frequentemente enfrentam desafios significativos de financiamento,
                  dependendo principalmente de doações esporádicas e trabalho voluntário.
                </p>
                <p className="text-gray-300">
                  Esse modelo de financiamento tradicional é instável e insuficiente para atender à escala do problema,
                  resultando em recursos limitados para programas de castração, vacinação, resgate e adoção.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Nossa Solução</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  O Street Dog Coin propõe uma solução inovadora: utilizar a tecnologia blockchain para criar um fluxo
                  contínuo e sustentável de recursos para organizações de proteção animal. Através de um mecanismo de
                  taxas de transação, uma porcentagem de cada transferência de $STDOG é automaticamente direcionada para
                  um fundo de caridade descentralizado.
                </p>
                <p className="text-gray-300">
                  Este modelo cria um ciclo virtuoso onde o uso e a negociação do token geram recursos para a causa,
                  enquanto o impacto social positivo aumenta o valor e a utilidade do token, atraindo mais usuários e
                  investidores.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Tecnologia</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  O $STDOG é um token ERC-20 construído na blockchain Ethereum, escolhida por sua segurança,
                  confiabilidade e ampla adoção. O contrato inteligente do token implementa os seguintes mecanismos:
                </p>
                <ul className="text-gray-300 list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Taxa de transação de 2%, com 1% direcionado ao fundo de caridade e 1% para desenvolvimento e
                    marketing
                  </li>
                  <li>Governança descentralizada para decisões sobre distribuição de recursos</li>
                  <li>Mecanismo anti-whale para prevenir manipulação de mercado</li>
                  <li>Sistema de staking que recompensa holders de longo prazo</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  O contrato foi auditado por empresas de segurança renomadas para garantir a segurança dos fundos e a
                  integridade do projeto.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Tokenomics</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  O fornecimento total de $STDOG é de 1 bilhão de tokens, distribuídos da seguinte forma:
                </p>
                <ul className="text-gray-300 list-disc pl-6 space-y-2 mt-4">
                  <li>40% para venda pública e listagem em exchanges</li>
                  <li>20% para o fundo de caridade</li>
                  <li>15% para desenvolvimento e marketing</li>
                  <li>10% para a equipe (bloqueado por 2 anos com liberação gradual)</li>
                  <li>10% para parcerias estratégicas</li>
                  <li>5% para airdrop e recompensas da comunidade</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Roadmap</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">Nosso plano de desenvolvimento inclui os seguintes marcos:</p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-400">Fase 0: Concepção (2021-2022)</h3>
                <ul className="text-gray-300 list-disc pl-6 space-y-2">
                  <li>Concepção da ideia do Street Dog Coin</li>
                  <li>Planejamento estratégico inicial</li>
                  <li>Primeiro post oficial no Facebook</li>
                  <li>Estabelecimento da presença inicial nas redes sociais</li>
                  <li>Início do desenvolvimento do Whitepaper</li>
                  <li>Definição da base do projeto</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-400">
                  Fase 1: Estudos e Viabilidade (2023-2024)
                </h3>
                <ul className="text-gray-300 list-disc pl-6 space-y-2">
                  <li>Desenvolvimento e auditoria do contrato inteligente</li>
                  <li>Pesquisa para construção da fábrica de ração</li>
                  <li>Planejamento do abrigo para cães de rua</li>
                  <li>Lançamento do website e redes sociais</li>
                  <li>Desenvolvimento de parcerias estratégicas</li>
                  <li>Análise técnica e econômica das operações</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-400">Fase 2: Lançamento (Q1 2025)</h3>
                <ul className="text-gray-300 list-disc pl-6 space-y-2">
                  <li>Lançamento oficial do token STDOG</li>
                  <li>Início da distribuição do Airdrop</li>
                  <li>Lançamento da página de Airdrop</li>
                  <li>Listagem em exchanges descentralizadas</li>
                  <li>Listagem em exchanges centralizadas</li>
                  <li>Implementação do sistema de staking</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-400">Fase 3: Expansão (S2 2025)</h3>
                <ul className="text-gray-300 list-disc pl-6 space-y-2">
                  <li>Novas integrações no ecossistema blockchain</li>
                  <li>Ampliação das iniciativas sociais</li>
                  <li>Primeira campanha global de castração e vacinação</li>
                  <li>Desenvolvimento da infraestrutura para a fábrica de ração</li>
                  <li>Início da construção do abrigo para cães</li>
                  <li>Lançamento da plataforma DeFi completa</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-400">Fase 4: Futuro (2026 em diante)</h3>
                <ul className="text-gray-300 list-disc pl-6 space-y-2">
                  <li>Desenvolvimento do ecossistema próprio</li>
                  <li>Expansão para outras causas sociais</li>
                  <li>Criação de uma fundação descentralizada</li>
                  <li>Centros de resgate e reabilitação em regiões críticas</li>
                  <li>Lançamento do marketplace NFT beneficente</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Conclusão</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  O Street Dog Coin representa uma abordagem inovadora para combinar tecnologia blockchain e impacto
                  social positivo. Ao criar um ecossistema onde o sucesso financeiro está diretamente ligado ao
                  bem-estar dos cães de rua, estamos estabelecendo um novo paradigma para projetos de criptomoedas com
                  propósito.
                </p>
                <p className="text-gray-300">
                  Convidamos você a se juntar a nós nesta jornada para transformar a vida de milhões de cães de rua em
                  todo o mundo, enquanto participamos da revolução blockchain.
                </p>
              </div>
            </motion.div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-5 w-5" /> Baixar Versão Completa
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

