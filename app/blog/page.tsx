import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BlogList } from "@/components/blog-list"
import type { BlogPost } from "@/components/blog-list"
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
} from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export const metadata = {
  title: "Blog | Grow Your Practice - ClinicDigital.co",
  description:
    "Proven strategies to attract more patients and grow your clinic. Expert insights on web development, SEO, and healthcare digital marketing.",
  keywords: []
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function BlogPage() {
  let posts: BlogPost[] = []
  let featuredPost: BlogPost | null = null

  try {
    const supabase = await createClient()

    // Fetch the explicitly featured post first
    const { data: featuredPosts } = await supabase
      .from("blog_posts")
      .select(
        "id, title, slug, excerpt, author, author_role, categories, image_url, read_time, published_at"
      )
      .eq("published", true)
      .eq("featured", true)
      .order("published_at", { ascending: false })
      .limit(1)

    featuredPost = featuredPosts?.[0] ?? null

    // Fetch all published posts
    const { data: allPosts, error } = await supabase
      .from("blog_posts")
      .select(
        "id, title, slug, excerpt, author, author_role, categories, image_url, read_time, published_at"
      )
      .eq("published", true)
      .order("published_at", { ascending: false })

    if (error) {
      console.log("[v0] Supabase query error:", error.message)
    }
    posts = allPosts ?? []

    // If no post is explicitly featured, fall back to the most recent post
    if (!featuredPost && posts.length > 0) {
      featuredPost = posts[0]
    }
  } catch (err) {
    console.log("[v0] Failed to fetch blog posts:", err)
  }

  // Exclude the featured post from the remaining list
  const remainingPosts = posts.filter((p) => p.id !== featuredPost?.id)

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
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

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20 lg:px-8">
          <div className="max-w-4xl">
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

            <p className="mt-6 max-w-x1 text-lg leading-relaxed text-primary-foreground/70">
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
      {featuredPost && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Featured Article
            </p>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group mt-6 grid overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto">
                {featuredPost.image_url && (
                  <Image
                    src={featuredPost.image_url}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
                  {(featuredPost.categories ?? []).map((cat) => (
                    <span key={cat} className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(featuredPost.published_at)}
                  </span>
                  {featuredPost.read_time && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.read_time}
                    </span>
                  )}
                </div>

                <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl lg:text-4xl">
                  <span className="text-balance">{featuredPost.title}</span>
                </h2>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6">
                  <span className="text-xs text-muted-foreground">
                    By {featuredPost.author}
                    {featuredPost.author_role && ` -- ${featuredPost.author_role}`}
                  </span>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                  Read full article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Articles -- Client Component with filtering, search, pagination */}
      <BlogList posts={remainingPosts} />

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
