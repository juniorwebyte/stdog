import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import PerformanceToggle from "@/components/performance-toggle"

export default function StatusPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white relative overflow-hidden">
      <GalaxyAnimation />
      <Navbar />

      <div className="max-w-3xl w-full z-10 mt-20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-purple-400">Status do AirDrop</h1>
          <p className="text-gray-300">Acompanhe o progresso da distribuição do AirDrop</p>
        </div>

        <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
          <CardHeader className="border-b border-purple-900/20 bg-black/50">
            <CardTitle className="text-xl text-purple-400">Estatísticas do AirDrop</CardTitle>
            <CardDescription className="text-gray-400">
              Informações atualizadas sobre a distribuição de tokens
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400">Total de Participantes</p>
                  <p className="text-2xl font-bold text-purple-300">12,458</p>
                </div>
                <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400">Tokens Distribuídos</p>
                  <p className="text-2xl font-bold text-purple-300">8,750,000 $WBC</p>
                </div>
                <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400">Fase Atual</p>
                  <p className="text-2xl font-bold text-purple-300">Fase 2/3</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Progresso da Distribuição</span>
                    <span className="text-sm text-purple-300">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-purple-900/20" indicatorClassName="bg-purple-500" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Tempo Restante</span>
                    <span className="text-sm text-purple-300">7 dias</span>
                  </div>
                  <Progress value={30} className="h-2 bg-purple-900/20" indicatorClassName="bg-purple-500" />
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                <h3 className="font-medium text-blue-300 mb-2">Próximos Passos</h3>
                <p className="text-sm text-gray-300">
                  A fase final de distribuição começará em 7 dias. Certifique-se de completar todas as tarefas antes do
                  prazo final.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <PerformanceToggle />
    </main>
  )
}

