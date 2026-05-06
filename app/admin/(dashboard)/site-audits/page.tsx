import { createClient } from "@/lib/supabase/server"
import { ClipboardCheck, Mail, Phone, Globe, Calendar, CheckCircle, Clock, XCircle, FileSearch } from "lucide-react"

export default async function AdminSiteAuditsPage() {
  const supabase = await createClient()

  const { data: audits } = await supabase
    .from("site_audit_requests")
    .select("*")
    .order("created_at", { ascending: false })

  const allAudits = audits ?? []

  const statusCounts = {
    pending: allAudits.filter((a) => a.status === "pending").length,
    completed: allAudits.filter((a) => a.status === "completed").length,
    in_progress: allAudits.filter((a) => a.status === "in_progress").length,
  }

  function getStatusBadge(status: string) {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
            <CheckCircle className="h-3 w-3" />
            Completed
          </span>
        )
      case "in_progress":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
            <FileSearch className="h-3 w-3" />
            In Progress
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
            <Clock className="h-3 w-3" />
            Pending
          </span>
        )
    }
  }

  return (
    <div className="min-h-screen">
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">
          Site Audit Requests
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {allAudits.length} request{allAudits.length !== 1 ? "s" : ""} total
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{statusCounts.pending}</p>
              <p className="text-xs text-muted-foreground">Pending</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <FileSearch className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{statusCounts.in_progress}</p>
              <p className="text-xs text-muted-foreground">In Progress</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{statusCounts.completed}</p>
              <p className="text-xs text-muted-foreground">Completed</p>
            </div>
          </div>
        </div>
      </div>

      {allAudits.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <ClipboardCheck className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
            No audit requests yet
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Site audit requests will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {/* Table header */}
          <div className="hidden border-b border-border bg-muted/30 px-6 py-3 md:grid md:grid-cols-12 md:gap-4">
            <span className="col-span-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </span>
            <span className="col-span-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Website
            </span>
            <span className="col-span-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Status
            </span>
            <span className="col-span-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground text-right">
              Requested
            </span>
          </div>

          {/* Rows */}
          {allAudits.map((audit) => (
            <div
              key={audit.id}
              className="flex flex-col gap-3 border-b border-border px-6 py-4 last:border-0 md:grid md:grid-cols-12 md:items-center md:gap-4"
            >
              <div className="col-span-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <ClipboardCheck className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-medium text-card-foreground">
                    {audit.name}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Mail className="h-3 w-3 shrink-0" />
                    <span className="truncate">{audit.email}</span>
                  </div>
                </div>
              </div>
              <div className="col-span-4 space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href={audit.website_url.startsWith("http") ? audit.website_url : `https://${audit.website_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate font-medium text-primary hover:underline"
                  >
                    {audit.website_url.replace(/^https?:\/\//, "")}
                  </a>
                </div>
                {audit.phone && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Phone className="h-3 w-3 shrink-0" />
                    <span>{audit.phone}</span>
                  </div>
                )}
              </div>
              <div className="col-span-2">
                {getStatusBadge(audit.status || "pending")}
              </div>
              <div className="col-span-3 text-right">
                <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(audit.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {new Date(audit.created_at).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
