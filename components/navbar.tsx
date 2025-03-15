"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Wallet, Menu, X } from "lucide-react"

export default function Navbar({ onConnectClick }: { onConnectClick?: () => void }) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Sobre Nós", href: "/about" },
    { name: "Reivindicar", href: "/claim" },
    { name: "Verificar", href: "/verify" },
    { name: "Status", href: "/status" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-purple-900/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="h-8 w-8 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/street-logo-Lwlo4CyibHQIRkaFgNMeF9P1QNF4B1.png"
              alt="Street Dog Coin Logo"
              width={32}
              height={32}
              className="object-cover"
              priority
            />
          </div>
          <span className="font-bold text-white">Street Dog Coin</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm rounded-md transition-colors",
                pathname === item.href
                  ? "text-purple-300 bg-purple-900/20"
                  : "text-gray-300 hover:text-purple-300 hover:bg-purple-900/10",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            onClick={onConnectClick}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-3 py-1 flex items-center gap-1"
            size="sm"
          >
            <Wallet className="h-3 w-3" />
            <span>Conectar</span>
          </Button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-300 hover:text-purple-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Connect Button */}
        <Button
          onClick={onConnectClick}
          className="hidden md:flex bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2 items-center gap-2"
        >
          <Wallet className="h-4 w-4" />
          <span>Conectar Carteira</span>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-purple-900/20 animate-in slide-in-from-top-5 duration-300">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-3 text-sm rounded-md transition-colors",
                    pathname === item.href
                      ? "text-purple-300 bg-purple-900/20"
                      : "text-gray-300 hover:text-purple-300 hover:bg-purple-900/10",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

