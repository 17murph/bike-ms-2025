"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname() || "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Updated navigation links in the requested order
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-bike-ms", label: "About Bike MS" },
    { href: "/podcast", label: "Podcast" },
    { href: "/events", label: "Events" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/pictures", label: "Photos" },
    { href: "/contact", label: "About / Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white/90",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-lg md:text-xl text-primary">Bike MS 2025</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-100 hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://mssociety.donordrive.com/participant/casey-murphy"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-secondary text-white hover:bg-secondary/90 transition-colors"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
            aria-expanded={isOpen}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transform transition-transform ease-in-out duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className="font-bold text-lg text-primary">Bike MS 2025</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="px-4 pt-4 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-100 hover:text-primary",
              )}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://mssociety.donordrive.com/participant/casey-murphy"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 px-4 py-2 rounded-md text-base font-medium bg-secondary text-white hover:bg-secondary/90 transition-colors text-center"
            onClick={closeMenu}
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  )
}
