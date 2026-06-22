import { updateSession } from "@/lib/supabase/middleware"
import { NextResponse, type NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // Diagnostics subdomain is public — skip Supabase entirely so its routes
  // work without Supabase env vars and don't hit auth logic.
  const host = request.headers.get("host") ?? ""
  if (host.startsWith("diagnostics.")) {
    return NextResponse.next()
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
