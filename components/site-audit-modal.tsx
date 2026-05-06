"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle2, Loader2, Search } from "lucide-react"

interface SiteAuditModalProps {
  children?: React.ReactNode
  triggerText?: string
  triggerVariant?: "default" | "outline" | "ghost" | "link"
  triggerSize?: "default" | "sm" | "lg"
  triggerClassName?: string
}

export function SiteAuditModal({
  children,
  triggerText = "Get Free Site Audit",
  triggerVariant = "default",
  triggerSize = "default",
  triggerClassName,
}: SiteAuditModalProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteUrl: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/site-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit request")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", websiteUrl: "" })
    setIsSubmitted(false)
    setError("")
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      // Reset after close animation
      setTimeout(resetForm, 300)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children || (
          <Button variant={triggerVariant} size={triggerSize} className={triggerClassName}>
            <Search className="mr-2 h-4 w-4" />
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {isSubmitted ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
            <DialogHeader className="mt-4">
              <DialogTitle className="text-center text-xl">Audit Request Received!</DialogTitle>
              <DialogDescription className="text-center">
                Thank you for your interest! We&apos;ll analyze your website and send you a
                comprehensive audit report within 24-48 hours.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => handleOpenChange(false)}
              className="mt-6"
              variant="outline"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl">
                <Search className="h-5 w-5 text-primary" />
                Request Your Free Site Audit
              </DialogTitle>
              <DialogDescription>
                Get a comprehensive analysis of your website&apos;s performance, SEO, and
                conversion opportunities. Enter your details below.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="audit-name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="audit-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="audit-email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="audit-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="audit-phone" className="mb-1.5 block text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="audit-phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Website URL */}
              <div>
                <label htmlFor="audit-website" className="mb-1.5 block text-sm font-medium text-foreground">
                  Website URL <span className="text-destructive">*</span>
                </label>
                <input
                  type="url"
                  id="audit-website"
                  required
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  placeholder="https://yourwebsite.com"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gap-2"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4" />
                    Request Free Audit
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                No spam. Your information is secure and will only be used to deliver your audit.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
