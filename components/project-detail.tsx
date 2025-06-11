"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectDetailProps {
  project: {
    title: string
    description: string
    longDescription?: string
    image: string
    detailImage?: string
    technologies: string[]
    features?: string[]
    challenges?: string[]
    liveUrl: string
    githubUrl: string
    year?: string
  }
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="container px-4 md:px-6 py-12">
      <Link href="/#projects" className="flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all projects
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.year && <Badge variant="outline">{project.year}</Badge>}
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <p className="text-lg text-muted-foreground mb-6">{project.longDescription || project.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>

        {project.detailImage && (
          <Card className="mb-12">
            <CardContent className="p-0">
              <div className="relative h-[500px]">
                <Image
                  src={project.detailImage || "/placeholder.svg"}
                  alt={`${project.title} detailed view`}
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {project.features && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.challenges && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  )
}
