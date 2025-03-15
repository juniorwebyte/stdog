"use client"

import { useState, useEffect } from "react"
import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Calendar,
  Clock,
  Coins,
  ExternalLink,
  Gift,
  Globe,
  HelpCircle,
  Info,
  Loader2,
  RefreshCw,
  Rocket,
  Trophy,
  Users,
  CheckCircle2,
} from "lucide-react"
import PerformanceToggle from "@/components/performance-toggle"
import { useToast } from "@/components/ui/use-toast"
import { getAirdropStats, getSystemConfig, getLaunchDate } from "@/lib/storage-service"

export default function StatusPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<any>(null)
  const [config, setConfig] = useState<any>(null)
  const [launchDate, setLaunchDate] = useState<Date | null>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [refreshing, setRefreshing] = useState(false)

  // Carregar dados
  useEffect(() => {
    loadData()
  }, [])

  // Atualizar contador regressivo
  useEffect(() => {
    if (!launchDate) return

    const calculateTimeLeft = () => {
      const difference = launchDate.getTime() - new Date().getTime()

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  const loadData = async () => {
    setIsLoading(true)
    try {
      // Carregar estatísticas
      const statsData = getAirdropStats()
      setStats(statsData)

      // Carregar configurações
      const configData = getSystemConfig()
      setConfig(configData)

      // Carregar data de lançamento
      const launchDateData = getLaunchDate()
      setLaunchDate(launchDateData)
    } catch (error) {
      console.error("Erro ao carregar dados:", error)
      toast({
        title: "Erro ao carregar dados",
        description: "Ocorreu um erro ao carregar os dados do airdrop",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await loadData()
    setRefreshing(false)

    toast({
      title: "Dados atualizados",
      description: "As informações do airdrop foram atualizadas",
      className: "bg-green-950 border-green-800 text-green-100",
    })
  }

  // Dados simulados para o gráfico de distribuição
  const distributionData = [
    { label: "Airdrop", percentage: 20 },
    { label: "Liquidez", percentage: 30 },
    { label: "Equipe", percentage: 15 },
    { label: "Marketing", percentage: 10 },
    { label: "Desenvolvimento", percentage: 15 },
    { label: "Reserva", percentage: 10 },
  ]

  // Dados simulados para o roadmap
  const roadmapData = [
    {
      phase: "Fase 1",
      title: "Lançamento",
      status: "completed",
      items: ["Criação do token $STDOG", "Desenvolvimento do site", "Airdrop inicial"],
    },
    {
      phase: "Fase 2",
      title: "Expansão",
      status: "in-progress",
      items: [
        "Listagem em exchanges descentralizadas",
        "Parcerias com ONGs de proteção animal",
        "Crescimento da comunidade",
      ],
    },
    {
      phase: "Fase 3",
      title: "Consolidação",
      status: "upcoming",
      items: [
        "Listagem em exchanges centralizadas",
        "Desenvolvimento de plataforma de doações",
        "Expansão internacional",
      ],
    },
    {
      phase: "Fase 4",
      title: "Futuro",
      status: "upcoming",
      items: ["Governança descentralizada", "Expansão para novas causas sociais", "Desenvolvimento do ecossistema"],
    },
  ]

  // Dados simulados para eventos
  const eventsData = [
    {
      title: "Lançamento do Airdrop",
      date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Início da distribuição de tokens $STDOG para a comunidade",
    },
    {
      title: "Listagem na PancakeSwap",
      date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      description: "O token $STDOG será listado na PancakeSwap",
    },
    {
      title: "Primeira Doação para ONGs",
      date: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Primeira doação oficial para ONGs de proteção animal",
    },
    {
      title: "Lançamento da Plataforma de Doações",
      date: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Lançamento da plataforma de doações para ONGs de proteção animal",
    },
  ]

  // Renderizar o estado de carregamento
  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white relative overflow-hidden">
        <GalaxyAnimation />
        <Navbar />

        <div className="max-w-3xl w-full z-10 mt-20 flex flex-col items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-purple-400 mb-4" />
          <p className="text-purple-300 text-lg">Carregando informações do airdrop...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white relative overflow-hidden">
      <GalaxyAnimation />
      <Navbar />

      <div className="max-w-5xl w-full z-10 mt-20 pb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-purple-400">Status do AirDrop</h1>
            <p className="text-gray-300">Acompanhe o progresso e as estatísticas do AirDrop Street Dog Coin</p>
          </div>
          <Button
            variant="outline"
            className="border-purple-800/30 hover:bg-purple-900/20"
            onClick={handleRefresh}
            disabled={refreshing}
          >
            {refreshing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            <span className="ml-2">Atualizar</span>
          </Button>
        </div>

        {/* Contador regressivo */}
        <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-purple-400 flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  Lançamento Oficial
                </h2>
                <p className="text-gray-300 mt-2">
                  O lançamento oficial do token $STDOG está programado para{" "}
                  <span className="text-purple-300 font-medium">
                    {launchDate
                      ? launchDate.toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "Em breve"}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-300">{timeLeft.days}</div>
                  <div className="text-xs text-gray-400">Dias</div>
                </div>
                <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-300">{timeLeft.hours}</div>
                  <div className="text-xs text-gray-400">Horas</div>
                </div>
                <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-300">{timeLeft.minutes}</div>
                  <div className="text-xs text-gray-400">Minutos</div>
                </div>
                <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-300">{timeLeft.seconds}</div>
                  <div className="text-xs text-gray-400">Segundos</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total de Participantes</p>
                  <p className="text-2xl font-bold text-purple-300">{stats?.totalClaims.toLocaleString() || "0"}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Tokens Distribuídos</p>
                  <p className="text-2xl font-bold text-purple-300">
                    {stats?.tokensDistributed.toLocaleString() || "0"} $STDOG
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center">
                  <Coins className="h-6 w-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Tokens Restantes</p>
                  <p className="text-2xl font-bold text-purple-300">
                    {stats?.tokensRemaining.toLocaleString() || "0"} $STDOG
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center">
                  <Gift className="h-6 w-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Abas de conteúdo */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-black/50 border border-purple-800/30 w-full justify-start overflow-x-auto">
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-900/30">
              <BarChart3 className="h-4 w-4 mr-2" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="tokenomics" className="data-[state=active]:bg-purple-900/30">
              <Coins className="h-4 w-4 mr-2" />
              Tokenomics
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="data-[state=active]:bg-purple-900/30">
              <Trophy className="h-4 w-4 mr-2" />
              Roadmap
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-purple-900/30">
              <Calendar className="h-4 w-4 mr-2" />
              Eventos
            </TabsTrigger>
          </TabsList>

          {/* Aba de Visão Geral */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
              <CardHeader className="border-b border-purple-900/20 bg-black/50">
                <CardTitle className="text-xl text-purple-400">Progresso do AirDrop</CardTitle>
                <CardDescription className="text-gray-400">
                  Acompanhe o progresso da distribuição de tokens
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Progresso da Distribuição</span>
                        <span className="text-sm text-purple-300">
                          {stats ? Math.round((stats.tokensDistributed / stats.totalTokensAllocated) * 100) : 0}%
                        </span>
                      </div>
                      <Progress
                        value={stats ? Math.round((stats.tokensDistributed / stats.totalTokensAllocated) * 100) : 0}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-purple-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Reivindicações Processadas</span>
                        <span className="text-sm text-purple-300">
                          {stats && stats.totalClaims > 0
                            ? Math.round((stats.processedClaims / stats.totalClaims) * 100)
                            : 0}
                          %
                        </span>
                      </div>
                      <Progress
                        value={
                          stats && stats.totalClaims > 0
                            ? Math.round((stats.processedClaims / stats.totalClaims) * 100)
                            : 0
                        }
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400">Total de Reivindicações</p>
                      <p className="text-2xl font-bold text-purple-300">{stats?.totalClaims || 0}</p>
                    </div>
                    <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400">Pendentes</p>
                      <p className="text-2xl font-bold text-yellow-300">{stats?.pendingClaims || 0}</p>
                    </div>
                    <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400">Processadas</p>
                      <p className="text-2xl font-bold text-green-300">{stats?.processedClaims || 0}</p>
                    </div>
                    <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400">Rejeitadas/Falhas</p>
                      <p className="text-2xl font-bold text-red-300">
                        {(stats?.rejectedClaims || 0) + (stats?.failedClaims || 0)}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                    <h3 className="font-medium text-blue-300 mb-2 flex items-center">
                      <Info className="h-4 w-4 mr-2" />
                      Informações Adicionais
                    </h3>
                    <p className="text-sm text-gray-300">
                      O airdrop do Street Dog Coin está em andamento. Cada participante elegível receberá{" "}
                      {config?.tokensPerClaim || 1000} $STDOG tokens. A distribuição será concluída antes do lançamento
                      oficial do token.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-purple-900/20 text-purple-300 border-purple-500/30">
                        Fase 2/3
                      </Badge>
                      <Badge variant="outline" className="bg-green-900/20 text-green-300 border-green-500/30">
                        Airdrop Ativo
                      </Badge>
                      <Badge variant="outline" className="bg-blue-900/20 text-blue-300 border-blue-500/30">
                        Distribuição Manual
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
              <CardHeader className="border-b border-purple-900/20 bg-black/50">
                <CardTitle className="text-xl text-purple-400">Próximos Passos</CardTitle>
                <CardDescription className="text-gray-400">O que esperar após o airdrop</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-purple-300 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-300">Distribuição de Tokens</h3>
                      <p className="text-sm text-gray-300 mt-1">
                        Todos os tokens serão distribuídos manualmente para os endereços elegíveis antes do lançamento
                        oficial.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-purple-300 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-300">Listagem em DEX</h3>
                      <p className="text-sm text-gray-300 mt-1">
                        O token $STDOG será listado em exchanges descentralizadas, começando pela PancakeSwap.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-purple-300 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-300">Parcerias com ONGs</h3>
                      <p className="text-sm text-gray-300 mt-1">
                        Estabeleceremos parcerias com ONGs de proteção animal para começar a distribuir doações.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-purple-300 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-300">Plataforma de Doações</h3>
                      <p className="text-sm text-gray-300 mt-1">
                        Lançamento da plataforma de doações que permitirá que os detentores de tokens votem em projetos
                        para receber financiamento.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Tokenomics */}
          <TabsContent value="tokenomics" className="space-y-6">
            <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
              <CardHeader className="border-b border-purple-900/20 bg-black/50">
                <CardTitle className="text-xl text-purple-400">Distribuição de Tokens</CardTitle>
                <CardDescription className="text-gray-400">Como os tokens $STDOG são distribuídos</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400">Supply Total</p>
                      <p className="text-2xl font-bold text-purple-300">1,000,000,000</p>
                      <p className="text-xs text-gray-400">$STDOG</p>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400">Taxa de Transação</p>
                      <p className="text-2xl font-bold text-purple-300">2%</p>
                      <p className="text-xs text-gray-400">Para fundo de doações</p>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400">Tokens Queimados</p>
                      <p className="text-2xl font-bold text-purple-300">50%</p>
                      <p className="text-xs text-gray-400">Do supply inicial</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-purple-300 mb-4">Alocação de Tokens</h3>
                    <div className="space-y-3">
                      {distributionData.map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-400">{item.label}</span>
                            <span className="text-sm text-purple-300">{item.percentage}%</span>
                          </div>
                          <div className="w-full bg-purple-900/20 rounded-full h-2.5">
                            <div
                              className="bg-purple-600 h-2.5 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                    <h3 className="font-medium text-blue-300 mb-2 flex items-center">
                      <Info className="h-4 w-4 mr-2" />
                      Informações sobre Tokenomics
                    </h3>
                    <p className="text-sm text-gray-300">
                      O Street Dog Coin foi projetado com um modelo econômico sustentável que beneficia tanto os
                      investidores quanto a causa dos cães de rua. A taxa de 2% em cada transação é automaticamente
                      direcionada para o fundo de doações, garantindo um fluxo constante de recursos para ONGs
                      parceiras.
                    </p>
                    <a href="#" className="mt-3 inline-flex items-center text-sm text-purple-400 hover:text-purple-300">
                      Ver whitepaper completo
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
              <CardHeader className="border-b border-purple-900/20 bg-black/50">
                <CardTitle className="text-xl text-purple-400">Mecanismos Econômicos</CardTitle>
                <CardDescription className="text-gray-400">Como funciona a economia do token $STDOG</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mt-1 flex-shrink-0">
                      <Coins className="h-5 w-5 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-300">Taxa de Transação</h3>
                      <p className="text-sm text-gray-300 mt-1">
                        Cada transação de $STDOG inclui uma taxa de 2%, que é distribuída automaticamente:
                        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-300">
                          <li>1% para o fundo de doações para ONGs de proteção animal</li>
                          <li>0.5% para desenvolvimento e marketing</li>
                          <li>0.5% distribuído para todos os holders (staking passivo)</li>
                        </ul>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mt-1 flex-shrink-0">
                      <Globe className="h-5 w-5 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-300">Liquidez Bloqueada</h3>
                      <p className="text-sm text-gray-300 mt-1">
                        30% do supply total será alocado para liquidez e bloqueado por 2 anos, garantindo estabilidade e
                        confiança no projeto.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mt-1 flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-300">Perguntas Frequentes</h3>
                      <div className="space-y-2 mt-2">
                        <div className="bg-purple-900/10 border border-purple-800/20 rounded-lg p-3">
                          <p className="text-sm font-medium text-purple-300">
                            Em quais blockchains o $STDOG estará disponível?
                          </p>
                          <p className="text-xs text-gray-300 mt-1">
                            Inicialmente na Binance Smart Chain (BEP-20), com planos para expansão para Ethereum e
                            outras redes no futuro.
                          </p>
                        </div>
                        <div className="bg-purple-900/10 border border-purple-800/20 rounded-lg p-3">
                          <p className="text-sm font-medium text-purple-300">
                            Como posso comprar $STDOG após o lançamento?
                          </p>
                          <p className="text-xs text-gray-300 mt-1">
                            O token estará disponível para compra na PancakeSwap e outras DEXs. Instruções detalhadas
                            serão fornecidas no lançamento.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Roadmap */}
          <TabsContent value="roadmap" className="space-y-6">
            <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
              <CardHeader className="border-b border-purple-900/20 bg-black/50">
                <CardTitle className="text-xl text-purple-400">Roadmap do Projeto</CardTitle>
                <CardDescription className="text-gray-400">
                  Plano de desenvolvimento e expansão do Street Dog Coin
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {roadmapData.map((phase, index) => (
                    <div key={index} className="relative">
                      {/* Linha vertical conectando as fases */}
                      {index < roadmapData.length - 1 && (
                        <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-purple-800/30"></div>
                      )}

                      <div className="flex gap-6">
                        <div className="relative">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              phase.status === "completed"
                                ? "bg-green-900/30 border border-green-500/50"
                                : phase.status === "in-progress"
                                  ? "bg-blue-900/30 border border-blue-500/50"
                                  : "bg-purple-900/30 border border-purple-500/50"
                            }`}
                          >
                            {phase.status === "completed" ? (
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            ) : phase.status === "in-progress" ? (
                              <Clock className="h-4 w-4 text-blue-400" />
                            ) : (
                              <span className="text-purple-300 text-xs font-bold">{index + 1}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-medium text-purple-300">
                              {phase.phase}: {phase.title}
                            </h3>
                            {phase.status === "completed" && (
                              <Badge variant="outline" className="bg-green-900/20 text-green-300 border-green-500/30">
                                Concluído
                              </Badge>
                            )}
                            {phase.status === "in-progress" && (
                              <Badge variant="outline" className="bg-blue-900/20 text-blue-300 border-blue-500/30">
                                Em Andamento
                              </Badge>
                            )}
                            {phase.status === "upcoming" && (
                              <Badge
                                variant="outline"
                                className="bg-purple-900/20 text-purple-300 border-purple-500/30"
                              >
                                Próximo
                              </Badge>
                            )}
                          </div>

                          <ul className="space-y-2">
                            {phase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <div
                                  className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                                    phase.status === "completed"
                                      ? "bg-green-900/20 text-green-400"
                                      : phase.status === "in-progress"
                                        ? "bg-blue-900/20 text-blue-400"
                                        : "bg-purple-900/20 text-purple-400"
                                  }`}
                                >
                                  {phase.status === "completed" ? (
                                    <CheckCircle2 className="h-3 w-3" />
                                  ) : (
                                    <span className="text-xs">•</span>
                                  )}
                                </div>
                                <span className="text-sm text-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Eventos */}
          <TabsContent value="events" className="space-y-6">
            <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
              <CardHeader className="border-b border-purple-900/20 bg-black/50">
                <CardTitle className="text-xl text-purple-400">Calendário de Eventos</CardTitle>
                <CardDescription className="text-gray-400">Eventos importantes e marcos do projeto</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {eventsData.map((event, index) => {
                    const eventDate = new Date(event.date)
                    const isPast = eventDate < new Date()

                    return (
                      <div
                        key={index}
                        className={`border rounded-lg p-4 ${
                          isPast ? "border-green-800/30 bg-green-900/10" : "border-purple-800/30 bg-purple-900/10"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                              isPast
                                ? "bg-green-900/30 border border-green-500/50"
                                : "bg-purple-900/30 border border-purple-500/50"
                            }`}
                          >
                            <Calendar className={`h-6 w-6 ${isPast ? "text-green-400" : "text-purple-400"}`} />
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <h3 className={`font-medium ${isPast ? "text-green-300" : "text-purple-300"}`}>
                                {event.title}
                              </h3>
                              <Badge
                                variant="outline"
                                className={
                                  isPast
                                    ? "bg-green-900/20 text-green-300 border-green-500/30"
                                    : "bg-purple-900/20 text-purple-300 border-purple-500/30"
                                }
                              >
                                {eventDate.toLocaleDateString("pt-BR", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                })}
                              </Badge>
                            </div>

                            <p className="text-sm text-gray-300">{event.description}</p>

                            {!isPast && (
                              <div className="mt-3 flex items-center gap-2">
                                <Clock className="h-4 w-4 text-purple-400" />
                                <span className="text-xs text-purple-300">
                                  {Math.ceil((eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} dias
                                  restantes
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <PerformanceToggle />
    </main>
  )
}

