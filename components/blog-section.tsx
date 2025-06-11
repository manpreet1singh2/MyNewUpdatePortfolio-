import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Building Scalable APIs with Node.js and Express",
      excerpt:
        "Learn how to design and implement scalable REST APIs using Node.js, Express, and best practices for production applications.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Backend",
      slug: "scalable-apis-nodejs-express",
    },
    {
      title: "Modern React Patterns and Best Practices",
      excerpt:
        "Explore the latest React patterns, hooks, and architectural decisions that will make your applications more maintainable.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Frontend",
      slug: "modern-react-patterns",
    },
    {
      title: "Database Design for Web Applications",
      excerpt:
        "A comprehensive guide to designing efficient database schemas for modern web applications with PostgreSQL.",
      date: "2024-01-01",
      readTime: "15 min read",
      category: "Database",
      slug: "database-design-web-apps",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Blog Posts</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I write about web development, best practices, and lessons learned from building real-world applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
