"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Zap, Brain, Cpu, Globe, FileText, Heart, Briefcase, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// ─── TYPE DEFINITIONS ────────────────────────────────────────────────────────

type Project = {
  title: string
  hook: string
  description: string
  problem: string
  solution: string
  image: string
  technologies: string[]
  keyFeatures: string[]
  impact: string
  highlightTag: string
  highlightColor: string
  liveUrl: string
  githubUrl: string
  icon: React.ReactNode
  isFeatured?: boolean
}

// ─── FEATURED / ENHANCED PROJECTS ────────────────────────────────────────────

const featuredProjects: Project[] = [
  {
    title: "AI Product Recommender",
    hook: "Personalized product discovery powered by real-time AI inference.",
    description:
      "Engineered a smart recommendation engine that analyzes user preferences and surfaces hyper-relevant products — cutting decision fatigue and increasing purchase intent.",
    problem:
      "Users drown in product choices with no intelligent filtering layer — leading to high bounce rates and lost conversions.",
    solution:
      "Built an AI-driven recommendation system that understands user context and delivers ranked, relevant suggestions in milliseconds.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop&crop=center",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Vercel"],
    keyFeatures: [
      "Real-time AI inference for instant personalization",
      "Context-aware recommendation scoring",
      "Clean, conversion-optimized UI",
      "Production-deployed on Vercel with zero cold starts",
    ],
    impact:
      "Directly applicable to e-commerce, SaaS onboarding, and content platforms — any product that needs to guide users to the right choice faster.",
    highlightTag: "AI-Powered",
    highlightColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    liveUrl: "https://recomended.vercel.app/",
    githubUrl: "https://github.com/manpreet1singh2/ai-product-recommender",
    icon: <Brain className="h-4 w-4" />,
    isFeatured: true,
  },
  {
    title: "Social Media Automation Workflow",
    hook: "Automate your entire social presence — from content to publishing, hands-free.",
    description:
      "Designed a no-code automation pipeline using n8n that handles content scheduling, multi-platform publishing, and engagement monitoring — reducing manual effort by 90%.",
    problem:
      "Creators and marketers waste 10+ hours weekly on repetitive social media tasks that can be systematically automated.",
    solution:
      "Automated the full social media lifecycle using trigger-based n8n workflows — from content ingestion to scheduled publishing across platforms.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=300&fit=crop&crop=center",
    technologies: ["n8n", "Node.js", "REST APIs", "Webhooks", "JSON"],
    keyFeatures: [
      "Multi-platform publishing via API integrations",
      "Trigger-based scheduling with zero manual intervention",
      "Modular workflow design — easy to extend",
      "Error handling and retry logic built-in",
    ],
    impact:
      "A real operational tool for marketing teams, solo founders, and content agencies looking to scale without hiring.",
    highlightTag: "Automation",
    highlightColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    liveUrl: "https://manpreet1singh2.github.io/Jobs-scrape-email-whatsapp-workflow-/",
    githubUrl: "https://github.com/manpreet1singh2/Social-media-automation-workflow-",
    icon: <Zap className="h-4 w-4" />,
    isFeatured: true,
  },
  {
    title: "Jobs Scrape → Email & WhatsApp Workflow",
    hook: "Job alerts delivered to your inbox and phone — fully automated.",
    description:
      "Built an end-to-end job intelligence pipeline that scrapes live listings, filters by criteria, and dispatches personalized alerts via Email and WhatsApp — without any manual effort.",
    problem:
      "Job seekers miss opportunities because manually checking multiple job portals every day is time-consuming and inconsistent.",
    solution:
      "Automated job discovery with a scraping + filtering + multi-channel notification workflow that runs on a schedule and delivers only relevant openings.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop&crop=center",
    technologies: ["n8n", "Python", "WhatsApp API", "SMTP", "Web Scraping"],
    keyFeatures: [
      "Automated scraping from live job portals",
      "Smart filtering by role, location & keywords",
      "Dual-channel delivery: Email + WhatsApp notifications",
      "Scheduled runs — always up to date",
    ],
    impact:
      "A practical automation tool for job seekers, recruiters, and career coaches. Extendable into a full SaaS job-alert product.",
    highlightTag: "Workflow Automation",
    highlightColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    liveUrl: "https://manpreet1singh2.github.io/Jobs-scrape-email-whatsapp-workflow-/",
    githubUrl: "https://github.com/manpreet1singh2/Jobs-scrape-email-whatsapp-workflow-",
    icon: <Briefcase className="h-4 w-4" />,
    isFeatured: true,
  },
  {
    title: "Resume Analyzer",
    hook: "AI feedback on your resume before a recruiter ever sees it.",
    description:
      "Developed an AI-powered resume analysis tool that parses uploaded resumes, identifies weaknesses, and generates actionable improvement suggestions — giving candidates a competitive edge.",
    problem:
      "Most resumes get rejected by ATS systems or recruiters in under 10 seconds. Candidates have no way to objectively evaluate their own resume quality.",
    solution:
      "Built a resume parsing and AI evaluation engine that scores resumes across key dimensions and provides specific, prioritized feedback.",
    image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600&h=300&fit=crop&crop=center",
    technologies: ["React", "JavaScript", "AI/NLP", "Netlify"],
    keyFeatures: [
      "Intelligent resume parsing (PDF/text)",
      "Section-by-section scoring and analysis",
      "AI-generated improvement recommendations",
      "Clean, distraction-free review interface",
    ],
    impact:
      "Empowers job seekers to self-diagnose resume gaps before applying — directly improving interview conversion rates.",
    highlightTag: "AI + Career Tech",
    highlightColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    liveUrl: "https://marvelous-tartufo-2d296c.netlify.app/",
    githubUrl: "https://github.com/manpreet1singh2/resumeanalyzer",
    icon: <FileText className="h-4 w-4" />,
    isFeatured: true,
  },
  {
    title: "Mental Health Journal",
    hook: "A private, structured space to process thoughts and track emotional well-being.",
    description:
      "Designed and built a compassionate journaling application that helps users log daily moods, reflect on patterns, and track their mental wellness journey over time.",
    problem:
      "Mental health journaling apps are either too clinical or too generic — lacking the warmth and structure that encourages consistent daily use.",
    solution:
      "Created a guided journaling experience with mood tracking, reflection prompts, and a calm, distraction-free interface built for daily emotional check-ins.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=300&fit=crop&crop=center",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    keyFeatures: [
      "Daily mood logging with trend visualization",
      "Guided reflection prompts for deeper introspection",
      "Private, secure journaling environment",
      "Calm, accessible UI designed for emotional safety",
    ],
    impact:
      "Addresses the $4.2B mental wellness app market. A strong foundation for AI-enhanced therapeutic journaling tools.",
    highlightTag: "Health Tech",
    highlightColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    liveUrl: "https://v0-new-project-pa77fmpbxit.vercel.app/",
    githubUrl: "https://github.com/manpreet1singh2/Mental-Health-Journal",
    icon: <Heart className="h-4 w-4" />,
    isFeatured: true,
  },
  {
    title: "Chandigarh Jobs Scraper",
    hook: "Local job market intelligence, scraped and structured automatically.",
    description:
      "Engineered a Python-based web scraper that aggregates local job listings from Chandigarh's job portals, cleans the data, and outputs structured, queryable datasets for analysis.",
    problem:
      "Local job markets lack centralized data aggregation — making it hard for researchers, job seekers, and businesses to understand regional hiring trends.",
    solution:
      "Built a focused Python scraper that targets regional job portals, extracts structured job data, and prepares it for downstream analysis or alert systems.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=300&fit=crop&crop=center",
    technologies: ["Python", "BeautifulSoup", "Requests", "Pandas", "CSV"],
    keyFeatures: [
      "Targeted scraping of regional job portals",
      "Data cleaning and structured output (CSV/JSON)",
      "Extendable scraper architecture for new sources",
      "Foundation layer for automated job alert systems",
    ],
    impact:
      "Useful for job boards, HR analytics platforms, and researchers studying regional employment markets. Modular and production-extensible.",
    highlightTag: "Data Engineering",
    highlightColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    liveUrl: "#",
    githubUrl: "https://github.com/manpreet1singh2/chandigarh-jobsscraper",
    icon: <Cpu className="h-4 w-4" />,
    isFeatured: false,
  },
  {
    title: "TechEd Institute Website",
    hook: "A modern, trust-building web presence for tech education — ready to convert.",
    description:
      "Designed and developed a full institutional website for a tech education brand, featuring course listings, instructor profiles, testimonials, and clear enrollment CTAs.",
    problem:
      "Most edu-tech institutes rely on outdated, low-trust websites that fail to convert visitors into enrolled students.",
    solution:
      "Built a polished, conversion-focused website with clear information architecture, social proof elements, and fast-loading course pages.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop&crop=center",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    keyFeatures: [
      "Course catalog with filtering and detail pages",
      "Instructor profiles and credential display",
      "Student testimonials and social proof sections",
      "Mobile-first, performance-optimized design",
    ],
    impact:
      "Directly applicable as a template for coaching institutes, bootcamps, and online learning platforms looking to establish credibility fast.",
    highlightTag: "Ed-Tech / Full-Stack",
    highlightColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    liveUrl: "https://v0-new-project-vs7ityjvzh0.vercel.app/",
    githubUrl: "https://github.com/manpreet1singh2/TechEd-Institute",
    icon: <Globe className="h-4 w-4" />,
    isFeatured: false,
  },
  {
    title: "Website Template",
    hook: "A production-ready, reusable starter that slashes project setup time.",
    description:
      "Built a clean, scalable website template with best-practice architecture, reusable components, and optimized performance — designed to be cloned and shipped fast.",
    problem:
      "Developers waste hours on boilerplate setup, inconsistent component patterns, and non-performant defaults at the start of every project.",
    solution:
      "Created a structured, opinionated template with pre-configured routing, reusable UI components, and deployment-ready setup for rapid project bootstrapping.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop&crop=center",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    keyFeatures: [
      "Modular, reusable component library",
      "Pre-configured routing and layout system",
      "Performance-optimized with Lighthouse-ready defaults",
      "One-click Vercel deployment",
    ],
    impact:
      "Saves 4–6 hours per project setup. Used as a foundation for client projects and internal tools — a true developer productivity multiplier.",
    highlightTag: "Developer Tool",
    highlightColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    liveUrl: "https://task1-recommendations.vercel.app/",
    githubUrl: "https://github.com/manpreet1singh2/Website-Template",
    icon: <Code2 className="h-4 w-4" />,
    isFeatured: false,
  },
]

