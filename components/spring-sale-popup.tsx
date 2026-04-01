"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const COUPON_CODE = "EMBGYE5"
const STORAGE_KEY = "spring-sale-popup-dismissed"

export function SpringSalePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    // Check if it's April
    const now = new Date()
    const isApril = now.getMonth() === 3 // April is month 3 (0-indexed)
    
    if (!isApril) return

    // Check if user has already dismissed the popup this session
    const dismissed = sessionStorage.getItem(STORAGE_KEY)
    if (dismissed) return

    // Show popup after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem(STORAGE_KEY, "true")
  }

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(COUPON_CODE)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm transition-opacity"
        onClick={handleDismiss}
        aria-hidden="true"
      />

      {/* Popup */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="spring-sale-title"
        className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 animate-in fade-in-0 zoom-in-95 duration-300"
      >
        <div className="relative overflow-hidden rounded-2xl bg-background shadow-2xl">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute right-3 top-3 z-10 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="relative px-6 py-8 text-center sm:px-8 sm:py-10">
            {/* Badge */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
              <Sparkles className="h-7 w-7 text-accent" />
            </div>

            {/* Heading */}
            <h2
              id="spring-sale-title"
              className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Spring Sale
            </h2>

            {/* Discount badge */}
            <div className="mx-auto mt-3 inline-block rounded-full bg-primary px-4 py-1.5">
              <span className="text-lg font-bold text-primary-foreground sm:text-xl">
                10% OFF
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-muted-foreground">
              Celebrate spring with savings! Get 10% off your total purchase this April.
            </p>

            {/* Coupon code */}
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Use code at checkout:
              </p>
              <div className="mx-auto flex max-w-xs items-center justify-center gap-2 rounded-lg border-2 border-dashed border-primary/50 bg-primary/5 px-4 py-3">
                <span className="font-mono text-lg font-bold tracking-wider text-foreground">
                  {COUPON_CODE}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="rounded-md p-1.5 text-primary transition-colors hover:bg-primary/10"
                  aria-label={isCopied ? "Copied!" : "Copy coupon code"}
                >
                  {isCopied ? (
                    <Check className="h-5 w-5 text-accent" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/offers/chatbot">
                  Shop Now
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDismiss}
              >
                Maybe Later
              </Button>
            </div>

            {/* Fine print */}
            <p className="mt-4 text-xs text-muted-foreground">
              Valid through April 30th. Cannot be combined with other offers.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
