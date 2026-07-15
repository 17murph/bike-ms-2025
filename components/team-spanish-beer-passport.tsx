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
    photo: "/images/casey-murphy-bw.jpg",
    bio: "Casey Murphy is the founder and host of The Other Side of MS, a podcast that creates space for honest conversations about life with multiple sclerosis. A Bike MS cyclist since 1995 and a current National MS Society MS Ambassador, Casey believes the stories people share can change how we understand MS, and every mile ridden is another opportunity to support the National MS Society. The podcast and Bike MS are two parts of the same mission: listening, learning, and turning those conversations into action.",
    homeRide: "Cycle to the Shore, North Florida",
    donateUrl: "https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS",
  },
  {
    id: "erik",
    name: "Erik Henderson",
    firstName: "Erik",
    homeState: "Florida",
    photo: "/images/erik-henderson.jpg",
    bio: "Erik Henderson has been a dedicated member of Team Spanish Beer, combining his passion for cycling with a commitment to raising funds for the National MS Society. A Bike MS Passport Cyclist, Erik earned Passport status through his fundraising efforts, but for him the recognition represents more than access to rides across the country. \u201CPassport status is a great perk, but I\u2019m most proud of the fundraising it takes to get there. I truly hope that one day a dollar I\u2019ve raised helps fund a cure.\u201D Growing up in Holliston, Massachusetts, Erik always hoped to ride the Cape Cod Getaway. That opportunity became a reality when several of his Team Spanish Beer teammates planned the trip together. \u201CGrowing up in Eastern Mass, I had always heard about the ride and loved the idea of cycling the length of the Cape. When my team chose the ride, it made the decision easy. I\u2019m excited to see a place that means so much to me from the seat of a bicycle.\u201D One of Erik\u2019s favorite Bike MS memories came during the Cycle to the Shore ride when he unexpectedly spent the day riding alongside a NASCAR driver. \u201CWhat I didn\u2019t realize was that he was also a competitive triathlete. It turned into a pretty rigorous day on the bike.\u201D Whether riding close to home or traveling to new events, Erik values the friendships, shared experiences, and the opportunity to help create a future free of MS.",
    homeRide: "Bike MS: Cycle to the Shore, North Florida",
    donateUrl: "https://events.nationalmssociety.org/participants/818857",
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
  {
    id: "matt",
    name: "Matt",
    firstName: "Matt",
    homeState: "",
    photo: "/images/matt.jpg",
    bio: "Matt is the Team Captain of Team Spanish Beer, leading the team's riders in support of the National MS Society and everyone affected by multiple sclerosis.",
    homeRide: "",
    donateUrl: "https://events.nationalmssociety.org/participants/806524",
  },
]

export function TeamSpanishBeerPassport() {
  const [selectedId, setSelectedId] = useState(riders[0].id)
  const selected = riders.find((r) => r.id === selectedId) ?? riders[0]

  return (
    <section className="py-4 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-3">Meet the Team Spanish Beer Passport Cyclist</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We bring together riders who each raise at least $5,000 every year for the National MS Society. These are
          cyclists who already give everything they have, yet still feel the pull to do more. The Passport Team gives
          them a place to belong and a larger story to be part of. Select a rider below to learn what drives them.
        </p>

        {/* Team identity banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {[
            { stat: "4", label: "Passport Riders" },
            { stat: "Growing", label: "Passport Team" },
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
          aria-label="Select a Team Spanish Beer: Passport Team rider"
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
                    alt={`${rider.name} - Team Spanish Beer: Passport Team`}
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
                {rider.homeState && <span className="text-xs text-gray-700">{rider.homeState}</span>}
                <span className="text-[11px] text-gray-400 mt-0.5">Bike MS Passport Rider</span>
              </button>
            )
          })}
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Select a rider to learn their story and support their Bike MS fundraiser.
        </p>

        {/* Featured profile */}
        <div
          key={selected.id}
          className="mt-8 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden animate-in fade-in duration-300 flex flex-col md:flex-row"
        >
          <div className="md:w-64 flex-shrink-0 h-64 md:h-auto bg-gray-100">
            <img
              src={selected.photo || "/placeholder.svg"}
              alt={`${selected.name} - Team Spanish Beer: Passport Team`}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900">{selected.name}</h3>
            <p className="flex items-center gap-1.5 text-sm text-gray-600 mt-1">
              <MapPin className="w-4 h-4 text-orange-500" />
              {selected.homeState && (
                <>
                  {selected.homeState}
                  <span className="text-gray-300">|</span>
                </>
              )}
              <span className="text-gray-500">Bike MS Passport Rider</span>
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">{selected.bio}</p>
            {selected.homeRide && (
              <p className="text-sm text-gray-700 font-medium mt-3">
                <strong>Home Ride:</strong> {selected.homeRide}
              </p>
            )}
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
