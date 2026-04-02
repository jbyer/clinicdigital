"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Building2,
  Target,
  Globe,
  FileText,
  MapPin,
  Star,
  Key,
  DollarSign,
  Search,
} from "lucide-react"

const steps = [
  { id: 1, title: "Business Basics", icon: Building2 },
  { id: 2, title: "Goals", icon: Target },
  { id: 3, title: "Website & Tech", icon: Globe },
  { id: 4, title: "Content", icon: FileText },
  { id: 5, title: "Local SEO", icon: MapPin },
  { id: 6, title: "Reviews", icon: Star },
  { id: 7, title: "Access", icon: Key },
  { id: 8, title: "Budget", icon: DollarSign },
]

const successMetrics = [
  "More phone calls",
  "More form submissions",
  "More foot traffic",
  "Higher search rankings",
  "More website visitors",
  "Brand awareness",
]

const directories = [
  "Yelp",
  "Healthgrades",
  "Zocdoc",
  "Vitals",
  "WebMD",
  "RealSelf",
  "Google Maps",
  "Apple Maps",
  "Bing Places",
  "Facebook",
  "None of the above",
]

type FormData = {
  // Step 1: Business Basics
  businessDescription: string
  idealPatient: string
  primaryServices: string
  locationsServed: string
  topCompetitors: string
  uniqueDifferentiator: string
  // Step 2: Goals & Expectations
  successDefinition: string
  focusAreas: string[]
  previousSeoExperience: string
  previousSeoProvider: string
  previousSeoResults: string
  monthlyLeadTarget: string
  // Step 3: Website & Technical
  websiteUrl: string
  websiteBuilder: string
  websiteManager: string
  hasBackendAccess: string
  hasGoogleAnalytics: string
  hasSearchConsole: string
  domainAge: string
  // Step 4: Content & Keywords
  targetServices: string
  highRevenueServices: string
  hasExistingContent: string
  existingContentDescription: string
  brandVoice: string
  // Step 5: Local SEO
  hasGoogleBusinessProfile: string
  gbpVerified: string
  businessName: string
  businessAddress: string
  businessPhone: string
  listedDirectories: string[]
  servesMultipleCities: string
  citiesServed: string
  // Step 6: Reputation & Reviews
  googleReviewCount: string
  averageStarRating: string
  hasReviewProcess: string
  reviewProcessDescription: string
  // Step 7: Access & Approvals
  canGrantAccess: string
  accessNotes: string
  mainContactName: string
  mainContactEmail: string
  mainContactPhone: string
  requiresApproval: string
  approverName: string
  // Step 8: Budget & Timeline
  hasContentBudget: string
  contentBudgetAmount: string
  upcomingPromotions: string
  pastPenalties: string
  additionalNotes: string
  agreedToTerms: boolean
}

const initialFormData: FormData = {
  businessDescription: "",
  idealPatient: "",
  primaryServices: "",
  locationsServed: "",
  topCompetitors: "",
  uniqueDifferentiator: "",
  successDefinition: "",
  focusAreas: [],
  previousSeoExperience: "",
  previousSeoProvider: "",
  previousSeoResults: "",
  monthlyLeadTarget: "",
  websiteUrl: "",
  websiteBuilder: "",
  websiteManager: "",
  hasBackendAccess: "",
  hasGoogleAnalytics: "",
  hasSearchConsole: "",
  domainAge: "",
  targetServices: "",
  highRevenueServices: "",
  hasExistingContent: "",
  existingContentDescription: "",
  brandVoice: "",
  hasGoogleBusinessProfile: "",
  gbpVerified: "",
  businessName: "",
  businessAddress: "",
  businessPhone: "",
  listedDirectories: [],
  servesMultipleCities: "",
  citiesServed: "",
  googleReviewCount: "",
  averageStarRating: "",
  hasReviewProcess: "",
  reviewProcessDescription: "",
  canGrantAccess: "",
  accessNotes: "",
  mainContactName: "",
  mainContactEmail: "",
  mainContactPhone: "",
  requiresApproval: "",
  approverName: "",
  hasContentBudget: "",
  contentBudgetAmount: "",
  upcomingPromotions: "",
  pastPenalties: "",
  additionalNotes: "",
  agreedToTerms: false,
}