// ─── EXISTING PROJECTS ────────────────────────────────────────────────────────

const existingProjects: Project[] = [
  {
    title: "AI-Powered Design Assistant",
    hook: "Generate stunning graphics with the power of AI.",
    description:
      "Your AI-Powered Creative Partner for generating stunning graphics and designs using artificial intelligence.",
    problem: "Designers spend hours iterating on concepts that AI can prototype in seconds.",
    solution: "Built an AI-integrated design tool that generates creative visuals from user prompts.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop&crop=center",
    technologies: ["TypeScript", "CSS", "JavaScript", "AI"],
    keyFeatures: [
      "AI-generated graphic design from text prompts",
      "Export-ready design outputs",
      "Clean creative interface",
    ],
    impact: "Empowers non-designers to create professional visuals without creative agency costs.",
    highlightTag: "AI-Powered",
    highlightColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    liveUrl: "#",
    githubUrl: "https://github.com/manpreet1singh2/Graphic-design-create-WIth-AI",
    icon: <Brain className="h-4 w-4" />,
  },
  {
    title: "SkillPlay — Gaming Platform",
    hook: "Win real money by out-playing, not out-spending.",
    description:
      "Real-Money Skill-Based Gaming Platform where users can play games and earn real money based on their skills.",
    problem: "Most gaming platforms reward spending over skill — unfair and unsustainable for real players.",
    solution: "Built a competitive gaming platform where skill-based matchmaking determines real-money outcomes.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=300&fit=crop&crop=center",
    technologies: ["TypeScript", "CSS", "JavaScript", "Next.js"],
    keyFeatures: [
      "Skill-based matchmaking engine",
      "Real-money prize pool management",
      "Live game session tracking",
      "Secure player wallet integration",
    ],
    impact: "Taps into the $26B skill gaming market with a fairness-first approach.",
    highlightTag: "Full-Stack / Fintech",
    highlightColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    liveUrl: "https://moneydouble.vercel.app",
    githubUrl: "https://github.com/manpreet1singh2/moneydouble.com",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    title: "Gambling App",
    hook: "A fully featured wagering experience built with modern web tech.",
    description:
      "A comprehensive gambling application with various games and betting features built with modern web technologies.",
    problem: "Building a reliable, multi-game wagering platform from scratch requires deep full-stack expertise.",
    solution: "Engineered a multi-game gambling interface with betting logic, odds management, and real-time state.",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&h=300&fit=crop&crop=center",
    technologies: ["TypeScript", "CSS", "JavaScript", "React"],
    keyFeatures: [
      "Multi-game support with consistent game logic",
      "Real-time betting state management",
      "Odds calculation engine",
      "Responsive, immersive UI design",
    ],
    impact: "Demonstrates advanced state management and real-time UI skills highly relevant to fintech and gaming.",
    highlightTag: "Full-Stack",
    highlightColor: "bg-red-500/10 text-red-400 border-red-500/20",
    liveUrl: "#",
    githubUrl: "https://github.com/manpreet1singh2/Gambling-app",
    icon: <Cpu className="h-4 w-4" />,
  },
  {
    title: "AI-Powered Blog Generator",
    hook: "From topic to published article — in seconds.",
    description:
      "An intelligent blog generation platform that uses AI to create engaging content automatically.",
    problem: "Content teams struggle to maintain publishing velocity without sacrificing quality.",
    solution: "Built an AI blog factory that takes a topic and returns a structured, SEO-ready article instantly.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop&crop=center",
    technologies: ["TypeScript", "AI", "Next.js", "API"],
    keyFeatures: [
      "AI-generated blog posts from a single prompt",
      "Structured output with headings and SEO formatting",
      "Editable drafts with clean preview mode",
      "API-driven architecture for easy integration",
    ],
    impact: "A direct productivity tool for content marketers, bloggers, and SEO agencies.",
    highlightTag: "AI + Content Tech",
    highlightColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    liveUrl: "#",
    githubUrl: "https://github.com/manpreet1singh2/AI-Powered-Blog-Generator",
    icon: <Brain className="h-4 w-4" />,
  },
  {
    title: "E-Commerce Application",
    hook: "A complete online store — cart to checkout, fully functional.",
    description:
      "A full-featured e-commerce platform with shopping cart, payment integration, and user management.",
    problem: "Building a scalable, real-world e-commerce system requires mastering frontend, backend, and payments.",
    solution:
      "Engineered a complete shopping platform with product catalog, cart management, user auth, and payment flow.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&crop=center",
    technologies: ["TypeScript", "CSS", "JavaScript", "React"],
    keyFeatures: [
      "Full product catalog with search and filtering",
      "Shopping cart with persistent state",
      "User authentication and order history",
      "Payment gateway integration",
    ],
    impact: "Production-grade architecture applicable to any retail, marketplace, or subscription business.",
    highlightTag: "Production-Ready",
    highlightColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    liveUrl: "#",
    githubUrl: "https://github.com/manpreet1singh2/Ecommerce-app.in",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "Gyaan Glitch",
    hook: "Knowledge delivered with personality — a technical blog with a twist.",
    description:
      "An educational platform designed to share knowledge and insights on various technical topics.",
    problem: "Most technical blogs are dry and hard to parse — failing to retain reader attention.",
    solution: "Built an engaging knowledge-sharing platform with clean content architecture and a memorable brand voice.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop&crop=center",
    technologies: ["TypeScript", "CSS", "JavaScript", "React"],
    keyFeatures: [
      "Article and tutorial publishing system",
      "Clean reading UX with typography focus",
      "Category and tag-based navigation",
      "Branded, memorable design identity",
    ],
    impact: "Establishes thought leadership and can be monetized via sponsorships, courses, or premium content.",
    highlightTag: "Ed-Tech",
    highlightColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    liveUrl: "#",
    githubUrl: "https://github.com/manpreet1singh2/gyaan-glitch",
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    title: "Portfolio Website",
    hook: "Built my own digital identity — clean, fast, and impressive.",
    description:
      "My personal portfolio website showcasing my projects and skills as a Front-End Developer.",
    problem: "A developer's first impression is their portfolio — it needs to be as good as the work it shows.",
    solution: "Designed and shipped a performance-optimized portfolio that communicates skills, projects, and personality.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop&crop=center",
    technologies: ["HTML", "CSS", "JavaScript", "Next.js"],
    keyFeatures: [
      "Lighthouse 90+ performance score",
      "Smooth animations and transitions",
      "Projects, skills, and contact sections",
      "Deployed on GitHub Pages",
    ],
    impact: "Directly responsible for recruiter outreach and freelance client conversions.",
    highlightTag: "Personal Brand",
    highlightColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    liveUrl: "https://manpreet1singh2.github.io/portfolio1-main",
    githubUrl: "https://github.com/manpreet1singh2/portfolio1-main",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "Gym Website",
    hook: "A high-energy web presence that converts gym visitors into members.",
    description:
      "A responsive website for a gym with information about services, trainers, and membership options.",
    problem: "Gym businesses lose potential members to competitors with better web presence.",
    solution: "Built a conversion-focused gym website with service listings, trainer bios, and membership CTAs.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=300&fit=crop&crop=center",
    technologies: ["HTML", "CSS", "JavaScript"],
    keyFeatures: [
      "Responsive design for all devices",
      "Service and membership plan pages",
      "Trainer profiles with credentials",
      "Contact and inquiry form",
    ],
    impact: "A reusable template for fitness studios, wellness centers, and sports businesses.",
    highlightTag: "Client Project",
    highlightColor: "bg-green-500/10 text-green-400 border-green-500/20",
    liveUrl: "https://manpreet1singh2.github.io/gym-website/",
    githubUrl: "https://github.com/manpreet1singh2/gym-website",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "Netflix Clone",
    hook: "Pixel-perfect streaming UI — built from scratch.",
    description:
      "A clone of the Netflix interface with similar design and functionality.",
    problem: "Replicating a world-class streaming UI tests every front-end skill: layout, state, API, and polish.",
    solution: "Reverse-engineered Netflix's interface, recreating the browsing experience with real API-driven content.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=300&fit=crop&crop=center",
    technologies: ["HTML", "CSS", "JavaScript"],
    keyFeatures: [
      "Netflix-accurate hero and carousel layout",
      "Genre-based content browsing",
      "Hover previews and interactive elements",
      "Responsive across all screen sizes",
    ],
    impact: "Demonstrates UI precision, layout mastery, and API integration — strong signal for front-end roles.",
    highlightTag: "Frontend Mastery",
    highlightColor: "bg-red-500/10 text-red-400 border-red-500/20",
    liveUrl: "https://manpreet1singh2.github.io/netflix-clone/",
    githubUrl: "https://github.com/manpreet1singh2/netflix-clone",
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    title: "Weather App",
    hook: "Real-time forecasts, beautifully presented.",
    description:
      "A weather application that displays current weather conditions and forecasts for any location.",
    problem: "Most weather apps are cluttered — users just want the key info, fast.",
    solution: "Built a clean weather dashboard that fetches live data and presents it with clarity and speed.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop&crop=center",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    keyFeatures: [
      "Live weather data via third-party API",
      "Location-based auto-detection",
      "5-day forecast with visual indicators",
      "Clean, minimal interface",
    ],
    impact: "Classic API integration project demonstrating async JavaScript, error handling, and UX thinking.",
    highlightTag: "API Integration",
    highlightColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    liveUrl: "https://manpreet1singh2.github.io/weather-app/",
    githubUrl: "https://github.com/manpreet1singh2/weather-app",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "Drum Kit",
    hook: "Make music in your browser — keys to beats, instantly.",
    description:
      "An interactive drum kit that plays sounds when keys are pressed or buttons are clicked.",
    problem: "Demonstrating JavaScript event handling and audio APIs requires a project that's actually fun to use.",
    solution: "Built a responsive, keyboard-driven drum machine with real audio samples and visual feedback.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop&crop=center",
    technologies: ["HTML", "CSS", "JavaScript", "Web Audio API"],
    keyFeatures: [
      "Keyboard-triggered drum sounds",
      "Visual key press animations",
      "Multiple drum samples",
      "Zero-latency audio playback",
    ],
    impact: "Showcases DOM manipulation, event listeners, and audio API mastery in an engaging format.",
    highlightTag: "Interactive",
    highlightColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    liveUrl: "https://manpreet1singh2.github.io/drum-kit/",
    githubUrl: "https://github.com/manpreet1singh2/drum-kit",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    title: "To-Do List",
    hook: "Simple, fast, and satisfying task management.",
    description:
      "A simple to-do list application for managing tasks and daily activities.",
    problem: "Every developer needs to master CRUD — building it well shows foundational engineering discipline.",
    solution: "Built a clean, persistent to-do app with full create/edit/delete functionality and local storage sync.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=300&fit=crop&crop=center",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    keyFeatures: [
      "Add, edit, and delete tasks",
      "Persistent state via localStorage",
      "Task completion toggle",
      "Clean, distraction-free interface",
    ],
    impact: "Foundation for understanding state management patterns used in complex production apps.",
    highlightTag: "Vanilla JS",
    highlightColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    liveUrl: "https://manpreet1singh2.github.io/to-do-list/",
    githubUrl: "https://github.com/manpreet1singh2/to-do-list",
    icon: <Code2 className="h-4 w-4" />,
  },
]

