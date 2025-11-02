"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Home } from "lucide-react"
import Link from "next/link"
import ParticleBackground from "@/components/ParticleBackground"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  useEffect(() => {
    
    document.title = "404 Not Found"

    console.error("404 Error: User attempted to access non-existent route")
  }, [])

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-[150px] md:text-[200px] font-bold glow-text leading-none">404</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-foreground">Halaman Tidak Ditemukan</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>

          <Link href="/">
            <Button size="lg" className="group">
              <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Kembali ke Beranda
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
