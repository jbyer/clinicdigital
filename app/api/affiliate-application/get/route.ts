import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = await createClient()

    const { data: affiliates, error } = await supabase
      .from("affiliate_applications")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Supabase error:", error.message)
      return NextResponse.json(
        { error: `Failed to fetch applications: ${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(affiliates || [], { status: 200 })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
