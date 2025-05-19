"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { BackToTopButton } from "@/components/back-to-top-button"
import { Heart, Mail, Phone, MessageSquare, ExternalLink, CheckCircle } from "lucide-react"
import { SocialMediaLinks } from "@/components/social-media-links"

export default function ContactPage() {
  // Set metadata via useEffect to avoid server-side rendering issues
  useEffect(() => {
    document.title = "About & Contact | Cycling to End Multiple Sclerosis"
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <main className="container mx-auto py-6 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold text-center">About & Contact</h1>
            <p className="text-lg text-center text-gray-700">Learn more about our mission and get in touch</p>

            <div className="flex justify-center gap-4 my-6">
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                <Heart className="w-5 h-5" />
                <span>Donate to Bike MS</span>
              </Link>
            </div>
          </section>

          {/* Full-width Medals Hero Image */}
          <section className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Medals-ReTFucpnIp1aiNBsVWpyrZAkHX26fg.jpeg"
              alt="Bike MS Medals Collection"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?key=lbuyq"
                e.currentTarget.onerror = null
              }}
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-md">
                Why I Ride. Why I Listen. Why I Won't Stop.
              </h2>
            </div>
          </section>

          {/* Redesigned About Me Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Image Column - Full height on desktop */}
              <div className="md:w-2/5 relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casey%20April%202025-DU0svdb81P0mzO2CgEgfYgEE3Ugv3m.jpeg"
                  alt="Casey Murphy - Bike MS cyclist and advocate"
                  className="w-full h-full object-cover object-center"
                  style={{ minHeight: "300px", maxHeight: "600px" }}
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?key=9ze9l"
                    e.currentTarget.onerror = null
                  }}
                />
              </div>

              {/* Content Column */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Casey Murphy</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-4 leading-relaxed">
                      I'm a passionate cyclist and MS advocate. My journey with Bike MS began in 1995, and since then,
                      I've been dedicated to raising awareness and funds for multiple sclerosis research and support
                      services.
                    </p>
                    <p className="mb-4 leading-relaxed">
                      As a member of Team Spanish Beer, I participate in multiple Bike MS events each year across the
                      country. My goal is to help create a world free of MS while building a community of support for
                      those affected by this disease.
                    </p>
                    <p className="leading-relaxed">
                      Through cycling, podcasting, and community events, I'm committed to making a difference in the
                      lives of people living with MS. Join me in this important mission!
                    </p>
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="mt-6 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100 p-5">
                  <h3 className="font-bold text-lg mb-3 text-blue-800">Experience & Achievements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <p className="text-gray-700">Cycling for Bike MS since 1995</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <p className="text-gray-700">Completed over 35 Bike MS events</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <p className="text-gray-700">Top fundraiser in the Southeast Region</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <p className="text-gray-700">Board of Trustees member, National MS Society (North Florida)</p>
                    </div>
                  </div>
                </div>

                {/* Roles Section */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-full">
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Team Spanish Beer Member</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-full">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Podcast Host</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

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
                  href="mailto:CMURPHY@SJMALAW.COM"
                  className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  CMURPHY@SJMALAW.COM
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a
                href="mailto:CMURPHY@SJMALAW.COM?subject=Bike%20MS%20Contact%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </a>
            </div>
          </section>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-4 rounded-lg text-center hover:bg-red-700 transition-colors"
              >
                Donate to Bike MS
              </Link>
              <Link
                href="https://open.spotify.com/show/3t5Nt9jtmDpPXLGiTHOCr2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700 transition-colors"
              >
                Listen to the Podcast
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
      <MobileTextButton />
    </div>
  )
}
