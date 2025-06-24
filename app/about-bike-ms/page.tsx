"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { Bike, Heart, Users, ExternalLink, MapPin, Info, DollarSign, Award, Calendar } from "lucide-react"
import { ReliableImage } from "@/components/reliable-image"
import { useEffect } from "react"
import { BackToTopButton } from "@/components/back-to-top-button"
import { SocialMediaLinks } from "@/components/social-media-links"

export default function AboutBikeMS() {
  // Set metadata via useEffect to avoid server-side rendering issues
  useEffect(() => {
    document.title = "About Bike MS | Cycling to End Multiple Sclerosis"
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <main className="container mx-auto py-6 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold text-center">About Bike MS</h1>

            <div className="flex justify-center gap-4 my-3">
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                <Bike className="w-5 h-5" />
                <span>Find Your Ride</span>
              </Link>
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                <Heart className="w-5 h-5" />
                <span>Donate to MS Society</span>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-6 my-8 text-white">
              <h3 className="text-3xl font-bold text-center mb-6">Florida vs Wisconsin Fundraising Challenge</h3>

              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Image on the left */}
                <div className="flex-shrink-0">
                  <div className="relative w-96 h-72 rounded-lg overflow-hidden shadow-lg">
                    <ReliableImage
                      src="/images/florida-vs-wisconsin.jpg"
                      alt="Florida vs Wisconsin Fundraising Challenge - Epic battle between alligator and badger"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Fundraiser cards on the right */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {/* Florida Card */}
                  <div className="bg-white rounded-lg p-4 text-gray-800 shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-3xl mb-1">🐊</div>
                      <h4 className="text-xl font-bold text-orange-600 mb-2">FLORIDA</h4>
                      <div className="bg-orange-100 rounded-lg p-2 mb-3">
                        <p className="text-xs text-orange-700 font-medium">CURRENT TOTAL</p>
                        <p className="text-2xl font-bold text-orange-800">$4,960</p>
                      </div>
                      <Link
                        href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl text-sm"
                      >
                        <Heart className="w-4 h-4" />
                        <span>SUPPORT FLORIDA</span>
                      </Link>
                    </div>
                  </div>

                  {/* Wisconsin Card */}
                  <div className="bg-white rounded-lg p-4 text-gray-800 shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-3xl mb-1">🦡</div>
                      <h4 className="text-xl font-bold text-red-600 mb-2">WISCONSIN</h4>
                      <div className="bg-red-100 rounded-lg p-2 mb-3">
                        <p className="text-xs text-red-700 font-medium">CURRENT TOTAL</p>
                        <p className="text-2xl font-bold text-red-800">$3,000</p>
                      </div>
                      <Link
                        href="https://events.nationalmssociety.org/index.cfm?fuseaction=donate.participant&participantID=617194"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl text-sm"
                      >
                        <Heart className="w-4 h-4" />
                        <span>SUPPORT WISCONSIN</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="text-center mt-6 pt-4 border-t border-blue-600">
                <p className="text-lg font-medium mb-2">🎯 Every dollar counts in the fight against MS!</p>
                <p className="text-blue-200">100% of funds go directly to MS research, advocacy, and support</p>
              </div>
            </div>

            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <ReliableImage
                src="/images/TSB.jpg"
                alt="Team Spanish Beer cyclists at the starting line of Bike MS Suncoast Challenge, showing the back of a rider with team jersey and race number"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="mt-4 mb-2">What is Bike MS?</h2>

              <div className="flex justify-center my-3">
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

              <section className="py-4">
                <div className="container mx-auto px-4">
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
                    <h2 className="text-3xl font-bold text-primary">Why We Ride</h2>
                    <ReliableImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TSB-logo-YalpHen52DqYkUZknWmKZmHJOMCo3n.png"
                      alt="Team Spanish Beer logo – Bike MS cycling team"
                      width={150}
                      height={75}
                      className="object-contain"
                    />
                  </div>
                  <div className="prose max-w-none">
                    <p className="my-2">
                      Bike MS brings together thousands of cyclists of all levels who share a passion for making a
                      difference in the lives of people affected by MS. The camaraderie, passion, and memories that come
                      from the weekend create an experience unlike any other. Bike MS is more than a ride—it's an
                      extraordinary experience grounded in community and purpose.
                    </p>
                    <p className="my-2">
                      As a proud member of Team Spanish Beer, I ride to fuel breakthroughs, build connections, and raise
                      critical funds for those living with MS. Our team rides with heart, humor, and a whole lot of grit
                      — and we're just getting started.
                    </p>

                    <div className="mt-3">
                      <a
                        href="https://events.nationalmssociety.org/index.cfm?fuseaction=registrationUpdate.team&participantID=632965&success=donordrive.event"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                      >
                        <Users className="w-5 h-5" />
                        <span>Join Team Spanish Beer</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>

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
                    <li>Supporters who can't ride due to health, schedule, or other reasons</li>
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
                <strong>How It Works:</strong> Once you raise $5,000 or more in a calendar year, you'll automatically
                qualify for the Passport Program the following year. You'll receive a special Passport designation that
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
                  If you're aiming for $5,000 or more in fundraising, you could be part of this incredible program.
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

              {/* Removed the "Join Team Spanish Beer" link as requested */}

              <h2 className="mt-4 mb-2">Upcoming Bike MS Events</h2>
              <p className="mb-2">
                Through the Bike MS Passport Program, I'll be participating in the following events in 2025,
                representing Team Spanish Beer across the country:
              </p>

              <ul className="list-disc pl-6 space-y-0.5 mb-3">
                <li>
                  <strong>Suncoast Challenge</strong> - Sarasota, FL (March 29, 2025)
                </li>
                <li>
                  <strong>Bluegrass Bourbon Ride</strong> - Bardstown, KY (June 14-15, 2025)
                </li>
                <li>
                  <strong>Bike MS Colorado</strong> - Boulder, CO (June 28-29, 2025)
                </li>
                <li>
                  <strong>Best Dam Bike Tour WI</strong> - Baraboo, WI (August 2-3, 2025)
                </li>
                <li>
                  <strong>Georgia Peach Ride</strong> - LaGrange, GA (September 13, 2025)
                </li>
                <li>
                  <strong>PGA Tour, Bike to the Shore</strong> - Daytona, FL (October 4-5, 2025)
                </li>
              </ul>
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
