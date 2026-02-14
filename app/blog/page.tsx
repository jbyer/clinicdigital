"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  Search,
} from "lucide-react"
import { Input } from "@/components/ui/input"

const categories = [
  "All",
  "AI & Automation",
  "Marketing",
  "SEO",
  "Patient Experience",
  "Industry Insights",
]

const featuredPost = {
  title: "How AI Is Reshaping Patient Engagement in 2026",
  excerpt:
    "From intelligent chatbots to predictive outreach, discover how forward-thinking practices are using AI to build stronger patient relationships and increase retention rates by over 60%.",
  image: "/images/blog/ai-patient-engagement.jpg",
  category: "AI & Automation",
  date: "February 10, 2026",
  readTime: "8 min read",
  slug: "#",
}

const posts = [
  {
    title: "The Ultimate Medspa Marketing Playbook for 2026",
    excerpt:
      "A data-driven guide to building a marketing engine that consistently fills your appointment book. Covers email, SMS, social, and paid strategies tailored for medspas.",
    image: "/images/blog/medspa-marketing.jpg",
    category: "Marketing",
    date: "February 3, 2026",
    readTime: "12 min read",
    slug: "#",
  },
  {
    title: "Local SEO for Medical Practices: Dominate the Map Pack",
    excerpt:
      "Step-by-step strategies for ranking in the top 3 of Google Maps results for high-intent searches like 'dermatologist near me' and 'medspa in [your city].'",
    image: "/images/blog/local-seo.jpg",
    category: "SEO",
    date: "January 27, 2026",
    readTime: "10 min read",
    slug: "#",
  },
  {
    title: "AI Chatbots in Healthcare: Beyond the Hype",
    excerpt:
      "A practical look at what AI chatbots can actually do for your practice today -- from 24/7 lead capture to intelligent appointment scheduling and FAQ handling.",
    image: "/images/blog/chatbot-healthcare.jpg",
    category: "AI & Automation",
    date: "January 20, 2026",
    readTime: "7 min read",
    slug: "#",
  },
  {
    title: "5 Proven Strategies to Reduce Patient No-Shows by 80%",
    excerpt:
      "No-shows cost practices thousands each month. Learn how automated reminders, smart scheduling, and predictive analytics can dramatically cut your no-show rate.",
    image: "/images/blog/reduce-no-shows.jpg",
    category: "Patient Experience",
    date: "January 13, 2026",
    readTime: "6 min read",
    slug: "#",
  },
  {
    title: "Why Your Clinic Website Isn't Converting (And How to Fix It)",
    excerpt:
      "Common conversion killers on medical practice websites and the design, copy, and UX changes that can double your booking rate within 90 days.",
    image: "/images/blog/website-conversion.jpg",
    category: "Marketing",
    date: "January 6, 2026",
    readTime: "9 min read",
    slug: "#",
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-blog.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
              <BookOpen className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium uppercase tracking-wide text-primary-foreground/90">
                Blog & Insights
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                Insights to{" "}
                <span className="text-primary">grow your practice</span>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
              Expert guides, actionable strategies, and industry analysis to help
              medical practices and medspas thrive in the age of AI.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="text-base hover:bg-red-600 hover:text-white"
              >
                <a href="#articles">
                  Browse Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Article */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Featured Article
          </p>

          <Link
            href={featuredPost.slug}
            className="group mt-6 grid overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl lg:text-4xl">
                <span className="text-balance">{featuredPost.title}</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                Read full article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Articles */}
      <section id="articles" className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header and Search */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                All Articles
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <span className="text-balance">
                  Latest from our blog
                </span>
              </h2>
            </div>

            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-background pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link
                key={post.title}
                href={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-card-foreground">
                    <span className="text-balance">{post.title}</span>
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-card-foreground">
                No articles found
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search or filter to find what you are looking
                for.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative overflow-hidden bg-primary py-14 lg:py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-foreground" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <BookOpen className="mx-auto mb-4 h-8 w-8 text-accent" />
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Stay ahead of the curve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Get the latest AI and marketing insights for healthcare delivered
            straight to your inbox. No spam, just actionable strategies.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-primary-foreground text-primary hover:bg-red-600 hover:text-white text-base font-semibold"
            >
              <Link href="/book-a-call">Book a Free Strategy Call</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/20 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
