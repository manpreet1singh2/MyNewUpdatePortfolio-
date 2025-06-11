import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { PhotoGallery } from "@/components/photo-gallery"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PhotoGallery />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
