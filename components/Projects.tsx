"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/types/project"

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://kaakangsatir.github.io/projek.json")
        if (!response.ok) throw new Error("Failed to fetch")
        const data = await response.json()
        setProjects(data)
      } catch (err) {
        console.error("Error fetching projects:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const displayProjects = projects

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.92,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.7,
      },
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.15,
      rotate: 2,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const titleVariants = {
    hover: {
      x: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1,
          }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 glow-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {loading
              ? "Loading projects..."
              : `${displayProjects.length} project${displayProjects.length !== 1 ? "s" : ""} yang telah dikerjakan`}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayProjects.length === 0 && !loading ? (
            <motion.div
              className="col-span-full text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground text-lg">No projects available at the moment.</p>
            </motion.div>
          ) : (
            displayProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
                style={{ perspective: 1000 }}
              >
                <motion.div className="relative h-56 overflow-hidden bg-secondary/50" whileHover="hover">
                  {project.image ? (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        style={{ transform: "scale(1)" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-primary/10 z-[5]"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                      <motion.div
                        className="text-6xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                      >
                        📁
                      </motion.div>
                    </div>
                  )}
                </motion.div>

                <div className="p-6 space-y-4">
                  <motion.h3
                    className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
                    variants={titleVariants}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground line-clamp-2 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  {(project.link || project.github) && (
                    <motion.div
                      className="flex gap-4 pt-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-primary hover:text-accent transition-all duration-300 relative overflow-hidden px-3 py-1.5 rounded-lg border border-primary/20 hover:border-accent/40"
                          whileHover={{ scale: 1.05, x: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-primary/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          <ExternalLink className="w-4 h-4 relative z-10" />
                          <span className="text-sm font-medium relative z-10">Live Demo</span>
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-primary hover:text-accent transition-all duration-300 relative overflow-hidden px-3 py-1.5 rounded-lg border border-primary/20 hover:border-accent/40"
                          whileHover={{ scale: 1.05, x: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-primary/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          <Github className="w-4 h-4 relative z-10" />
                          <span className="text-sm font-medium relative z-10">GitHub</span>
                        </motion.a>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
