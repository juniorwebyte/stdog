"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DogIcon, Globe, Heart, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function ParceriasPage() {
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
              Nossas Parcerias
            </h1>
            <p className="text-xl text-gray-300">
              Conheça as organizações que trabalham conosco para melhorar a vida dos cães de rua.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 backdrop-blur-sm mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Sobre Nossas Parcerias</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  O Street Dog Coin trabalha em estreita colaboração com ONGs, abrigos e outras organizações dedicadas
                  ao bem-estar dos cães de rua. Essas parcerias são fundamentais para nossa missão de criar um impacto
                  positivo real e mensurável.
                </p>
                <p className="text-gray-300 mt-4">
                  Através dessas colaborações, conseguimos direcionar recursos para onde eles são mais necessários,
                  apoiando iniciativas como campanhas de castração e vacinação, programas de adoção, resgate de animais
                  em situação de risco e educação sobre posse responsável.
                </p>
              </div>
            </motion.div>

            <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">ONGs Parceiras</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* ONG 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm overflow-hidden">
                  <div className="h-48 relative">
                    <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
                      <DogIcon className="h-20 w-20 text-blue-300" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">Patas Felizes</h3>
                      <p className="text-gray-300 mb-4">
                        ONG dedicada ao resgate, reabilitação e adoção de cães de rua em situação de vulnerabilidade.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                          <span className="text-gray-300">São Paulo, Brasil</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 text-blue-400 mr-2" />
                          <a href="#" className="text-blue-400 hover:underline">
                            www.patasfelizes.org
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-blue-400 mr-2" />
                          <span className="text-gray-300">contato@patasfelizes.org</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                          <Heart className="mr-2 h-4 w-4" /> Doar
                        </Button>
                        <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-900/20 flex-1">
                          <Globe className="mr-2 h-4 w-4" /> Visitar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* ONG 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm overflow-hidden">
                  <div className="h-48 relative">
                    <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
                      <DogIcon className="h-20 w-20 text-blue-300" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">Amigos de Quatro Patas</h3>
                      <p className="text-gray-300 mb-4">
                        Organização focada em campanhas de castração e vacinação gratuitas para cães de rua.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                          <span className="text-gray-300">Rio de Janeiro, Brasil</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 text-blue-400 mr-2" />
                          <a href="#" className="text-blue-400 hover:underline">
                            www.amigosde4patas.org
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-blue-400 mr-2" />
                          <span className="text-gray-300">contato@amigosde4patas.org</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                          <Heart className="mr-2 h-4 w-4" /> Doar
                        </Button>
                        <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-900/20 flex-1">
                          <Globe className="mr-2 h-4 w-4" /> Visitar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* ONG 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm overflow-hidden">
                  <div className="h-48 relative">
                    <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
                      <DogIcon className="h-20 w-20 text-blue-300" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">Cães Sem Fronteiras</h3>
                      <p className="text-gray-300 mb-4">
                        Organização internacional que atua em áreas de conflito e desastres naturais para resgatar cães
                        abandonados.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                          <span className="text-gray-300">Lisboa, Portugal</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 text-blue-400 mr-2" />
                          <a href="#" className="text-blue-400 hover:underline">
                            www.caessemfronteiras.org
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-blue-400 mr-2" />
                          <span className="text-gray-300">info@caessemfronteiras.org</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                          <Heart className="mr-2 h-4 w-4" /> Doar
                        </Button>
                        <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-900/20 flex-1">
                          <Globe className="mr-2 h-4 w-4" /> Visitar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* ONG 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800/30 backdrop-blur-sm overflow-hidden">
                  <div className="h-48 relative">
                    <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
                      <DogIcon className="h-20 w-20 text-blue-300" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">Abrigo Esperança</h3>
                      <p className="text-gray-300 mb-4">
                        Abrigo que acolhe cães idosos e com necessidades especiais, oferecendo cuidados para toda a
                        vida.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                          <span className="text-gray-300">Belo Horizonte, Brasil</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 text-blue-400 mr-2" />
                          <a href="#" className="text-blue-400 hover:underline">
                            www.abrigoesperanca.org
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-blue-400 mr-2" />
                          <span className="text-gray-300">contato@abrigoesperanca.org</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                          <Heart className="mr-2 h-4 w-4" /> Doar
                        </Button>
                        <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-900/20 flex-1">
                          <Globe className="mr-2 h-4 w-4" /> Visitar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">Parceiros Tecnológicos</h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 backdrop-blur-sm mb-12"
            >
              <p className="text-gray-300 text-center mb-8">
                Contamos com o suporte de plataformas líderes no ecossistema blockchain para garantir visibilidade,
                segurança e acessibilidade do Street Dog Coin.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-8">
                {/* ICODrops */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center justify-center aspect-square border border-blue-800/30 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-blue-300">IC</span>
                  </div>
                  <p className="text-blue-300 font-medium text-center">ICODrops</p>
                </motion.div>

                {/* CoinMarketCap */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center justify-center aspect-square border border-blue-800/30 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-blue-300">CM</span>
                  </div>
                  <p className="text-blue-300 font-medium text-center">CoinMarketCap</p>
                </motion.div>

                {/* Uniswap */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center justify-center aspect-square border border-blue-800/30 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-blue-300">UN</span>
                  </div>
                  <p className="text-blue-300 font-medium text-center">Uniswap</p>
                </motion.div>

                {/* GeckoTerminal */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center justify-center aspect-square border border-blue-800/30 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-blue-300">GT</span>
                  </div>
                  <p className="text-blue-300 font-medium text-center">GeckoTerminal</p>
                </motion.div>

                {/* GoPlusLabs */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center justify-center aspect-square border border-blue-800/30 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-blue-300">GP</span>
                  </div>
                  <p className="text-blue-300 font-medium text-center">GoPlusLabs</p>
                </motion.div>

                {/* CoinGecko */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center justify-center aspect-square border border-blue-800/30 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-blue-300">CG</span>
                  </div>
                  <p className="text-blue-300 font-medium text-center">CoinGecko</p>
                </motion.div>

                {/* DexTools */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center justify-center aspect-square border border-blue-800/30 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-blue-300">DT</span>
                  </div>
                  <p className="text-blue-300 font-medium text-center">DexTools</p>
                </motion.div>

                {/* DexScreener */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center justify-center aspect-square border border-blue-800/30 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-blue-300">DS</span>
                  </div>
                  <p className="text-blue-300 font-medium text-center">DexScreener</p>
                </motion.div>

                {/* ApeSpace */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center justify-center aspect-square border border-blue-800/30 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-blue-300">AP</span>
                  </div>
                  <p className="text-blue-300 font-medium text-center">ApeSpace</p>
                </motion.div>

                {/* Binance */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center justify-center aspect-square border border-blue-800/30 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-blue-300">BN</span>
                  </div>
                  <p className="text-blue-300 font-medium text-center">Binance</p>
                </motion.div>

                {/* Etherscan */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center justify-center aspect-square border border-blue-800/30 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-blue-300">ES</span>
                  </div>
                  <p className="text-blue-300 font-medium text-center">Etherscan</p>
                </motion.div>
              </div>

              <p className="text-gray-300 text-center">
                Estas parcerias estratégicas nos permitem oferecer uma experiência segura e transparente para todos os
                usuários do Street Dog Coin.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 backdrop-blur-sm mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Torne-se um Parceiro</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  O Street Dog Coin está sempre aberto a novas parcerias com organizações que compartilham nossa missão
                  de melhorar a vida dos cães de rua. Se você representa uma ONG, abrigo ou outra organização de
                  proteção animal, entre em contato conosco para discutir possíveis colaborações.
                </p>
                <p className="text-gray-300 mt-4">Benefícios de se tornar um parceiro:</p>
                <ul className="text-gray-300 list-disc pl-6 space-y-2 mt-4">
                  <li>Acesso a financiamento contínuo através do fundo de caridade do Street Dog Coin</li>
                  <li>Visibilidade para sua organização em nosso site e redes sociais</li>
                  <li>Participação em campanhas e eventos globais</li>
                  <li>Suporte técnico para implementação de soluções blockchain para doações</li>
                </ul>
                <div className="mt-6 flex justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Mail className="mr-2 h-5 w-5" /> Entre em Contato
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

