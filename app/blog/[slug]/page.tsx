import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  BookOpen,
  ArrowRight,
} from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .eq("published", true)
    .single()

  if (!post) {
    return { title: "Post Not Found | ClinicDigital" }
  }

  return {
    title: `${post.title} | ClinicDigital Blog`,
    description: post.excerpt,
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function isHtmlContent(content: string): boolean {
  return /<[a-z][\s\S]*>/i.test(content)
}

function renderMarkdownContent(content: string) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      continue
    }

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="mt-10 mb-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          {trimmed.slice(3)}
        </h2>
      )
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="mt-8 mb-3 font-heading text-xl font-semibold text-foreground"
        >
          {trimmed.slice(4)}
        </h3>
      )
    } else {
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/)
      const rendered = parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          )
        }
        return part
      })

      elements.push(
        <p
          key={key++}
          className="mb-4 text-base leading-relaxed text-muted-foreground lg:text-lg lg:leading-8"
        >
          {rendered}
        </p>
      )
    }
  }

  return elements
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single()

  if (!post) {
    notFound()
  }

  // Fetch related posts (overlapping categories, excluding current)
  const { data: relatedPosts } = await supabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, categories, image_url, read_time, published_at")
    .eq("published", true)
    .overlaps("categories", post.categories ?? [])
    .neq("id", post.id)
    .order("published_at", { ascending: false })
    .limit(2)

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden lg:min-h-[50vh]">
        <div className="absolute inset-0">
          {post.image_url && (
            <Image
              src={post.image_url}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/80 to-foreground/60" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-4xl flex-col justify-end px-6 pb-16 pt-28 lg:min-h-[50vh] lg:px-8 lg:pb-20">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Blog
          </Link>

          <div className="mb-4 flex flex-wrap gap-2">
            {(post.categories ?? []).map((cat: string) => (
              <span key={cat} className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                {cat}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">{post.title}</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {post.author}
              {post.author_role && (
                <span className="text-primary-foreground/40">
                  {" "}-- {post.author_role}
                </span>
              )}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.published_at)}
            </span>
            {post.read_time && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.read_time}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main className="py-12 lg:py-16">
        <article className="mx-auto max-w-3xl px-6 lg:px-8">
          {isHtmlContent(post.content) ? (
            <div
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            renderMarkdownContent(post.content)
          )}
        </article>
      </main>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="bg-secondary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Keep Reading
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Related articles
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {related.image_url && (
                      <Image
                        src={related.image_url}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
                      {(related.categories ?? []).map((cat: string) => (
                        <span key={cat} className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(related.published_at)}
                      </span>
                      {related.read_time && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {related.read_time}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-card-foreground">
                      <span className="text-balance">{related.title}</span>
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {related.excerpt}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-primary py-14 lg:py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-foreground" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <BookOpen className="mx-auto mb-4 h-8 w-8 text-accent" />
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to grow your practice?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Let us show you how AI-powered marketing can transform your patient
            acquisition and retention.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-primary-foreground text-primary hover:bg-red-600 hover:text-white text-base font-semibold"
            >
              <Link href="/book-a-call">Book a Free Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
