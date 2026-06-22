import { updateSession } from "@/lib/supabase/middleware"
import { NextResponse, type NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? ""

  if (host.startsWith("diagnostics.")) {
    const pathname = request.nextUrl.pathname
    // Pass _next/* through untouched (static, data, chunks)
    if (pathname.startsWith("/_next/")) {
      return NextResponse.next()
    }
    const url = request.nextUrl.clone()
    url.pathname = `/diagnostics${pathname === "/" ? "" : pathname}`
    return NextResponse.rewrite(url)
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
