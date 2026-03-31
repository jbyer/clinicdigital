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
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '20px'
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
          data-height="785"
          data-layout-iframe-id="inline-yIn00UuRdK8An0DaRkKu"
          data-form-id="yIn00UuRdK8An0DaRkKu"
          title="Affiliate Form" >
        </iframe>
        <script src="https://brand.clinicdigital.co/js/form_embed.js"></script>




        <p className="mt-6 text-center text-sm text-primary-foreground/50">
          Applications are typically reviewed within 24-48 hours.
        </p>
      </div>
    </section>
  )
}
