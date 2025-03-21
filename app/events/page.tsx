"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Bike } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"
import { BackToTopButton } from "@/components/back-to-top-button"
import { useEffect } from "react"
import { SocialMediaLinks } from "@/components/social-media-links"

export default function EventsPage() {
  // Set metadata via useEffect to avoid server-side rendering issues
  useEffect(() => {
    document.title = "Events | Bike MS 2025"
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Training Rides &amp; Events</h1>

        <div className="text-center space-y-4 max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold">Interested in cycling for MS?</h2>
          <p className="text-gray-700">
            Join thousands of cyclists across the country who are riding to create a world free of MS. Find a ride near
            you or learn more about Bike MS.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
            >
              <Bike className="w-4 h-4" />
              Find Your Ride
            </Link>
            <Link
              href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1227&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&language=en&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
            >
              <Bike className="w-4 h-4" />
              About Bike MS
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-lg border text-card-foreground shadow-sm bg-blue-50">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-center">2025 Total Miles</h3>
              <p className="text-4xl font-bold text-center text-blue-600">201.47</p>
            </div>
          </div>
          <div className="rounded-lg border text-card-foreground shadow-sm bg-blue-50">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-center">Total Time in Saddle</h3>
              <p className="text-4xl font-bold text-center text-blue-600">12:53:27</p>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center text-[#e74c3c] mb-6">Bike MS Rides 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Suncoast Challenge",
                location: "Sarasota, FL",
                date: "March 29, 2025",
                time: "7:00 AM ET",
                distance: "75 Miles",
                eventDate: "2025-03-29T07:00:00-04:00",
              },
              {
                title: "Bluegrass Bourbon Ride",
                location: "Bardstown, KY",
                date: "June 14, 2025",
                time: "7:00 AM ET",
                distance: "150 Miles",
                eventDate: "2025-06-14T07:00:00-04:00",
              },
              {
                title: "Bike MS Colorado",
                location: "Boulder, CO",
                date: "June 28, 2025",
                time: "7:00 AM ET",
                distance: "150 Miles",
                eventDate: "2025-06-28T07:00:00-04:00",
              },
              {
                title: "Best Dam Bike Tour WI",
                location: "Baraboo, WI",
                date: "August 2, 2025",
                time: "7:00 AM ET",
                distance: "150 Miles",
                eventDate: "2025-08-02T07:00:00-04:00",
              },
              {
                title: "Georgia Peach Ride",
                location: "LaGrange, GA",
                date: "September 13, 2025",
                time: "7:00 AM ET",
                distance: "75 Miles",
                eventDate: "2025-09-13T07:00:00-04:00",
              },
              {
                title: "PGA Tour, Bike to the Shore",
                location: "Daytona, FL",
                date: "October 4, 2025",
                time: "7:00 AM ET",
                distance: "150 Miles",
                eventDate: "2025-10-04T07:00:00-04:00",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col overflow-hidden"
              >
                <div className="flex flex-col space-y-1.5 p-3 bg-yellow-400 flex-grow-0 py-1">
                  <h3 className="font-semibold tracking-tight text-center text-lg">{event.title}</h3>
                </div>
                <div className="space-y-1 p-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <p className="text-sm">Location: {event.location}</p>
                    <p className="text-sm">Date: {event.date}</p>
                    <p className="text-sm">Time: {event.time}</p>
                    <p className="text-sm">Distance: {event.distance}</p>
                  </div>
                  <CountdownTimer eventDate={event.eventDate} eventName={event.title} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Recent Activities for 2025</h2>
          <div className="space-y-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-xl font-bold">March 2025</h3>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">🚴 3/13/2025 - NordicTrack Indoor Ride</p>
                      <p>6.2 miles</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">🚴 3/8/2025 - Washington DC Road Cycling</p>
                      <p>27.8 miles - 2 hours, 29 min</p>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      View Map
                    </button>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">🚴 3/1/2025 - St Johns County Road Cycling</p>
                      <p>35.7 miles - 2 hours, 2 min</p>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      View Map
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-xl font-bold">February 2025</h3>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">🚴 2/20/2025 - NordicTrack Recovery Ride</p>
                      <p>4.53 miles - 22:27</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">🚴 2/17/2025 - NordicTrack Recovery Ride</p>
                      <p>5.94 miles</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">🚴 2/16/2025 - NordicTrack VO2 Training</p>
                      <p>8.96 miles</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">🚴 2/9/2025 - St Johns County Road Cycling</p>
                      <p>30.51 miles</p>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      View Map
                    </button>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">🚴 2/2/2025 - Jacksonville Road Cycling</p>
                      <p>29.29 miles</p>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      View Map
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-xl font-bold">January 2025</h3>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">🚴 1/19/2025 - NordicTrack Indoor Cycling</p>
                      <p>5.05 miles</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">🚴 1/5/2025 - NordicTrack Indoor Cycling</p>
                      <p>20.02 miles</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">🚴 1/2/2025 - St Johns County Road Cycling</p>
                      <p>27.47 miles</p>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      View Map
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add Social Media Links */}
        <SocialMediaLinks />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

