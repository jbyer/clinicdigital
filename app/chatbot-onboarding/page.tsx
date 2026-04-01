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
  Calendar,
  MessageSquare,
  Settings,
  Bot,
} from "lucide-react"

const practiceTypes = [
  "General Practice / Family Medicine",
  "Dental Practice",
  "Dermatology",
  "Medical Spa / Aesthetics",
  "Plastic Surgery",
  "Orthopedics",
  "Cardiology",
  "OB/GYN",
  "Pediatrics",
  "Mental Health / Psychology",
  "Chiropractic",
  "Physical Therapy",
  "Ophthalmology / Optometry",
  "Urgent Care",
  "Other",
]

const practiceSizes = [
  "Solo Practitioner",
  "Small (2-5 providers)",
  "Medium (6-15 providers)",
  "Large (16-50 providers)",
  "Enterprise (50+ providers)",
]

const schedulingSoftware = [
  "None / Manual Scheduling",
  "GoHighLevel",
  "Mindbody",
  "Jane App",
  "Acuity Scheduling",
  "Calendly",
  "DrChrono",
  "Athenahealth",
  "Epic",
  "Kareo",
  "Practice Fusion",
  "SimplePractice",
  "Other",
]

const chatbotFeatures = [
  { id: "appointment_booking", label: "Appointment Booking", description: "Let patients book appointments 24/7" },
  { id: "faq_responses", label: "FAQ Responses", description: "Answer common patient questions automatically" },
  { id: "lead_capture", label: "Lead Capture", description: "Collect contact info from potential patients" },
  { id: "treatment_info", label: "Treatment Information", description: "Provide details about services and procedures" },
  { id: "appointment_reminders", label: "Appointment Reminders", description: "Send automated reminders via SMS/email" },
  { id: "post_treatment", label: "Post-Treatment Follow-up", description: "Check on patients after procedures" },
  { id: "patient_intake", label: "Patient Intake Forms", description: "Collect medical history before visits" },
  { id: "multilingual", label: "Multilingual Support", description: "Support multiple languages" },
  { id: "after_hours", label: "After-Hours Support", description: "Handle inquiries outside business hours" },
]

const patientDemographics = [
  "Families with Children",
  "Young Adults (18-35)",
  "Middle-Aged Adults (35-55)",
  "Seniors (55+)",
  "Athletes / Sports Injuries",
  "Corporate / Professionals",
  "All Demographics",
]

const steps = [
  { id: 1, title: "Practice Info", icon: Building2 },
  { id: 2, title: "Scheduling", icon: Calendar },
  { id: 3, title: "Chatbot Features", icon: MessageSquare },
  { id: 4, title: "Additional Details", icon: Settings },
]

type FormData = {
  // Step 1: Practice Info
  practiceName: string
  practiceType: string
  practiceTypeOther: string
  practiceSize: string
  locations: string
  contactName: string
  contactEmail: string
  contactPhone: string
  website: string
  // Step 2: Scheduling
  schedulingSoftware: string
  schedulingSoftwareOther: string
  appointmentTypes: string
  businessHours: string
  leadTime: string
  cancellationPolicy: string
  // Step 3: Chatbot Features
  selectedFeatures: string[]
  targetDemographics: string[]
  // Step 4: Additional Details
  commonQuestions: string
  servicesOffered: string
  brandVoice: string
  additionalNotes: string
  agreedToTerms: boolean
}

const initialFormData: FormData = {
  practiceName: "",
  practiceType: "",
  practiceTypeOther: "",
  practiceSize: "",
  locations: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  website: "",
  schedulingSoftware: "",
  schedulingSoftwareOther: "",
  appointmentTypes: "",
  businessHours: "",
  leadTime: "",
  cancellationPolicy: "",
  selectedFeatures: [],
  targetDemographics: [],
  commonQuestions: "",
  servicesOffered: "",
  brandVoice: "",
  additionalNotes: "",
  agreedToTerms: false,
}

