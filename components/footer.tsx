import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import ChatWidget from "./chat-widget"

// Custom X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// Custom TikTok icon component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/clinicdigital",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/clinic_digital.co/",
    icon: Instagram,
  },
  {
    label: "X",
    href: "https://x.com/ClinicDigital1",
    icon: XIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@clinicdigital",
    icon: TikTokIcon,
  },
]


const footerLinks = {
  services: [
    { label: "Marketing Automation", href: "/services/ai-marketing-automation" },
    { label: "Client Management", href: "/services/client-management" },
    { label: "AI Chatbots", href: "/services/ai-chatbots" },
    { label: "Appointment Automation", href: "/services/appointment-automation" },
    { label: "SEO", href: "/services/seo" },
    { label: "Website Maintenance", href: "/services/website-maintenance" },
    { label: "Web Design", href: "/services/web-design" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
    { label: "Book a Call", href: "/book-a-call" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/clinicdigital-logo-white.png"
              alt="ClinicDigital.co - Bringing More Patients to Your Door"
              width={200}
              height={48}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-background/50">
              AI-powered solutions for medical practices and medspas.
              Designed for growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40">
              Resources
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col text-center items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} ClinicDigital.co. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background/60 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Chat widget loaded via next/script in a client component wrapper for production */}
      <ChatWidget />

    </footer>
  )
}
