import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string
  lastUpdated: string
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="mb-10">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

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
