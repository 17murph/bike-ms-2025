"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, MapPin } from "lucide-react"

type Rider = {
  id: string
  name: string
  firstName: string
  homeState: string
  photo: string
  bio: string
  homeRide: string
  donateUrl: string
}

const riders: Rider[] = [
  {
    id: "casey",
    name: "Casey Murphy",
    firstName: "Casey",
    homeState: "Florida",
    photo: "/images/casey-bike-ms-ky.jpg",
    bio: "Casey Murphy is the founder and host of The Other Side of MS podcast. He has ridden in Bike MS events since 1995, serves on the North Florida Board of Trustees for the National MS Society, and raised more than $10,000 in 2025. At his home ride, Bike MS: Cycle to the Shore, North Florida, he rides with Team Spanish Beer. He focuses on listening to people living with MS and turning those stories into action through fundraising and advocacy.",
    homeRide: "Cycle to the Shore, North Florida",
    donateUrl: "https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS",
  },
  {
    id: "curt",
    name: "Curt Sauser",
    firstName: "Curt",
    homeState: "Wisconsin",
    photo: "/images/curt-sauser.jpg",
    bio: "Curt was diagnosed with multiple sclerosis in 2008. After struggling to make sense of the news, he made a decision to stop feeling sorry for himself and started his Bike MS team in 2009 to be part of the effort to find a cure. As Captain of Team CCC (Curt's Conquest for a Cure) in Wisconsin, his team has surpassed $1,000,000 in lifetime fundraising. He raised over $10,000 personally in 2025.",
    homeRide: "Best Dam Bike Tour, Baraboo, WI",
    donateUrl: "https://events.nationalmssociety.org/participants/CurtBike2026",
  },
  {
    id: "john",
    name: "John Wallace",
    firstName: "John",
    homeState: "Tennessee",
    photo: "/images/john-wallace.jpg",
    bio: "John Wallace is a retired airline and military pilot from Tennessee who has spent more than ten years riding in the Jack and Back MS Ride and Bike MS in honor of family and friends living with multiple sclerosis. A dedicated cyclist, dog rescuer, and consistent fundraiser, John brings the same discipline and compassion to the road that guided him throughout his career. For him, every ride is an act of service and a way to support the people in his life who face MS each day.",
    homeRide: "Jack and Back, Eagleville, TN",
    donateUrl: "https://events.nationalmssociety.org/participants/815695",
  },
  {
    id: "rob",
    name: "Rob Farthing",
    firstName: "Rob",
    homeState: "Kentucky",
    photo: "/images/rob-farthing-new.jpg",
    bio: "Rob is entering his nineteenth year with Bike MS and has completed twenty-seven events since first joining in 2008. He serves on the Kentucky planning committee, focusing on growing rider participation and supporting local bike shops. Rob rides for the many people in his life who live with MS and carries their names on his bib each year. He also created Mowing for MS, donating the proceeds from mowing fifteen yards each season and contributing more than $39,000 to the MS Society. His 2026 fundraising goal is $15,000.",
    homeRide: "Bluegrass Bourbon, Bardstown, KY",
    donateUrl: "https://events.nationalmssociety.org/participants/764003?referrer=mf%3A764003%3Ayou-copy&language=en",
  },
  {
    id: "marianne",
    name: "Marianne Davis",
    firstName: "Marianne",
    homeState: "Florida",
    photo: "/images/marianne-davis.jpg",
    bio: "Marianne has been involved with Bike MS: Cycle to the Shore for over 10 years as a former team captain for Team PGA TOUR, former Chairperson for the event, and finally as a rider with Team Spanish Beer. She currently serves on the Florida Chapter Board of Trustees for the National MS Society. New to cycling just over a year ago, she's hooked and can't turn back. She considers it a privilege to ride for those who can't and serves to honor close friends and colleagues who live with MS and those who care for them.",
    homeRide: "Cycle to the Shore, North Florida",
    donateUrl: "https://events.nationalmssociety.org/participants/MarianneDavis",
  },
]

export function NationalBikeMSTeam() {
  const [selectedId, setSelectedId] = useState(riders[0].id)
  const selected = riders.find((r) => r.id === selectedId) ?? riders[0]

  return (
    <section className="py-4 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-3">Meet the National Bike MS Team</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We bring together riders who each raise at least $5,000 every year for the National MS Society. These are
          cyclists who already give everything they have, yet still feel the pull to do more. The National Team gives
          them a place to belong and a larger story to be part of. Select a rider below to learn what drives them.
        </p>

        {/* Team identity banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {[
            { stat: "5", label: "Passport Riders" },
            { stat: "Growing", label: "National Team" },
            { stat: "One", label: "Shared Mission" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gray-50 border border-gray-100 rounded-lg py-4 px-3 text-center"
            >
              <div className="text-2xl font-bold text-orange-500">{item.stat}</div>
              <div className="text-sm font-medium text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Rider selector */}
        <div
          className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 lg:flex lg:justify-between lg:overflow-visible"
          role="tablist"
          aria-label="Select a National Bike MS Team rider"
        >
          {riders.map((rider) => {
            const isActive = rider.id === selectedId
            return (
              <button
                key={rider.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedId(rider.id)}
                className={`flex flex-col items-center text-center flex-shrink-0 w-32 sm:w-auto lg:flex-1 rounded-xl p-3 transition-all duration-200 ${
                  isActive
                    ? "bg-orange-50 shadow-md -translate-y-1"
                    : "bg-transparent hover:bg-gray-50"
                }`}
              >
                <div
                  className={`h-20 w-20 rounded-full overflow-hidden bg-gray-100 ring-4 transition-all duration-200 ${
                    isActive ? "ring-orange-500" : "ring-transparent"
                  }`}
                >
                  <img
                    src={rider.photo || "/placeholder.svg"}
                    alt={`${rider.name} - National Bike MS Cycling Team`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <span
                  className={`mt-3 text-sm ${
                    isActive ? "font-bold text-gray-900" : "font-medium text-gray-800"
                  }`}
                >
                  {rider.name}
                </span>
                <span className="text-xs text-gray-700">{rider.homeState}</span>
                <span className="text-[11px] text-gray-400 mt-0.5">Bike MS Passport Rider</span>
              </button>
            )
          })}
        </div>

        {/* Featured profile */}
        <div
          key={selected.id}
          className="mt-8 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden animate-in fade-in duration-300 flex flex-col md:flex-row"
        >
          <div className="md:w-64 flex-shrink-0 h-64 md:h-auto bg-gray-100">
            <img
              src={selected.photo || "/placeholder.svg"}
              alt={`${selected.name} - National Bike MS Cycling Team`}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900">{selected.name}</h3>
            <p className="flex items-center gap-1.5 text-sm text-gray-600 mt-1">
              <MapPin className="w-4 h-4 text-orange-500" />
              {selected.homeState}
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">Bike MS Passport Rider</span>
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">{selected.bio}</p>
            <p className="text-sm text-gray-700 font-medium mt-3">
              <strong>Home Ride:</strong> {selected.homeRide}
            </p>
            <Link
              href={selected.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors mt-4 self-start"
            >
              Donate to {selected.firstName}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
