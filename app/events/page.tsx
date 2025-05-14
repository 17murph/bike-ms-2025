"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { BackToTopButton } from "@/components/back-to-top-button"
import { Heart, Calendar, MapPin, Clock, Bike, Info } from "lucide-react"
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
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Featured Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Jax Bourbon Social */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-56 w-full bg-amber-50">
                  <img
                    src="/images/Jax BS.jpg.jpeg"
                    alt="Jax Bourbon Social - Fundraising event for MS"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?key=69rch"
                      e.currentTarget.onerror = null
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-2xl font-bold">Jax Bourbon Social</h3>
                    <p className="text-sm opacity-90">Premium bourbon tasting & fundraising</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">July 19, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-medium">4:00 PM - 9:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:col-span-2">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">3130 Parental Home Road, Jacksonville, FL 32216</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5">
                    Join us for an evening of bourbon tasting, delicious food, and fundraising for the National MS
                    Society. This event features premium bourbon selections, silent auctions, and opportunities to
                    connect with the MS community.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://www.jaxbourbonsocial.com/event-details"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors text-sm font-medium"
                    >
                      <Info className="w-4 h-4" />
                      <span>Event Details</span>
                    </Link>
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
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

              {/* Dinner of Champions */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-56 w-full bg-blue-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-auto">
                      <img
                        src="/images/dinner-of-champions.png"
                        alt="Dinner of Champions - MS Society Fundraising Gala"
                        className="object-contain max-h-40"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?key=5omfl"
                          e.currentTarget.onerror = null
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-2xl font-bold">Dinner of Champions</h3>
                    <p className="text-sm opacity-90">Prestigious MS Society gala</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">June 5, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-medium">6:00 PM - 9:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:col-span-2">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">
                          Florida Blue Conference Center, 4800 Deerwood Park, Jacksonville, FL 32246
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5">
                    The Dinner of Champions is a prestigious gala honoring individuals who have made significant
                    contributions to the MS community. Join us for an elegant evening featuring a gourmet dinner, awards
                    ceremony, and fundraising activities.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://my.onecause.com/event/organizations/92771a7b-c025-4a2e-a533-fe6e8a011f5e/events/vevt:be06f33b-5f5e-47b5-a80a-2c2493ed533d/home/story"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-sm font-medium"
                    >
                      <Info className="w-4 h-4" />
                      <span>Event Details</span>
                    </Link>
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
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
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Upcoming Bike MS Rides</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bike MS: Kentucky Bourbon Country Ride */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full bg-amber-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-amber-800 text-center">
                      <Bike className="w-16 h-16 mx-auto mb-2" />
                      <h3 className="text-xl font-bold">Bluegrass Bourbon Ride</h3>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 m-3 rounded-full text-sm font-medium">
                    Kentucky
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3">Bike MS: Bluegrass Bourbon Ride</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">June 14-15, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">Bardstown, KY</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <Bike className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Distance Options</p>
                        <p className="font-medium">30, 50, 75, or 100 miles</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5">
                    Experience the rolling hills and scenic beauty of Kentucky's bourbon country in this two-day cycling
                    event. Ride through historic distillery routes and enjoy the camaraderie of fellow cyclists
                    supporting the MS cause.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donorDrive.event&eventID=2094"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <Info className="w-4 h-4" />
                      <span>Event Details</span>
                    </Link>
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
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

              {/* Bike MS: Colorado Ride */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full bg-green-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-green-800 text-center">
                      <Bike className="w-16 h-16 mx-auto mb-2" />
                      <h3 className="text-xl font-bold">Colorado Ride</h3>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 m-3 rounded-full text-sm font-medium">
                    Boulder
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3">Bike MS: Colorado Ride</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">June 28-29, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">Boulder, CO</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <Bike className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Distance Options</p>
                        <p className="font-medium">30, 68, or 100 miles</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5">
                    Challenge yourself with the breathtaking mountain views of Colorado in this two-day cycling event.
                    Experience the majestic Rocky Mountain scenery while riding to support the MS community and
                    research.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donorDrive.event&eventID=2099"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <Info className="w-4 h-4" />
                      <span>Event Details</span>
                    </Link>
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Q1 (Jan-Mar)</h3>
                  <div className="text-3xl font-bold mb-1">366.74 miles</div>
                  <p className="text-gray-500 text-sm">Time: 24:47:48</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Q2 (Apr-Jun)</h3>
                  <div className="text-3xl font-bold mb-1">171.1 miles</div>
                  <p className="text-gray-500 text-sm">Time: 11:06:50</p>
                </div>

                <div className="bg-red-50 rounded-lg p-5 text-center">
                  <h3 className="text-lg font-semibold text-red-700 mb-2">Total 2025</h3>
                  <div className="text-3xl font-bold mb-1">537.84 miles</div>
                  <p className="text-gray-500 text-sm">Time: 35:54:38</p>
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
