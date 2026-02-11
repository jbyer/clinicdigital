"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                {"Ready to transform your practice? Let's talk."}
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Book a free strategy consultation to discover how AI-powered automation can streamline
              your operations and drive measurable growth.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="mt-0.5 text-sm text-muted-foreground"><a href="mailto:info@clinicdigital.co">info@clinicdigital.co</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <p className="mt-0.5 text-sm text-muted-foreground"><a href="tel:+18555800608">(855) 580-0608</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Office</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Remote-first with teams across the US
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-12 rounded-2xl border border-border bg-card p-6">
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                {
                  "\"ClinicDigital completely transformed how we manage patient inquiries. Our booking rate jumped 85% in the first three months, and we haven't looked back.\""
                }
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-bold text-primary">JM</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Dr. Jessica Monroe</p>
                  <p className="text-xs text-muted-foreground">
                    Owner, Radiance Aesthetic Studio
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div id="book" className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
            <h3 className="font-heading text-xl font-semibold text-card-foreground">
              Book Your Free Strategy Session
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below and we will be in touch within 24 hours.
            </p>



          </div>
        </div>
      </div>
    </section>
  )
}
