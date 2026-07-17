"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { Bike, Heart, Users, ExternalLink, MapPin, Calendar, Info } from 'lucide-react'

import { useEffect } from "react"
import { BackToTopButton } from "@/components/back-to-top-button"
import { SocialMediaLinks } from "@/components/social-media-links"
import { TeamSpanishBeerPassport } from "@/components/team-spanish-beer-passport"

export default function TeamSpanishBeer() {
  // Set metadata via useEffect to avoid server-side rendering issues
  useEffect(() => {
    document.title = "Team Spanish Beer: Passport Cyclist | Bike MS"
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
      <style jsx>{`
        @keyframes tsbFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .tsb-hero-fade {
          animation: tsbFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .tsb-hero-image-fade {
          animation: tsbFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
        }
        .tsb-hero-image {
          -webkit-mask-image: radial-gradient(120% 120% at 50% 45%, #000 55%, transparent 92%);
          mask-image: radial-gradient(120% 120% at 50% 45%, #000 55%, transparent 92%);
        }
        @media (prefers-reduced-motion: reduce) {
          .tsb-hero-fade,
          .tsb-hero-image-fade {
            animation: none;
          }
        }
      `}</style>
      <Navigation />

      <main>
        {/* Premium full-width hero */}
        <section className="relative w-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
          {/* soft ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(249,115,22,0.14),transparent_70%)]"
          />

          <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-24 sm:pt-20">
            <div className="tsb-hero-fade text-center">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-orange-400/90">
                The Other Side of MS
              </span>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Team Spanish Beer
                <span className="mt-2 block text-orange-500">Passport Cyclist</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-neutral-400 sm:text-lg">
                Riding together across the country to end MS — 100% of every donation goes directly to the National
                MS Society.
              </p>
            </div>

            {/* Focal image — black background blends into the page via screen blend + edge fade */}
            <figure className="tsb-hero-image-fade tsb-hero-image relative mx-auto mt-12 w-full max-w-3xl -mb-12">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TSB-ObbAELza6xA9Fd1zUOtfe2INuszMBc.jpg"
                alt="Team Spanish Beer cyclists in their team jerseys"
                className="block w-full object-cover mix-blend-screen"
              />
            </figure>
          </div>
        </section>

        <div className="container mx-auto px-4 pt-16 pb-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Cohesive hero caption + donation CTA group */}
            <section className="flex flex-col items-center">
              <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-gray-500">
                Team Spanish Beer riders in their team jerseys, supporting &ldquo;The Other Side of MS&rdquo; podcast
                and the Bike MS Passport Program.
              </p>

              {/* Primary team CTA */}
              <a
                href="https://events.nationalmssociety.org/teams/TeamSpanishBeer2026"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 font-medium shadow-sm hover:shadow-lg text-lg"
              >
                <Heart className="w-5 h-5" />
                <span>Donate to Team Spanish Beer</span>
              </a>

              {/* Individual cyclist donations */}
              <p className="mt-6 text-center text-sm text-gray-500">
                Or support one of our cyclists directly — 100% goes to the National MS Society.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2">
                <Link
                  href="https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-full hover:border-orange-400 hover:text-orange-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md min-w-[150px]"
                >
                  Donate to Casey
                </Link>
                <Link
                  href="https://events.nationalmssociety.org/participants/MarianneDavis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-full hover:border-orange-400 hover:text-orange-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md min-w-[150px]"
                >
                  Donate to Marianne
                </Link>
                <Link
                  href="https://events.nationalmssociety.org/participants/818857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-full hover:border-orange-400 hover:text-orange-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md min-w-[150px]"
                >
                  Donate to Erik
                </Link>
                <Link
                  href="https://events.nationalmssociety.org/participants/806524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-full hover:border-orange-400 hover:text-orange-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md min-w-[150px]"
                >
                  Donate to Matt
                </Link>
              </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-6">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-primary mb-4">Team Spanish Beer: Passport Cyclist</h2>
                <div className="prose max-w-none">
                  <p className="my-2">
                    Team Spanish Beer: Passport Cyclist, in partnership with The Other Side of MS, exists for one reason: To make sure no one living with MS feels invisible. Every mile we ride and every story we share comes back to that belief.
                  </p>
                  <p className="my-2">
                    This team is made up of Team Spanish Beer cyclists who have reached Bike MS Passport status by raising at least $5,000 annually for the National MS Society. Passport status is not a finish line or a measure of importance. It reflects an ongoing commitment to the mission and creates opportunities to support Bike MS in new ways.
                  </p>
                  <p className="my-2">
                    Many Passport riders travel to events outside their home chapter. The Passport Team gives those riders a way to stay connected to Team Spanish Beer while representing our team in communities across the country. Together, we support local chapters, build relationships with fellow Passport riders, and help strengthen the Bike MS community wherever we ride.
                  </p>
                  <p className="my-2">
                    Our jerseys represent Team Spanish Beer first, but they also represent something larger. They reflect our commitment to the Passport Program, our dedication to every chapter we visit, and our belief that the strongest teams are built by lifting others.
                  </p>
                  <p className="my-2">
                    This is not about recognition. It is about responsibility. Riders who reach Passport status have demonstrated an extraordinary commitment to the National MS Society, and we believe that commitment can inspire others. By riding together, mentoring new cyclists, and sharing our experiences through The Other Side of MS podcast, we hope to encourage more riders to discover what is possible and to continue growing the Bike MS community.
                  </p>
                  <p className="my-2">
                    Our purpose is simple. Build community. Support local chapters. Tell honest stories. Raise more funds for the National MS Society. Above all, remind every person affected by MS that they are never riding alone.
                  </p>
                </div>
              </div>
            </section>

            <TeamSpanishBeerPassport />

            <section className="py-4">
              <div className="container mx-auto px-4">
                {/* Featured Ride */}
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">Our Home Ride</h2>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    Bike MS: Cycle to the Shore is our home ride, though we gladly accept donations for any of our
                    team&apos;s rides.
                  </p>

                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Bike className="w-5 h-5" />
                        <h3 className="font-bold text-xl text-center">Bike MS: Cycle to the Shore</h3>
                      </div>
                      <p className="text-center text-sm text-blue-50 mt-1">
                        Team Spanish Beer — Home Ride
                      </p>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                          <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Location</p>
                            <p className="font-semibold text-gray-800">Daytona, FL</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                          <Calendar className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Date</p>
                            <p className="font-semibold text-gray-800">Oct 3/4, 2026</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href="https://events.nationalmssociety.org/2776"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md w-full sm:w-auto"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Event Details</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="prose prose-lg max-w-none">
              <h2 className="mt-4 mb-2">What is Bike MS?</h2>

              <div className="flex justify-start my-3">
                <Link
                  href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1227&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Official About Bike MS Page</span>
                </Link>
              </div>

              <p className="my-3">
                Bike MS is the largest fundraising cycling series in the world. Each year, nearly 75,000 cyclists and
                more than 6,000 teams ride together to change the world for people affected by multiple sclerosis. Bike
                MS participants have raised more than $2,025 to date, funding critical research and programs to improve
                the lives of people living with MS.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-2">
                  <Heart className="text-red-500" /> The Impact of Bike MS
                </h3>
                <ul className="list-disc pl-6 space-y-0.5">
                  <li>Funds critical MS research and programs</li>
                  <li>Raises awareness about multiple sclerosis</li>
                  <li>Creates a community of support for those affected by MS</li>
                  <li>Drives breakthroughs in treatments and care</li>
                  <li>Brings hope to the 2.8 million people worldwide living with MS</li>
                </ul>
              </div>

              <div className="flex justify-center my-8">
                <a
                  href="https://events.nationalmssociety.org/teams/TeamSpanishBeer2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md text-lg"
                >
                  <Users className="w-5 h-5" />
                  <span>Join Team Spanish Beer</span>
                </a>
              </div>

              <h2 className="mt-4 mb-2">Unlock More Rides, More Impact – The Bike MS Passport Program</h2>
              <p className="my-2">
                The Bike MS Passport Program is an exclusive benefit for top fundraisers who raise $5,000 or more in a
                calendar year. This program allows these dedicated cyclists to participate in any Bike MS event the
                following year without meeting the fundraising minimum.
              </p>
              <p className="my-2">
                <strong>How It Works:</strong> Once you raise $5,000 or more in a calendar year, you&apos;ll
                automatically qualify for the Passport Program the following year. You&apos;ll receive a special Passport
                designation that allows you to register for any Bike MS event nationwide without having to meet the
                fundraising minimum for that event.
              </p>
              <p className="my-2">
                <strong>Benefits Include:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-0.5 mb-3">
                <li>Registration in any Bike MS event without meeting the fundraising minimum</li>
                <li>Special Passport designation on your rider number</li>
                <li>Recognition at Bike MS events</li>
                <li>Opportunity to experience different Bike MS events across the country</li>
                <li>Ability to continue making an impact for the MS community nationwide</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-2">
                  <MapPin className="text-primary" /> The Bike MS Passport Program
                </h3>
                <p className="mb-2">
                  This year, Passport riders will roll through scenic coastlines, mountain passes, and historic towns,
                  all united by one goal: a world free of MS.
                </p>
                <p className="mb-2">
                  If you&apos;re aiming for $5,000 or more in fundraising, you could be part of this incredible program.
                  Where will your Passport take you?
                </p>
                <p className="mb-2 font-medium text-primary">
                  Join us, push past your limits, and ride toward a future without MS.
                </p>
                <div className="mt-3">
                  <a
                    href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=6788#accordion-tab-2-active"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                  >
                    <Info className="w-5 h-5" />
                    <span>Learn More about the Bike MS Passport Program</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Add Social Media Links */}
            <SocialMediaLinks />
          </div>
        </div>
      </main>

      <Footer />
      <BackToTopButton />
      <MobileTextButton />
    </div>
  )
}
