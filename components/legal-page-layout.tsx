import React from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: {
  title: string
  subtitle: string
  lastUpdated: string
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 lg:py-36">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-legal.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <FileText className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium uppercase tracking-wide text-primary-foreground/90">
              Legal
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70 lg:text-lg">
            {subtitle}
          </p>

          <p className="mt-6 text-sm text-primary-foreground/50">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
        <article className="prose-legal flex flex-col gap-8">
          {children}
        </article>
      </main>

      <Footer />
    </>
  )
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="font-heading text-xl font-semibold text-foreground">
        {heading}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  )
}
