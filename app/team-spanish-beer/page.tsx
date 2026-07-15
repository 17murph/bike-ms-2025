"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { Bike, Heart, Users, ExternalLink, MapPin, Info, DollarSign, Award, Calendar } from 'lucide-react'

import { useEffect } from "react"
import { BackToTopButton } from "@/components/back-to-top-button"
import { SocialMediaLinks } from "@/components/social-media-links"
import { TeamSpanishBeerPassport } from "@/components/team-spanish-beer-passport"

export default function TeamSpanishBeer() {
  // Set metadata via useEffect to avoid server-side rendering issues
  useEffect(() => {
    document.title = "Team Spanish Beer: Passport Team | Bike MS"
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      <main className="container mx-auto py-6 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold text-center">Team Spanish Beer: <span className="text-orange-500">Passport Team</span></h1>
            <p className="text-sm text-gray-600 text-center">Click a name below to donate to one of our cyclists Bike MS Fundraiser, 100% of all donations go to the National MS Society.</p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 my-3">
              <Link
                href="https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md min-w-[160px]"
              >
                Donate to Casey
              </Link>
              <Link
                href="https://events.nationalmssociety.org/participants/MarianneDavis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md min-w-[160px]"
              >
                Donate to Marianne
              </Link>
              <Link
                href="https://events.nationalmssociety.org/participants/818857"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md min-w-[160px]"
              >
                Donate to Erik
              </Link>
              <Link
                href="https://events.nationalmssociety.org/participants/806524"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md min-w-[160px]"
              >
                Donate to Matt
              </Link>
            </div>

            {/* 2026 Jersey Section */}
            <section className="py-6 bg-gray-50 rounded-xl">
              <div className="flex flex-col items-center justify-center px-4">
                <img
                  src="/images/jersey-tsb-osms.jpeg"
                  alt="Team Spanish Beer: Passport Team jersey featuring The Other Side of MS branding"
                  className="w-full max-w-2xl object-contain"
                />
                <div className="mt-4 text-center font-medium">
                  <span className="text-primary">Support the cause, wear the jersey</span>
                  {" "}
                  <a
                    href="https://jakroo.com/store-front?storeId=rkmPz7ORWl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                  >
                    Order Online
                  </a>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4 px-4">
                Team Spanish Beer: Passport Team jersey featuring "The Other Side of MS" podcast branding and the Bike MS Passport Program.
              </p>
            </section>

            {/* Our Mission Section */}
            <section className="py-6 bg-gray-50 rounded-xl">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-primary mb-4">Team Spanish Beer Passport Team</h2>
                <div className="prose max-w-none">
                  <p className="my-2">
                    The Team Spanish Beer Passport Team, in partnership with The Other Side of MS, exists for one reason: to make sure no one living with MS feels invisible. Every mile we ride and every story we share comes back to that belief.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">Our Featured Ride</h2>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    This year, the Jack and Back Bike MS Ride is our featured ride, though we gladly accept donations for
                    any of our team&apos;s rides.
                  </p>

                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Bike className="w-5 h-5" />
                        <h3 className="font-bold text-xl text-center">Jack and Back</h3>
                      </div>
                      <p className="text-center text-sm text-orange-50 mt-1">
                        The Other Side of MS Featured Passport Ride
                      </p>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                          <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Location</p>
                            <p className="font-semibold text-gray-800">Eagleville, TN</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                          <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Date</p>
                            <p className="font-semibold text-gray-800">Sept 12/13, 2026</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href="https://events.nationalmssociety.org/2746"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md w-full sm:w-auto"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Event Details</span>
                        </a>
                        <a
                          href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border-2 border-orange-500 text-orange-600 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md w-full sm:w-auto"
                        >
                          <Bike className="w-5 h-5" />
                          <span>Find Your Ride</span>
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

              {/* Virtual Riders section with optimized spacing */}
              <section className="bg-blue-50 p-5 rounded-lg my-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3 mb-3">
                  <Users className="text-primary h-8 w-8" /> Virtual Riders: Support Without the Saddle
                </h2>

                <p className="text-lg mb-4">
                  Not everyone can ride 150 miles, but everyone can make a difference in the fight against MS. Virtual
                  Riders are essential members of the Bike MS community who fundraise without having to physically
                  cycle.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {/* Card 1 */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <DollarSign className="h-8 w-8 text-red-500 mb-1" />
                    <h3 className="text-xl font-bold mb-1">Fundraise Your Way</h3>
                    <p>Raise funds through your own creative methods without the physical demands of cycling</p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Heart className="h-8 w-8 text-red-500 mb-1" />
                    <h3 className="text-xl font-bold mb-1">Support Team Members</h3>
                    <p>Perfect for family, friends, and colleagues who want to support riders from the sidelines</p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Award className="h-8 w-8 text-red-500 mb-1" />
                    <h3 className="text-xl font-bold mb-1">Same Impact</h3>
                    <p>Every dollar raised by Virtual Riders has the same impact as those raised by cyclists</p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Calendar className="h-8 w-8 text-red-500 mb-1" />
                    <h3 className="text-xl font-bold mb-1">Join the Celebration</h3>
                    <p>Attend the finish line festivities to cheer on riders and celebrate together</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-2xl font-bold mb-2">Who Should Consider Being a Virtual Rider?</h3>
                  <ul className="list-disc pl-8 space-y-0.5 text-lg">
                    <li>Supporters who can&apos;t ride due to health, schedule, or other reasons</li>
                    <li>Family members and friends of cyclists who want to contribute</li>
                    <li>Team supporters who prefer to help with logistics and cheering</li>
                    <li>Anyone passionate about ending MS who prefers not to cycle</li>
                    <li>Corporate team members who want to participate without riding</li>
                  </ul>

                  <div className="mt-4">
                    <Link
                      href="https://mssociety.donordrive.com/index.cfm?fuseaction=cms.page&id=1231&eventID=632"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                    >
                      <Users className="w-5 h-5" />
                      <span>Become a Virtual Rider</span>
                    </Link>
                  </div>
                </div>
              </section>

              <h2 className="mt-4 mb-2">Unlock More Rides, More Impact – The Bike MS Passport Program</h2>
              <p className="my-2">
                The Bike MS Passport Program is an exclusive benefit for top fundraisers who raise $5,000 or more in a
                calendar year. This program allows these dedicated cyclists to participate in any Bike MS event the
                following year without meeting the fundraising minimum.
              </p>
              <p className="my-2">
                <strong>How It Works:</strong> Once you raise $5,000 or more in a calendar year, you&apos;ll automatically
                qualify for the Passport Program the following year. You&apos;ll receive a special Passport designation that
                allows you to register for any Bike MS event nationwide without having to meet the fundraising minimum
                for that event.
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

              <h2 className="mt-4 mb-2">Upcoming Bike MS Events</h2>
              <p className="mb-2">
                Our featured ride for the 2026 Bike MS Season is the <strong>Jack and Back Ride</strong> in Eagleville, TN on <strong>September 12–13, 2026</strong>.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-2">
                  <MapPin className="text-primary" /> Jack and Back Ride — Eagleville, TN
                </h3>
                <p className="mb-1"><strong>Date:</strong> September 12–13, 2026</p>
                <p className="mb-3">
                  Join our Passport Team, The Other Side of MS, at the Jack and Back Ride, a scenic two-day cycling event through the beautiful
                  Tennessee countryside. Every mile ridden brings us closer to a world free of MS.
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1231&eventID=632"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                  >
                    <Info className="w-5 h-5" />
                    <span>View Ride Details</span>
                  </a>
                  <a
                    href="https://events.nationalmssociety.org/teams/TeamSpanishBeer2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                  >
                    <Users className="w-5 h-5" />
                    <span>Join Team Spanish Beer</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Add Social Media Links */}
            <SocialMediaLinks />
          </section>
        </div>
      </main>

      <Footer />
      <BackToTopButton />
      <MobileTextButton />
    </div>
  )
}
