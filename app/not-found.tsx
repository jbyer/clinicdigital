import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* 404 Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">Error 404</span>
          </div>

          {/* Large 404 Display */}
          <h1 className="font-heading text-8xl font-bold tracking-tight text-primary sm:text-9xl">
            404
          </h1>

          {/* Message */}
          <h2 className="mt-6 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            Page Not Found
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved, 
            deleted, or the URL might be incorrect.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </main>
      <Footer />
    </>
  )
}
