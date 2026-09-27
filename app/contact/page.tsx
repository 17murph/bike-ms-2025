"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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

      {/* Add padding to account for fixed banner and navigation */}
      <div className="pt-[56px] md:pt-[16px]"></div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full h-[500px] md:h-[550px] overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src="/images/Casey_BikeMS_cycling.png"
              alt="Casey cycling in Bike MS jersey"
              fill
              className="object-contain opacity-25"
              priority
            />
          </div>
          <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-5 opacity-30">
            <Image
              src="/images/bike-ms-logo.jpeg"
              alt="Bike MS Logo"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-5 opacity-30">
            <Image
              src="/images/Passport.png"
              alt="Bike MS Passport Program Seal"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              I Ride to End <span className="text-[#E25D28]">MS</span>. Your Donation Fuels the Mission.
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Every dollar fuels research, care, and hope for people living with MS.
            </p>
            <a
              href="https://events.nationalmssociety.org/participants/810407?referrer=mf%3A810407%3Ayou-copy&language=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E25D28] text-white text-xl font-bold rounded-lg hover:bg-[#d14e1c] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(226,93,40,0.5)] transform hover:scale-105"
            >
              <Heart className="w-6 h-6" />
              Donate Now
            </a>
          </div>
        </div>
      </section>

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

          {/* Redesigned About Me Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Image Column - Full height on desktop */}
              <div className="md:w-2/5 relative">
                <img
                  src="/images/casey-murphy-professional.jpg"
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
                  <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Casey Murphy: <span className="text-orange-500">MS</span> Ambassador</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-4 leading-relaxed">
                      I'm a passionate cyclist, MS advocate, and Official MS Ambassador. My journey with Bike MS began in 1995, and since then,
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
                      <p className="text-gray-700">Former Board of Trustees member, National MS Society (North Florida)</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <p className="text-gray-700"><span className="text-orange-500 font-semibold">MS</span> Ambassador</p>
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
                  href="mailto:cmurphy@sjmalaw.com"
                  className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  cmurphy@sjmalaw.com
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a
                href="mailto:cmurphy@sjmalaw.com?subject=Bike%20MS%20Contact%20Inquiry"
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
