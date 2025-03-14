// Tipos de dados
export interface UserClaim {
  id: string
  name: string
  walletAddress: string
  walletType: string
  twitterUsername: string
  telegramId: string
  tokensRequested: number
  status: "pending" | "processed" | "rejected" | "failed"
  createdAt: string
  processedAt?: string
  notes?: string
}

export interface SystemConfig {
  airdropEnabled: boolean
  totalTokensAllocated: number
  tokensPerClaim: number
  claimDeadline: string
  requireTwitter: boolean
  requireTelegram: boolean
  adminUsers: string[]
  launchDate: string // Data de lançamento oficial do Airdrop
}

// Chaves de armazenamento
const STORAGE_KEYS = {
  CLAIMS: "airdrop_claims",
  CONFIG: "airdrop_config",
  ADMIN_SESSIONS: "admin_sessions",
}

// Funções de utilidade
function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Configuração padrão do sistema
const DEFAULT_CONFIG: SystemConfig = {
  airdropEnabled: true,
  totalTokensAllocated: 1000000,
  tokensPerClaim: 1000,
  claimDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 dias a partir de agora
  requireTwitter: true,
  requireTelegram: true,
  adminUsers: ["webytebr"],
  launchDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 dias a partir de agora para o lançamento oficial
}

// Inicializar armazenamento se necessário
export function initializeStorage(): void {
  if (typeof window === "undefined") return

  try {
    // Inicializar configurações
    if (!localStorage.getItem(STORAGE_KEYS.CONFIG)) {
      localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(DEFAULT_CONFIG))
    }

    // Inicializar reivindicações
    if (!localStorage.getItem(STORAGE_KEYS.CLAIMS)) {
      localStorage.setItem(STORAGE_KEYS.CLAIMS, JSON.stringify([]))
    }
  } catch (error) {
    console.error("Erro ao inicializar armazenamento:", error)
  }
}

// Funções de gerenciamento de reivindicações
export function getAllClaims(): UserClaim[] {
  if (typeof window === "undefined") return []

  try {
    const claimsJson = localStorage.getItem(STORAGE_KEYS.CLAIMS)
    return claimsJson ? JSON.parse(claimsJson) : []
  } catch (error) {
    console.error("Erro ao obter reivindicações:", error)
    return []
  }
}

export function getClaimById(id: string): UserClaim | null {
  if (typeof window === "undefined") return null

  try {
    const claims = getAllClaims()
    return claims.find((claim) => claim.id === id) || null
  } catch (error) {
    console.error("Erro ao obter reivindicação por ID:", error)
    return null
  }
}

export function getClaimByWalletAddress(address: string): UserClaim | null {
  if (typeof window === "undefined") return null

  try {
    const claims = getAllClaims()
    return claims.find((claim) => claim.walletAddress.toLowerCase() === address.toLowerCase()) || null
  } catch (error) {
    console.error("Erro ao obter reivindicação por endereço:", error)
    return null
  }
}

export function addClaim(claim: Omit<UserClaim, "id" | "createdAt" | "status">): UserClaim {
  if (typeof window === "undefined") throw new Error("Cannot add claim on server side")

  try {
    const claims = getAllClaims()

    // Verificar se já existe uma reivindicação com este endereço
    const existingClaim = claims.find((c) => c.walletAddress.toLowerCase() === claim.walletAddress.toLowerCase())

    if (existingClaim) {
      throw new Error("Este endereço de carteira já fez uma reivindicação")
    }

    const newClaim: UserClaim = {
      ...claim,
      id: generateId(),
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    claims.push(newClaim)
    localStorage.setItem(STORAGE_KEYS.CLAIMS, JSON.stringify(claims))

    return newClaim
  } catch (error) {
    console.error("Erro ao adicionar reivindicação:", error)
    throw error
  }
}

export function updateClaim(id: string, updates: Partial<UserClaim>): UserClaim {
  if (typeof window === "undefined") throw new Error("Cannot update claim on server side")

  try {
    const claims = getAllClaims()
    const index = claims.findIndex((claim) => claim.id === id)

    if (index === -1) {
      throw new Error("Reivindicação não encontrada")
    }

    const updatedClaim = {
      ...claims[index],
      ...updates,
    }

    claims[index] = updatedClaim
    localStorage.setItem(STORAGE_KEYS.CLAIMS, JSON.stringify(claims))

    return updatedClaim
  } catch (error) {
    console.error("Erro ao atualizar reivindicação:", error)
    throw error
  }
}

export function deleteClaim(id: string): boolean {
  if (typeof window === "undefined") return false

  try {
    const claims = getAllClaims()
    const filteredClaims = claims.filter((claim) => claim.id !== id)

    if (filteredClaims.length === claims.length) {
      return false // Nada foi removido
    }

    localStorage.setItem(STORAGE_KEYS.CLAIMS, JSON.stringify(filteredClaims))
    return true
  } catch (error) {
    console.error("Erro ao excluir reivindicação:", error)
    return false
  }
}

// Funções de gerenciamento de configurações
export function getSystemConfig(): SystemConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG

  try {
    const configJson = localStorage.getItem(STORAGE_KEYS.CONFIG)
    return configJson ? JSON.parse(configJson) : DEFAULT_CONFIG
  } catch (error) {
    console.error("Erro ao obter configurações do sistema:", error)
    return DEFAULT_CONFIG
  }
}

