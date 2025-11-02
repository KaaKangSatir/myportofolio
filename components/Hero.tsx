"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import profileImage from "@/public/profile.jpg"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(199_89%_48%_/_0.15)_0%,transparent_70%)]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-30 animate-pulse" />
              <Image
                src={profileImage || "/placeholder.svg"}
                alt="Muhammad Davi"
                width={192}
                height={192}
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary shadow-glow-blue"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-5xl md:text-7xl font-bold mb-4 glow-text"
          >
            Muhammad Davi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-xl md:text-2xl text-primary font-semibold mb-6"
          >
            Newbie Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Hai! Saya Davi, seorang pemuda berusia 17 tahun dari Kepulauan Sumatera. Saya adalah seseorang yang senang
            menjelajahi teknologi dan seni, serta selalu mencari tantangan baru untuk dikembangkan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-8 flex gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow-blue transition-all duration-300"
            >
              Lihat Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-8 py-3 bg-secondary text-foreground rounded-lg font-semibold border border-primary hover:bg-primary/10 transition-all duration-300"
            >
              Hubungi Saya
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