// ─── PROJECT CARD COMPONENT ───────────────────────────────────────────────────

function ProjectCard({ project, index, isFeatured = false }: { project: Project; index: number; isFeatured?: boolean }) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card
        className={`h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
          isFeatured ? "border-primary/20 shadow-md" : ""
        }`}
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            unoptimized
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Highlight Tag */}
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${project.highlightColor}`}
            >
              {project.icon}
              {project.highlightTag}
            </span>
          </div>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
          {/* Hook */}
          <p className="text-sm font-medium text-primary/80 italic mt-0.5">{project.hook}</p>
          <CardDescription className="text-sm mt-1 line-clamp-2">{project.description}</CardDescription>
        </CardHeader>

        {isFeatured && (
          <CardContent className="pb-2 space-y-3 flex-1">
            {/* Problem / Solution */}
            <div className="space-y-2 text-xs">
              <div className="rounded-md bg-muted/60 p-2.5">
                <span className="font-semibold text-foreground/70 uppercase tracking-wide text-[10px]">Problem</span>
                <p className="mt-0.5 text-muted-foreground">{project.problem}</p>
              </div>
              <div className="rounded-md bg-primary/5 p-2.5 border border-primary/10">
                <span className="font-semibold text-foreground/70 uppercase tracking-wide text-[10px]">Solution</span>
                <p className="mt-0.5 text-muted-foreground">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <p className="text-[10px] font-semibold text-foreground/60 uppercase tracking-wide mb-1.5">
                Key Features
              </p>
              <ul className="space-y-1">
                {project.keyFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="rounded-md bg-emerald-500/5 border border-emerald-500/10 p-2.5 text-xs text-muted-foreground">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-[10px] uppercase tracking-wide">
                📈 Impact
              </span>
              <p className="mt-0.5">{project.impact}</p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        )}

        {!isFeatured && (
          <CardContent className="pb-2 flex-1">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="space-y-1">
              {project.keyFeatures.slice(0, 3).map((f, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </CardContent>
        )}

        <CardFooter className="flex justify-between gap-2 pt-3 border-t mt-auto">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 text-xs"
            disabled={project.liveUrl === "#"}
          >
            <Link
              href={project.liveUrl === "#" ? "" : project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={project.liveUrl === "#"}
              onClick={(e) => project.liveUrl === "#" && e.preventDefault()}
            >
              <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
              Live Demo
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="flex-1 text-xs">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-3.5 w-3.5 mr-1.5" />
              View Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of real-world products, automation systems, and AI-powered tools — each built to solve genuine
            problems.
          </p>
        </motion.div>

        {/* ── FEATURED PROJECTS (Enhanced) ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary px-3">
              ⭐ Featured Projects
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isFeatured={true} />
          ))}
        </div>

        {/* ── ALL OTHER PROJECTS ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground px-3">
              More Projects
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {existingProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isFeatured={false} />
          ))}
        </div>
      </div>
    </section>
  )
}