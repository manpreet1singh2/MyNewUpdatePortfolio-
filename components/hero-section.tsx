"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container px-4 md:px-6 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Manpreet Singh
                </span>
              </h1>
              <p className="max-w-[700px] text-xl text-muted-foreground md:text-2xl">
                Front-End Developer | AI-Powered Coder
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/manpreet1singh2" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-[450px] h-[450px] rounded-lg overflow-hidden border-4 border-orange-500/20 shadow-2xl">
                <Image
                  src="/images/manpreet-hero.jpg"
                  alt="Manpreet Singh"
                  width={450}
                  height={450}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                <span className="text-sm font-semibold">Available for Work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
