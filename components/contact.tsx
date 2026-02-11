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
                  <p className="mt-0.5 text-sm text-muted-foreground">hello@clinicdigital.co</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">(555) 234-5678</p>
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

            {isSubmitted ? (
              <div className="mt-8 flex flex-col items-center justify-center rounded-xl bg-accent/10 py-16 text-center">
                <CheckCircle2 className="mb-4 h-12 w-12 text-accent" />
                <h4 className="font-heading text-xl font-semibold text-foreground">
                  Thank you!
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {"We've received your inquiry and will be in touch shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" required />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@practice.com" required />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 000-0000" />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="practiceType">Practice Type</Label>
                  <Select>
                    <SelectTrigger id="practiceType">
                      <SelectValue placeholder="Select your practice type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medspa">MedSpa</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                      <SelectItem value="dental">Dental</SelectItem>
                      <SelectItem value="plastic-surgery">Plastic Surgery</SelectItem>
                      <SelectItem value="general-practice">General Practice</SelectItem>
                      <SelectItem value="specialty">Other Specialty</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your practice and what challenges you're looking to solve..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="mt-2 w-full text-base">
                  <Send className="mr-2 h-4 w-4" />
                  Send Inquiry
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to our privacy policy. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