export function updateSystemConfig(updates: Partial<SystemConfig>): SystemConfig {
  if (typeof window === "undefined") throw new Error("Cannot update config on server side")

  try {
    const currentConfig = getSystemConfig()
    const updatedConfig = {
      ...currentConfig,
      ...updates,
    }

    localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(updatedConfig))
    return updatedConfig
  } catch (error) {
    console.error("Erro ao atualizar configurações do sistema:", error)
    throw error
  }
}

// Funções de autenticação
export function authenticateAdmin(username: string, password: string): boolean {
  if (typeof window === "undefined") return false

  try {
    // Credenciais fixas para simplificar
    const ADMIN_USERNAME = "webytebr"
    const ADMIN_PASSWORD = "25031961Jralves"

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const sessionId = generateId()
      const session = {
        id: sessionId,
        username,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 horas
      }

      // Armazenar sessão
      localStorage.setItem("admin_authenticated", "true")
      localStorage.setItem("admin_username", username)
      localStorage.setItem("admin_session_id", sessionId)

      return true
    }

    return false
  } catch (error) {
    console.error("Erro ao autenticar administrador:", error)
    return false
  }
}

export function checkAdminAuthentication(): boolean {
  if (typeof window === "undefined") return false

  try {
    return localStorage.getItem("admin_authenticated") === "true"
  } catch (error) {
    console.error("Erro ao verificar autenticação:", error)
    return false
  }
}

export function logoutAdmin(): void {
  if (typeof window === "undefined") return

  try {
    localStorage.removeItem("admin_authenticated")
    localStorage.removeItem("admin_username")
    localStorage.removeItem("admin_session_id")
  } catch (error) {
    console.error("Erro ao fazer logout:", error)
  }
}

// Estatísticas e métricas
export function getAirdropStats() {
  if (typeof window === "undefined")
    return {
      totalClaims: 0,
      pendingClaims: 0,
      processedClaims: 0,
      rejectedClaims: 0,
      failedClaims: 0,
      totalTokensAllocated: DEFAULT_CONFIG.totalTokensAllocated,
      tokensDistributed: 0,
      tokensRemaining: DEFAULT_CONFIG.totalTokensAllocated,
    }

  try {
    const claims = getAllClaims()
    const config = getSystemConfig()

    return {
      totalClaims: claims.length,
      pendingClaims: claims.filter((c) => c.status === "pending").length,
      processedClaims: claims.filter((c) => c.status === "processed").length,
      rejectedClaims: claims.filter((c) => c.status === "rejected").length,
      failedClaims: claims.filter((c) => c.status === "failed").length,
      totalTokensAllocated: config.totalTokensAllocated,
      tokensDistributed: claims
        .filter((c) => c.status === "processed")
        .reduce((sum, claim) => sum + claim.tokensRequested, 0),
      tokensRemaining:
        config.totalTokensAllocated -
        claims.filter((c) => c.status === "processed").reduce((sum, claim) => sum + claim.tokensRequested, 0),
    }
  } catch (error) {
    console.error("Erro ao obter estatísticas:", error)
    return {
      totalClaims: 0,
      pendingClaims: 0,
      processedClaims: 0,
      rejectedClaims: 0,
      failedClaims: 0,
      totalTokensAllocated: DEFAULT_CONFIG.totalTokensAllocated,
      tokensDistributed: 0,
      tokensRemaining: DEFAULT_CONFIG.totalTokensAllocated,
    }
  }
}

// Exportar dados
export function exportClaimsToCSV(): string {
  if (typeof window === "undefined") return ""

  try {
    const claims = getAllClaims()
    const headers = [
      "ID",
      "Nome",
      "Endereço da Carteira",
      "Tipo de Carteira",
      "Twitter",
      "Telegram",
      "Tokens Solicitados",
      "Status",
      "Data de Criação",
      "Data de Processamento",
      "Notas",
    ]

    const rows = claims.map((claim) => [
      claim.id,
      claim.name || "N/A",
      claim.walletAddress,
      claim.walletType,
      claim.twitterUsername || "N/A",
      claim.telegramId || "N/A",
      claim.tokensRequested,
      claim.status,
      claim.createdAt,
      claim.processedAt || "",
      claim.notes || "",
    ])

    return [headers.join(","), ...rows.map((row) => row.join(","))].join("\n")
  } catch (error) {
    console.error("Erro ao exportar para CSV:", error)
    return ""
  }
}

// Obter a data de lançamento do Airdrop
export function getLaunchDate(): Date {
  if (typeof window === "undefined") {
    // Retornar uma data padrão se estiver no servidor
    return new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
  }

  try {
    const config = getSystemConfig()
    return new Date(config.launchDate)
  } catch (error) {
    console.error("Erro ao obter data de lançamento:", error)
    return new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
  }
}

// Atualizar a data de lançamento do Airdrop
export function updateLaunchDate(newDate: Date): boolean {
  if (typeof window === "undefined") return false

  try {
    const config = getSystemConfig()
    updateSystemConfig({
      ...config,
      launchDate: newDate.toISOString(),
    })
    return true
  } catch (error) {
    console.error("Erro ao atualizar data de lançamento:", error)
    return false
  }
}

