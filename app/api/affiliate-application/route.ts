import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { fullName, email, phone, company, website, referralMethod, businessName, audienceSize, promotionChannels } = body

    // Validate required fields
    if (!fullName || !email || !referralMethod) {
      return NextResponse.json(
        { error: "Full name, email, and referral method are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("affiliate_applications")
      .insert({
        full_name: fullName,
        email,
        phone: phone || null,
        company: company || null,
        website: website || null,
        referral_method: referralMethod,
        business_name: businessName || null,
        audience_size: audienceSize || null,
        promotion_channels: promotionChannels || null,
        status: "pending",
      })
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Failed to submit application" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Application submitted successfully", data },
      { status: 201 }
    )
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
