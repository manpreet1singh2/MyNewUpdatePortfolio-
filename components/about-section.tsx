"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Server, Award, GraduationCap } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "SQL",
    "MySQL",
    "Machine Learning",
    "AWS",
    "Git",
    "LaTeX",
    "Google Colab",
    "Figma",
  ]

  const education = [
    {
      degree: "Bachelor's in Computer Science Engineering",
      institution: "Chandigarh University, Gharuan",
      period: "2021 - 2024",
      grade: "CGPA: 7.2/10 (72%)",
    },
    {
      degree: "Master Diploma in Computer Information & System Management",
      institution: "Excel Net Computers Education Centre, Dhuri",
      period: "2019 - 2021",
      grade: "73.7%",
    },
    {
      degree: "Diploma",
      institution: "Vidya Sagar Polytechnic College, Dhuri",
      period: "2016 - 2019",
      grade: "65.7%",
    },
  ]

  const experience = {
    title: "Front-End and Back-End Developer Intern",
    company: "TryCyfer Technologies Pvt. Ltd.",
    period: "Oct 2024 – Dec 2024",
    achievements: [
      "Mastered web development essentials including HTML, CSS, Bootstrap, JavaScript, and SQL",
      "Built responsive designs and contributed to multiple web applications",
      "Worked on projects: Wheelstovet, mytr.ai, and AP Associate",
    ],
  }

  const awards = [
    "Silver Medalist in 'Software Testing' (NPTEL)",
    "Silver Medalist in 'Data Mining' (NPTEL)",
    "HTML, CSS, and JavaScript for Web Developers (Coursera)",
  ]

  const languages = ["English (Fluent)", "Hindi (Fluent)", "Punjabi (Native)"]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6 text-left">
                <p className="mb-4">
                  I'm a passionate Front-End Developer with a strong foundation in creating responsive and user-friendly
                  web applications. My journey in web development began with a curiosity about how websites work and has
                  evolved into a professional pursuit of crafting engaging digital experiences.
                </p>
                <p className="mb-4">
                  I'm particularly interested in the intersection of traditional coding and AI-assisted development.
                  I've embraced tools like GitHub Copilot and ChatGPT to enhance my workflow and productivity, allowing
                  me to focus on solving complex problems and creating intuitive user interfaces.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                  continuously expanding my knowledge in the ever-evolving field of web development.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Image and Quick Info */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square relative h-[400px]">
                  <Image
                    src="/images/manpreet-about.jpg"
                    alt="Manpreet Singh"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">Manpreet Singh</h3>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Email:</strong> dimplebrar13@gmail.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +91-9115813846
                    </p>
                    <p>
                      <strong>Location:</strong> Punjab, India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <div className="space-y-1 text-sm">
                      {languages.map((lang, index) => (
                        <p key={index}>{lang}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">{experience.title}</h4>
                    <Badge variant="outline">{experience.period}</Badge>
                  </div>
                  <p className="text-orange-600 dark:text-orange-400 font-medium mb-3">{experience.company}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Code className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                    <h4 className="font-semibold">Frontend</h4>
                    <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript, React</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Server className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <h4 className="font-semibold">Backend</h4>
                    <p className="text-sm text-muted-foreground">SQL, APIs, Server Logic</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Database className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <h4 className="font-semibold">Database</h4>
                    <p className="text-sm text-muted-foreground">MySQL, SQL</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Globe className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <h4 className="font-semibold">Cloud & Tools</h4>
                    <p className="text-sm text-muted-foreground">AWS, Git, Figma</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center">
                          <GraduationCap className="h-5 w-5 mr-2 text-orange-500" />
                          <h4 className="font-semibold">{edu.degree}</h4>
                        </div>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                      <p className="text-sm font-medium text-green-600 dark:text-green-400">{edu.grade}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards & Certificates */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Awards & Certificates</h3>
              <div className="space-y-2">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-orange-500" />
                    <span className="text-muted-foreground">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
