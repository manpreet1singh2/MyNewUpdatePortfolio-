"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Design Assistant",
      description:
        "Your AI-Powered Creative Partner for generating stunning graphics and designs using artificial intelligence.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["TypeScript", "CSS", "JavaScript", "AI"],
      liveUrl: "#", // Add live URL when available
      githubUrl: "https://github.com/manpreet1singh2/Graphic-design-create-WIth-AI",
    },
    {
      title: "SkillPlay - Gaming Platform",
      description:
        "Real-Money Skill-Based Gaming Platform where users can play games and earn real money based on their skills.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["TypeScript", "CSS", "JavaScript", "Next.js"],
      liveUrl: "https://moneydouble.vercel.app",
      githubUrl: "https://github.com/manpreet1singh2/moneydouble.com",
    },
    {
      title: "Gambling App",
      description:
        "A comprehensive gambling application with various games and betting features built with modern web technologies.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["TypeScript", "CSS", "JavaScript", "React"],
      liveUrl: "#", // Add live URL when available
      githubUrl: "https://github.com/manpreet1singh2/Gambling-app",
    },
    {
      title: "AI-Powered Blog Generator",
      description: "An intelligent blog generation platform that uses AI to create engaging content automatically.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["TypeScript", "AI", "Next.js", "API"],
      liveUrl: "#", // Add live URL when available
      githubUrl: "https://github.com/manpreet1singh2/AI-Powered-Blog-Generator",
    },
    {
      title: "E-Commerce Application",
      description: "A full-featured e-commerce platform with shopping cart, payment integration, and user management.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["TypeScript", "CSS", "JavaScript", "React"],
      liveUrl: "#", // Add live URL when available
      githubUrl: "https://github.com/manpreet1singh2/Ecommerce-app.in",
    },
    {
      title: "Gyaan Glitch",
      description: "An educational platform designed to share knowledge and insights on various technical topics.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["TypeScript", "CSS", "JavaScript", "React"],
      liveUrl: "#", // Add live URL when available
      githubUrl: "https://github.com/manpreet1singh2/gyaan-glitch",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
