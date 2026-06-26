"use client"

import { useState } from "react"
import { Mail, Phone, Globe, Building2, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AffiliateDetailsModalProps {
  affiliate: any
  isOpen: boolean
  onClose: () => void
  onStatusChange: (newStatus: string) => void
}

export function AffiliateDetailsModal({
  affiliate,
  isOpen,
  onClose,
  onStatusChange,
}: AffiliateDetailsModalProps) {
  const [isUpdating, setIsUpdating] = useState(false)

  const handleStatusUpdate = async (newStatus: "approved" | "rejected") => {
    setIsUpdating(true)
    try {
      const response = await fetch("/api/affiliate-application/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: affiliate.id, status: newStatus }),
      })

      if (!response.ok) {
        throw new Error("Failed to update status")
      }

      onStatusChange(newStatus)
      onClose()
    } catch (error) {
      console.error("Error updating affiliate status:", error)
      alert("Failed to update affiliate status")
    } finally {
      setIsUpdating(false)
    }
  }

  if (!affiliate) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Affiliate Application Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Applicant Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Applicant Information</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Full Name</p>
                  <p className="font-medium text-foreground">{affiliate.full_name}</p>
                </div>
              </div>
              {affiliate.business_name && (
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Business Name</p>
                    <p className="font-medium text-foreground">{affiliate.business_name}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a 
                    href={`mailto:${affiliate.email}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {affiliate.email}
                  </a>
                </div>
              </div>
              {affiliate.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">{affiliate.phone}</p>
                  </div>
                </div>
              )}
              {affiliate.website && (
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Website</p>
                    <a 
                      href={affiliate.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline break-all"
                    >
                      {affiliate.website}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Affiliate Details */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Affiliate Details</h3>
            <div className="space-y-3 bg-muted/30 rounded-lg p-4">
              {affiliate.referral_method && (
                <div>
                  <p className="text-xs text-muted-foreground">How they found us</p>
                  <p className="font-medium text-foreground">{affiliate.referral_method}</p>
                </div>
              )}
              {affiliate.audience_size && (
                <div>
                  <p className="text-xs text-muted-foreground">Audience Size</p>
                  <p className="font-medium text-foreground">{affiliate.audience_size}</p>
                </div>
              )}
              {affiliate.promotion_channels && (
                <div>
                  <p className="text-xs text-muted-foreground">Promotion Channels</p>
                  <p className="font-medium text-foreground">{affiliate.promotion_channels}</p>
                </div>
              )}
            </div>
          </div>

          {/* Application Status */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">Application Submitted</p>
            <p className="text-sm text-foreground">
              {new Date(affiliate.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 border-t pt-4">
            <Button
              onClick={() => handleStatusUpdate("approved")}
              disabled={isUpdating || affiliate.status === "approved"}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              {isUpdating ? "Updating..." : "Approve"}
            </Button>
            <Button
              onClick={() => handleStatusUpdate("rejected")}
              disabled={isUpdating || affiliate.status === "rejected"}
              variant="destructive"
              className="flex-1"
            >
              {isUpdating ? "Updating..." : "Reject"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
