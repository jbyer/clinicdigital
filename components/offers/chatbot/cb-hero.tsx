import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Bot } from "lucide-react"

const highlights = [
  "Live in under 1 weeks",
  "Trained on your services & FAQs",
  "Books appointments while you sleep",
]

export function ChatbotHero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-offers-chatbot.jpg"
          alt="Modern medical office with AI chat assistant displayed on screen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start px-6 pt-32 lg:px-8 lg:pt-36">
        <div className="max-w-x1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <Bot className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium tracking-wide uppercase text-primary-foreground/90">
              AI Chatbot for Healthcare
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-balance">
              Turn Website Visitors into Booked Patients {" "}
              <span className="text-primary">24/7 with a HIPAA-Aware Chatbot</span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
            Stop losing leads to voicemail and after-hours inquiries. Deploy a
            HIPAA-aware AI chatbot that answers patient questions, qualifies
            leads, and books appointments 24/7 -- powered by GoHighLevel
            Conversation AI, customized for your practice.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base hover:bg-red-600 hover:text-background"
            >
              <Link href="#pricing">See Pricing</Link>
            </Button>
          </div>

          {/* Highlight pills */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-primary-foreground/60"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                {item}
              </div>
            ))}
          </div>

          <div className="mb-[30px] lg:mb-0" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