export default function ChatbotOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const toggleFeature = (featureId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedFeatures: prev.selectedFeatures.includes(featureId)
        ? prev.selectedFeatures.filter((f) => f !== featureId)
        : [...prev.selectedFeatures, featureId],
    }))
  }

  const toggleDemographic = (demo: string) => {
    setFormData((prev) => ({
      ...prev,
      targetDemographics: prev.targetDemographics.includes(demo)
        ? prev.targetDemographics.filter((d) => d !== demo)
        : [...prev.targetDemographics, demo],
    }))
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.practiceName.trim()) newErrors.practiceName = "Practice name is required"
      if (!formData.practiceType) newErrors.practiceType = "Please select a practice type"
      if (formData.practiceType === "Other" && !formData.practiceTypeOther.trim()) {
        newErrors.practiceTypeOther = "Please specify your practice type"
      }
      if (!formData.practiceSize) newErrors.practiceSize = "Please select practice size"
      if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required"
      if (!formData.contactEmail.trim()) newErrors.contactEmail = "Email is required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
        newErrors.contactEmail = "Please enter a valid email"
      }
    }

    if (step === 3) {
      if (formData.selectedFeatures.length === 0) {
        newErrors.selectedFeatures = "Please select at least one feature"
      }
    }

    if (step === 4) {
      if (!formData.agreedToTerms) {
        newErrors.agreedToTerms = "You must agree to the terms to continue"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(4)) return

    setIsSubmitting(true)
    setErrors({})
    
    try {
      const response = await fetch("/api/chatbot-onboarding", {
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
        submit: error instanceof Error ? error.message : "Failed to submit form. Please try again." 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
            <div className="rounded-2xl bg-card p-8 shadow-lg sm:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h1 className="mt-6 font-heading text-3xl font-bold text-foreground">
                Thank You for Your Submission!
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We&apos;ve received your chatbot configuration details. Our team will review your
                information and reach out within 24-48 hours to discuss next steps and schedule
                your onboarding call.
              </p>
              <div className="mt-8 rounded-xl bg-muted/50 p-6">
                <h3 className="font-semibold text-foreground">What happens next?</h3>
                <ul className="mt-4 space-y-3 text-left text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span>
                    Our team reviews your requirements
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span>
                    We schedule a discovery call to discuss your needs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span>
                    We build and configure your custom chatbot
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">4</span>
                    Training and launch support
                  </li>
                </ul>
              </div>
              <Button asChild size="lg" className="mt-8">
                <a href="/">Return to Homepage</a>
              </Button>
            </div>
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
            <Bot className="h-7 w-7 text-primary" />
          </div>
          <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
            Configure Your Medical Practice Chatbot
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-background/70">
            Tell us about your practice and preferences so we can build the perfect AI assistant
            tailored to your needs. This takes about 5-10 minutes to complete.
          </p>
        </div>
      </section>

      <main className="bg-muted/30 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                        currentStep >= step.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted-foreground/30 bg-background text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    <span
                      className={`mt-2 hidden text-xs font-medium sm:block ${
                        currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`mx-2 h-0.5 flex-1 transition-colors ${
                        currentStep > step.id ? "bg-primary" : "bg-muted-foreground/20"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="rounded-2xl bg-card p-6 shadow-lg sm:p-8">
              {/* Step 1: Practice Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">Practice Information</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tell us about your medical practice.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Practice Name */}
                    <div className="sm:col-span-2">
                      <label htmlFor="practiceName" className="mb-1.5 block text-sm font-medium text-foreground">
                        Practice Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="practiceName"
                        value={formData.practiceName}
                        onChange={(e) => updateField("practiceName", e.target.value)}
                        placeholder="e.g., Sunrise Medical Center"
                        className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                          errors.practiceName
                            ? "border-destructive focus:border-destructive focus:ring-destructive"
                            : "border-input focus:border-primary focus:ring-primary"
                        }`}
                      />
                      {errors.practiceName && (
                        <p className="mt-1 text-xs text-destructive">{errors.practiceName}</p>
                      )}
                    </div>

                    {/* Practice Type */}
                    <div>
                      <label htmlFor="practiceType" className="mb-1.5 block text-sm font-medium text-foreground">
                        Practice Type <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="practiceType"
                        value={formData.practiceType}
                        onChange={(e) => updateField("practiceType", e.target.value)}
                        className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 ${
                          errors.practiceType
                            ? "border-destructive focus:border-destructive focus:ring-destructive"
                            : "border-input focus:border-primary focus:ring-primary"
                        }`}
                      >
                        <option value="">Select practice type...</option>
                        {practiceTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.practiceType && (
                        <p className="mt-1 text-xs text-destructive">{errors.practiceType}</p>
                      )}
                    </div>

                    {/* Practice Type Other */}
                    {formData.practiceType === "Other" && (
                      <div>
                        <label htmlFor="practiceTypeOther" className="mb-1.5 block text-sm font-medium text-foreground">
                          Specify Practice Type <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          id="practiceTypeOther"
                          value={formData.practiceTypeOther}
                          onChange={(e) => updateField("practiceTypeOther", e.target.value)}
                          placeholder="Enter your practice type"
                          className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                            errors.practiceTypeOther
                              ? "border-destructive focus:border-destructive focus:ring-destructive"
                              : "border-input focus:border-primary focus:ring-primary"
                          }`}
                        />
                        {errors.practiceTypeOther && (
                          <p className="mt-1 text-xs text-destructive">{errors.practiceTypeOther}</p>
                        )}
                      </div>
                    )}

                    {/* Practice Size */}
                    <div>
                      <label htmlFor="practiceSize" className="mb-1.5 block text-sm font-medium text-foreground">
                        Practice Size <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="practiceSize"
                        value={formData.practiceSize}
                        onChange={(e) => updateField("practiceSize", e.target.value)}
                        className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 ${
                          errors.practiceSize
                            ? "border-destructive focus:border-destructive focus:ring-destructive"
                            : "border-input focus:border-primary focus:ring-primary"
                        }`}
                      >
                        <option value="">Select practice size...</option>
                        {practiceSizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                      {errors.practiceSize && (
                        <p className="mt-1 text-xs text-destructive">{errors.practiceSize}</p>
                      )}
                    </div>

                    {/* Number of Locations */}
                    <div className="sm:col-span-2">
                      <label htmlFor="locations" className="mb-1.5 block text-sm font-medium text-foreground">
                        Location(s)
                      </label>
                      <input
                        type="text"
                        id="locations"
                        value={formData.locations}
                        onChange={(e) => updateField("locations", e.target.value)}
                        placeholder="e.g., 123 Main St, City, State 12345 (add multiple if applicable)"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Contact Name */}
                    <div>
                      <label htmlFor="contactName" className="mb-1.5 block text-sm font-medium text-foreground">
                        Contact Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => updateField("contactName", e.target.value)}
                        placeholder="John Smith"
                        className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                          errors.contactName
                            ? "border-destructive focus:border-destructive focus:ring-destructive"
                            : "border-input focus:border-primary focus:ring-primary"
                        }`}
                      />
                      {errors.contactName && (
                        <p className="mt-1 text-xs text-destructive">{errors.contactName}</p>
                      )}
                    </div>

                    {/* Contact Email */}
                    <div>
                      <label htmlFor="contactEmail" className="mb-1.5 block text-sm font-medium text-foreground">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        value={formData.contactEmail}
                        onChange={(e) => updateField("contactEmail", e.target.value)}
                        placeholder="john@practice.com"
                        className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                          errors.contactEmail
                            ? "border-destructive focus:border-destructive focus:ring-destructive"
                            : "border-input focus:border-primary focus:ring-primary"
                        }`}
                      />
                      {errors.contactEmail && (
                        <p className="mt-1 text-xs text-destructive">{errors.contactEmail}</p>
                      )}
                    </div>

                    {/* Contact Phone */}
                    <div>
                      <label htmlFor="contactPhone" className="mb-1.5 block text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contactPhone"
                        value={formData.contactPhone}
                        onChange={(e) => updateField("contactPhone", e.target.value)}
                        placeholder="(555) 123-4567"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Website */}
                    <div>
                      <label htmlFor="website" className="mb-1.5 block text-sm font-medium text-foreground">
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        value={formData.website}
                        onChange={(e) => updateField("website", e.target.value)}
                        placeholder="https://www.yourpractice.com"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Scheduling */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">Scheduling & Operations</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tell us about your scheduling system and operations.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Appointment Types */}
                    <div className="sm:col-span-2">
                      <label htmlFor="appointmentTypes" className="mb-1.5 block text-sm font-medium text-foreground">
                        Types of Appointments Offered
                      </label>
                      <textarea
                        id="appointmentTypes"
                        value={formData.appointmentTypes}
                        onChange={(e) => updateField("appointmentTypes", e.target.value)}
                        placeholder="e.g., New Patient Consultation (60 min), Follow-up (30 min), Procedure X (45 min)..."
                        rows={3}
                        className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Business Hours */}
                    <div>
                      <label htmlFor="businessHours" className="mb-1.5 block text-sm font-medium text-foreground">
                        Business Hours
                      </label>
                      <input
                        type="text"
                        id="businessHours"
                        value={formData.businessHours}
                        onChange={(e) => updateField("businessHours", e.target.value)}
                        placeholder="e.g., Mon-Fri 9am-5pm, Sat 9am-1pm"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Lead Time */}
                    <div>
                      <label htmlFor="leadTime" className="mb-1.5 block text-sm font-medium text-foreground">
                        Minimum Booking Lead Time
                      </label>
                      <input
                        type="text"
                        id="leadTime"
                        value={formData.leadTime}
                        onChange={(e) => updateField("leadTime", e.target.value)}
                        placeholder="e.g., 24 hours, same day, 48 hours"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Cancellation Policy */}
                    <div className="sm:col-span-2">
                      <label htmlFor="cancellationPolicy" className="mb-1.5 block text-sm font-medium text-foreground">
                        Cancellation/Rescheduling Policy
                      </label>
                      <textarea
                        id="cancellationPolicy"
                        value={formData.cancellationPolicy}
                        onChange={(e) => updateField("cancellationPolicy", e.target.value)}
                        placeholder="e.g., 24-hour notice required, $50 cancellation fee..."
                        rows={2}
                        className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Chatbot Features */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">Chatbot Features</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Select the features you want your chatbot to have.
                    </p>
                  </div>

                  {/* Features Selection */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-foreground">
                      Desired Features <span className="text-destructive">*</span>
                    </label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {chatbotFeatures.map((feature) => (
                        <label
                          key={feature.id}
                          className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
                            formData.selectedFeatures.includes(feature.id)
                              ? "border-primary bg-primary/5"
                              : "border-input hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.selectedFeatures.includes(feature.id)}
                            onChange={() => toggleFeature(feature.id)}
                            className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-primary"
                          />
                          <div>
                            <span className="block text-sm font-medium text-foreground">
                              {feature.label}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {feature.description}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.selectedFeatures && (
                      <p className="mt-2 text-xs text-destructive">{errors.selectedFeatures}</p>
                    )}
                  </div>

                  {/* Target Demographics */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-foreground">
                      Target Patient Demographics
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {patientDemographics.map((demo) => (
                        <button
                          key={demo}
                          type="button"
                          onClick={() => toggleDemographic(demo)}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                            formData.targetDemographics.includes(demo)
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          }`}
                        >
                          {demo}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Additional Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">Additional Details</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Help us understand your needs better.
                    </p>
                  </div>

                  <div className="grid gap-5">
                    {/* Common Questions */}
                    <div>
                      <label htmlFor="commonQuestions" className="mb-1.5 block text-sm font-medium text-foreground">
                        Common Patient Questions
                      </label>
                      <textarea
                        id="commonQuestions"
                        value={formData.commonQuestions}
                        onChange={(e) => updateField("commonQuestions", e.target.value)}
                        placeholder="List the most frequent questions patients ask (one per line)..."
                        rows={4}
                        className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Services Offered */}
                    <div>
                      <label htmlFor="servicesOffered" className="mb-1.5 block text-sm font-medium text-foreground">
                        Services/Treatments Offered
                      </label>
                      <textarea
                        id="servicesOffered"
                        value={formData.servicesOffered}
                        onChange={(e) => updateField("servicesOffered", e.target.value)}
                        placeholder="List your main services and treatments..."
                        rows={4}
                        className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Brand Voice */}
                    <div>
                      <label htmlFor="brandVoice" className="mb-1.5 block text-sm font-medium text-foreground">
                        Brand Voice & Tone
                      </label>
                      <input
                        type="text"
                        id="brandVoice"
                        value={formData.brandVoice}
                        onChange={(e) => updateField("brandVoice", e.target.value)}
                        placeholder="e.g., Professional and warm, Friendly and casual, Clinical and precise"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label htmlFor="additionalNotes" className="mb-1.5 block text-sm font-medium text-foreground">
                        Additional Notes or Requirements
                      </label>
                      <textarea
                        id="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={(e) => updateField("additionalNotes", e.target.value)}
                        placeholder="Any other information that would help us build your perfect chatbot..."
                        rows={4}
                        className="w-full resize-none overflow-y-scroll rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Terms Agreement */}
                    <div>
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={formData.agreedToTerms}
                          onChange={(e) => updateField("agreedToTerms", e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
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
                          . I understand that ClinicDigital will use this information to build and configure my chatbot.
                        </span>
                      </label>
                      {errors.agreedToTerms && (
                        <p className="mt-2 text-xs text-destructive">{errors.agreedToTerms}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="gap-2"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Configuration
                        <CheckCircle2 className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </form>

          {/* Help Text */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Need help? Contact us at{" "}
            <a href="mailto:support@clinicdigital.co" className="text-primary hover:underline">
              support@clinicdigital.co
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
