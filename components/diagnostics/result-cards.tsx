"use client"
import ReactMarkdown from "react-markdown"

const COLORS: Record<string, { bg: string; accent: string; text: string }> = {
  red:    { bg: "#fee2e2", accent: "#ef4444", text: "#991b1b" },
  orange: { bg: "#ffedd5", accent: "#f97316", text: "#9a3412" },
  amber:  { bg: "#fef3c7", accent: "#f59e0b", text: "#92400e" },
  blue:   { bg: "#dbeafe", accent: "#3b82f6", text: "#1e40af" },
  purple: { bg: "#ede9fe", accent: "#8b5cf6", text: "#5b21b6" },
}

export function BucketCard({ color, label, amount, period, description, isLargest, badgeText = "Largest Leak" }: {
  color: keyof typeof COLORS; label: string; amount: number; period: string
  description: string; isLargest?: boolean; badgeText?: string
}) {
  const c = COLORS[color]
  return (
    <div className={`bucket-card ${isLargest ? "bucket-largest" : ""}`}
      style={{ ["--bucket-accent" as string]: c.accent, ["--bucket-bg" as string]: c.bg, ["--bucket-text" as string]: c.text }}>
      {isLargest && <div className="bucket-badge">{badgeText}</div>}
      <div className="bucket-label">{label}</div>
      <div className="bucket-amount">${amount.toLocaleString()}</div>
      <div className="bucket-period">{period}</div>
      <div className="bucket-desc">{description}</div>
    </div>
  )
}

export function NarrativeCard({ modelBadge, loading, error, text, markdown }: {
  modelBadge: string; loading: boolean; error: string; text: string; markdown?: boolean
}) {
  return (
    <div className="narrative-card">
      <div className="narrative-header">
        <span className="narrative-label">AI Analysis</span>
        <span className="narrative-model">{modelBadge}</span>
      </div>
      {loading && <div className="narrative-loading"><span className="spinner" />Generating your personalized analysis…</div>}
      {error && <div className="narrative-error">⚠ Could not generate narrative: {error}</div>}
      {text && (markdown
        ? <div className="narrative-text narrative-bullets"><ReactMarkdown>{text}</ReactMarkdown></div>
        : <p className="narrative-text">{text}</p>)}
    </div>
  )
}

export function RecommendationCard({ eyebrow, name, reason, ctaHref, ctaText }: {
  eyebrow: string; name: string; reason: string; ctaHref: string; ctaText: string
}) {
  return (
    <div className="recommendation-card">
      <div className="rec-eyebrow">{eyebrow}</div>
      <div className="rec-name">{name}</div>
      <div className="rec-reason">{reason}</div>
      <a className="rec-cta" href={ctaHref} target="_blank" rel="noreferrer">{ctaText}</a>
    </div>
  )
}
