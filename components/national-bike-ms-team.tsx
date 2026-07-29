import Link from "next/link"
import { ExternalLink } from "lucide-react"

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

// Alphabetical order: Casey, Curt, John, Marianne, Rob
const riders: Rider[] = [
  {
    id: "casey",
    name: "Casey Murphy",
    firstName: "Casey",
    homeState: "Florida",
    photo: "/images/casey-murphy-bw.jpg",
    bio: "Founder and host of The Other Side of MS, a Bike MS cyclist since 1995 and a National MS Society Ambassador who turns honest conversations about MS into action.",
    homeRide: "Cycle to the Shore, North Florida",
    donateUrl: "https://events.nationalmssociety.org/participants/810407?referrer=mf%3A810407%3Ayou-copy&language=en",
  },
  {
    id: "curt",
    name: "Curt Sauser",
    firstName: "Curt",
    homeState: "Wisconsin",
    photo: "/images/curt-sauser.jpg",
    bio: "Diagnosed with MS in 2008, Curt captains Team CCC in Wisconsin, which has surpassed $1,000,000 in lifetime fundraising. He personally raised over $10,000 in 2025.",
    homeRide: "Best Dam Bike Tour, Baraboo, WI",
    donateUrl: "https://events.nationalmssociety.org/participants/CurtBike2026",
  },
  {
    id: "john",
    name: "John Wallace",
    firstName: "John",
    homeState: "Tennessee",
    photo: "/images/john-wallace.jpg",
    bio: "A retired airline and military pilot who has ridden the Jack and Back MS Ride for over ten years in honor of family and friends living with MS. Every ride is an act of service.",
    homeRide: "Jack and Back, Eagleville, TN",
    donateUrl: "https://events.nationalmssociety.org/participants/815695",
  },
  {
    id: "marianne",
    name: "Marianne Davis",
    firstName: "Marianne",
    homeState: "Florida",
    photo: "/images/marianne-davis-bw.jpg",
    bio: "A former team captain and event chairperson turned rider, Marianne serves on the Florida Chapter Board of Trustees for the National MS Society. New to cycling just over a year ago, she rides for those who can't and to honor those she loves living with MS.",
    homeRide: "Cycle to the Shore, North Florida",
    donateUrl: "https://events.nationalmssociety.org/participants/MarianneDavis",
  },
  {
    id: "rob",
    name: "Rob Farthing",
    firstName: "Rob",
    homeState: "Kentucky",
    photo: "/images/rob-farthing-new.jpg",
    bio: "Entering his nineteenth year with Bike MS with twenty-seven events completed. His Mowing for MS effort has contributed more than $39,000, and his 2026 goal is $15,000.",
    homeRide: "Bluegrass Bourbon, Bardstown, KY",
    donateUrl: "https://events.nationalmssociety.org/participants/764003?referrer=mf%3A764003%3Ayou-copy&language=en",
  },
]

const carouselStyles = `
.tsb-carousel {
  /* Mobile-first: horizontal swipeable, scroll-snap track */
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 2rem 1.25rem 2.5rem;
  scrollbar-width: none;
}
.tsb-carousel::-webkit-scrollbar {
  display: none;
}

.tsb-card {
  scroll-snap-align: center;
  flex: 0 0 82%;
  max-width: 340px;
  margin: 0 auto;
  background: #ffffff;
  padding: 0.75rem 0.75rem 1.25rem;
  border-radius: 3px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
  transform: rotate(-1deg);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* Mobile scroll-driven lift when card is centered in the viewport */
@supports (animation-timeline: view()) {
  .tsb-card {
    animation: tsb-rise linear both;
    animation-timeline: view(inline);
    animation-range: entry 10% cover 55%;
  }
}
@keyframes tsb-rise {
  from { transform: rotate(-1deg) translateY(14px); }
  to   { transform: rotate(-1deg) translateY(-8px); }
}

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

/* Desktop: single centered card, CSS auto-rotate with soft fade */
@media (min-width: 768px) {
  .tsb-carousel {
    position: relative;
    display: block;
    overflow: visible;
    height: 540px;
    padding: 1.5rem 0;
    scroll-snap-type: none;
  }
  .tsb-card {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 360px;
    flex: none;
    margin: 0;
    transform: translate(-50%, -50%) rotate(-2.5deg);
    opacity: 0;
    animation: tsb-fade 25s infinite;
  }
  .tsb-card:nth-child(1) { animation-delay: 0s; }
  .tsb-card:nth-child(2) { animation-delay: 5s; }
  .tsb-card:nth-child(3) { animation-delay: 10s; }
  .tsb-card:nth-child(4) { animation-delay: 15s; }
  .tsb-card:nth-child(5) { animation-delay: 20s; }

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

@keyframes tsb-fade {
  0%   { opacity: 0; z-index: 1; }
  2%   { opacity: 1; z-index: 5; }
  18%  { opacity: 1; z-index: 5; }
  20%  { opacity: 0; z-index: 1; }
  100% { opacity: 0; z-index: 1; }
}

/* Respect reduced motion: show the first card, disable auto-rotate */
@media (prefers-reduced-motion: reduce) {
  .tsb-card {
    animation: none !important;
  }
  @media (min-width: 768px) {
    .tsb-card { opacity: 0; }
    .tsb-card:nth-child(1) { opacity: 1; z-index: 5; }
  }
}
`

export function NationalBikeMSTeam() {
  return (
    <section className="py-4 mt-8">
      <style dangerouslySetInnerHTML={{ __html: carouselStyles }} />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-3">Meet the National Bike MS Team</h2>
        <p className="text-gray-700 mb-2 leading-relaxed">
          We bring together riders who each raise at least $5,000 every year for the National MS Society. These are
          cyclists who already give everything they have, yet still feel the pull to do more. The National Team gives
          them a place to belong and a larger story to be part of.
        </p>
        <p className="text-sm text-gray-500 mb-2">
          <span className="hidden md:inline">Hover a card to pause and take a closer look. </span>
          <span className="md:hidden">Swipe to meet each rider. </span>
          Meet the team and support their Bike MS fundraisers.
        </p>

        <div className="tsb-carousel" aria-label="National Bike MS Team riders">
          {riders.map((rider) => (
            <article key={rider.id} className="tsb-card">
              <img
                src={rider.photo || "/placeholder.svg"}
                alt={`${rider.name} - National Bike MS Cycling Team`}
                className="tsb-photo"
              />
              <div className="tsb-caption">
                <h3 className="text-xl font-bold text-gray-900">{rider.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-orange-500 mt-0.5">
                  {rider.homeState} &middot; Bike MS Passport Rider
                </p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{rider.bio}</p>
                <p className="text-xs text-gray-700 mt-3">
                  <strong>Home Ride:</strong> {rider.homeRide}
                </p>
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
    </section>
  )
}
