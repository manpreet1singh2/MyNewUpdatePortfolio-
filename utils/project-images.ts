export const getProjectImage = (projectTitle: string): string => {
  const imageMap: Record<string, string> = {
    // AI & Tech Projects
    "AI-Powered Design Assistant":
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center",
    "AI-Powered Blog Generator":
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop&crop=center",

    // Gaming & Entertainment
    "SkillPlay - Gaming Platform":
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&crop=center",
    "Gambling App": "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=200&fit=crop&crop=center",
    "Netflix Clone": "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=200&fit=crop&crop=center",
    "Drum Kit": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop&crop=center",

    // E-commerce & Business
    "E-Commerce Application":
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&crop=center",
    "Gyaan Glitch": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop&crop=center",

    // Web Development
    "Portfolio Website":
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&crop=center",
    "Gym Website": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=200&fit=crop&crop=center",

    // Utility Apps
    "Weather App": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop&crop=center",
    "To-Do List": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=200&fit=crop&crop=center",
  }

  return (
    imageMap[projectTitle] || `https://source.unsplash.com/400x200/?${projectTitle.toLowerCase().replace(/\s+/g, ",")}`
  )
}

export const getProjectKeywords = (projectTitle: string): string[] => {
  const keywordMap: Record<string, string[]> = {
    "AI-Powered Design Assistant": ["ai", "design", "graphics", "creative"],
    "SkillPlay - Gaming Platform": ["gaming", "money", "skills", "platform"],
    "Gambling App": ["casino", "cards", "chips", "gambling"],
    "AI-Powered Blog Generator": ["ai", "writing", "blog", "content"],
    "E-Commerce Application": ["shopping", "ecommerce", "cart", "store"],
    "Gyaan Glitch": ["education", "learning", "books", "knowledge"],
    "Portfolio Website": ["code", "developer", "programming", "website"],
    "Gym Website": ["fitness", "gym", "workout", "health"],
    "Netflix Clone": ["streaming", "movies", "entertainment", "video"],
    "Weather App": ["weather", "forecast", "climate", "app"],
    "Drum Kit": ["drums", "music", "instruments", "sound"],
    "To-Do List": ["tasks", "productivity", "notes", "organization"],
  }

  return keywordMap[projectTitle] || ["web", "development", "app"]
}
