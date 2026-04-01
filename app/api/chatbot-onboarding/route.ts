import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const supabase = await createClient()
    
    // Transform the form data to match the database schema
    const dbData = {
      // Practice Information
      practice_name: body.practiceName,
      practice_type: body.practiceType,
      practice_type_other: body.practiceTypeOther || null,
      practice_size: body.practiceSize,
      contact_name: body.contactName,
      contact_email: body.contactEmail,
      contact_phone: body.contactPhone || null,
      website_url: body.websiteUrl || null,
      
      // Scheduling Information
      appointment_types: body.appointmentTypes || [],
      business_hours: body.businessHours || {},
      cancellation_policy: body.cancellationPolicy || null,
      
      // Chatbot Features
      selected_features: body.selectedFeatures || [],
      
      // Additional Details
      common_questions: body.commonQuestions || null,
      services_treatments: body.servicesTreatments || null,
      brand_voice: body.brandVoice || null,
      additional_notes: body.additionalNotes || null,
      
      // Status
      status: 'pending'
    }
    
    const { data, error } = await supabase
      .from("chatbot_onboarding")
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
