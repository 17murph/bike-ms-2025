"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Mail, MessageSquare } from "lucide-react"
import { BackToTopButton } from "@/components/back-to-top-button"
import { useEffect } from "react"
import { SocialMediaLinks } from "@/components/social-media-links"

export default function ContactPage() {
  // Set metadata via useEffect to avoid server-side rendering issues
  useEffect(() => {
    document.title = "Contact | Bike MS 2025"
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <main className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Have questions about Bike MS, the podcast, or want to get involved? Reach out to Casey Murphy directly
                using the contact information below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-700 mb-4">Call or text Casey directly</p>
                <a
                  href="tel:9045041500"
                  className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  904-504-1500
                </a>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-700 mb-4">Send an email anytime</p>
                <a
                  href="mailto:cmurphy@sjmalaw.com"
                  className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  cmurphy@sjmalaw.com
                </a>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center text-center mb-8">
              <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Podcast Guest Inquiries</h3>
              <p className="text-gray-700 mb-4">
                Interested in sharing your MS story on The Other Side of MS podcast? We'd love to hear from you!
              </p>
              <a
                href="mailto:cmurphy@sjmalaw.com?subject=Podcast%20Guest%20Inquiry"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email Casey</span>
              </a>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <p className="text-gray-700 mb-6">
                Follow Casey and The Other Side of MS on social media for updates, stories, and more.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="https://mssociety.donordrive.com/participant/casey-murphy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-4 rounded-lg text-center hover:bg-red-700 transition-colors"
              >
                Donate to Bike MS
              </Link>
              <Link
                href="https://open.spotify.com/episode/2mgTM4aV6BRTA1mWFfd2FD?si=7sAb2qGYSB26ahSVLHmyHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700 transition-colors"
              >
                Listen to the Latest Podcast
              </Link>
              <Link
                href="/podcast"
                className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
              >
                Browse All Episodes
              </Link>
              <Link
                href="/events"
                className="bg-yellow-600 text-white p-4 rounded-lg text-center hover:bg-yellow-700 transition-colors"
              >
                View Upcoming Events
              </Link>
            </div>
          </div>

          {/* Social Media Links */}
          <SocialMediaLinks />
        </div>
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

