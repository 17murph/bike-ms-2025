"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"
import { Calendar, MapPin, Clock, Bike, Target, Award, ExternalLink } from 'lucide-react'

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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Bike MS Events</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Join the largest fundraising cycling series in the world. Every mile ridden and every dollar raised brings
              us closer to a world free of multiple sclerosis.
            </p>
          </div>
        </div>
      </section>

      {/* Big Bananas Silent Auction Section */}
      <section className="py-10 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Upcoming Event
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Big Bananas 14th Annual MS Silent Auction</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-700 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-600" />
                <span className="font-medium">Monday, May 4, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-600" />
                <span>5:30 - 8:30 p.m.</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-600" />
                <span>Mr. Chubby's Wings, Ponte Vedra</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              As always, 100 percent of proceeds benefit the more than 18,000 North Floridians impacted by MS. 
              More than 300 items from local merchants, restaurants, artists, and service providers will be available.
            </p>
            <Link
              href="https://silentmsauction.weebly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View Silent Auction Items
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Passport Cycling Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-3 text-center">Passport Cycling</h2>
            
            {/* Team Members Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 my-4 text-base">
              <Link
                href="https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                Casey Murphy
                <ExternalLink className="w-4 h-4" />
              </Link>
              <span className="mx-2 text-gray-300">|</span>
              <Link
                href="https://events.nationalmssociety.org/participants/CurtBike2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                Curt Sauser
                <ExternalLink className="w-4 h-4" />
              </Link>
              <span className="mx-2 text-gray-300">|</span>
              <Link
                href="https://events.nationalmssociety.org/participants/815695"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                John Wallace
                <ExternalLink className="w-4 h-4" />
              </Link>
              <span className="mx-2 text-gray-300">|</span>
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=register.start&eventID=2794&teamID=100303"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                Join Our Team
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Statistics Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">2026 Progress</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Fundraising Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">$1,420</h3>
                <p className="text-green-600 font-medium">Raised of $5,000 Goal</p>
                <div className="mt-3 bg-green-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "28.4%" }}></div>
                </div>
                <p className="text-sm text-green-600 mt-2">28.4% Complete</p>
              </div>

              {/* Miles Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bike className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">194.4</h3>
                <p className="text-blue-600 font-medium">Total Miles 2026</p>
                <div className="text-sm text-blue-600 mt-2">
                  <div>Q1: 194.4 miles</div>
                </div>
              </div>

              {/* Events Card */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-700 mb-2">4</h3>
                <p className="text-purple-600 font-medium">Bike MS Events</p>
                <p className="text-sm text-purple-600 mt-2">MA, WA, TN, FL</p>
              </div>

              {/* Time Card */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-700 mb-2">12:39:44</h3>
                <p className="text-orange-600 font-medium">Total Ride Time</p>
                <p className="text-sm text-orange-600 mt-2">Hours:Minutes:Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">2025 Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Fundraising Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">$11,415</h3>
                <p className="text-green-600 font-medium">Raised of $12,000 Goal</p>
                <div className="mt-3 bg-green-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "95.13%" }}></div>
                </div>
                <p className="text-sm text-green-600 mt-2">95.13% Complete</p>
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
                  <div>Q3: 661.9 miles</div>
                  <div>Q4: 71.1 miles</div>
                </div>
              </div>

              {/* Events Card */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-700 mb-2">6</h3>
                <p className="text-purple-600 font-medium">Bike MS Events</p>
                <p className="text-sm text-purple-600 mt-2">FL (x2), WI, GA, CO, KY</p>
              </div>

              {/* Time Card */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-700 mb-2">108:33:28</h3>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Cape Cod Getaway */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px] flex flex-col">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3">
                    <div className="flex items-center justify-center">
                      <h3 className="font-bold text-lg text-center">Cape Cod Getaway</h3>
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="flex flex-col items-center mb-3 flex-grow">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Quincy, MA
                        </p>
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

                {/* Best Dam Bike Tour */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px] flex flex-col">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3">
                    <div className="flex items-center justify-center">
                      <h3 className="font-bold text-lg text-center">Best Dam Bike Tour</h3>
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="flex flex-col items-center mb-3 flex-grow">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Baraboo, WI
                        </p>
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

                {/* Jack and Back (Featured Ride) */}
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
                        <p className="text-sm text-gray-600">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Eagleville, TN
                        </p>
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

                {/* Bike MS: Cycle to the Shore */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px] flex flex-col">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3">
                    <div className="flex items-center justify-center">
                      <h3 className="font-bold text-lg text-center">Bike MS: Cycle to the Shore</h3>
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="flex flex-col items-center mb-3 flex-grow">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Daytona, FL
                        </p>
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

                {/* Georgia Peach Ride */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Georgia Peach Ride</h3>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>September 13, 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>LaGrange, GA</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Bike className="w-4 h-4 text-primary" />
                        <span>70.44 miles</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>4:47:10</span>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <span className="text-green-700 font-medium">✓ Completed</span>
                    </div>
                  </div>
                </div>

                {/* Bike MS: Cycle to the Shore */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Bike MS: Cycle to the Shore</h3>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>October 4, 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Daytona Beach, FL</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Bike className="w-4 h-4 text-primary" />
                        <span>71.1 miles</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>4:29:51</span>
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
                Learn About National Cycling Team
              </Link>
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=register.start&eventID=2794&teamID=100303"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-colors"
              >
                Join Our Team
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
