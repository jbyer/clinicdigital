"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Clock,
  Calendar,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  author: string
  author_role: string | null
  category: string
  image_url: string | null
  read_time: string | null
  published_at: string
}

const POSTS_PER_PAGE = 6

const categories = [
  "All",
  "AI & Automation",
  "Marketing",
  "SEO",
  "Patient Experience",
  "Industry Insights",
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const paginatedPosts = filteredPosts.slice(
    (safeCurrentPage - 1) * POSTS_PER_PAGE,
    safeCurrentPage * POSTS_PER_PAGE
  )

  function handleCategoryChange(category: string) {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  function handleSearchChange(query: string) {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  return (
    <section id="articles" className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header and Search */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              All Articles
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-balance">Latest from our blog</span>
            </h2>
          </div>

          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
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
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "border border-border bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {post.image_url && (
                  <Image
                    src={post.image_url}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
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
                    {formatDate(post.published_at)}
                  </span>
                  {post.read_time && (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.read_time}
                    </span>
                  )}
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
                setCurrentPage(1)
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              disabled={safeCurrentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={safeCurrentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(page)}
                aria-label={`Go to page ${page}`}
                aria-current={safeCurrentPage === page ? "page" : undefined}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              disabled={safeCurrentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
