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

const carouselStyles = `
.tsb-carousel {
  /* Mobile-first: single centered card, CSS auto-rotate with soft fade */
  position: relative;
  display: block;
  height: 640px;
  padding: 1.5rem 0;
}

.tsb-card {
  position: absolute;
  left: 50%;
  top: 0;
  width: 88%;
  max-width: 340px;
  background: #ffffff;
  padding: 0.75rem 0.75rem 1.25rem;
  border-radius: 3px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
  transform: translateX(-50%) rotate(-1deg);
  opacity: 0;
  animation: tsb-fade 20s infinite;
}

/* Start with Matt (1st), then rotate through all riders, repeating forever */
.tsb-card:nth-child(1) { animation-delay: 0s; }
.tsb-card:nth-child(2) { animation-delay: 5s; }
.tsb-card:nth-child(3) { animation-delay: 10s; }
.tsb-card:nth-child(4) { animation-delay: 15s; }

.tsb-photo {
  display: block;
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: top;
  background: #f3f4f6;
}

.tsb-caption {
  padding: 0.85rem 0.35rem 0;
  text-align: center;
}

/* Desktop: wider centered card, same auto-rotate with soft fade */
@media (min-width: 768px) {
  .tsb-carousel {
    height: 680px;
  }
  .tsb-card {
    top: 50%;
    width: 360px;
    max-width: none;
    transform: translate(-50%, -50%) rotate(-2.5deg);
  }

  /* Pause rotation on hover */
  .tsb-carousel:hover .tsb-card {
    animation-play-state: paused;
  }

  /* Lift and straighten the hovered card */
  .tsb-card:hover {
    opacity: 1 !important;
    z-index: 20 !important;
    transform: translate(-50%, -50%) rotate(0deg) scale(1.04);
    box-shadow: 0 22px 44px rgba(0, 0, 0, 0.22);
  }

  .tsb-photo {
    height: 300px;
  }
}

/* One card visible per quarter of the cycle, with a short cross-fade */
@keyframes tsb-fade {
  0%   { opacity: 0; z-index: 1; }
  1%   { opacity: 1; z-index: 5; }
  24%  { opacity: 1; z-index: 5; }
  25%  { opacity: 0; z-index: 1; }
  100% { opacity: 0; z-index: 1; }
}

/* Respect reduced motion: show the first card, disable auto-rotate */
@media (prefers-reduced-motion: reduce) {
  .tsb-card {
    animation: none !important;
    opacity: 0;
  }
  .tsb-card:nth-child(1) { opacity: 1; z-index: 5; }
}
`

export function TeamSpanishBeerPassport() {
  return (
    <section className="py-2">
      <style dangerouslySetInnerHTML={{ __html: carouselStyles }} />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-2">Meet the Team Spanish Beer Passport Cyclists</h2>
        <p className="text-base italic text-orange-700 mb-3 leading-relaxed">
          Team Spanish Beer is our home team. Our Passport riders take that team beyond North Florida, riding Bike MS
          events around the country while representing the same mission.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We bring together riders who each raise at least $5,000 every year for the National MS Society. These are
          cyclists who already give everything they have, yet still feel the pull to do more. The Passport community
          gives them a place to belong and a larger story to be part of.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {riders.map((rider) => (
            <Link
              key={rider.id}
              href={rider.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-white border border-orange-200 text-gray-800 rounded-full hover:border-orange-400 hover:text-orange-600 transition-all duration-300 font-medium text-sm min-w-[150px] shadow-[0_0_8px_rgba(249,115,22,0.35)] hover:shadow-[0_0_14px_rgba(249,115,22,0.55)]"
            >
              Donate to {rider.firstName}
            </Link>
          ))}
        </div>
        <p className="mb-4 text-center text-lg font-medium">
          <span className="hidden md:inline">
            Hover over a cyclist card to pause, learn more about their story, and support their Bike MS fundraiser.
          </span>
          <span className="md:hidden">
            Riders rotate automatically. Learn more about each cyclist&rsquo;s story and support their Bike MS
            fundraiser.
          </span>
        </p>

        {/* Two-column layout: rotating cards on the left, stat boxes on the right */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mt-2">
          {/* Rotating cards — left column */}
          <div className="relative w-full mx-auto md:flex-1 md:min-w-0">
            <div
              className="tsb-carousel flex items-center justify-center"
              aria-label="Team Spanish Beer Passport riders"
            >
              {riders.map((rider) => (
                <article key={rider.id} className="tsb-card">
                  <img
                    src={rider.photo || "/placeholder.svg"}
                    alt={`${rider.name} - Team Spanish Beer Passport Cyclist`}
                    className="tsb-photo"
                  />
                  <div className="tsb-caption">
                    <h3 className="text-xl font-bold text-gray-900">{rider.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-orange-500 mt-0.5">
                      {rider.homeState}
                      {rider.homeState && " · "}
                      {rider.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">{rider.bio}</p>
                    {rider.homeRide && (
                      <p className="text-xs text-gray-700 mt-3">
                        <strong>Home Ride:</strong> {rider.homeRide}
                      </p>
                    )}
                    <Link
                      href={rider.donateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 mt-4 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium text-sm shadow-sm hover:shadow-md"
                    >
                      Donate to {rider.firstName}
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Team identity banner — right column on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-3 md:w-56 md:flex-none">
            {[
              { stat: "4", label: "Passport Riders" },
              { stat: "Growing", label: "Passport Team" },
              { stat: "One", label: "Shared Mission" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 border border-gray-100 rounded-lg py-4 px-3 text-center">
                <div className="text-2xl font-bold text-orange-500">{item.stat}</div>
                <div className="text-sm font-medium text-gray-700">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
