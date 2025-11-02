"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Database, Globe } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript",
  },
  {
    icon: Database,
    title: "Learning Backend",
    description: "Node.js, APIs",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX, Creative Design",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "Modern Web Stack",
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-glow-blue"
            >
              <skill.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
