"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Site Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Site Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-gray-300 hover:text-white transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/pictures" className="text-gray-300 hover:text-white transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Bike MS Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bike MS Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-bike-ms" className="text-gray-300 hover:text-white transition-colors">
                  About Bike MS
                </Link>
              </li>
              <li>
                <Link href="/about-ms" className="text-gray-300 hover:text-white transition-colors">
                  About MS
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-300 hover:text-white transition-colors">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">External Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.nationalmssociety.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  National MS Society
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ?si=97200f7d613a4054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Spotify Podcast
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.nationalmssociety.org/news-and-magazine/momentum-magazine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Momentum Magazine
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:CMURPHY@SJMALAW.COM" className="text-gray-300 hover:text-white transition-colors">
                  CMURPHY@SJMALAW.COM
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Bike MS 2025. All rights reserved.</div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/podcast" className="text-gray-400 hover:text-white transition-colors text-sm">
                Podcast
              </Link>
              <Link href="/pictures" className="text-gray-400 hover:text-white transition-colors text-sm">
                Media
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
