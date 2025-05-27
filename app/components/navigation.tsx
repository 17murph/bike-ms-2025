"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          NMSS Fundraiser
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/#events-section" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Events
          </Link>
          <Link href="/#podcast-section" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Podcast
          </Link>
          <Link href="/#sponsors-section" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Sponsors
          </Link>
          <Link
            href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-secondary hover:bg-secondary/90 text-white">Donate</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-primary text-white p-2 rounded-md hover:bg-primary/90 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
            <nav className="py-4 px-4 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-4">
                <Link
                  href="/#events-section"
                  className="block py-3 text-gray-900 hover:text-primary transition-colors font-medium border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/#podcast-section"
                  className="block py-3 text-gray-900 hover:text-primary transition-colors font-medium border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Podcast
                </Link>
                <Link
                  href="/#sponsors-section"
                  className="block py-3 text-gray-900 hover:text-primary transition-colors font-medium border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sponsors
                </Link>
                <Link
                  href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-4"
                >
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 text-lg">Donate</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
