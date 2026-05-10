import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const pathname = request.nextUrl.pathname

  // Check if the request is from bike-ms.com or www.bike-ms.com
  const isBikeMsDomain =
    hostname === "bike-ms.com" ||
    hostname === "www.bike-ms.com" ||
    hostname.endsWith(".bike-ms.com")

  // If on bike-ms.com domain and requesting /podcast, redirect to www.theothersideofms.com
  if (isBikeMsDomain && (pathname === "/podcast" || pathname === "/podcast/")) {
    return NextResponse.redirect("https://www.theothersideofms.com", 308)
  }

  // If on bike-ms.com domain, redirect to /about-bike-ms (except if already there)
  if (isBikeMsDomain && !pathname.startsWith("/about-bike-ms")) {
    const url = request.nextUrl.clone()
    url.pathname = "/about-bike-ms"
    return NextResponse.redirect(url, 308)
  }

  // For theothersideofms.com or any other domain, continue normally
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
}
