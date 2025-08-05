"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"
import { CountdownTimer } from "@/components/countdown-timer"
import { Calendar, MapPin, Clock, Bike, Target, Award } from "lucide-react"

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-100 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Bike MS Events 2025</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Join the largest fundraising cycling series in the world. Every mile ridden and every dollar raised brings
              us closer to a world free of multiple sclerosis.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">2025 Progress</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Fundraising Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">$10,410</h3>
                <p className="text-green-600 font-medium">Raised of $20,000 Goal</p>
                <div className="mt-3 bg-green-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "52.05%" }}></div>
                </div>
                <p className="text-sm text-green-600 mt-2">52.05% Complete</p>
              </div>

              {/* Miles Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bike className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">1,233.54</h3>
                <p className="text-blue-600 font-medium">Total Miles 2025</p>
                <div className="text-sm text-blue-600 mt-2">
                  <div>Q1: 366.74 miles</div>
                  <div>Q2: 539 miles</div>
                  <div>Q3: 327.8 miles</div>
                </div>
              </div>

              {/* Events Card */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-700 mb-2">6</h3>
                <p className="text-purple-600 font-medium">Bike MS Events</p>
                <p className="text-sm text-purple-600 mt-2">Passport Rider Program</p>
              </div>

              {/* Time Card */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-700 mb-2">82:38:51</h3>
                <p className="text-orange-600 font-medium">Total Ride Time</p>
                <p className="text-sm text-orange-600 mt-2">Hours:Minutes:Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-md">
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    activeTab === "upcoming" ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
                  }`}
                >
                  Upcoming Events
                </button>
                <button
                  onClick={() => setActiveTab("completed")}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    activeTab === "completed" ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
                  }`}
                >
                  Completed Events
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            {activeTab === "upcoming" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Georgia Peach Ride */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6">
                    <h3 className="text-2xl font-bold text-black">Bike MS Georgia Peach Ride</h3>
                    <p className="text-black/80 mt-2">LaGrange, Georgia</p>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">September 13-14, 2025</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>LaGrange, GA</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Bike className="w-5 h-5 text-primary" />
                        <span>75 Miles (Day 1)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>7:00 AM Start Time</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <CountdownTimer eventDate="2025-09-13T07:00:00-04:00" eventName="Georgia Peach Ride" />
                    </div>

                    <div className="space-y-3">
                      <Link
                        href="https://events.nationalmssociety.org/index.cfm?fuseaction=donorDrive.event&eventID=2379"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                      >
                        Event Details
                      </Link>
                      <Link
                        href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-secondary text-white text-center py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium"
                      >
                        Support My Ride
                      </Link>
                    </div>
                  </div>
                </div>

                {/* PGA Tour, Bike to the Shore */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6">
                    <h3 className="text-2xl font-bold text-black">PGA Tour, Bike to the Shore</h3>
                    <p className="text-black/80 mt-2">Daytona Beach, Florida</p>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">October 4-5, 2025</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Daytona Beach, FL</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Bike className="w-5 h-5 text-primary" />
                        <span>150 Miles (2 Days)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>7:00 AM Start Time</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <CountdownTimer eventDate="2025-10-04T07:00:00-04:00" eventName="PGA Tour, Bike to the Shore" />
                    </div>

                    <div className="space-y-3">
                      <Link
                        href="https://events.nationalmssociety.org/index.cfm?fuseaction=donorDrive.event&eventID=2396"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                      >
                        Event Details
                      </Link>
                      <Link
                        href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-secondary text-white text-center py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium"
                      >
                        Support My Ride
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Completed Events */}
            {activeTab === "completed" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Suncoast Challenge */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Suncoast Challenge</h3>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>March 29, 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Sarasota, FL</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Bike className="w-4 h-4 text-primary" />
                        <span>65.68 miles</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>4:26:00</span>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <span className="text-green-700 font-medium">✓ Completed</span>
                    </div>
                  </div>
                </div>

                {/* Bluegrass Bourbon */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Bluegrass Bourbon</h3>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>June 14-15, 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Louisville, KY</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Bike className="w-4 h-4 text-primary" />
                        <span>86.4 miles</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>6:55:00</span>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <span className="text-green-700 font-medium">✓ Completed</span>
                    </div>
                  </div>
                </div>

                {/* Bike MS Colorado */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Bike MS Colorado</h3>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>June 28, 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Fort Collins, CO</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Bike className="w-4 h-4 text-primary" />
                        <span>145.7 miles</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>10:36:46</span>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <span className="text-green-700 font-medium">✓ Completed</span>
                    </div>
                  </div>
                </div>

                {/* Best Dam Bike Tour */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Best Dam Bike Tour</h3>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>August 2, 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Baraboo, WI</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Bike className="w-4 h-4 text-primary" />
                        <span>139.1 miles</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>9:41:05</span>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <span className="text-green-700 font-medium">✓ Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the Fight Against MS</h2>
            <p className="text-xl text-white/90 mb-8">
              Every mile ridden and every dollar raised brings us closer to a world free of multiple sclerosis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Support My Rides
              </Link>
              <Link
                href="/about-bike-ms"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-colors"
              >
                Learn About Bike MS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
