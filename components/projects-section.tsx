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
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center",
      technologies: ["TypeScript", "CSS", "JavaScript", "AI"],
      liveUrl: "#", // Add live URL when available
      githubUrl: "https://github.com/manpreet1singh2/Graphic-design-create-WIth-AI",
    },
    {
      title: "SkillPlay - Gaming Platform",
      description:
        "Real-Money Skill-Based Gaming Platform where users can play games and earn real money based on their skills.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&crop=center",
      technologies: ["TypeScript", "CSS", "JavaScript", "Next.js"],
      liveUrl: "https://moneydouble.vercel.app",
      githubUrl: "https://github.com/manpreet1singh2/moneydouble.com",
    },
    {
      title: "Gambling App",
      description:
        "A comprehensive gambling application with various games and betting features built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=200&fit=crop&crop=center",
      technologies: ["TypeScript", "CSS", "JavaScript", "React"],
      liveUrl: "#", // Add live URL when available
      githubUrl: "https://github.com/manpreet1singh2/Gambling-app",
    },
    {
      title: "AI-Powered Blog Generator",
      description: "An intelligent blog generation platform that uses AI to create engaging content automatically.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop&crop=center",
      technologies: ["TypeScript", "AI", "Next.js", "API"],
      liveUrl: "#", // Add live URL when available
      githubUrl: "https://github.com/manpreet1singh2/AI-Powered-Blog-Generator",
    },
    {
      title: "E-Commerce Application",
      description: "A full-featured e-commerce platform with shopping cart, payment integration, and user management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&crop=center",
      technologies: ["TypeScript", "CSS", "JavaScript", "React"],
      liveUrl: "#", // Add live URL when available
      githubUrl: "https://github.com/manpreet1singh2/Ecommerce-app.in",
    },
    {
      title: "Gyaan Glitch",
      description: "An educational platform designed to share knowledge and insights on various technical topics.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop&crop=center",
      technologies: ["TypeScript", "CSS", "JavaScript", "React"],
      liveUrl: "#", // Add live URL when available
      githubUrl: "https://github.com/manpreet1singh2/gyaan-glitch",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my projects and skills as a Front-End Developer.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&crop=center",
      technologies: ["HTML", "CSS", "JavaScript", "Next.js"],
      liveUrl: "https://manpreet1singh2.github.io/portfolio1-main",
      githubUrl: "https://github.com/manpreet1singh2/portfolio1-main",
    },
    {
      title: "Gym Website",
      description: "A responsive website for a gym with information about services, trainers, and membership options.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=200&fit=crop&crop=center",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://manpreet1singh2.github.io/gym-website/",
      githubUrl: "https://github.com/manpreet1singh2/gym-website",
    },
    {
      title: "Netflix Clone",
      description: "A clone of the Netflix interface with similar design and functionality.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=200&fit=crop&crop=center",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://manpreet1singh2.github.io/netflix-clone/",
      githubUrl: "https://github.com/manpreet1singh2/netflix-clone",
    },
    {
      title: "Weather App",
      description: "A weather application that displays current weather conditions and forecasts for any location.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop&crop=center",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      liveUrl: "https://manpreet1singh2.github.io/weather-app/",
      githubUrl: "https://github.com/manpreet1singh2/weather-app",
    },
    {
      title: "Drum Kit",
      description: "An interactive drum kit that plays sounds when keys are pressed or buttons are clicked.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop&crop=center",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://manpreet1singh2.github.io/drum-kit/",
      githubUrl: "https://github.com/manpreet1singh2/drum-kit",
    },
    {
      title: "To-Do List",
      description: "A simple to-do list application for managing tasks and daily activities.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=200&fit=crop&crop=center",
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
                    unoptimized
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
