"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  FileCode2,
  Layers,
  Palette,
  GitBranch,
  Bot,
  BrainCircuit,
  LayoutGrid,
  Sparkles,
  Database,
  Server,
  Cloud,
  Cpu,
  Workflow,
  ShieldCheck,
  Zap
} from "lucide-react"

export function SkillsSection() {
  const skills = [
    // 🔹 Frontend
    {
      name: "HTML5",
      icon: <FileCode2 className="h-8 w-8 text-orange-500" />,
      description: "Semantic and SEO-optimized markup",
    },
    {
      name: "CSS3",
      icon: <Palette className="h-8 w-8 text-blue-500" />,
      description: "Responsive and modern UI systems",
    },
    {
      name: "JavaScript",
      icon: <Code className="h-8 w-8 text-yellow-500" />,
      description: "Core logic and application behavior",
    },
    {
      name: "React.js",
      icon: <Layers className="h-8 w-8 text-cyan-500" />,
      description: "Component-driven scalable UI",
    },
    {
      name: "Tailwind CSS",
      icon: <LayoutGrid className="h-8 w-8 text-teal-500" />,
      description: "Utility-first UI development",
    },
    {
      name: "Bootstrap",
      icon: <Sparkles className="h-8 w-8 text-indigo-500" />,
      description: "Rapid UI prototyping",
    },

    // 🔹 Backend
    {
      name: "Node.js",
      icon: <Server className="h-8 w-8 text-green-600" />,
      description: "Backend services and APIs",
    },
    {
      name: "Express.js",
      icon: <Cpu className="h-8 w-8 text-gray-600" />,
      description: "REST API development",
    },
    {
      name: "MySQL",
      icon: <Database className="h-8 w-8 text-blue-600" />,
      description: "Relational database design",
    },

    // 🔹 AI & Automation (🚀 YOUR CORE ADVANTAGE)
    {
      name: "AI Integration (LLMs)",
      icon: <BrainCircuit className="h-8 w-8 text-green-500" />,
      description: "Building apps using OpenAI / LLM APIs",
    },
    {
      name: "Prompt Engineering",
      icon: <Bot className="h-8 w-8 text-purple-500" />,
      description: "Designing high-performance AI prompts",
    },
    {
      name: "AI Automation Systems",
      icon: <Workflow className="h-8 w-8 text-pink-500" />,
      description: "End-to-end workflow automation",
    },
    {
      name: "AI Agents",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      description: "Autonomous task-executing systems",
    },
    {
      name: "API Integration",
      icon: <Cpu className="h-8 w-8 text-orange-500" />,
      description: "Connecting AI with real-world systems",
    },

    // 🔹 Dev Tools
    {
      name: "Git & GitHub",
      icon: <GitBranch className="h-8 w-8 text-gray-500" />,
      description: "Version control & collaboration",
    },

    // 🔹 Cloud & Deployment
    {
      name: "AWS (Basics)",
      icon: <Cloud className="h-8 w-8 text-orange-400" />,
      description: "Cloud deployment fundamentals",
    },
    {
      name: "Vercel / Netlify",
      icon: <Cloud className="h-8 w-8 text-black" />,
      description: "Frontend deployment pipelines",
    },

    // 🔹 Quality
    {
      name: "Software Testing",
      icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
      description: "Debugging and QA practices",
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I build intelligent, scalable applications by combining full-stack development with AI-powered automation systems.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
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