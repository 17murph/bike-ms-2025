"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { BackToTopButton } from "@/components/back-to-top-button"
import { ReliableImage } from "@/components/reliable-image"
import { Heart, Calendar, MapPin, Clock, Users, Bike } from "lucide-react"
import { SocialMediaLinks } from "@/components/social-media-links"

export default function EventsPage() {
  // Set metadata via useEffect to avoid server-side rendering issues
  useEffect(() => {
    document.title = "Events | Cycling to End Multiple Sclerosis"
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <main className="container mx-auto py-6 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold text-center">Events</h1>
            <p className="text-lg text-center text-gray-700">
              Join us at these upcoming events to support the fight against MS
            </p>

            <div className="flex justify-center gap-4 my-6">
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                <Heart className="w-5 h-5" />
                <span>Donate to MS Society</span>
              </Link>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>

            <div className="space-y-6">
              {/* Jax Bourbon Social */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <ReliableImage
                    src="/images/Jax BS.jpg.jpeg"
                    alt="Jax Bourbon Social - Fundraising event for MS"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Jax Bourbon Social</h3>
                  <div className="flex flex-wrap gap-3 my-3">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>July 19, 2025</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>3130 Parental Home Road, Jacksonville, FL 32216</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>4:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                  <p className="mb-3">
                    Join us for an evening of bourbon tasting, delicious food, and fundraising for the National MS
                    Society. This event features premium bourbon selections, silent auctions, and opportunities to
                    connect with the MS community.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://www.jaxbourbonsocial.com/event-details"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors text-sm"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Event Details</span>
                    </Link>
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-colors text-sm"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Donate</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Dinner of Champions */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <ReliableImage
                    src="/images/dinner-of-champions.png"
                    alt="Dinner of Champions - MS Society Fundraising Gala"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Dinner of Champions</h3>
                  <div className="flex flex-wrap gap-3 my-3">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>June 5, 2025</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Florida Blue Conference Center, 4800 Deerwood Park, Jacksonville, FL 32246</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>6:00 PM - 9:30 PM</span>
                    </div>
                  </div>
                  <p className="mb-3">
                    The Dinner of Champions is a prestigious gala honoring individuals who have made significant
                    contributions to the MS community. Join us for an elegant evening featuring a gourmet dinner, awards
                    ceremony, and fundraising activities.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://my.onecause.com/event/organizations/92771a7b-c025-4a2e-a533-fe6e8a011f5e/events/vevt:be06f33b-5f5e-47b5-a80a-2c2493ed533d/home/story"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors text-sm"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Event Details</span>
                    </Link>
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-colors text-sm"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Donate</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bike MS: Suncoast Challenge */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <ReliableImage
                    src="/images/suncoast-medal.png"
                    alt="Bike MS: Suncoast Challenge - Cycling event in Sarasota, Florida"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Bike MS: Suncoast Challenge</h3>
                  <div className="flex flex-wrap gap-3 my-3">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>March 29, 2025</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Sarasota, FL</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Bike className="w-4 h-4" />
                      <span>25, 50, 75, or 100 miles</span>
                    </div>
                  </div>
                  <p className="mb-3">
                    Join Team Spanish Beer for the Bike MS: Suncoast Challenge, a one-day cycling event through the
                    beautiful coastal roads of Sarasota. Choose your distance and ride to help create a world free of
                    MS.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://mssociety.donordrive.com/index.cfm?fuseaction=donorDrive.event&eventID=1068"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors text-sm"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Event Details</span>
                    </Link>
                    <Link
                      href="https://mssociety.donordrive.com/index.cfm?fuseaction=donorDrive.team&teamID=44193"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-blue-500 text-blue-600 rounded-md hover:bg-blue-500 hover:text-white transition-colors text-sm"
                    >
                      <Users className="w-4 h-4" />
                      <span>Join Team Spanish Beer</span>
                    </Link>
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-colors text-sm"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Donate</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bike MS: Kentucky Bourbon Country Ride */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <ReliableImage
                    src="/placeholder.svg?key=tzf3n"
                    alt="Bike MS: Kentucky Bourbon Country Ride - Cycling event in Bardstown, Kentucky"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Bike MS: Bluegrass Bourbon Ride</h3>
                  <div className="flex flex-wrap gap-3 my-3">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>June 14-15, 2025</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Bardstown, KY</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Bike className="w-4 h-4" />
                      <span>30, 50, 75, or 100 miles</span>
                    </div>
                  </div>
                  <p className="mb-3">
                    Experience the rolling hills and scenic beauty of Kentucky's bourbon country in this two-day cycling
                    event. Ride through historic distillery routes and enjoy the camaraderie of fellow cyclists
                    supporting the MS cause.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://mssociety.donordrive.com/index.cfm?fuseaction=donorDrive.event&eventID=1069"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors text-sm"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Event Details</span>
                    </Link>
                    <Link
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-colors text-sm"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Donate</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">2025 Cycling Totals</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-600">Q1 (Jan-Mar)</h3>
                <div className="text-3xl font-bold my-2">0 miles</div>
                <p className="text-gray-500">0:00:00</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-600">Q2 (Apr-Jun)</h3>
                <div className="text-3xl font-bold my-2">171.1 miles</div>
                <p className="text-gray-500">11:06:50</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-600">Total 2025</h3>
                <div className="text-3xl font-bold my-2">171.1 miles</div>
                <p className="text-gray-500">11:06:50</p>
              </div>
            </div>
          </section>

          {/* Add Social Media Links */}
          <SocialMediaLinks />
        </div>
      </main>

      <Footer />
      <BackToTopButton />
      <MobileTextButton />
    </div>
  )
}
