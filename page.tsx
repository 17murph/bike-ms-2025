"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Bike } from "lucide-react"
import { season1, season2 } from "./data/episodes"
import { PodcastSeason } from "./components/podcast-season"

const scrollAnimation = `
@keyframes scroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
.animate-scroll {
  animation: scroll 20s linear infinite;
}
` as const

const events = [
  {
    title: "Suncoast Challenge",
    location: "Sarasota, FL",
    date: "March 29, 2025",
    distance: "75 Miles",
    donateLink: "https://events.nationalmssociety.org/index.cfm?fuseaction=donate.participant&participantID=586483",
  },
  {
    title: "Bluegrass Bourbon Ride",
    location: "Bardstown, KY",
    date: "June 14-15, 2025",
    distance: "150 Miles",
    donateLink: "https://events.nationalmssociety.org/index.cfm?fuseaction=donate.participant&participantID=591427",
  },
  {
    title: "Bike MS Colorado",
    location: "Boulder, CO",
    date: "June 28- June 29",
    distance: "150 Miles",
  },
  {
    title: "Georgia Peach Ride",
    location: "LaGrange, GA",
    date: "Sept. 13, 2025",
    distance: "75 Miles",
    donateLink: "https://events.nationalmssociety.org/index.cfm?fuseaction=donate.participant&participantID=608609",
  },
  {
    title: "Best Dam Bike Tour WI",
    location: "Baraboo, WI",
    date: "Aug. 2 - 3",
    distance: "150 Miles",
  },
  {
    title: "PGA Tour, Bike to the Shore",
    location: "Daytona, FL",
    date: "Oct 4-5",
    distance: "150 Miles",
  },
]

const fundraisers = [
  "Karyn Laterza",
  "Dan Sweeney",
  "Michael Cavicchia",
  "Rob & Lisa Farthing",
  "Genese Sweeney",
  "Susan Levin",
  "Mark & Dawn Windley",
  "Terry & April Walters",
  "Jan Mobley",
  "Heidi Katz",
  "Erik & Lyn",
  "Mike Hull",
  "Elaine Wuerstlin",
  "Jennifer Long",
  "Debbie & Brian Hamm",
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx global>
        {scrollAnimation}
      </style>

      {/* Author and Mission Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto text-center space-y-6 px-4">
          <h1 className="text-4xl font-bold text-gray-900">Casey Murphy</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed text-gray-700 italic">
              "Because MS changes lives, we ride to change the future. We raise funds and awareness to end Multiple
              Sclerosis. It's about action. Let's make a difference, one story at a time, one mile at a time, one
              donation at a time."
            </p>
          </div>
          <div className="h-1 w-32 bg-red-600 mx-auto"></div>
        </div>
      </section>

      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Logo.jpg-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg"
          alt="Bike MS Logo"
          width={100}
          height={50}
          className="object-contain"
        />
        <h2 className="text-3xl font-bold text-center">Bike MS Rides 2025</h2>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Logo.jpg-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg"
          alt="Bike MS Logo"
          width={100}
          height={50}
          className="object-contain"
        />
      </header>

      <main className="container mx-auto py-8 space-y-12">
        {/* Events Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="bg-yellow-400">
                <CardTitle className="text-center">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <p>Location: {event.location}</p>
                  <p>Date: {event.date}</p>
                  <p>Distance: {event.distance}</p>
                </div>
                {event.donateLink ? (
                  <Link href={event.donateLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-red-600 hover:bg-red-700">Donate Now</Button>
                  </Link>
                ) : (
                  <Button className="w-full" variant="outline" disabled>
                    COMING SOON
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Find Your Ride Section */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Interested in cycling for MS?</h2>
          <div className="flex justify-center gap-4">
            <Link
              href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              <Bike className="w-5 h-5" />
              Find Your Ride
            </Link>
            <Link
              href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1227&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&language=en&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              <Bike className="w-5 h-5" />
              About Bike MS
            </Link>
          </div>
        </section>

        {/* Fundraising Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-center">FUNDRAISING TOTALS:</h2>
          <div className="space-y-2">
            <Progress value={7.8} className="w-full h-4" />
            <p className="text-center text-xl">$1,950 out of $25,000</p>
          </div>
          <div className="relative h-8 overflow-hidden bg-gray-50">
            <div className="absolute w-full animate-scroll whitespace-nowrap">
              {fundraisers.map((name, i) => (
                <span key={i} className="inline-block px-4 font-medium">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Podcast</h2>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%20Logo.JPEG-LznTItVGXC64kGQ29mVEzAWohOa9LN.jpeg"
            alt="The Other Side of MS Podcast Logo"
            width={300}
            height={150}
            className="mx-auto"
          />

          {/* Contact Information */}
          <div className="flex justify-center gap-6 items-center">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-600" />
              <span>904-504-1500</span>
            </div>
            <Link
              href="mailto:cmurphy@sjmalaw.com"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <Mail className="w-5 h-5" />
              <span>cmurphy@sjmalaw.com</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PodcastSeason season={season1} />
            <PodcastSeason season={season2} />
            <PodcastSeason season={{ number: 3, episodes: [] }} isComingSoon />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-8 text-center text-sm text-gray-600">
        <p>
          © 2025 The National Multiple Sclerosis Society is a tax exempt 501(c)3 nonprofit organization and our
          Identification Number (EIN) is 13-5661935
        </p>
      </footer>
    </div>
  )
}

