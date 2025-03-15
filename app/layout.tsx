import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientProvider from "@/components/client-provider"

// Otimizar o carregamento da fonte
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Usar font-display: swap para melhorar o CLS
  preload: true,
})

export const metadata: Metadata = {
  title: "AirDrop Galáctico",
  description: "Sistema de reivindicação de AirDrop com tema galáctico para distribuição manual de tokens",
  // Adicionar meta tags para melhorar a performance
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Adicionar preconnect para domínios externos */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ClientProvider>{children}</ClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'