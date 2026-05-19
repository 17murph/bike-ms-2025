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
              src="/images/Casey_BikeMS_cycling.png"
              alt="Casey cycling in Bike MS jersey"
              width={200}
              height={200}
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
                src="/images/Transparent_Logo_2026.png"
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

      {/* Fundraising Progress Bar */}
      <section className="py-4 bg-gray-100">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">We&apos;re not just a podcast. We ride Bike MS to fund the fight against MS.</h3>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-primary">$2,270</span>
                <span className="text-gray-500 text-sm">of $10,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div 
                  className="bg-primary h-1.5 rounded-full transition-all duration-500" 
                  style={{ width: '22.7%' }}
                ></div>
              </div>
            </div>
            <a
              href="https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-full hover:bg-secondary/90 transition-all whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* Bike MS 2026 Rides Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Bike MS 2026 Rides</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here&apos;s where we&apos;re riding in 2026. Join us or sponsor a ride to support the National MS Society.
            </p>
            <a
              href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold underline"
            >
              Look for your Bike MS Ride Here
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Ride 1 - Cape Cod Getaway */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px] flex flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3">
                <div className="flex items-center justify-center">
                  <h3 className="font-bold text-lg text-center">Cape Cod Getaway</h3>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex flex-col items-center mb-3 flex-grow">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Quincy, MA</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 mt-auto">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-sm">June 27/28, 2026</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-600 font-medium mb-1">Team Spanish Beer - Passport Ride</p>
                  <a
                    href="https://events.nationalmssociety.org/pages/10304?eventID=2517"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium underline"
                  >
                    Event Details
                  </a>
                </div>
              </div>
            </div>

            {/* Ride 2 - Best Dam Bike Tour */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px] flex flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3">
                <div className="flex items-center justify-center">
                  <h3 className="font-bold text-lg text-center">Best Dam Bike Tour</h3>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex flex-col items-center mb-3 flex-grow">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Baraboo, WI</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 mt-auto">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-sm">August 1/2, 2026</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-600 font-medium mb-1">Team CCC Passport Ride</p>
                  <a
                    href="https://events.nationalmssociety.org/pages/11402?eventID=2735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium underline"
                  >
                    Event Details
                  </a>
                </div>
              </div>
            </div>

            {/* Ride 3 - Jack and Back (Featured Ride) */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px] flex flex-col">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3">
                <div className="flex items-center justify-center">
                  <h3 className="font-bold text-lg text-center">Jack and Back</h3>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex flex-col items-center mb-3 flex-grow">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-orange-600 mb-1">Featured Ride</p>
                    <p className="text-sm text-gray-600">Eagleville, TN</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 mt-auto">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-sm">Sept 12/13, 2026</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-600 font-medium mb-1">The Other Side of MS Featured Passport Ride</p>
                  <a
                    href="https://events.nationalmssociety.org/2746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium underline"
                  >
                    Event Details
                  </a>
                </div>
              </div>
            </div>

            {/* Ride 4 - Bike MS: Cycle to the Shore */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px] flex flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3">
                <div className="flex items-center justify-center">
                  <h3 className="font-bold text-lg text-center">Bike MS: Cycle to the Shore</h3>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex flex-col items-center mb-3 flex-grow">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Daytona, FL</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 mt-auto">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-sm">Oct 3/4, 2026</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-600 font-medium mb-1">Team Spanish Beer - Home Ride</p>
                  <a
                    href="https://events.nationalmssociety.org/2776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium underline"
                  >
                    Event Details
                  </a>
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
