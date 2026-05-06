import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, websiteUrl } = body

    // Validate required fields
    if (!name || !email || !websiteUrl) {
      return NextResponse.json(
        { error: "Name, email, and website URL are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      )
    }

    // Validate URL format
    try {
      new URL(websiteUrl)
    } catch {
      return NextResponse.json(
        { error: "Please provide a valid website URL" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("site_audit_requests")
      .insert({
        name,
        email,
        phone: phone || null,
        website_url: websiteUrl,
        status: "pending",
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Supabase error:", error)
      return NextResponse.json(
        { error: "Failed to submit audit request" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Audit request submitted successfully",
      id: data.id,
    })
  } catch (error) {
    console.error("[v0] Site audit submission error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
