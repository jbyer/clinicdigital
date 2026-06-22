import type { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./diagnostics.css"

export default function DiagnosticsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="diagnostics-root">
      <Navigation />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  )
}
