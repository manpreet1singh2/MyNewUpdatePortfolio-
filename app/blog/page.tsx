import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Building Scalable APIs with Node.js and Express",
      excerpt:
        "Learn how to design and implement scalable REST APIs using Node.js, Express, and best practices for production applications. We'll cover authentication, rate limiting, caching, and more.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Backend",
      slug: "scalable-apis-nodejs-express",
      featured: true,
    },
    {
      title: "Modern React Patterns and Best Practices",
      excerpt:
        "Explore the latest React patterns, hooks, and architectural decisions that will make your applications more maintainable and performant.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Frontend",
      slug: "modern-react-patterns",
      featured: true,
    },
    {
      title: "Database Design for Web Applications",
      excerpt:
        "A comprehensive guide to designing efficient database schemas for modern web applications with PostgreSQL, including normalization and indexing strategies.",
      date: "2024-01-01",
      readTime: "15 min read",
      category: "Database",
      slug: "database-design-web-apps",
      featured: false,
    },
    {
      title: "Deploying Next.js Applications to Production",
      excerpt:
        "Step-by-step guide to deploying Next.js applications with proper CI/CD pipelines, environment management, and performance optimization.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "DevOps",
      slug: "deploying-nextjs-production",
      featured: false,
    },
    {
      title: "TypeScript Tips for Better Code Quality",
      excerpt:
        "Advanced TypeScript techniques and patterns that will help you write more robust and maintainable code in your projects.",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "TypeScript",
      slug: "typescript-tips-code-quality",
      featured: false,
    },
    {
      title: "Understanding React Server Components",
      excerpt:
        "Deep dive into React Server Components, how they work, and when to use them in your Next.js applications for better performance.",
      date: "2023-12-15",
      readTime: "11 min read",
      category: "React",
      slug: "react-server-components",
      featured: false,
    },
  ]

  const categories = ["All", "Frontend", "Backend", "Database", "DevOps", "TypeScript", "React"]

  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, programming, and technology.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <Badge className="bg-orange-500 hover:bg-orange-600">Featured</Badge>
                    </div>
                    <CardTitle className="line-clamp-2 hover:text-orange-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
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
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Posts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <CardTitle className="line-clamp-2 hover:text-orange-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
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
        </div>
      </div>
    </div>
  )
}
