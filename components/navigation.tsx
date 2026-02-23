"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  Megaphone,
  Users,
  Bot,
  CalendarCheck,
  Search,
  Wrench,
  Palette,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const serviceLinks = [
  { label: "AI Marketing Automation", href: "/services/ai-marketing-automation", icon: Megaphone },
  { label: "Client Management (CRM)", href: "/services/client-management", icon: Users },
  { label: "AI Chatbots & Virtual Assistants", href: "/services/ai-chatbots", icon: Bot },
  { label: "Appointment Automation", href: "/services/appointment-automation", icon: CalendarCheck },
  { label: "SEO", href: "/services/seo", icon: Search },
  { label: "Website Maintenance", href: "/services/website-maintenance", icon: Wrench },
  { label: "Web Design", href: "/services/web-design", icon: Palette },
]

const navLinks = [
  { label: "Process", href: "https://www.clinicdigital.co/#process" },
  { label: "Case Studies", href: "https://www.clinicdigital.co/#case-studies" },
  { label: "SEO Offers", href: "/offers" },
  { label: "Smart Website", href: "/offers/smart-website" },
  { label: "AI Chatbot", href: "/offers/chatbot" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "https://www.clinicdigital.co/#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current)
    setIsServicesOpen(true)
  }

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 200)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={isScrolled ? "/images/clinicdigital-logo.png" : "/images/clinicdigital-logo-white.png"}
            alt="ClinicDigital.co - Bringing More Patients to Your Door"
            width={200}
            height={48}
            className="h-10 w-auto transition-opacity duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {/* Services Dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              type="button"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onFocus={handleServicesEnter}
              className={`flex items-center gap-1 text-sm font-bold transition-colors ${isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
                }`}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Desktop Dropdown Panel */}
            <div
              className={`absolute left-1/2 top-full pt-4 -translate-x-1/2 transition-all duration-200 ${isServicesOpen
                ? "translate-y-0 opacity-100 visible"
                : "-translate-y-2 opacity-0 invisible pointer-events-none"
                }`}
              role="menu"
            >
              <div className="w-[340px] overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-foreground/5">
                <div className="px-2 py-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      role="menuitem"
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-primary/10"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <service.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-card-foreground hover:cursor-pointer">
                        {service.label}
                      </span>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Other Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold transition-colors hover:cursor-pointer ${isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button
            asChild
            variant={isScrolled ? "default" : "secondary"}
            className={
              isScrolled
                ? "hover:bg-red-600 hover:text-white hover:cursor-pointer"
                : "bg-white text-foreground font-semibold hover:bg-red-600 hover:text-white"
            }
          >
            <Link href="/book-a-call">Book a Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={`lg:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`absolute left-0 right-0 top-full z-50 transform transition-all duration-300 ease-in-out lg:hidden ${isMobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-2 pointer-events-none opacity-0"
          }`}
      >
        <div className="mx-4 mt-2 overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-foreground/5">
          <div className="flex flex-col gap-1 px-4 py-4">
            {/* Mobile Services Accordion */}
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              aria-expanded={isMobileServicesOpen}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Mobile Services Sub-links */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-primary/20 py-1 pl-3">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      setIsMobileServicesOpen(false)
                    }}
                  >
                    <service.icon className="h-3.5 w-3.5 flex-shrink-0 text-primary/60" />
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-border px-4 py-4">
            <Button asChild className="w-full hover:bg-red-600 hover:text-white">
              <Link href="/book-a-call" onClick={() => setIsMobileMenuOpen(false)}>
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
