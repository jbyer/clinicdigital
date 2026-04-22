"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, X, Copy } from "lucide-react"
import type { Metadata } from "next"

const tabs = [
  { id: "logos", label: "Logos" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "usage", label: "Usage" },
]

const colors = [
  {
    name: "Navy Black",
    hex: "#0D1117",
    usage: "Primary background",
    size: "large",
  },
  {
    name: "Clinic Blue",
    hex: "#4A8EC2",
    usage: "Primary accent",
    size: "large",
  },
  {
    name: "Sky Blue",
    hex: "#6BAED6",
    usage: "Highlights",
    size: "medium",
  },
  {
    name: "Deep Blue",
    hex: "#2C6A9A",
    usage: "CTAs, links",
    size: "medium",
  },
  {
    name: "Pale Blue",
    hex: "#D4E9F7",
    usage: "Light backgrounds",
    size: "medium",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    usage: "Text, reversed",
    size: "small",
    border: true,
  },
  {
    name: "Neutral Gray",
    hex: "#6B7280",
    usage: "Body text, captions",
    size: "small",
  },
  {
    name: "Off White",
    hex: "#F5F9FC",
    usage: "Page bg, cards",
    size: "small",
  },
]

const dosAndDonts = [
  {
    do: "Use the logo on dark navy or white backgrounds",
    dont: "Place the logo on busy photos or patterned backgrounds",
  },
  {
    do: "Maintain the minimum 20px clear space on all sides",
    dont: "Crop, stretch, or distort the logo in any direction",
  },
  {
    do: "Use the white version on dark or colored backgrounds",
    dont: "Change the logo colors or use unapproved color combinations",
  },
  {
    do: "Scale proportionally maintaining the original aspect ratio",
    dont: "Add drop shadows, outlines, or visual effects to the logo",
  },
  {
    do: "Use Sora + DM Sans as the exclusive type pairing",
    dont: "Mix in other fonts or use system fonts in client materials",
  },
]

