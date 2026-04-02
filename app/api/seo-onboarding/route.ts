import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const supabase = await createClient()
    
    // Transform the form data to match the database schema
    const dbData = {
      // Business Basics
      business_description: body.businessDescription,
      ideal_patient: body.idealPatient || null,
      primary_services: body.primaryServices,
      locations_served: body.locationsServed,
      top_competitors: body.topCompetitors || null,
      unique_differentiator: body.uniqueDifferentiator || null,
      
      // Goals & Expectations
      success_definition: body.successDefinition,
      focus_areas: body.focusAreas || [],
      previous_seo_experience: body.previousSeoExperience || null,
      previous_seo_provider: body.previousSeoProvider || null,
      previous_seo_results: body.previousSeoResults || null,
      monthly_lead_target: body.monthlyLeadTarget || null,
      
      // Website & Technical
      website_url: body.websiteUrl,
      website_builder: body.websiteBuilder || null,
      website_manager: body.websiteManager || null,
      has_backend_access: body.hasBackendAccess || null,
      has_google_analytics: body.hasGoogleAnalytics || null,
      has_search_console: body.hasSearchConsole || null,
      domain_age: body.domainAge || null,
      
      // Content & Keywords
      target_services: body.targetServices,
      high_revenue_services: body.highRevenueServices || null,
      has_existing_content: body.hasExistingContent || null,
      existing_content_description: body.existingContentDescription || null,
      brand_voice: body.brandVoice || null,
      
      // Local SEO
      has_google_business_profile: body.hasGoogleBusinessProfile || null,
      gbp_verified: body.gbpVerified || null,
      business_name: body.businessName || null,
      business_address: body.businessAddress || null,
      business_phone: body.businessPhone || null,
      listed_directories: body.listedDirectories || [],
      serves_multiple_cities: body.servesMultipleCities || null,
      cities_served: body.citiesServed || null,
      
      // Reputation & Reviews
      google_review_count: body.googleReviewCount || null,
      average_star_rating: body.averageStarRating || null,
      has_review_process: body.hasReviewProcess || null,
      review_process_description: body.reviewProcessDescription || null,
      
      // Access & Approvals
      can_grant_access: body.canGrantAccess || null,
      access_notes: body.accessNotes || null,
      main_contact_name: body.mainContactName,
      main_contact_email: body.mainContactEmail,
      main_contact_phone: body.mainContactPhone || null,
      reporting_preference: body.reportingPreference || null,
      requires_approval: body.requiresApproval || null,
      approver_name: body.approverName || null,
      
      // Budget & Timeline
      has_content_budget: body.hasContentBudget || null,
      content_budget_amount: body.contentBudgetAmount || null,
      upcoming_promotions: body.upcomingPromotions || null,
      past_penalties: body.pastPenalties || null,
      additional_notes: body.additionalNotes || null,
      
      // Status
      status: 'pending'
    }
    
    const { data, error } = await supabase
      .from("seo_onboarding")
      .insert(dbData)
      .select()
      .single()
    
    if (error) {
      console.error("[v0] Supabase insert error:", error)
      return NextResponse.json(
        { error: "Failed to submit form. Please try again." },
        { status: 500 }
      )
    }
    
    return NextResponse.json({ 
      success: true, 
      message: "Form submitted successfully",
      id: data.id 
    })
    
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