export default function SeoOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const updateField = (field: keyof FormData, value: string | string[] | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const toggleArrayField = (field: keyof FormData, value: string) => {
    const currentValues = formData[field] as string[]
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]
    updateField(field, newValues)
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.businessDescription.trim()) newErrors.businessDescription = "Please describe your business"
      if (!formData.primaryServices.trim()) newErrors.primaryServices = "Please enter your primary services"
      if (!formData.locationsServed.trim()) newErrors.locationsServed = "Please enter the locations you serve"
    }

    if (step === 2) {
      if (!formData.successDefinition.trim()) newErrors.successDefinition = "Please describe what success looks like"
      if (formData.focusAreas.length === 0) newErrors.focusAreas = "Please select at least one focus area"
    }

    if (step === 3) {
      if (!formData.websiteUrl.trim()) newErrors.websiteUrl = "Please enter your website URL"
    }

    if (step === 4) {
      if (!formData.targetServices.trim()) newErrors.targetServices = "Please enter the services you want to rank for"
    }

    if (step === 5) {
      if (!formData.hasGoogleBusinessProfile) newErrors.hasGoogleBusinessProfile = "Please indicate if you have a Google Business Profile"
    }

    if (step === 7) {
      if (!formData.mainContactName.trim()) newErrors.mainContactName = "Please enter the main contact name"
      if (!formData.mainContactEmail.trim()) newErrors.mainContactEmail = "Please enter the main contact email"
    }

    if (step === 8) {
      if (!formData.agreedToTerms) newErrors.agreedToTerms = "Please agree to the terms"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length))
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(8)) return

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch("/api/seo-onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form")
      }

      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setErrors({
        submit: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success state
  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/20">
              <CheckCircle2 className="h-10 w-10 text-accent" />
            </div>
            <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Thank You!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Your SEO onboarding form has been submitted successfully. Our team will review your
              information and reach out within 1-2 business days to discuss your SEO strategy.
            </p>
            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <h2 className="font-semibold text-foreground">What happens next?</h2>
              <ul className="mt-4 space-y-3 text-left text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>Our SEO team will analyze your current website and competition</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>We&apos;ll prepare a customized SEO strategy based on your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>A team member will schedule a kickoff call to discuss the plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>Once approved, we&apos;ll begin optimizing your online presence</span>
                </li>
              </ul>
            </div>
            <Button asChild size="lg" className="mt-8">
              <a href="/">Return to Homepage</a>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-foreground py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
            <Search className="h-7 w-7 text-primary" />
          </div>
          <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
            SEO Onboarding Questionnaire
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-background/70">
            Help us understand your business and goals so we can create a customized SEO strategy.
            This takes about 10-15 minutes to complete.
          </p>
        </div>
      </section>

      <main className="bg-muted/30 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex min-w-max items-center justify-center gap-2">
              {steps.map((step, index) => {
                const StepIcon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = currentStep > step.id

                return (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                          isActive
                            ? "border-primary bg-primary text-primary-foreground"
                            : isCompleted
                              ? "border-accent bg-accent text-accent-foreground"
                              : "border-muted-foreground/30 bg-background text-muted-foreground"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <StepIcon className="h-4 w-4" />
                        )}
                      </div>
                      <span
                        className={`mt-2 text-xs font-medium ${
                          isActive ? "text-primary" : isCompleted ? "text-accent" : "text-muted-foreground"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`mx-2 h-0.5 w-8 ${
                          currentStep > step.id ? "bg-accent" : "bg-muted-foreground/30"
                        }`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {/* Step 1: Business Basics */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">Business Basics</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us about your practice and what makes you unique.
                  </p>
                </div>

                <div className="grid gap-5">
                  <div>
                    <label htmlFor="businessDescription" className="mb-1.5 block text-sm font-medium text-foreground">
                      What does your business do, and who is your ideal patient/customer? <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="businessDescription"
                      rows={3}
                      value={formData.businessDescription}
                      onChange={(e) => updateField("businessDescription", e.target.value)}
                      placeholder="E.g., We are a cosmetic dermatology practice specializing in anti-aging treatments for women aged 35-55..."
                      className={`w-full resize-none overflow-y-scroll rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                        errors.businessDescription
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-input focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.businessDescription && (
                      <p className="mt-1 text-xs text-destructive">{errors.businessDescription}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="primaryServices" className="mb-1.5 block text-sm font-medium text-foreground">
                      What are your primary services or specialties? <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="primaryServices"
                      rows={2}
                      value={formData.primaryServices}
                      onChange={(e) => updateField("primaryServices", e.target.value)}
                      placeholder="E.g., Botox, dermal fillers, laser skin resurfacing, chemical peels..."
                      className={`w-full resize-none overflow-y-scroll rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                        errors.primaryServices
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-input focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.primaryServices && (
                      <p className="mt-1 text-xs text-destructive">{errors.primaryServices}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="locationsServed" className="mb-1.5 block text-sm font-medium text-foreground">
                      What locations do you serve? <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="locationsServed"
                      value={formData.locationsServed}
                      onChange={(e) => updateField("locationsServed", e.target.value)}
                      placeholder="E.g., Miami, FL and surrounding areas within 25 miles"
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                        errors.locationsServed
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-input focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.locationsServed && (
                      <p className="mt-1 text-xs text-destructive">{errors.locationsServed}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="topCompetitors" className="mb-1.5 block text-sm font-medium text-foreground">
                      Who are your top 2-3 competitors?
                    </label>
                    <textarea
                      id="topCompetitors"
                      rows={2}
                      value={formData.topCompetitors}
                      onChange={(e) => updateField("topCompetitors", e.target.value)}
                      placeholder="E.g., ABC Dermatology (abcderm.com), Miami Skin Center (miamiskin.com)..."
                      className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="uniqueDifferentiator" className="mb-1.5 block text-sm font-medium text-foreground">
                      What makes you different from them?
                    </label>
                    <textarea
                      id="uniqueDifferentiator"
                      rows={2}
                      value={formData.uniqueDifferentiator}
                      onChange={(e) => updateField("uniqueDifferentiator", e.target.value)}
                      placeholder="E.g., We have 20+ years of experience, use the latest technology, offer personalized treatment plans..."
                      className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Goals & Expectations */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">Goals & Expectations</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Help us understand what success looks like for you.
                  </p>
                </div>

                <div className="grid gap-5">
                  <div>
                    <label htmlFor="successDefinition" className="mb-1.5 block text-sm font-medium text-foreground">
                      What does success look like to you in 6-12 months? <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="successDefinition"
                      rows={3}
                      value={formData.successDefinition}
                      onChange={(e) => updateField("successDefinition", e.target.value)}
                      placeholder="E.g., Ranking on the first page for 'Botox Miami', getting 30+ new patient inquiries per month..."
                      className={`w-full resize-none overflow-y-scroll rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                        errors.successDefinition
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-input focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.successDefinition && (
                      <p className="mt-1 text-xs text-destructive">{errors.successDefinition}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-foreground">
                      What are you focused on? <span className="text-destructive">*</span>
                    </label>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {successMetrics.map((metric) => (
                        <label
                          key={metric}
                          className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${
                            formData.focusAreas.includes(metric)
                              ? "border-primary bg-primary/5"
                              : "border-input hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.focusAreas.includes(metric)}
                            onChange={() => toggleArrayField("focusAreas", metric)}
                            className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                          />
                          <span className="text-sm text-foreground">{metric}</span>
                        </label>
                      ))}
                    </div>
                    {errors.focusAreas && (
                      <p className="mt-1 text-xs text-destructive">{errors.focusAreas}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="previousSeoExperience" className="mb-1.5 block text-sm font-medium text-foreground">
                      Have you done SEO before?
                    </label>
                    <select
                      id="previousSeoExperience"
                      value={formData.previousSeoExperience}
                      onChange={(e) => updateField("previousSeoExperience", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="no">No, this is our first time</option>
                      <option value="yes_good">Yes, with good results</option>
                      <option value="yes_mixed">Yes, with mixed results</option>
                      <option value="yes_poor">Yes, with poor results</option>
                    </select>
                  </div>

                  {formData.previousSeoExperience && formData.previousSeoExperience !== "no" && (
                    <>
                      <div>
                        <label htmlFor="previousSeoProvider" className="mb-1.5 block text-sm font-medium text-foreground">
                          Who did you work with?
                        </label>
                        <input
                          type="text"
                          id="previousSeoProvider"
                          value={formData.previousSeoProvider}
                          onChange={(e) => updateField("previousSeoProvider", e.target.value)}
                          placeholder="Agency or freelancer name"
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="previousSeoResults" className="mb-1.5 block text-sm font-medium text-foreground">
                          What were the results?
                        </label>
                        <textarea
                          id="previousSeoResults"
                          rows={2}
                          value={formData.previousSeoResults}
                          onChange={(e) => updateField("previousSeoResults", e.target.value)}
                          placeholder="Describe what worked and what didn't..."
                          className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label htmlFor="monthlyLeadTarget" className="mb-1.5 block text-sm font-medium text-foreground">
                      Do you have a target number of new patients/leads per month?
                    </label>
                    <input
                      type="text"
                      id="monthlyLeadTarget"
                      value={formData.monthlyLeadTarget}
                      onChange={(e) => updateField("monthlyLeadTarget", e.target.value)}
                      placeholder="E.g., 20-30 new patient inquiries per month"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Website & Technical */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">Website & Technical</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us about your current website setup.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="websiteUrl" className="mb-1.5 block text-sm font-medium text-foreground">
                      What is your website URL? <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="url"
                      id="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={(e) => updateField("websiteUrl", e.target.value)}
                      placeholder="https://www.yourpractice.com"
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                        errors.websiteUrl
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-input focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.websiteUrl && (
                      <p className="mt-1 text-xs text-destructive">{errors.websiteUrl}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="websiteBuilder" className="mb-1.5 block text-sm font-medium text-foreground">
                      Who built your website?
                    </label>
                    <input
                      type="text"
                      id="websiteBuilder"
                      value={formData.websiteBuilder}
                      onChange={(e) => updateField("websiteBuilder", e.target.value)}
                      placeholder="E.g., Internal team, Agency name, Freelancer"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="websiteManager" className="mb-1.5 block text-sm font-medium text-foreground">
                      Who currently manages it?
                    </label>
                    <input
                      type="text"
                      id="websiteManager"
                      value={formData.websiteManager}
                      onChange={(e) => updateField("websiteManager", e.target.value)}
                      placeholder="E.g., Internal team, Agency name"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="hasBackendAccess" className="mb-1.5 block text-sm font-medium text-foreground">
                      Do you have access to the backend?
                    </label>
                    <select
                      id="hasBackendAccess"
                      value={formData.hasBackendAccess}
                      onChange={(e) => updateField("hasBackendAccess", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes, full access</option>
                      <option value="limited">Limited access</option>
                      <option value="no">No access</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="domainAge" className="mb-1.5 block text-sm font-medium text-foreground">
                      How old is your domain?
                    </label>
                    <select
                      id="domainAge"
                      value={formData.domainAge}
                      onChange={(e) => updateField("domainAge", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="less_than_1">Less than 1 year</option>
                      <option value="1_to_3">1-3 years</option>
                      <option value="3_to_5">3-5 years</option>
                      <option value="5_to_10">5-10 years</option>
                      <option value="10_plus">10+ years</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hasGoogleAnalytics" className="mb-1.5 block text-sm font-medium text-foreground">
                      Do you have Google Analytics set up?
                    </label>
                    <select
                      id="hasGoogleAnalytics"
                      value={formData.hasGoogleAnalytics}
                      onChange={(e) => updateField("hasGoogleAnalytics", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hasSearchConsole" className="mb-1.5 block text-sm font-medium text-foreground">
                      Do you have Google Search Console set up?
                    </label>
                    <select
                      id="hasSearchConsole"
                      value={formData.hasSearchConsole}
                      onChange={(e) => updateField("hasSearchConsole", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Content & Keywords */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">Content & Keywords</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us about your target keywords and content strategy.
                  </p>
                </div>

                <div className="grid gap-5">
                  <div>
                    <label htmlFor="targetServices" className="mb-1.5 block text-sm font-medium text-foreground">
                      What services do you most want to rank for? <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="targetServices"
                      rows={2}
                      value={formData.targetServices}
                      onChange={(e) => updateField("targetServices", e.target.value)}
                      placeholder="E.g., Botox, lip fillers, laser hair removal..."
                      className={`w-full resize-none overflow-y-scroll rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                        errors.targetServices
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-input focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.targetServices && (
                      <p className="mt-1 text-xs text-destructive">{errors.targetServices}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="highRevenueServices" className="mb-1.5 block text-sm font-medium text-foreground">
                      Which procedures/treatments are your highest revenue drivers?
                    </label>
                    <textarea
                      id="highRevenueServices"
                      rows={2}
                      value={formData.highRevenueServices}
                      onChange={(e) => updateField("highRevenueServices", e.target.value)}
                      placeholder="E.g., Full face rejuvenation packages, body contouring..."
                      className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="hasExistingContent" className="mb-1.5 block text-sm font-medium text-foreground">
                      Do you have existing blog content or resources on the site?
                    </label>
                    <select
                      id="hasExistingContent"
                      value={formData.hasExistingContent}
                      onChange={(e) => updateField("hasExistingContent", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="yes_active">Yes, actively publishing</option>
                      <option value="yes_stale">Yes, but outdated</option>
                      <option value="minimal">Minimal content</option>
                      <option value="no">No blog or resources</option>
                    </select>
                  </div>

                  {formData.hasExistingContent && formData.hasExistingContent !== "no" && (
                    <div>
                      <label htmlFor="existingContentDescription" className="mb-1.5 block text-sm font-medium text-foreground">
                        Briefly describe your existing content
                      </label>
                      <textarea
                        id="existingContentDescription"
                        rows={2}
                        value={formData.existingContentDescription}
                        onChange={(e) => updateField("existingContentDescription", e.target.value)}
                        placeholder="E.g., We have 20 blog posts about skincare tips, some service pages..."
                        className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="brandVoice" className="mb-1.5 block text-sm font-medium text-foreground">
                      Do you have a preferred tone or brand voice?
                    </label>
                    <textarea
                      id="brandVoice"
                      rows={2}
                      value={formData.brandVoice}
                      onChange={(e) => updateField("brandVoice", e.target.value)}
                      placeholder="E.g., Professional but approachable, luxurious and sophisticated, friendly and casual..."
                      className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Local SEO */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">Local SEO</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Help us understand your local presence.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="hasGoogleBusinessProfile" className="mb-1.5 block text-sm font-medium text-foreground">
                      Do you have a Google Business Profile? <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="hasGoogleBusinessProfile"
                      value={formData.hasGoogleBusinessProfile}
                      onChange={(e) => updateField("hasGoogleBusinessProfile", e.target.value)}
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 ${
                        errors.hasGoogleBusinessProfile
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-input focus:border-primary focus:ring-primary"
                      }`}
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="unsure">Not sure</option>
                    </select>
                    {errors.hasGoogleBusinessProfile && (
                      <p className="mt-1 text-xs text-destructive">{errors.hasGoogleBusinessProfile}</p>
                    )}
                  </div>

                  {formData.hasGoogleBusinessProfile === "yes" && (
                    <div>
                      <label htmlFor="gbpVerified" className="mb-1.5 block text-sm font-medium text-foreground">
                        Is it verified?
                      </label>
                      <select
                        id="gbpVerified"
                        value={formData.gbpVerified}
                        onChange={(e) => updateField("gbpVerified", e.target.value)}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select...</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="unsure">Not sure</option>
                      </select>
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <label htmlFor="businessName" className="mb-1.5 block text-sm font-medium text-foreground">
                      Exact Business Name (as it appears on Google)
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => updateField("businessName", e.target.value)}
                      placeholder="E.g., Miami Dermatology & Skin Care Center"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="businessAddress" className="mb-1.5 block text-sm font-medium text-foreground">
                      Business Address
                    </label>
                    <input
                      type="text"
                      id="businessAddress"
                      value={formData.businessAddress}
                      onChange={(e) => updateField("businessAddress", e.target.value)}
                      placeholder="E.g., 123 Main Street, Suite 100, Miami, FL 33101"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessPhone" className="mb-1.5 block text-sm font-medium text-foreground">
                      Business Phone Number
                    </label>
                    <input
                      type="tel"
                      id="businessPhone"
                      value={formData.businessPhone}
                      onChange={(e) => updateField("businessPhone", e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="servesMultipleCities" className="mb-1.5 block text-sm font-medium text-foreground">
                      Do you serve patients in multiple cities?
                    </label>
                    <select
                      id="servesMultipleCities"
                      value={formData.servesMultipleCities}
                      onChange={(e) => updateField("servesMultipleCities", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="single">Just one city/area</option>
                      <option value="multiple">Multiple cities</option>
                      <option value="regional">Regional (entire state/region)</option>
                    </select>
                  </div>

                  {formData.servesMultipleCities === "multiple" && (
                    <div className="sm:col-span-2">
                      <label htmlFor="citiesServed" className="mb-1.5 block text-sm font-medium text-foreground">
                        Which cities do you serve?
                      </label>
                      <input
                        type="text"
                        id="citiesServed"
                        value={formData.citiesServed}
                        onChange={(e) => updateField("citiesServed", e.target.value)}
                        placeholder="E.g., Miami, Coral Gables, Miami Beach, Aventura"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <label className="mb-3 block text-sm font-medium text-foreground">
                      Are you listed in any of these directories?
                    </label>
                    <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
                      {directories.map((directory) => (
                        <label
                          key={directory}
                          className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${
                            formData.listedDirectories.includes(directory)
                              ? "border-primary bg-primary/5"
                              : "border-input hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.listedDirectories.includes(directory)}
                            onChange={() => toggleArrayField("listedDirectories", directory)}
                            className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                          />
                          <span className="text-sm text-foreground">{directory}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Reputation & Reviews */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">Reputation & Reviews</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us about your online reputation.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="googleReviewCount" className="mb-1.5 block text-sm font-medium text-foreground">
                      How many Google reviews do you currently have?
                    </label>
                    <input
                      type="text"
                      id="googleReviewCount"
                      value={formData.googleReviewCount}
                      onChange={(e) => updateField("googleReviewCount", e.target.value)}
                      placeholder="E.g., 150"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="averageStarRating" className="mb-1.5 block text-sm font-medium text-foreground">
                      What is your current average star rating?
                    </label>
                    <select
                      id="averageStarRating"
                      value={formData.averageStarRating}
                      onChange={(e) => updateField("averageStarRating", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="5">5 stars</option>
                      <option value="4.5">4.5 stars</option>
                      <option value="4">4 stars</option>
                      <option value="3.5">3.5 stars</option>
                      <option value="3">3 stars or below</option>
                      <option value="none">No reviews yet</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="hasReviewProcess" className="mb-1.5 block text-sm font-medium text-foreground">
                      Do you have a process for collecting reviews today?
                    </label>
                    <select
                      id="hasReviewProcess"
                      value={formData.hasReviewProcess}
                      onChange={(e) => updateField("hasReviewProcess", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="yes_automated">Yes, automated system</option>
                      <option value="yes_manual">Yes, we ask manually</option>
                      <option value="inconsistent">Inconsistent/occasional</option>
                      <option value="no">No process in place</option>
                    </select>
                  </div>

                  {formData.hasReviewProcess && formData.hasReviewProcess !== "no" && (
                    <div className="sm:col-span-2">
                      <label htmlFor="reviewProcessDescription" className="mb-1.5 block text-sm font-medium text-foreground">
                        Briefly describe your review collection process
                      </label>
                      <textarea
                        id="reviewProcessDescription"
                        rows={2}
                        value={formData.reviewProcessDescription}
                        onChange={(e) => updateField("reviewProcessDescription", e.target.value)}
                        placeholder="E.g., We send an automated email after appointments asking for a review..."
                        className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 7: Access & Approvals */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">Access & Approvals</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Help us set up communication and access.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="canGrantAccess" className="mb-1.5 block text-sm font-medium text-foreground">
                      Can you grant us access to Google Analytics, Search Console, and Google Business Profile?
                    </label>
                    <select
                      id="canGrantAccess"
                      value={formData.canGrantAccess}
                      onChange={(e) => updateField("canGrantAccess", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="yes_all">Yes, all of them</option>
                      <option value="yes_some">Yes, some of them</option>
                      <option value="need_help">Need help setting up access</option>
                      <option value="no">No, not at this time</option>
                    </select>
                  </div>

                  {formData.canGrantAccess === "yes_some" && (
                    <div className="sm:col-span-2">
                      <label htmlFor="accessNotes" className="mb-1.5 block text-sm font-medium text-foreground">
                        Which ones can you grant access to?
                      </label>
                      <input
                        type="text"
                        id="accessNotes"
                        value={formData.accessNotes}
                        onChange={(e) => updateField("accessNotes", e.target.value)}
                        placeholder="E.g., Google Analytics and Search Console, but not GBP"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="mainContactName" className="mb-1.5 block text-sm font-medium text-foreground">
                      Main Point of Contact Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="mainContactName"
                      value={formData.mainContactName}
                      onChange={(e) => updateField("mainContactName", e.target.value)}
                      placeholder="John Smith"
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                        errors.mainContactName
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-input focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.mainContactName && (
                      <p className="mt-1 text-xs text-destructive">{errors.mainContactName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mainContactEmail" className="mb-1.5 block text-sm font-medium text-foreground">
                      Main Contact Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="mainContactEmail"
                      value={formData.mainContactEmail}
                      onChange={(e) => updateField("mainContactEmail", e.target.value)}
                      placeholder="john@practice.com"
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                        errors.mainContactEmail
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-input focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.mainContactEmail && (
                      <p className="mt-1 text-xs text-destructive">{errors.mainContactEmail}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mainContactPhone" className="mb-1.5 block text-sm font-medium text-foreground">
                      Main Contact Phone
                    </label>
                    <input
                      type="tel"
                      id="mainContactPhone"
                      value={formData.mainContactPhone}
                      onChange={(e) => updateField("mainContactPhone", e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="requiresApproval" className="mb-1.5 block text-sm font-medium text-foreground">
                      Is anyone&apos;s approval needed before content goes live?
                    </label>
                    <select
                      id="requiresApproval"
                      value={formData.requiresApproval}
                      onChange={(e) => updateField("requiresApproval", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="no">No, I can approve</option>
                      <option value="yes">Yes, someone else needs to approve</option>
                    </select>
                  </div>

                  {formData.requiresApproval === "yes" && (
                    <div>
                      <label htmlFor="approverName" className="mb-1.5 block text-sm font-medium text-foreground">
                        Who needs to approve?
                      </label>
                      <input
                        type="text"
                        id="approverName"
                        value={formData.approverName}
                        onChange={(e) => updateField("approverName", e.target.value)}
                        placeholder="Name and role"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 8: Budget & Timeline */}
            {currentStep === 8 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">Budget & Timeline</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Final details to help us plan your SEO campaign.
                  </p>
                </div>

                <div className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="hasContentBudget" className="mb-1.5 block text-sm font-medium text-foreground">
                        Do you have a monthly content or ad budget beyond the SEO retainer?
                      </label>
                      <select
                        id="hasContentBudget"
                        value={formData.hasContentBudget}
                        onChange={(e) => updateField("hasContentBudget", e.target.value)}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select...</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="maybe">Open to discussion</option>
                      </select>
                    </div>

                    {formData.hasContentBudget === "yes" && (
                      <div>
                        <label htmlFor="contentBudgetAmount" className="mb-1.5 block text-sm font-medium text-foreground">
                          Approximate monthly budget
                        </label>
                        <input
                          type="text"
                          id="contentBudgetAmount"
                          value={formData.contentBudgetAmount}
                          onChange={(e) => updateField("contentBudgetAmount", e.target.value)}
                          placeholder="E.g., $500-1,000"
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="upcomingPromotions" className="mb-1.5 block text-sm font-medium text-foreground">
                      Are there any upcoming promotions, events, or service launches we should plan around?
                    </label>
                    <textarea
                      id="upcomingPromotions"
                      rows={2}
                      value={formData.upcomingPromotions}
                      onChange={(e) => updateField("upcomingPromotions", e.target.value)}
                      placeholder="E.g., Summer skincare promotion in June, new laser treatment launching in August..."
                      className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="pastPenalties" className="mb-1.5 block text-sm font-medium text-foreground">
                      Are there any past penalties or issues with the site we should know about?
                    </label>
                    <textarea
                      id="pastPenalties"
                      rows={2}
                      value={formData.pastPenalties}
                      onChange={(e) => updateField("pastPenalties", e.target.value)}
                      placeholder="E.g., We received a manual action in 2022 that was resolved..."
                      className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="additionalNotes" className="mb-1.5 block text-sm font-medium text-foreground">
                      Anything else we should know?
                    </label>
                    <textarea
                      id="additionalNotes"
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={(e) => updateField("additionalNotes", e.target.value)}
                      placeholder="Any other information that would help us serve you better..."
                      className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="rounded-lg border border-border bg-muted/50 p-4">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={formData.agreedToTerms}
                        onChange={(e) => updateField("agreedToTerms", e.target.checked)}
                        className={`mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary ${
                          errors.agreedToTerms ? "border-destructive" : ""
                        }`}
                      />
                      <span className="text-sm text-muted-foreground">
                        I agree to the{" "}
                        <a href="/terms" className="text-primary underline hover:text-primary/80">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy-policy" className="text-primary underline hover:text-primary/80">
                          Privacy Policy
                        </a>
                        . I understand that ClinicDigital will use this information to prepare an SEO strategy
                        tailored to my business.
                      </span>
                    </label>
                    {errors.agreedToTerms && (
                      <p className="mt-2 text-xs text-destructive">{errors.agreedToTerms}</p>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="rounded-lg border border-destructive bg-destructive/10 p-4">
                      <p className="text-sm text-destructive">{errors.submit}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>

              {currentStep < steps.length ? (
                <Button type="button" onClick={handleNext} className="gap-2">
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting} className="gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Questionnaire
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
}