function ColorCard({ color, onCopy }: { color: typeof colors[0]; onCopy: (hex: string) => void }) {
  const heightClass = color.size === "large" ? "h-24" : color.size === "medium" ? "h-16" : "h-14"
  
  return (
    <div>
      <div
        className={`${heightClass} w-full rounded-lg ${color.border ? "border border-border" : ""}`}
        style={{ backgroundColor: color.hex }}
      />
      <div className="mt-2 flex items-start justify-between">
        <div>
          <p className="font-medium text-foreground">{color.name}</p>
          <button
            onClick={() => onCopy(color.hex)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            {color.hex}
            <Copy className="h-3 w-3" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground">{color.usage}</p>
      </div>
    </div>
  )
}

export default function BrandPage() {
  const [activeTab, setActiveTab] = useState("logos")
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(text)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-foreground">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            {/* Tab Navigation */}
            <nav className="flex gap-8 border-b border-background/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-b-2 border-primary text-primary"
                      : "text-background/60 hover:text-background"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          {/* Logos Tab */}
          {activeTab === "logos" && (
            <div className="space-y-16">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Logo System
              </h2>

              {/* Primary Logos */}
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                    Primary — Dark BG
                  </h3>
                  <div className="flex h-48 items-center justify-center rounded-lg bg-[#0D1117] p-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-3">
                        <svg className="h-12 w-12 text-[#6BAED6]" viewBox="0 0 48 48" fill="none">
                          <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                          <rect x="8" y="12" width="32" height="20" stroke="currentColor" strokeWidth="2" />
                          <path d="M24 16v8M20 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <rect x="20" y="36" width="8" height="4" fill="currentColor" />
                        </svg>
                        <div className="text-left">
                          <span className="text-2xl font-bold text-white">Clinic</span>
                          <span className="text-2xl font-bold text-[#6BAED6]">Digital</span>
                          <span className="text-2xl font-bold text-white">.co</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-[#6BAED6]">Bringing More Patients to Your Door</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                    Reverse — Light BG
                  </h3>
                  <div className="flex h-48 items-center justify-center rounded-lg bg-[#D4E9F7] p-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-3">
                        <svg className="h-12 w-12 text-[#4A8EC2]" viewBox="0 0 48 48" fill="none">
                          <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                          <rect x="8" y="12" width="32" height="20" stroke="currentColor" strokeWidth="2" />
                          <path d="M24 16v8M20 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <rect x="20" y="36" width="8" height="4" fill="currentColor" />
                        </svg>
                        <div className="text-left">
                          <span className="text-2xl font-bold text-[#4A8EC2]">Clinic</span>
                          <span className="text-2xl font-bold text-[#2C6A9A]">Digital</span>
                          <span className="text-2xl font-bold text-[#4A8EC2]">.co</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-[#2C6A9A]">Bringing More Patients to Your Door</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon Variations */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                  Icon Variations
                </h3>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div>
                    <div className="flex h-28 items-center justify-center rounded-lg bg-[#0D1117]">
                      <svg className="h-14 w-14 text-[#6BAED6]" viewBox="0 0 48 48" fill="none">
                        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                        <rect x="8" y="12" width="32" height="20" stroke="currentColor" strokeWidth="2" />
                        <path d="M24 16v8M20 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <rect x="20" y="36" width="8" height="4" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="mt-2 text-center text-sm text-muted-foreground">Icon on dark</p>
                  </div>
                  <div>
                    <div className="flex h-28 items-center justify-center rounded-lg border border-border bg-white">
                      <svg className="h-14 w-14 text-[#4A8EC2]" viewBox="0 0 48 48" fill="none">
                        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                        <rect x="8" y="12" width="32" height="20" stroke="currentColor" strokeWidth="2" />
                        <path d="M24 16v8M20 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <rect x="20" y="36" width="8" height="4" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="mt-2 text-center text-sm text-muted-foreground">Icon on light</p>
                  </div>
                  <div>
                    <div className="flex h-28 items-center justify-center rounded-lg bg-[#4A8EC2]">
                      <svg className="h-14 w-14 text-white" viewBox="0 0 48 48" fill="none">
                        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                        <rect x="8" y="12" width="32" height="20" stroke="currentColor" strokeWidth="2" />
                        <path d="M24 16v8M20 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <rect x="20" y="36" width="8" height="4" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="mt-2 text-center text-sm text-muted-foreground">Icon on brand blue</p>
                  </div>
                </div>
              </div>

              {/* Minimum Clear Space */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                  Minimum Clear Space
                </h3>
                <div className="flex flex-col items-center">
                  <div className="relative inline-flex items-center justify-center rounded-lg bg-[#0D1117] p-10">
                    <div className="absolute inset-0 border-2 border-dashed border-[#6BAED6]/30 rounded-lg m-2" />
                    <svg className="h-20 w-20 text-[#6BAED6]" viewBox="0 0 48 48" fill="none">
                      <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                      <rect x="8" y="12" width="32" height="20" stroke="currentColor" strokeWidth="2" />
                      <path d="M24 16v8M20 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <rect x="20" y="36" width="8" height="4" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">min. 20px clear zone on all sides</p>
                </div>
              </div>
            </div>
          )}

          {/* Colors Tab */}
          {activeTab === "colors" && (
            <div className="space-y-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Color Palette
              </h2>

              {copiedColor && (
                <div className="fixed bottom-4 right-4 rounded-lg bg-foreground px-4 py-2 text-sm text-background shadow-lg">
                  Copied {copiedColor} to clipboard
                </div>
              )}

              {/* Primary Colors */}
              <div className="grid gap-6 md:grid-cols-2">
                {colors.slice(0, 2).map((color) => (
                  <ColorCard key={color.hex} color={color} onCopy={copyToClipboard} />
                ))}
              </div>

              {/* Secondary Colors */}
              <div className="grid gap-6 sm:grid-cols-3">
                {colors.slice(2, 5).map((color) => (
                  <ColorCard key={color.hex} color={color} onCopy={copyToClipboard} />
                ))}
              </div>

              {/* Neutral Colors */}
              <div className="grid gap-6 sm:grid-cols-3">
                {colors.slice(5).map((color) => (
                  <ColorCard key={color.hex} color={color} onCopy={copyToClipboard} />
                ))}
              </div>
            </div>
          )}

          {/* Typography Tab */}
          {activeTab === "typography" && (
            <div className="space-y-16">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Typography System
              </h2>

              {/* Display - Sora */}
              <div className="space-y-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                  Display — Sora
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      H1 / Hero Heading
                    </p>
                    <p className="mt-2 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                      Bringing More Patients to Your Door
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      H2 / Section Heading
                    </p>
                    <p className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground">
                      AI-Powered Patient Acquisition
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      H3 / Card Heading
                    </p>
                    <p className="mt-2 font-heading text-xl font-bold text-foreground">
                      Voice AI Receptionist
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Tagline / Accent
                    </p>
                    <p className="mt-2 text-primary">
                      Bringing More Patients to Your Door
                    </p>
                  </div>
                </div>
              </div>

              {/* Body - DM Sans */}
              <div className="space-y-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                  Body — DM Sans
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Body / 15px Regular
                    </p>
                    <p className="mt-2 text-base text-foreground">
                      ClinicDigital helps medical practices grow faster with AI automation, smart websites, and digital marketing — all built for healthcare compliance.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Caption / 12px Muted
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      HIPAA-compliant · GoHighLevel-powered · Serving medical practices, med spas & dental offices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Usage Tab */}
          {activeTab === "usage" && (
            <div className="space-y-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Logo Usage Guidelines
              </h2>

              <div className="space-y-4">
                {dosAndDonts.map((item, index) => (
                  <div key={index} className="grid gap-4 md:grid-cols-2">
                    {/* Do */}
                    <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-green-600">Do</p>
                      <p className="mt-1 text-sm text-foreground">{item.do}</p>
                    </div>
                    {/* Don't */}
                    <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-red-600">Don&apos;t</p>
                      <p className="mt-1 text-sm text-foreground">{item.dont}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
