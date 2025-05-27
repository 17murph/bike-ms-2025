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
          className="md:hidden bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md touch-manipulation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onTouchStart={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          style={{ WebkitTapHighlightColor: "transparent" }}
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
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-[9999] touch-manipulation"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            onTouchStart={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="bg-white w-full shadow-xl touch-manipulation"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-bold text-gray-900">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    onTouchStart={() => setIsMobileMenuOpen(false)}
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 touch-manipulation"
                    aria-label="Close menu"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
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
                      className="w-6 h-6 text-gray-700"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-3">
                  <a
                    href="/#events-section"
                    className="block py-5 px-4 text-lg font-semibold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                    onTouchStart={() => setIsMobileMenuOpen(false)}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    Events
                  </a>
                  <a
                    href="/#podcast-section"
                    className="block py-5 px-4 text-lg font-semibold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                    onTouchStart={() => setIsMobileMenuOpen(false)}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    Podcast
                  </a>
                  <a
                    href="/#sponsors-section"
                    className="block py-5 px-4 text-lg font-semibold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                    onTouchStart={() => setIsMobileMenuOpen(false)}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    Sponsors
                  </a>
                  <a
                    href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    onTouchStart={() => setIsMobileMenuOpen(false)}
                    className="block mt-6 touch-manipulation"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <div className="w-full bg-red-600 hover:bg-red-700 text-white py-5 text-lg font-semibold rounded-lg text-center">
                      💖 Donate Now
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
