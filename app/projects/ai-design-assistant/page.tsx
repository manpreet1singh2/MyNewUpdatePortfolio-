import { ProjectDetail } from "@/components/project-detail"

export default function AIDesignAssistantPage() {
  const project = {
    title: "AI-Powered Design Assistant",
    description:
      "Your AI-Powered Creative Partner for generating stunning graphics and designs using artificial intelligence.",
    longDescription:
      "The AI-Powered Design Assistant is a cutting-edge web application that leverages artificial intelligence to help users create professional-quality designs without needing extensive design skills. This tool uses advanced AI models to generate logos, social media graphics, marketing materials, and more based on simple text prompts from the user.",
    image: "/images/projects/ai-design-assistant.png",
    detailImage: "/images/projects/ai-design-assistant-detail.png",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "AI APIs", "Vercel"],
    features: [
      "Text-to-image generation for creating custom designs",
      "Template library for quick design creation",
      "Style customization options including colors, fonts, and layouts",
      "Export functionality in multiple formats (PNG, JPG, SVG)",
      "User accounts to save and manage design projects",
      "Responsive design for mobile and desktop use",
    ],
    challenges: [
      "Optimizing API calls to reduce latency and improve user experience",
      "Implementing efficient caching strategies for generated designs",
      "Creating an intuitive user interface for complex design operations",
      "Ensuring consistent quality across different types of generated designs",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/manpreet1singh2/Graphic-design-create-WIth-AI",
    year: "2023",
  }

  return <ProjectDetail project={project} />
}
