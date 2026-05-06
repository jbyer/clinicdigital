import { createClient } from "@/lib/supabase/server"
import { Users, Mail, Phone, Globe, Calendar, CheckCircle, Clock, XCircle } from "lucide-react"

export default async function AdminAffiliatesPage() {
  const supabase = await createClient()

  const { data: affiliates } = await supabase
    .from("affiliate_applications")
    .select("*")
    .order("created_at", { ascending: false })

  const allAffiliates = affiliates ?? []

  const statusCounts = {
    pending: allAffiliates.filter((a) => a.status === "pending").length,
    approved: allAffiliates.filter((a) => a.status === "approved").length,
    rejected: allAffiliates.filter((a) => a.status === "rejected").length,
  }

  function getStatusBadge(status: string) {
    switch (status) {
      case "approved":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
            <CheckCircle className="h-3 w-3" />
            Approved
          </span>
        )
      case "rejected":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700">
            <XCircle className="h-3 w-3" />
            Rejected
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
          Affiliate Applications
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {allAffiliates.length} application{allAffiliates.length !== 1 ? "s" : ""} total
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
              <p className="text-xs text-muted-foreground">Pending Review</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{statusCounts.approved}</p>
              <p className="text-xs text-muted-foreground">Approved</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
              <XCircle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{statusCounts.rejected}</p>
              <p className="text-xs text-muted-foreground">Rejected</p>
            </div>
          </div>
        </div>
      </div>

      {allAffiliates.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
            No applications yet
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Affiliate applications will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {/* Table header */}
          <div className="hidden border-b border-border bg-muted/30 px-6 py-3 md:grid md:grid-cols-12 md:gap-4">
            <span className="col-span-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Applicant
            </span>
            <span className="col-span-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </span>
            <span className="col-span-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Audience Size
            </span>
            <span className="col-span-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Status
            </span>
            <span className="col-span-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground text-right">
              Applied
            </span>
          </div>

          {/* Rows */}
          {allAffiliates.map((affiliate) => (
            <div
              key={affiliate.id}
              className="flex flex-col gap-3 border-b border-border px-6 py-4 last:border-0 md:grid md:grid-cols-12 md:items-center md:gap-4"
            >
              <div className="col-span-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-medium text-card-foreground">
                    {affiliate.full_name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {affiliate.business_name || "Individual"}
                  </p>
                </div>
              </div>
              <div className="col-span-3 space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{affiliate.email}</span>
                </div>
                {affiliate.phone && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    <span>{affiliate.phone}</span>
                  </div>
                )}
                {affiliate.website && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-3.5 w-3.5 shrink-0" />
                    <a 
                      href={affiliate.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="truncate hover:text-primary"
                    >
                      {affiliate.website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                )}
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-foreground">
                  {affiliate.audience_size || "Not specified"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {affiliate.promotion_channels || "—"}
                </p>
              </div>
              <div className="col-span-2">
                {getStatusBadge(affiliate.status || "pending")}
              </div>
              <div className="col-span-2 text-right">
                <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(affiliate.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
