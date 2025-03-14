import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import PerformanceToggle from "@/components/performance-toggle"
import ClaimClient from "./client"

export default function ClaimPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white relative overflow-hidden">
      <GalaxyAnimation />
      <Navbar />

      <div className="max-w-3xl w-full z-10 mt-20">
        <ClaimClient />
      </div>

      <Toaster />
      <PerformanceToggle />
    </main>
  )
}

