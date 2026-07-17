import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const pathname = request.nextUrl.pathname

  // Check if the request is from theothersideofms.com - these should pass through normally
  const isTheOtherSideOfMsDomain =
    hostname === "theothersideofms.com" ||
    hostname === "www.theothersideofms.com" ||
    hostname.endsWith(".theothersideofms.com")

  // If on theothersideofms.com domain, continue normally (no redirects)
  if (isTheOtherSideOfMsDomain) {
    return NextResponse.next()
  }

  // Check if the request is from bike-ms.com or www.bike-ms.com
  const isBikeMsDomain =
    hostname === "bike-ms.com" ||
    hostname === "www.bike-ms.com" ||
    hostname.endsWith(".bike-ms.com")

  // If on bike-ms.com domain and requesting /podcast, redirect to www.theothersideofms.com
  if (isBikeMsDomain && (pathname === "/podcast" || pathname === "/podcast/")) {
    return NextResponse.redirect(new URL("https://www.theothersideofms.com"), 308)
  }

  // If on bike-ms.com domain, load the main Bike MS landing page by default.
  // Allow the gateway destinations (Bike MS landing, National Bike MS Team, and
  // Team Spanish Beer) to render so visitors can choose which team to explore.
  const allowedBikeMsPaths = ["/bike-ms", "/about-bike-ms", "/team-spanish-beer"]
  const isAllowedBikeMsPath = allowedBikeMsPaths.some(
    (allowedPath) => pathname === allowedPath || pathname.startsWith(`${allowedPath}/`),
  )
  if (isBikeMsDomain && !isAllowedBikeMsPath) {
    const url = request.nextUrl.clone()
    url.pathname = "/bike-ms"
    return NextResponse.redirect(url, 308)
  }

  // For any other domain (including v0 preview, localhost, etc.), continue normally
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
