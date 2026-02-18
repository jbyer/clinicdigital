"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.log("[v0] Root error boundary caught:", error.message)
    console.log("[v0] Error stack:", error.stack)
  }, [error])

  return (
    <div style={{ padding: "40px", fontFamily: "system-ui", backgroundColor: "#fff", color: "#000", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Something went wrong</h1>
      <pre style={{ background: "#f5f5f5", padding: "16px", borderRadius: "8px", overflow: "auto", fontSize: "14px", marginBottom: "16px" }}>
        {error.message}
      </pre>
      <button
        onClick={() => reset()}
        style={{ padding: "8px 16px", background: "#0ea5e9", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
      >
        Try again
      </button>
    </div>
  )
}
