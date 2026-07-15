"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Home, Heart, Info, Menu, X, Share2, Mail, DollarSign, Users } from 'lucide-react'
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Bike MS", href: "/bike-ms", icon: Heart },
  { name: "National Bike MS Team", href: "/about-bike-ms", icon: Info },
  { name: "Team Spanish Beer", href: "/team-spanish-beer", icon: Users },
  { name: "About / Contact", href: "/contact", icon: Mail },
  { name: "Donate to Casey's Bike MS Fundraiser", href: "/donate", icon: DollarSign },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isBikeMsDomain, setIsBikeMsDomain] = useState(false)
  const pathname = usePathname() || "/"

  // Check if we're on the bike-ms.com domain
  useEffect(() => {
    const hostname = window.location.hostname
    const isBikeMs = hostname === "bike-ms.com" || hostname === "www.bike-ms.com" || hostname.endsWith(".bike-ms.com")
    setIsBikeMsDomain(isBikeMs)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Implement smooth scrolling for hash-only anchor links (e.g., href="#section")
  // This only handles pure hash links, not navigation links to other pages
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      // Get the href attribute directly - if it starts with "#", it's a same-page hash link
      const href = anchor.getAttribute("href")
      
      // Only handle pure hash links like "#section" - not "/page#section" or full URLs
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault()
        const targetElement = document.querySelector(href)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
          window.history.pushState(null, "", href)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <nav
      className={cn(
        "w-full transition-all duration-300 z-50",
        "fixed top-10 left-0 right-0 md:sticky md:top-0",
        scrolled ? "bg-white shadow-md py-1" : "bg-white/95 backdrop-blur-sm py-1.5 md:py-2",
      )}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          {/* Bike MS Logo Section */}
          <Link 
            href={isBikeMsDomain ? "https://www.theothersideofms.com/bike-ms" : "/bike-ms"} 
            {...(isBikeMsDomain ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex items-center gap-3 group hover:bg-primary/5 rounded-lg p-2 -ml-2 transition-colors"
          >
            <img 
              src="/images/bike-ms-logo.jpeg" 
              alt="Bike MS Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xs text-primary font-medium underline underline-offset-2 group-hover:text-primary/80 transition-colors">Learn about our Bike MS</span>
              <span className="text-xs text-primary font-medium underline underline-offset-2 group-hover:text-primary/80 transition-colors">Rides and Fundraising →</span>
            </div>
          </Link>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
              // On bike-ms.com, link to theothersideofms.com for pages other than /about-bike-ms
              const href = isBikeMsDomain && item.href !== "/about-bike-ms" 
                ? `https://www.theothersideofms.com${item.href}` 
                : item.href
              const isExternal = isBikeMsDomain && item.href !== "/about-bike-ms"

              return (
                <Link
                  key={item.name}
                  href={href}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-lg transition-colors",
                    "hover:bg-primary/10 hover:text-primary",
                    isActive ? "bg-primary/10 text-primary font-medium" : "text-gray-700",
                  )}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  <span>{item.name}</span>
                </Link>
              )
            })}

            <div className="ml-2 pl-2 border-l border-gray-200">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Bike MS 2026 - Cycling to End Multiple Sclerosis",
                      url: window.location.href,
                    })
                  }
                }}
                className="flex items-center px-3 py-2 rounded-lg transition-colors hover:bg-primary/10 hover:text-primary text-gray-700"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex justify-end items-center pt-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-lg bg-primary/10 text-primary min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-[9999]" onClick={() => setIsOpen(false)}>
          <div className="bg-white w-full max-w-sm shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-3">
              {/* Close button */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-primary text-xl">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-gray-100 text-gray-600 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
                // On bike-ms.com, link to theothersideofms.com for pages other than /about-bike-ms
                const href = isBikeMsDomain && item.href !== "/about-bike-ms" 
                  ? `https://www.theothersideofms.com${item.href}` 
                  : item.href
                const isExternal = isBikeMsDomain && item.href !== "/about-bike-ms"

                return (
                  <Link
                    key={item.name}
                    href={href}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-4 rounded-lg transition-colors min-h-[48px]",
                      "hover:bg-primary/10 hover:text-primary",
                      isActive ? "bg-primary/10 text-primary font-medium" : "text-gray-700",
                    )}
                  >
                    <item.icon className="w-6 h-6 mr-3" />
                    <span className="text-lg">{item.name}</span>
                  </Link>
                )
              })}

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Bike MS 2026 - Cycling to End Multiple Sclerosis",
                      url: window.location.href,
                    })
                  }
                  setIsOpen(false)
                }}
                className="flex items-center px-4 py-4 rounded-lg transition-colors hover:bg-primary/10 hover:text-primary text-gray-700 min-h-[48px]"
              >
                <Share2 className="w-6 h-6 mr-3" />
                <span className="text-lg">Share</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
