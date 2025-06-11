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
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my projects and skills as a Front-End Developer.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript", "Next.js"],
      liveUrl: "https://manpreet1singh2.github.io/portfolio1-main",
      githubUrl: "https://github.com/manpreet1singh2/portfolio1-main",
    },
    {
      title: "Gym Website",
      description: "A responsive website for a gym with information about services, trainers, and membership options.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://manpreet1singh2.github.io/gym-website/",
      githubUrl: "https://github.com/manpreet1singh2/gym-website",
    },
    {
      title: "Netflix Clone",
      description: "A clone of the Netflix interface with similar design and functionality.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://manpreet1singh2.github.io/netflix-clone/",
      githubUrl: "https://github.com/manpreet1singh2/netflix-clone",
    },
    {
      title: "Weather App",
      description: "A weather application that displays current weather conditions and forecasts for any location.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      liveUrl: "https://manpreet1singh2.github.io/weather-app/",
      githubUrl: "https://github.com/manpreet1singh2/weather-app",
    },
    {
      title: "Drum Kit",
      description: "An interactive drum kit that plays sounds when keys are pressed or buttons are clicked.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://manpreet1singh2.github.io/drum-kit/",
      githubUrl: "https://github.com/manpreet1singh2/drum-kit",
    },
    {
      title: "To-Do List",
      description: "A simple to-do list application for managing tasks and daily activities.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://manpreet1singh2.github.io/to-do-list/",
      githubUrl: "https://github.com/manpreet1singh2/to-do-list",
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
