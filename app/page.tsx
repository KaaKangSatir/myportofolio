import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ParticleBackground from "@/components/ParticleBackground"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
