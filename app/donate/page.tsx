"use client"

import Link from "next/link"
import Image from "next/image"
import { ReliableImage } from "@/components/reliable-image"
import { Navigation } from "@/components/navigation"
import { useMemo } from "react"
import { Heart } from "lucide-react"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"
import { cn } from "@/lib/utils"

export default function DonatePage() {
  const donors = useMemo(() => [
    { name: "Wendy Bertagnole", tags: ["Platinum Donor"] },
    { name: "Dan Sweeney", tags: ["Gold Donor"] },
    { name: "Jami Stewart", tags: ["Gold Donor"] },
    { name: "Joseph Monticello", tags: ["Silver Donor"] },
    { name: "Elaine Wuerstlin", tags: ["Gold Donor"] },
    { name: "Genese Sweeney", tags: ["Gold Donor"] },
    { name: "Dennis Cook", tags: ["Gold Donor"] }
  ], [])

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Add padding to account for fixed banner and navigation */}
      <div className="pt-[56px] md:pt-[16px]"></div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full h-[500px] md:h-[550px] overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          {/* Blended hero with multiple elements */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/bike-ms-logo.jpeg"
              alt="Bike MS Logo"
              fill
              className="object-contain opacity-20"
              priority
            />
          </div>
          <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-5 opacity-30">
            <Image
              src="/images/jersey-2026-new.png"
              alt="The Other Side of MS Jersey"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-5 opacity-30">
            <Image
              src="/images/bike-ms-complete-badge.png"
              alt="Bike MS Passport Program Seal"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              You&apos;re donating to the National MS Society.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Every dollar fuels research, care, and hope for people living with MS.
            </p>
            <a
              href="https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS"
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

      {/* Mission Section - Why It Matters */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why It Matters</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Multiple Sclerosis affects nearly a million people in the U.S. The National MS Society leads the charge to end MS forever — through research, advocacy, and support programs. When you donate here, you&apos;re joining that movement.
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <Image
                src="/images/bike-ms-logo.jpeg"
                alt="Bike MS Logo"
                width={120}
                height={60}
                className="object-contain"
              />
              <Image
                src="/images/2025-20logo.png"
                alt="The Other Side of MS Logo"
                width={150}
                height={75}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            The Other Side of MS is proud to ride and fundraise for the National MS Society through Bike MS events nationwide. Your gift directly supports this mission.
          </p>

          <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              {/* Thank You Donors - Stock Ticker Style */}
              <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[320px] overflow-hidden">
                <div className="bg-blue-600 text-white p-3 text-center">
                  <h2 className="text-xl font-semibold">Thank You to Our Donors</h2>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center">
                  <p className="text-center text-gray-700 italic mb-4 text-sm">
                    "Every mile we ride, every dollar you give — brings us closer to a world free of MS."
                  </p>
                  <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 rounded-lg py-3">
                    <div className="donor-ticker">
                      {donors.map((donor, index) => (
                        <div key={`a-${index}`} className="flex items-center shrink-0 px-6 border-r border-blue-200 last:border-r-0">
                          <span className="font-bold text-gray-800 whitespace-nowrap">{donor.name}</span>
                          {donor.tags.length > 0 && (
                            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${
                              donor.tags[0].includes('Platinum') ? 'bg-gray-200 text-gray-700' :
                              donor.tags[0].includes('Gold') ? 'bg-yellow-100 text-yellow-700' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {donor.tags[0]}
                            </span>
                          )}
                        </div>
                      ))}
                      {donors.map((donor, index) => (
                        <div key={`b-${index}`} className="flex items-center shrink-0 px-6 border-r border-blue-200 last:border-r-0">
                          <span className="font-bold text-gray-800 whitespace-nowrap">{donor.name}</span>
                          {donor.tags.length > 0 && (
                            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${
                              donor.tags[0].includes('Platinum') ? 'bg-gray-200 text-gray-700' :
                              donor.tags[0].includes('Gold') ? 'bg-yellow-100 text-yellow-700' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {donor.tags[0]}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-3">Hover to pause</p>
                </div>
              </div>

              {/* What $100 Donation Supports */}
              <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[320px]">
                <div className="bg-blue-600 text-white p-3 text-center">
                  <h2 className="text-xl font-semibold">What $100 Donation Supports</h2>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="text-center space-y-4">
                    <ul className="text-left list-disc pl-8 text-black">
                      <li>Research advancing treatments and long-term solutions</li>
                      <li>Support and guidance so people living with MS do not have to face it alone</li>
                    </ul>
                    <div className="flex flex-col items-center mt-4">
                      <div className="relative w-64 h-28 overflow-hidden rounded-lg shadow-sm mx-auto">
                        <ReliableImage
                          src="/images/100bill.jpeg"
                          alt="100 Dollar Bill"
                          width={256}
                          height={112}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bike MS 2026 Rides Preview */}
              <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[320px]">
                <div className="bg-blue-600 text-white p-3 text-center">
                  <h2 className="text-xl font-semibold">Bike MS 2026 Rides</h2>
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow overflow-y-auto">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">Cape Cod Getaway</span>
                      <span className="text-gray-500">Jun 27/28</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">Best Dam Bike Tour</span>
                      <span className="text-gray-500">Aug 1/2</span>
                    </div>
                    <div className="flex items-center justify-between text-sm bg-orange-50 p-2 rounded-lg">
                      <span className="font-medium text-orange-600">Jack and Back (Featured)</span>
                      <span className="text-orange-500">Sep 12/13</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">Cycle to the Shore</span>
                      <span className="text-gray-500">Oct 3/4</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <Link
                      href="/bike-ms"
                      className="text-primary hover:text-primary/80 text-sm font-medium underline"
                    >
                      View All Rides →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with disclaimer */}
      <Footer />

      {/* Additional disclaimer */}
      <div className="bg-gray-900 text-gray-400 text-center text-sm py-4 border-t border-gray-700">
        All donations made through this page benefit the National MS Society.
      </div>

      <BackToTopButton />
    </div>
  )
}
