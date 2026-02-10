"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Home, Mic, Calendar, Heart, Camera, Info, Menu, X, Share2, Mail, Users } from 'lucide-react'
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "National Cycling Team", href: "/about-bike-ms", icon: Info }, // Changed from "About Bike MS" to "National Cycling Team"
  { name: "Podcast", href: "/podcast", icon: Mic },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Sponsors", href: "/sponsors", icon: Users },
  { name: "Media", href: "/media", icon: Camera },
  { name: "About / Contact", href: "/contact", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() || "/"

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

  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith("#") &&
        anchor.origin + anchor.pathname === window.location.origin + window.location.pathname
      ) {
        e.preventDefault()
        const targetElement = document.querySelector(anchor.hash)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
          // Update URL without reload
          window.history.pushState(null, "", anchor.hash)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3 md:py-4",
      )}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-primary text-xl">Bike MS 2026</span>
          </Link>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.name}
                  href={item.href}
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

            <Link
              href="https://events.nationalmssociety.org/bikems"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 ml-2 rounded-lg bg-secondary text-white hover:bg-secondary/90 transition-colors"
            >
              <Heart className="w-4 h-4 mr-2" />
              <span>Donate</span>
            </Link>

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
        <div className="md:hidden flex justify-between items-center">
          <Link href="/" className="text-primary font-bold text-xl">
            Bike MS 2026
          </Link>
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

                return (
                  <Link
                    key={item.name}
                    href={item.href}
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

              <Link
                href="https://events.nationalmssociety.org/bikems"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-4 rounded-lg bg-secondary text-white hover:bg-secondary/90 transition-colors min-h-[48px]"
              >
                <Heart className="w-6 h-6 mr-3" />
                <span className="text-lg">Donate</span>
              </Link>

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
