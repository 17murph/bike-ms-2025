"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { BackToTopButton } from "@/components/back-to-top-button"
import { Heart, Calendar, MapPin, Bike, Info, Trophy } from "lucide-react"
import { SocialMediaLinks } from "@/components/social-media-links"

export default function EventsPage() {
  // Set metadata via useEffect to avoid server-side rendering issues
  useEffect(() => {
    document.title = "Events | Cycling to End Multiple Sclerosis"
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <section className="mb-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Events</h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Join us at these upcoming events to support the fight against MS
              </p>
            </div>

            <div className="flex justify-center mb-10">
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                <Heart className="w-5 h-5" />
                <span>Donate to MS Society</span>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Featured Event</h2>

            <div className="grid grid-cols-1 gap-8">
              {/* Wisconsin vs Florida Fight */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-96 w-full">
                  <img
                    src="/images/florida-vs-wisconsin.jpg"
                    alt="Wisconsin vs Florida Fundraising Competition - Wisconsin Takes a Swing"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=400&width=800&text=Wisconsin+vs+Florida+Fight"
                      e.currentTarget.onerror = null
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">Wisconsin vs. Florida Fight</h3>
                    <p className="text-lg opacity-90">Fundraising Competition for MS Society</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <h4 className="text-lg font-bold text-blue-800 mb-2">Wisconsin</h4>
                      <div className="text-3xl font-bold text-blue-600">$5,100</div>
                      <p className="text-sm text-blue-700 mt-1">Current Total</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 text-center">
                      <h4 className="text-lg font-bold text-orange-800 mb-2">Florida</h4>
                      <div className="text-3xl font-bold text-orange-600">$5,060</div>
                      <p className="text-sm text-orange-700 mt-1">Current Total</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">
                    An epic fundraising battle between Wisconsin and Florida! Both states are competing to raise the
                    most funds for the National Multiple Sclerosis Society. Wisconsin has taken the lead, but Florida is
                    close behind. Every donation counts in this friendly competition to support MS research and
                    programs.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donate.participant&participantID=617194"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      <Trophy className="w-5 h-5" />
                      <span>Support Wisconsin</span>
                    </Link>
                    <Link
                      href="https://events.nationalmssociety.org/participants/Casey-Murphy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors font-medium"
                    >
                      <Trophy className="w-5 h-5" />
                      <span>Support Florida</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Upcoming Bike MS Rides</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bike MS: Wisconsin Best Dam Bike Tour */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full bg-blue-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-blue-800 text-center">
                      <Bike className="w-16 h-16 mx-auto mb-2" />
                      <h3 className="text-xl font-bold">Best Dam Bike Tour</h3>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-3 rounded-full text-sm font-medium">
                    Wisconsin
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3">Bike MS: Best Dam Bike Tour</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">August 2-3, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">Baraboo, WI</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <Bike className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Estimated Mileage</p>
                        <p className="font-medium">150 miles</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5">
                    Experience the scenic beauty of Wisconsin's countryside in this two-day cycling event. Ride through
                    rolling hills and picturesque landscapes while supporting the MS community and research efforts.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://events.nationalmssociety.org/events/2263"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <Info className="w-4 h-4" />
                      <span>Event Details</span>
                    </Link>
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donate.participant&participantID=617194"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Donate</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bike MS: Georgia Peach Ride */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full bg-orange-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-orange-800 text-center">
                      <Bike className="w-16 h-16 mx-auto mb-2" />
                      <h3 className="text-xl font-bold">Georgia Peach Ride</h3>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-orange-600 text-white px-3 py-1 m-3 rounded-full text-sm font-medium">
                    Georgia
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3">Bike MS: Georgia Peach Ride</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">September 13, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">LaGrange, GA</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <Bike className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Estimated Mileage</p>
                        <p className="font-medium">75 miles</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5">
                    Join us for a one-day cycling challenge through the beautiful Georgia countryside. Experience the
                    charm of the Peach State while riding to support the MS community and advance research efforts.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://events.nationalmssociety.org/events/2379"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <Info className="w-4 h-4" />
                      <span>Event Details</span>
                    </Link>
                    <Link
                      href="https://events.nationalmssociety.org/participants/Casey-Murphy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Donate</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">2025 Cycling Statistics</h2>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 rounded-lg p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Q1 (Jan-Mar)</h3>
                  <div className="text-3xl font-bold mb-1 whitespace-nowrap">366.74 miles</div>
                  <p className="text-gray-500 text-sm">Time: 24:47:48</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Q2 (Apr-Jun)</h3>
                  <div className="text-3xl font-bold mb-1 whitespace-nowrap">539 miles</div>
                  <p className="text-gray-500 text-sm">Time: 37:01:08</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Q3 (Jul-Sep)</h3>
                  <div className="text-3xl font-bold mb-1 whitespace-nowrap">128 miles</div>
                  <p className="text-gray-500 text-sm">Time: 08:17:42</p>
                </div>

                <div className="bg-red-50 rounded-lg p-5 text-center">
                  <h3 className="text-lg font-semibold text-red-700 mb-2">Total 2025</h3>
                  <div className="text-3xl font-bold mb-1 whitespace-nowrap">1033.74 miles</div>
                  <p className="text-gray-500 text-sm">Time: 70:06:38</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
              <p className="text-gray-700 mb-6">
                Follow our journey, stay updated on events, and join our community in the fight against MS.
              </p>
              <SocialMediaLinks className="justify-start" />
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <BackToTopButton />
      <MobileTextButton />
    </div>
  )
}
