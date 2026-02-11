import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

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
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/clinicdigital-logo.png"
              alt="ClinicDigital.co - Bringing More Patients to Your Door"
              width={180}
              height={44}
              className="h-9 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
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

      {/* Footer */}
      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ClinicDigital.co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
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
