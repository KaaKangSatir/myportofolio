"use client"

import { Github, Mail, Instagram, Music2, Youtube, MessageCircle } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/kaakangsatir",
      color: "hover:text-[#6e5494]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/kaa__y05",
      color: "hover:text-[#E4405F]",
    },
    {
      name: "TikTok",
      icon: Music2,
      href: "https://tiktok.com/@kaakangsatir0",
      color: "hover:text-[#00f2ea]",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@kaakangsatir?si=6C6udoDbirjJI9HL",
      color: "hover:text-[#FF0000]",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/6285609279108",
      color: "hover:text-[#25D366]",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:muhamaddavi290@gmail.com",
      color: "hover:text-primary",
    },
  ]

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border transition-all duration-300 hover:border-primary hover:shadow-glow-blue ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()} Muhammad Davi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
