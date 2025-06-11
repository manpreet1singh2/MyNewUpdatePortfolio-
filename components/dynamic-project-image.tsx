"use client"

import Image from "next/image"
import { useState } from "react"

interface DynamicProjectImageProps {
  projectName: string
  keywords: string[]
  fallbackImage?: string
  className?: string
  alt: string
}

export function DynamicProjectImage({
  projectName,
  keywords,
  fallbackImage = "/placeholder.svg",
  className = "",
  alt,
}: DynamicProjectImageProps) {
  const [imageError, setImageError] = useState(false)

  // Generate Unsplash URL based on keywords
  const generateUnsplashUrl = (keywords: string[]) => {
    const keywordString = keywords.join(",")
    return `https://source.unsplash.com/400x200/?${keywordString}`
  }

  // Alternative image sources
  const getImageSources = () => {
    const keywordString = keywords.join(",")
    return [
      `https://source.unsplash.com/400x200/?${keywordString}`,
      `https://picsum.photos/400/200?random=${projectName.replace(/\s+/g, "")}`,
      fallbackImage,
    ]
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const imageSources = getImageSources()

  const handleImageError = () => {
    if (currentImageIndex < imageSources.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      setImageError(true)
    }
  }

  if (imageError) {
    return (
      <div
        className={`bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold ${className}`}
      >
        {projectName}
      </div>
    )
  }

  return (
    <Image
      src={imageSources[currentImageIndex] || "/placeholder.svg"}
      alt={alt}
      fill
      className="object-cover transition-transform hover:scale-105"
      onError={handleImageError}
      unoptimized
    />
  )
}
