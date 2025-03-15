import { NextResponse } from "next/server"

// Função para enviar mensagem diretamente para o WhatsApp usando a API do WhatsApp
export async function POST(request: Request) {
  try {
    const { phoneNumber, message } = await request.json()

    if (!phoneNumber || !message) {
      return NextResponse.json(
        { success: false, message: "Número de telefone e mensagem são obrigatórios" },
        { status: 400 },
      )
    }

    // Remover caracteres não numéricos do número de telefone
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, "")

    // Usar a API CallMeBot para enviar a mensagem
    // Esta é uma solução simples que não requer configuração complexa
    const encodedMessage = encodeURIComponent(message)
    const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${cleanPhoneNumber}&text=${encodedMessage}&apikey=123456`

    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`Erro ao enviar mensagem: ${await response.text()}`)
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso",
    })
  } catch (error) {
    console.error("Erro ao enviar mensagem WhatsApp:", error)
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 },
    )
  }
}

