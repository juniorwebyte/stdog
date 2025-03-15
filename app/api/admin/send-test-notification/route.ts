import { NextResponse } from "next/server"

// Admin WhatsApp
const ADMIN_WHATSAPP = "5511984801839" // Sem o + para a API

export async function POST(request: Request) {
  try {
    // Formatar a mensagem de teste
    const message =
      `🧪 *Teste de Notificação* 🧪\n\n` +
      `Esta é uma mensagem de teste do sistema de notificações do Street Dog Coin.\n\n` +
      `Se você está recebendo esta mensagem, o sistema está funcionando corretamente!\n\n` +
      `*Data e Hora:* ${new Date().toLocaleString("pt-BR")}`

    // Enviar a mensagem usando a API CallMeBot
    const encodedMessage = encodeURIComponent(message)
    // Usar a mesma chave de API que você obteve no processo de registro
    const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${ADMIN_WHATSAPP}&text=${encodedMessage}&apikey=1782254`

    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`Erro ao enviar mensagem de teste: ${await response.text()}`)
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem de teste enviada com sucesso",
    })
  } catch (error) {
    console.error("Erro ao enviar mensagem de teste:", error)
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 },
    )
  }
}

