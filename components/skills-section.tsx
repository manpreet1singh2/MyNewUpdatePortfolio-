"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, FileCode2, Layers, Palette, GitBranch, Bot, BrainCircuit, LayoutGrid, Sparkles } from "lucide-react"

export function SkillsSection() {
  const skills = [
    {
      name: "HTML5",
      icon: <FileCode2 className="h-8 w-8 text-orange-500" />,
      description: "Semantic markup and structure",
    },
    {
      name: "CSS3",
      icon: <Palette className="h-8 w-8 text-blue-500" />,
      description: "Styling and responsive design",
    },
    {
      name: "JavaScript",
      icon: <Code className="h-8 w-8 text-yellow-500" />,
      description: "Dynamic and interactive functionality",
    },
    {
      name: "React.js",
      icon: <Layers className="h-8 w-8 text-cyan-500" />,
      description: "Component-based UI development",
    },
    {
      name: "Git & GitHub",
      icon: <GitBranch className="h-8 w-8 text-gray-500" />,
      description: "Version control and collaboration",
    },
    {
      name: "GitHub Copilot",
      icon: <Bot className="h-8 w-8 text-purple-500" />,
      description: "AI-assisted code generation",
    },
    {
      name: "ChatGPT Prompting",
      icon: <BrainCircuit className="h-8 w-8 text-green-500" />,
      description: "AI-powered development assistance",
    },
    {
      name: "Tailwind CSS",
      icon: <LayoutGrid className="h-8 w-8 text-teal-500" />,
      description: "Utility-first CSS framework",
    },
    {
      name: "Bootstrap",
      icon: <Sparkles className="h-8 w-8 text-indigo-500" />,
      description: "Responsive component library",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
