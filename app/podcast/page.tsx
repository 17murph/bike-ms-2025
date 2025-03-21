"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PodcastSeason } from "@/components/podcast-season"
import { Phone, Mail, Heart, ExternalLink } from "lucide-react"
import { RelatedBikeMSLinks } from "@/components/related-bike-ms-links"
import { SpotifyBadge } from "@/components/spotify-badge"
import { IHeartBadge } from "@/components/iheart-badge"
import { BackToTopButton } from "@/components/back-to-top-button"
import { useEffect } from "react"
import { SocialMediaLinks } from "@/components/social-media-links"

export default function PodcastPage() {
  // Set metadata via useEffect to avoid server-side rendering issues
  useEffect(() => {
    document.title = "The Other Side of MS Podcast | Bike MS 2025"
  }, [])

  const season1 = {
    number: 1,
    episodes: [
      {
        title: 'My "Why" to Supporting those affected by MS',
        guest: "Casey Murphy",
        link: "https://theothersideofms.podbean.com/e/my-why-to-supporting-those-affected-by-ms/",
      },
      {
        title: "Walking the Path to Change",
        guest: "Jim and Carol Montgomery",
        link: "https://theothersideofms.podbean.com/e/walking-the-path-to-change-jim-and-carol-s-ms-advocacy/",
      },
      {
        title: "Sipping with Spanish Beer",
        guest: "Matt Thompson",
        link: "https://theothersideofms.podbean.com/e/sipping-with-spanish-beer-and-matt-thompson/",
      },
      {
        title: "Pedaling Hope, Inside the Bike MS Journey",
        guest: "Brian Collie",
        link: "https://theothersideofms.podbean.com/e/pedaling-hope-inside-the-bike-ms-journey-with-brian-collie/",
      },
      {
        title: "Unleashing Compassion",
        guest: "Mike McNamara",
        link: "https://theothersideofms.podbean.com/e/unleashing-compassion-mike-mcnamara-s-ms-fundraising-odyssey/",
      },
      {
        title: "Inspiring Journey of a Patient-Scientist in MS",
        guest: "Delaney Liskey",
        link: "https://theothersideofms.podbean.com/e/delaney-s-inspiring-journey-of-a-patient-scientist-in-ms/",
      },
      {
        title: "Beers, Bikes, and a Passion to Make a Difference",
        guest: "Carolyn Graham",
        link: "https://theothersideofms.podbean.com/e/beers-bikes-and-a-passion-to-make-a-difference/",
      },
      {
        title: "Changing the Narrative",
        guest: "Heidi Katz",
        link: "https://theothersideofms.podbean.com/e/changing-the-narrative-heidi-katz-on-ms-stories-and-hope/",
      },
      {
        title: "Resilient Heart",
        guest: "Lauren Conant",
        link: "https://theothersideofms.podbean.com/e/resilient-heart-lauren-conant-s-path-from-ms-caregiver-to-nurse-practitioner/",
      },
      {
        title: "Spokes of Strength, A Bike MS Panel Conversation",
        guest: "Erik Henderson, Cher Herman-Darville, Bobby Small",
        link: "https://theothersideofms.podbean.com/e/spokes-of-strength-bike-ms-panel-conversations/",
      },
      {
        title: "In My Mother's Footsteps",
        guest: "Christopher Trigger",
        link: "https://theothersideofms.podbean.com/e/in-my-mother-s-footsteps-christopher-trigger-s-story/",
      },
      {
        title: "40 Years of Love, Adventure, and Giving",
        guest: "Ilene and Steve Kramer",
        link: "https://theothersideofms.podbean.com/e/40-years-of-love-adventure-and-giving-the-journey-of-team-seb/",
      },
      {
        title: "The Other Side of MS, A Mother's Story",
        guest: "Wendy Bertagnole",
        link: "https://theothersideofms.podbean.com/e/the-other-side-of-ms-a-mother-s-story/",
      },
      {
        title: "MS, Suicide, and Mental Health",
        guest: "Dr. Sally Spencer-Thomas, Dr. Marin Collazo, and Heidi Katz",
        link: "https://theothersideofms.podbean.com/e/ms-suicide-and-mental-health-exploring-the-other-side-of-ms/",
      },
      {
        title: "COO Left Hand Brewing - Bike MS",
        guest: "Chris Lennert",
        link: "https://theothersideofms.podbean.com/e/chris-lennert-coo-at-left-hand-brewing-company/",
      },
      {
        title: "I am the Storm",
        guest: "Michael Cavicchia",
        link: "https://theothersideofms.podbean.com/e/i-am-the-storm-michael-cavicchia-s-ms-journey/",
      },
      {
        title: "PGA Tour, Bike MS Major Sponsor",
        guest: "Marianne Novac Davis",
        link: "https://theothersideofms.podbean.com/e/marianne-novac-davis-with-pga-tour-bike-ms-major-sponsor/",
      },
      {
        title: "Pushing Boundaries in Ultra Cycling",
        guest: "Phil Fox",
        link: "https://theothersideofms.podbean.com/e/phil-fox-pushing-boundaries-in-ultra-cycling-and-ms-advocacy/",
      },
      {
        title: "I am Unstoppable",
        guest: "Christine Boothe",
        link: "https://theothersideofms.podbean.com/e/christine-boothe-i-am-unstoppable/",
      },
      {
        title: "Meat, Bikes, and MS",
        guest: "Angela Brandt",
        link: "https://theothersideofms.podbean.com/e/meat-bikes-and-multiple-sclerosis-the-inspiring-story-of-angela-brandt/",
      },
      {
        title: "Embrace the Challenge",
        guest: "Ken Strecker",
        link: "https://theothersideofms.podbean.com/e/embrace-the-challenge-embarking-on-a-mission-with-ken-strecker/",
      },
      {
        title: "Becoming a Voice for the MS Community",
        guest: "Walter Steele",
        link: "https://theothersideofms.podbean.com/e/becoming-a-voice-for-the-ms-community-the-inspiring-journey-of-walter-steele/",
      },
      {
        title: "Love Conquers All",
        guest: "Jason DeRoo",
        link: "https://theothersideofms.podbean.com/e/how-love-conquers-all-the-story-of-a-husband-s-journey-as-a-caregiver-for-his-wife-with-ms/",
      },
      {
        title: "I Ride with MS",
        guest: "Sara DeRoo",
        link: "https://theothersideofms.podbean.com/e/sarah-deroo-i-ride-with-ms/",
      },
      {
        title: "Inaugural Episode",
        guest: "Dr. Vanessa Marin Collazo",
        link: "https://theothersideofms.podbean.com/e/s1_e1-lost-episode-with-dr_vanessa_marin_collazo/",
      },
    ],
  }

  const season2 = {
    number: 2,
    episodes: [
      {
        title: "Culinary Mastery and the Fight Against MS",
        guest: "Carmen Lucia Gonzalez",
        link: "https://theothersideofms.podbean.com/e/s2_e27/",
      },
      {
        title: "Why We Ride: A Tribute to Karyn Laterza",
        guest: "Multiple Bike MS - Georgia Peach Ride",
        link: "https://theothersideofms.podbean.com/e/s2-e26/",
      },
      {
        title: "High Risk, High Reward",
        guest: "Joanne & Eric Passon",
        link: "https://theothersideofms.podbean.com/e/s2_e25/",
      },
      {
        title: "Pedaling with a Purpose: My Inspiration",
        guest: "Kim Imus Schaefer",
        link: "https://theothersideofms.podbean.com/e/s2_e24/",
      },
      {
        title: "Resilience and Hope: Childhood MS",
        guest: "Daisy Clemmons",
        link: "https://theothersideofms.podbean.com/e/s2_e23/",
      },
      {
        title: "Life, Services, and MS",
        guest: "Leo Kreisel",
        link: "https://theothersideofms.podbean.com/e/s2_e22/",
      },
      {
        title: "From Diagnosis to Advocacy",
        guest: "Shannon Abney",
        link: "https://theothersideofms.podbean.com/e/s2_e21/",
      },
      {
        title: "Life, Love, and MS",
        guest: "Maddie Alder",
        link: "https://theothersideofms.podbean.com/e/s2_e20/",
      },
      {
        title: "The Quiet Force Behind the Big Bananas",
        guest: "Linda Bushong-Reid",
        link: "https://theothersideofms.podbean.com/e/s2e19/",
      },
      {
        title: "Fearless Leaders of Bike MS",
        guest: "Ashley (VA), Sydney (FL), and Erika (CO)",
        link: "https://theothersideofms.podbean.com/e/s2-e18/",
      },
      {
        title: "Bike MS Colorado",
        guest: "Various Bike MS Colorado participants",
        link: "https://theothersideofms.podbean.com/e/s2-e17-bonus-bike-ms-colorado/",
      },
      {
        title: "Finding Strength in Struggle",
        guest: "Deanna Weiler",
        link: "https://theothersideofms.podbean.com/e/s2_e16/",
      },
      {
        title: "Navigating Life's Challenges",
        guest: "Schone Rubio",
        link: "https://theothersideofms.podbean.com/e/s2_e15/",
      },
      {
        title: "A Wisconsin Connection",
        guest: "Curtis Sauser",
        link: "https://theothersideofms.podbean.com/e/s2_e14/",
      },
      {
        title: "Weaving a Tapestry of Strength and Connection",
        guest: "Debbie Hamm",
        link: "https://theothersideofms.podbean.com/e/s2_e13/",
      },
      {
        title: "Bridging Eastern and Western Medicine for MS Care",
        guest: "Megan Weigel",
        link: "https://theothersideofms.podbean.com/e/s2_e12/",
      },
      {
        title: "Bike US for MS",
        guest: "Duncan",
        link: "https://theothersideofms.podbean.com/e/s2-e11-bike-us-for-ms-duncan/",
      },
      {
        title: "The Power of Friendship and Resilience",
        guest: "Mike Tomlin & Jill Eisenberg",
        link: "https://theothersideofms.podbean.com/e/the-power-of-friendship-and-resilience-in-the-fight-against-ms/",
      },
      {
        title: "A Grassroots Fundraiser and Advocate",
        guest: "Rob Farthing",
        link: "https://theothersideofms.podbean.com/e/s2-e9-rob-robert-farthing-a-grassroots-fundraiser-and-advocate/",
      },
      {
        title: "Anchoring Hope: A News Anchor's Story",
        guest: "Bill Fitzgerald",
        link: "https://theothersideofms.podbean.com/e/s2-e8-bill-fitzgerald-anchoring-hope-a-news-anchor-s-ride-against-ms/",
      },
      {
        title: "Voices of Resilience, Living and Leading with MS",
        guest: "Karyn Laterza",
        link: "https://theothersideofms.podbean.com/e/s2-e7-karyn-laterza-voices-of-resilience-living-and-leading-with-ms/",
      },
      {
        title: "Navigating Hope and Leadership",
        guest: "Jennifer Lee",
        link: "https://theothersideofms.podbean.com/e/s2-e6-jennifer-lee-navigating-hope-and-leadership-in-the-battle-against-ms/",
      },
      {
        title: "Beyond Limits - From Diagnosis to Community Leader",
        guest: "Natasha Acoff",
        link: "https://theothersideofms.podbean.com/e/s2-e5-beyond-limits-natasha-s-odyssey-%e2%80%93-from-ms-diagnosis-to-community-leadership/",
      },
      {
        title: "Saddle Up for MS: Andy's Ride Remembered",
        guest: "Dawn (for Andy)",
        link: "https://theothersideofms.podbean.com/e/s2-e4-saddle-up-for-ms-andy-s-ride-remembered/",
      },
      {
        title: "The Spiritual Odyssey",
        guest: "Ted Corby",
        link: "https://theothersideofms.podbean.com/e/s2-e3-the-spiritual-odyssey-navigating-life-and-ms-with-ted-corby/",
      },
      {
        title: "Redefining Roots in MS Advocacy",
        guest: "Barbara Ungerman",
        link: "https://theothersideofms.podbean.com/e/s2-e2-barbara-ungerman-redefining-roots-in-ms-advocacy/",
      },
      {
        title: "A Never Ending Bike Ride",
        guest: "Jessica Nevens",
        link: "https://theothersideofms.podbean.com/e/s2-e1-jessica-s-ms-journey-a-never-ending-bike-ride/",
      },
    ],
  }

  const season3 = {
    number: 3,
    episodes: [
      {
        title: "Season 3 Premiere with Jasmine Hanna",
        guest: "Jasmine Hanna",
        link: "https://open.spotify.com/episode/2mgTM4aV6BRTA1mWFfd2FD?si=7sAb2qGYSB26ahSVLHmyHQ",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      {/* Full-width banner image with chairs and microphone at the top */}
      <div className="w-full relative h-[220px] md:h-[280px]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Podcast%20Seats.jpg-yOo7VS19f1tz8dRnPrHJ7Six3I1iW6.jpeg"
            alt="The Other Side of MS Podcast Studio - Bike MS Stories and Interviews"
            className="w-full h-full object-cover"
            style={{ display: "block" }}
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">The Other Side of MS</h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Podcast description and listening options */}
        <section className="mb-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-center">
              Welcome to our podcast dedicated to amplifying the voices and stories of those whose lives are deeply
              affected by Multiple Sclerosis (MS). Through honest conversations and heartfelt stories, we shed light on
              the strength, resilience, and challenges of the MS community.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h2 className="text-xl font-bold mb-4 text-center">Latest Episode</h2>
              <p className="text-lg font-medium mb-4 text-center">
                Tune in to our newest episode featuring special guest Jasmine Hanna
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Link
                  href="https://open.spotify.com/episode/2mgTM4aV6BRTA1mWFfd2FD?si=7sAb2qGYSB26ahSVLHmyHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <SpotifyBadge />
                </Link>
                <Link
                  href="https://iheart.com/podcast/185724874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <IHeartBadge />
                </Link>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <Link
                href="https://mssociety.donordrive.com/participant/casey-murphy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                <Heart className="w-5 h-5" />
                Donate to Bike MS Supporting the National MS Society
                <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
              </Link>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-600" />
                <span>904-504-1500</span>
              </div>
              <a
                href="mailto:cmurphy@sjmalaw.com"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>cmurphy@sjmalaw.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Episode listings with simplified header */}
        <section className="mb-10">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-2xl font-bold text-center">All Episodes</h2>
          </div>

          {/* Mobile-only centered logo */}
          {/* Mobile-only centered logo - with explicit styling for cross-browser compatibility */}
          <div className="flex justify-center mb-6 md:hidden">
            <div className="w-[180px] h-[180px] relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%20Logo.JPEG-LznTItVGXC64kGQ29mVEzAWohOa9LN.jpeg"
                alt="The Other Side of MS Podcast Logo"
                className="w-full h-auto object-contain shadow-sm"
                style={{
                  display: "block",
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PodcastSeason season={season1} />
            <PodcastSeason season={season2} />
            <div className="flex flex-col">
              <PodcastSeason season={season3} />
              {/* Season 3 Logo */}
              {/* Season 3 Logo - with explicit styling for cross-browser compatibility */}
              <div className="flex justify-center mt-6">
                <div className="w-[200px] h-[200px] relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%20Logo.JPEG-LznTItVGXC64kGQ29mVEzAWohOa9LN.jpeg"
                    alt="The Other Side of MS Podcast Logo"
                    className="w-full h-auto object-contain shadow-md"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">Contact Us</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="mb-6 text-gray-700">
              Have a story to share or just want to share your comments? Reach out to me directly:
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:cmurphy@sjmalaw.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>cmurphy@sjmalaw.com</span>
              </a>
            </div>
          </div>
        </section>

        <RelatedBikeMSLinks />

        {/* Social Media Links */}
        <SocialMediaLinks />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

