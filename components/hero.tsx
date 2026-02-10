import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Zap, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-medical.jpg"
          alt="Modern medical clinic interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium tracking-wide uppercase text-primary-foreground/90">
              AI-Powered Healthcare Solutions
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-balance">
              Transform Your Practice with{" "}
              <span className="text-primary">Intelligent Automation</span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
            We deploy cutting-edge AI solutions through the GoHighLevel platform to streamline
            operations, boost patient engagement, and drive growth for medical practices and medspas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-base">
              <Link href="#contact">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base bg-transparent">
              <Link href="#case-studies">View Case Studies</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">50+ AI Automations</p>
                <p className="text-xs text-primary-foreground/50">Deployed Successfully</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-primary-foreground/20 sm:block" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">HIPAA Compliant</p>
                <p className="text-xs text-primary-foreground/50">Secure & Reliable</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-primary-foreground/20 sm:block" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm">
                <Zap className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">3x ROI Average</p>
                <p className="text-xs text-primary-foreground/50">For Our Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
