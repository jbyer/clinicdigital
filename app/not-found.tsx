import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
          <Image
            src="/images/hero-other-services.png"
            alt="Healthcare digital marketing workspace with service dashboards and analytics"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/80 to-foreground/90" />
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Error 404
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                404 Page Not Found
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="flex min-h-[calc(100vh-400px)] flex-col items-center justify-center px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Homepage
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/services/lead-generation">
                  <Search className="mr-2 h-4 w-4" />
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Additional Help */}
            <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                Looking for something specific?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Here are some helpful links to get you started:
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/services/ai-chatbots"
                  className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <ArrowLeft className="h-4 w-4 rotate-180 text-primary" />
                  AI Chatbots
                </Link>
                <Link
                  href="/services/voice-ai"
                  className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <ArrowLeft className="h-4 w-4 rotate-180 text-primary" />
                  Voice AI
                </Link>
                <Link
                  href="/services/seo"
                  className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <ArrowLeft className="h-4 w-4 rotate-180 text-primary" />
                  SEO Services
                </Link>
                <Link
                  href="/book-a-call"
                  className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <ArrowLeft className="h-4 w-4 rotate-180 text-primary" />
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
