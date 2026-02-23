import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const highlights = [
  "Live in under 2 weeks",
  "Trained on your services & FAQs",
  "Books appointments while you sleep",
]

export function ChatbotHero() {
  return (
    <section className="relative flex h-[550px] items-center overflow-hidden bg-foreground">
      {/* Decorative blurs */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            AI Chatbot for Healthcare
          </p>

          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              Your AI Receptionist That{" "}
              <span className="text-primary">Never Misses a Patient.</span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/60 lg:text-xl">
            Stop losing leads to voicemail and after-hours inquiries. Deploy a
            HIPAA-aware AI chatbot that answers patient questions, qualifies
            leads, and books appointments 24/7 -- powered by GoHighLevel
            Conversation AI, customized for your practice.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              asChild
              className="text-base hover:bg-red-600 hover:text-background"
            >
              <Link href="/book-a-call">
                Get Your AI Chatbot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-background/20 bg-transparent text-base text-background hover:border-background/40 hover:bg-background/5"
            >
              <Link href="#pricing">See Pricing</Link>
            </Button>
          </div>

          {/* Highlight pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-background/50"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
