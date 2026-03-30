"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

const referralMethods = [
  "Personal network",
  "Social media",
  "Blog/content",
  "Consulting clients",
  "Email marketing",
  "Other",
]

export function AffiliatesCta() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    referralMethod: "",
    agreedToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="apply" className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <CheckCircle2 className="mx-auto h-16 w-16 text-primary-foreground" />
          <h2 className="mt-6 font-heading text-3xl font-bold text-primary-foreground">
            Application Received!
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70">
            Thank you for applying to join our affiliate program. We&apos;ll review
            your application and get back to you within 24-48 hours with your
            affiliate link and dashboard access.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="bg-primary py-16 lg:py-20">
      {/* Decorative */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-primary-foreground/5" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Ready to Start Earning?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            Join our affiliate program and start earning 10% on every project
            plus lifetime monthly commissions on retainers.
          </p>
        </div>

        <iframe
          src="https://brand.clinicdigital.co/widget/form/yIn00UuRdK8An0DaRkKu"
          style={{
            width: '576',
            height: '100%',
            border: 'none',
            borderRadius: '3px',
          }}
          id="inline-yIn00UuRdK8An0DaRkKu"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Affiliate Form"
          data-height="813"
          data-layout-iframe-id="inline-yIn00UuRdK8An0DaRkKu"
          data-form-id="yIn00UuRdK8An0DaRkKu"
          title="Affiliate Form"
        >
        </iframe>
        <script src="https://brand.clinicdigital.co/js/form_embed.js"></script>

        {/* Application Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-xl rounded-2xl bg-background p-6 shadow-xl sm:p-8"
        >
          <div className="grid gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-foreground"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="John Smith"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-foreground"
              >
                Company / Website
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your company or website URL"
              />
            </div>

            {/* Referral Method */}
            <div>
              <label
                htmlFor="referralMethod"
                className="block text-sm font-medium text-foreground"
              >
                How do you plan to refer clients?
              </label>
              <select
                id="referralMethod"
                value={formData.referralMethod}
                onChange={(e) =>
                  setFormData({ ...formData, referralMethod: e.target.value })
                }
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Select an option</option>
                {referralMethods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreedToTerms"
                required
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreedToTerms: e.target.checked })
                }
                className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
              />
              <label
                htmlFor="agreedToTerms"
                className="text-sm text-muted-foreground"
              >
                I agree to the{" "}
                <a href="/terms" className="text-primary underline">
                  affiliate terms and conditions
                </a>{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="mt-2 w-full text-base hover:bg-red-600"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Apply to Become an Affiliate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-primary-foreground/50">
          Applications are typically reviewed within 24-48 hours.
        </p>
      </div>
    </section>
  )
}
