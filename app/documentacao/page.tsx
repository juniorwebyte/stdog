"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Coins, FileText, Wallet } from "lucide-react"
import { motion } from "framer-motion"

export default function DocumentacaoPage() {
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
              Documentação
            </h1>
            <p className="text-xl text-gray-300">
              Guias e tutoriais para ajudar você a entender e utilizar o Street Dog Coin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="guias" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-blue-900/20 border border-blue-800/30">
                <TabsTrigger value="guias" className="data-[state=active]:bg-blue-600">
                  Guias para Usuários
                </TabsTrigger>
                <TabsTrigger value="desenvolvedores" className="data-[state=active]:bg-blue-600">
                  Para Desenvolvedores
                </TabsTrigger>
                <TabsTrigger value="faq" className="data-[state=active]:bg-blue-600">
                  Perguntas Frequentes
                </TabsTrigger>
              </TabsList>

              {/* Guias para Usuários */}
              <TabsContent value="guias">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                          <Wallet className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-blue-400">Como Comprar $STDOG</CardTitle>
                        <CardDescription className="text-gray-400">
                          Guia passo a passo para adquirir tokens Street Dog Coin.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-gray-300">
                          <p>Aprenda como comprar $STDOG em exchanges centralizadas e descentralizadas.</p>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li>Crie uma carteira compatível com ERC-20</li>
                            <li>Adquira ETH ou USDT</li>
                            <li>Conecte sua carteira à exchange</li>
                            <li>Troque por $STDOG</li>
                          </ol>
                          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Ver Guia Completo</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                          <Coins className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-blue-400">Staking e Recompensas</CardTitle>
                        <CardDescription className="text-gray-400">
                          Como fazer staking de $STDOG e receber recompensas.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-gray-300">
                          <p>
                            Aprenda como fazer staking dos seus tokens $STDOG para receber recompensas passivas enquanto
                            apoia o projeto.
                          </p>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li>Conecte sua carteira à plataforma de staking</li>
                            <li>Escolha o período de bloqueio</li>
                            <li>Deposite seus tokens</li>
                            <li>Receba recompensas automaticamente</li>
                          </ol>
                          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Ver Guia Completo</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-blue-400">Programa de Embaixadores</CardTitle>
                        <CardDescription className="text-gray-400">
                          Como se tornar um embaixador do Street Dog Coin.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-gray-300">
                          <p>
                            Torne-se um embaixador do Street Dog Coin e ajude a promover o projeto enquanto ganha
                            recompensas.
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Requisitos para se tornar um embaixador</li>
                            <li>Responsabilidades e benefícios</li>
                            <li>Processo de inscrição</li>
                            <li>Sistema de recompensas</li>
                          </ul>
                          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Ver Guia Completo</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-blue-400">Governança</CardTitle>
                        <CardDescription className="text-gray-400">
                          Como participar das decisões do projeto.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-gray-300">
                          <p>
                            Aprenda como participar do sistema de governança descentralizada do Street Dog Coin e votar
                            em propostas importantes.
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Como funciona o sistema de votação</li>
                            <li>Poder de voto baseado em holdings</li>
                            <li>Tipos de propostas</li>
                            <li>Implementação de decisões</li>
                          </ul>
                          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Ver Guia Completo</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Para Desenvolvedores */}
              <TabsContent value="desenvolvedores">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-blue-400">API e Integração</CardTitle>
                        <CardDescription className="text-gray-400">
                          Documentação da API para desenvolvedores.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-gray-300">
                          <p>
                            Documentação completa da API do Street Dog Coin para desenvolvedores que desejam integrar o
                            token em seus aplicativos.
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Endpoints disponíveis</li>
                            <li>Autenticação e segurança</li>
                            <li>Exemplos de código</li>
                            <li>Webhooks e notificações</li>
                          </ul>
                          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Ver Documentação da API</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-blue-400">Smart Contract</CardTitle>
                        <CardDescription className="text-gray-400">
                          Documentação do contrato inteligente.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-gray-300">
                          <p>
                            Documentação detalhada do contrato inteligente do Street Dog Coin, incluindo funções,
                            eventos e padrões implementados.
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Endereço do contrato verificado</li>
                            <li>Funções públicas e privadas</li>
                            <li>Eventos e logs</li>
                            <li>Mecanismos de segurança</li>
                          </ul>
                          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                            Ver Documentação do Contrato
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-blue-400">SDKs e Bibliotecas</CardTitle>
                        <CardDescription className="text-gray-400">Ferramentas para desenvolvedores.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-gray-300">
                          <p>
                            SDKs e bibliotecas oficiais para integrar o Street Dog Coin em diferentes plataformas e
                            linguagens de programação.
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>JavaScript/TypeScript SDK</li>
                            <li>Python SDK</li>
                            <li>Java SDK</li>
                            <li>React Components</li>
                          </ul>
                          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Ver SDKs e Bibliotecas</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-blue-400">Programa de Recompensas por Bugs</CardTitle>
                        <CardDescription className="text-gray-400">
                          Recompensas para descoberta de vulnerabilidades.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-gray-300">
                          <p>
                            Participe do nosso programa de recompensas por bugs e ganhe tokens $STDOG por encontrar e
                            reportar vulnerabilidades.
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Escopo do programa</li>
                            <li>Níveis de severidade e recompensas</li>
                            <li>Processo de submissão</li>
                            <li>Hall da fama</li>
                          </ul>
                          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                            Ver Programa de Recompensas
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Perguntas Frequentes */}
              <TabsContent value="faq">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 backdrop-blur-sm"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">O que é o Street Dog Coin?</h3>
                      <p className="text-gray-300">
                        O Street Dog Coin ($STDOG) é um token de utilidade baseado na blockchain Ethereum que combina
                        inovação tecnológica com impacto social positivo. Nosso objetivo é criar um ecossistema
                        descentralizado que gere recursos contínuos para apoiar organizações que cuidam de cães de rua
                        em todo o mundo.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">
                        Como o Street Dog Coin ajuda os cães de rua?
                      </h3>
                      <p className="text-gray-300">
                        Uma porcentagem de cada transação de $STDOG é automaticamente direcionada para um fundo de
                        caridade descentralizado. Esses recursos são utilizados para financiar abrigos, campanhas de
                        castração e vacinação, programas de adoção e outras iniciativas que beneficiam cães de rua em
                        todo o mundo.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">Onde posso comprar $STDOG?</h3>
                      <p className="text-gray-300">
                        O $STDOG está disponível em várias exchanges descentralizadas (DEXs) como Uniswap, SushiSwap e
                        PancakeSwap, além de exchanges centralizadas como Binance, KuCoin e Gate.io. Consulte nossa
                        seção "Como Comprar" para um guia detalhado.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">O contrato do $STDOG foi auditado?</h3>
                      <p className="text-gray-300">
                        Sim, o contrato inteligente do $STDOG foi auditado por empresas de segurança renomadas como
                        CertiK e Hacken para garantir a segurança dos fundos e a integridade do projeto. Os relatórios
                        de auditoria estão disponíveis em nossa seção de documentação.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">
                        Como posso participar da governança do projeto?
                      </h3>
                      <p className="text-gray-300">
                        Os detentores de $STDOG podem participar da governança do projeto votando em propostas
                        importantes através do nosso sistema de governança descentralizada. O poder de voto é
                        proporcional à quantidade de tokens que você possui ou tem em staking.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">
                        Quais são as taxas de transação do $STDOG?
                      </h3>
                      <p className="text-gray-300">
                        O $STDOG tem uma taxa de transação de 2%, com 1% direcionado ao fundo de caridade e 1% para
                        desenvolvimento e marketing. Essas taxas são essenciais para o funcionamento do ecossistema e
                        para garantir o impacto social contínuo do projeto.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">
                        Como posso me tornar um embaixador do Street Dog Coin?
                      </h3>
                      <p className="text-gray-300">
                        Para se tornar um embaixador do Street Dog Coin, você precisa preencher um formulário de
                        inscrição, passar por um processo de seleção e atender a certos requisitos. Os embaixadores
                        ajudam a promover o projeto e recebem recompensas por suas contribuições.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">
                        O Street Dog Coin é um projeto de código aberto?
                      </h3>
                      <p className="text-gray-300">
                        Sim, o Street Dog Coin é um projeto de código aberto. Todo o código está disponível em nosso
                        repositório no GitHub, e encorajamos a comunidade a contribuir para o desenvolvimento do
                        projeto.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  )
}

