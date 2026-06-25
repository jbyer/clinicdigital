import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { id, status } = body

    if (!id || !status || !["approved", "rejected", "pending"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid request. ID and status (approved/rejected/pending) are required" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("affiliate_applications")
      .update({ status })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("[v0] Supabase error:", error.message)
      return NextResponse.json(
        { error: `Failed to update application: ${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Application updated successfully", data },
      { status: 200 }
    )
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
