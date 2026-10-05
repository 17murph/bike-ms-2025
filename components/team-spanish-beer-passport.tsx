import Link from "next/link"
import { ExternalLink } from "lucide-react"

type Rider = {
  id: string
  name: string
  firstName: string
  homeState: string
  photo: string
  title: string
  bio: string
  homeRide: string
  donateUrl: string
}

const riders: Rider[] = [
  {
    id: "matt",
    name: "Matt Thompson",
    firstName: "Matt",
    homeState: "Florida",
    photo: "/images/matt-bw.jpg",
    title: "Team Spanish Beer Captain",
    bio: "Matt is the Team Captain of Team Spanish Beer, leading the team's riders in support of the National MS Society and everyone affected by multiple sclerosis.",
    homeRide: "",
    donateUrl: "https://events.nationalmssociety.org/participants/806524",
  },
  {
    id: "casey",
    name: "Casey Murphy",
    firstName: "Casey",
    homeState: "Florida",
    photo: "/images/casey-murphy-bw.jpg",
    title: "Bike MS Passport Rider",
    bio: "Casey Murphy is the founder and host of The Other Side of MS, a podcast that creates space for honest conversations about life with multiple sclerosis. A Bike MS cyclist since 1995 and a current National MS Society MS Ambassador, Casey believes the stories people share can change how we understand MS, and every mile ridden is another opportunity to support the National MS Society.",
    homeRide: "Cycle to the Shore, North Florida",
    donateUrl: "https://events.nationalmssociety.org/participants/810407?referrer=mf%3A810407%3Ayou-copy&language=en",
  },
  {
    id: "erik",
    name: "Erik Henderson",
    firstName: "Erik",
    homeState: "Florida",
    photo: "/images/erik-henderson-bw.jpg",
    title: "Bike MS Passport Rider",
    bio: "A dedicated member of Team Spanish Beer who combines his passion for cycling with a commitment to raising funds for the National MS Society. \u201CPassport status is a great perk, but I\u2019m most proud of the fundraising it takes to get there. I truly hope that one day a dollar I\u2019ve raised helps fund a cure.\u201D",
    homeRide: "Bike MS: Cycle to the Shore, North Florida",
    donateUrl: "https://events.nationalmssociety.org/participants/818857",
  },
  {
    id: "marianne",
    name: "Marianne Davis",
    firstName: "Marianne",
    homeState: "Florida",
    photo: "/images/marianne-davis-bw.jpg",
    title: "Bike MS Passport Rider",
    bio: "Marianne has been involved with Bike MS: Cycle to the Shore for over 10 years as a former team captain, former event chairperson, and now as a rider with Team Spanish Beer. She serves on the Florida Chapter Board of Trustees and rides for those who can't and to honor friends and colleagues living with MS.",
    homeRide: "Cycle to the Shore, North Florida",
    donateUrl: "https://events.nationalmssociety.org/participants/MarianneDavis",
  },
]

export function TeamSpanishBeerPassport() {
  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-2">Meet the Team Spanish Beer Passport Cyclists</h2>
        <p className="text-base italic text-orange-700 mb-3 leading-relaxed">
          Team Spanish Beer is our home team. Our Passport riders take that team beyond North Florida, riding Bike MS
          events around the country while representing the same mission.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          We bring together riders who each raise at least $5,000 every year for the National MS Society. These are
          cyclists who already give everything they have, yet still feel the pull to do more. The Passport community
          gives them a place to belong and a larger story to be part of.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8" aria-label="Team Spanish Beer Passport riders">
          {riders.map((rider) => (
            <li key={rider.id} className="flex flex-col bg-white rounded-sm p-3 pb-5 shadow-[0_12px_28px_rgba(0,0,0,0.14)]">
              <img
                src={rider.photo}
                alt={`${rider.name} - Team Spanish Beer Passport Cyclist`}
                className="block w-full h-72 object-cover object-top bg-gray-100"
              />
              <div className="flex flex-1 flex-col pt-4 px-1 text-center">
                <h3 className="text-xl font-bold text-gray-900">{rider.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-orange-500 mt-0.5">
                  {rider.homeState} · {rider.title}
                </p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{rider.bio}</p>
                {rider.homeRide && (
                  <p className="text-xs text-gray-700 mt-3">
                    <strong>Home Ride:</strong> {rider.homeRide}
                  </p>
                )}
                <div className="mt-auto pt-4">
                  <Link
                    href={rider.donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium text-sm shadow-sm hover:shadow-md"
                  >
                    Donate to {rider.firstName}
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
