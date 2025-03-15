import { NextResponse } from "next/server"

// Admin WhatsApp
const ADMIN_WHATSAPP = "+5511984801839"
// Remover o + para uso na API
const ADMIN_WHATSAPP_CLEAN = "5511984801839"

export async function POST(request: Request) {
  try {
    const { walletAddress, twitterUsername, telegramId } = await request.json()

    if (!walletAddress) {
      return NextResponse.json({ success: false, message: "Endereço da carteira é obrigatório" }, { status: 400 })
    }

    // Formatar a mensagem
    const message =
      `🎉 *Nova Reivindicação de Airdrop!* 🎉\n\n` +
      `*Endereço da Carteira:*\n${walletAddress}\n\n` +
      `*Twitter:* ${twitterUsername || "Não fornecido"}\n` +
      `*Telegram:* ${telegramId || "Não fornecido"}\n\n` +
      `*Data:* ${new Date().toLocaleString("pt-BR")}`

    // Enviar a mensagem diretamente para o WhatsApp usando CallMeBot API
    // Esta é uma API gratuita que permite enviar mensagens para WhatsApp
    const encodedMessage = encodeURIComponent(message)
    // Primeiro, você precisa registrar seu número seguindo as instruções em https://www.callmebot.com/blog/free-api-whatsapp-messages/
    // 1. Adicione o número +34 644 68 18 00 aos seus contatos do WhatsApp como "CallMeBot"
    // 2. Envie esta mensagem: "I allow callmebot to send me messages"
    // 3. Aguarde a mensagem de confirmação com sua chave de API pessoal

    // Depois de receber sua chave de API pessoal, substitua "YOUR_API_KEY_HERE" pela chave real
    const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${ADMIN_WHATSAPP_CLEAN}&text=${encodedMessage}&apikey=1782254`

    try {
      // Enviar a requisição para a API
      const response = await fetch(apiUrl)

      if (!response.ok) {
        console.error("Erro ao enviar mensagem WhatsApp:", await response.text())
        throw new Error("Falha ao enviar mensagem WhatsApp")
      }

      console.log("Notificação WhatsApp enviada com sucesso para:", ADMIN_WHATSAPP)

      // Registrar a notificação
      try {
        await saveNotification(walletAddress, true)
      } catch (error) {
        console.error("Erro ao salvar notificação:", error)
      }

      return NextResponse.json({
        success: true,
        message: "Notificação enviada com sucesso",
      })
    } catch (error) {
      console.error("Erro ao enviar notificação WhatsApp:", error)

      // Mesmo com erro, salvar a notificação para tentativa manual posterior
      try {
        await saveNotification(walletAddress, false)
      } catch (saveError) {
        console.error("Erro ao salvar notificação:", saveError)
      }

      return NextResponse.json(
        {
          success: false,
          message: "Erro ao enviar notificação WhatsApp",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Erro ao processar notificação:", error)
    return NextResponse.json({ success: false, message: "Erro ao processar notificação" }, { status: 500 })
  }
}

// Função para salvar a notificação para uso posterior
async function saveNotification(walletAddress: string, sent: boolean) {
  // Em um ambiente de produção, você salvaria isso em um banco de dados
  // Para esta implementação, usaremos armazenamento local do servidor
  const fs = require("fs")
  const path = require("path")

  const dataDir = path.join(process.cwd(), "data")
  const filePath = path.join(dataDir, "whatsapp-notifications.json")

  // Criar diretório se não existir
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  // Ler dados existentes ou iniciar com array vazio
  let notifications = []
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8")
    notifications = JSON.parse(fileContent)
  }

  // Adicionar nova notificação
  notifications.push({
    walletAddress,
    createdAt: new Date().toISOString(),
    sent: sent,
    sentAt: sent ? new Date().toISOString() : null,
  })

  // Salvar dados atualizados
  fs.writeFileSync(filePath, JSON.stringify(notifications, null, 2))

  return { success: true }
}

