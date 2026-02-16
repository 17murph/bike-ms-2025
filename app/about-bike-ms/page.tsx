"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { Bike, Heart, Users, ExternalLink, MapPin, Info, DollarSign, Award, Calendar } from 'lucide-react'
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
            <h1 className="text-4xl font-bold text-center">National Bike MS Cycling Team</h1>

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

            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <ReliableImage
                src="/images/team-spanish-beer-group-2025.jpg"
                alt="Team Spanish Beer cyclists at Bike MS event - group photo at waterfront with matching team jerseys"
                fill
                className="object-cover"
              />
            </div>

            <section className="py-4">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-primary mb-3">National Bike MS Cycling Team</h2>
                <div className="prose max-w-none">
                  <p className="my-2">
                    The National Bike MS Team, under the umbrella "The Other Side of MS" exists for one reason, to make sure no one living with MS feels invisible. That is our why. Every mile we ride and every story we share comes back to this simple belief.
                  </p>
                  <p className="my-2">
                    We bring together riders who raise at least $5,000 each year for the National MS Society. These are cyclists who already give everything they have, yet still feel the pull to do more. Many of them travel to rides alone, even though they share the same commitment. The National Team gives them a place to belong and a larger story to be part of.
                  </p>
                  <p className="my-2">
                    Each year we choose one Bike MS event to stand behind. We travel as a unified team and ride with a local chapter to lift their event and shine a light on the people they serve. Our jerseys carry our name, but they also stand for something larger. They reflect our commitment to the Passport Program and our promise to honor the local communities we ride with.
                  </p>
                  <p className="my-2">
                    This team is not about prestige or recognition. It is about purpose. It is about showing what happens when dedicated fundraisers come together to amplify a chapter, inspire new riders, and raise more money for the MS community. It is also about the stories. Through The Other Side of MS podcast, we highlight voices from every chapter we touch. These are real, unfiltered accounts of what MS takes, what it changes, and what it never defeats.
                  </p>
                  <p className="my-2">
                    Our why is connection. Our how is community. Our what is simple. A national team of riders and storytellers who use their miles and their voices to push the mission forward. Not for credit. Not for praise. For the people living with MS who deserve to be heard.
                  </p>

                  <div className="mt-3">
                    <a
                      href="mailto:cmurphy@sjmalaw.com?subject=Questions%20about%20National%20Bike%20MS%20Team"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                    >
                      <Info className="w-5 h-5" />
                      <span>For More Information</span>
                    </a>
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

              <h2 className="mt-4 mb-2">Upcoming Bike MS Events</h2>
              <p className="mb-2">2025 Bike MS Season complete. Look for events coming soon for 2026 Bike MS Season.</p>

              {/* Removed the list of 2025 events */}
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
