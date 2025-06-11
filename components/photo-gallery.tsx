"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function PhotoGallery() {
  const photos = [
    {
      src: "/images/manpreet-hero.jpg",
      alt: "Manpreet Singh reading a book",
      caption: "Learning and growing",
    },
    {
      src: "/images/manpreet-about.jpg",
      alt: "Manpreet Singh at university",
      caption: "At Chandigarh University",
    },
    {
      src: "/images/manpreet-casual.jpg",
      alt: "Manpreet Singh casual photo",
      caption: "Campus life",
    },
    {
      src: "/images/manpreet-professional.jpg",
      alt: "Manpreet Singh professional photo",
      caption: "Ready for opportunities",
    },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-4">A Glimpse Into My Journey</h3>
          <p className="text-muted-foreground">
            From learning to building, here's a visual story of my development journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm text-muted-foreground">{photo.caption}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
