"use client"

import Link from "next/link"
import Image from "next/image"
import { ReliableImage } from "@/components/reliable-image"
import { SpotifyBadge } from "@/components/spotify-badge"
import { CountdownTimer } from "@/components/countdown-timer"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"
import { SocialMediaLinks } from "@/components/social-media-links"
import { useRef, useState, useEffect } from "react"
import { Heart } from "lucide-react"

export default function Home() {
  // Donor data from the original website
  const donors = [
    // Platinum Donors
    { name: "M&M Farms", tags: ["🥇 Platinum Donor"] },
    { name: "Marian Bredenkoetter", tags: ["🥇 Platinum Donor"] },

    // Gold Donors
    { name: "Margaret & Joe", tags: ["🥈 Gold Donor"] },
    { name: "Danny Murphy", tags: ["🥈 Gold Donor"] },
    { name: "Michael Cavicchia", tags: ["🥈 Gold Donor"] },

    // Silver Donors
    { name: "Rob & Lisa Farthing", tags: ["🥉 Silver Donor"] },
    { name: "Susan Levin", tags: ["🥉 Silver Donor"] },
    { name: "Mark & Dawn Windley", tags: ["🥉 Silver Donor"] },
    { name: "Erik Henderson", tags: ["🥉 Silver Donor"] },
    { name: "Elaine Wuerstlin", tags: ["🥉 Silver Donor"] },
    { name: "Jennifer Long", tags: ["🥉 Silver Donor"] },
    { name: "Debbie & Brian Hamm", tags: ["🥉 Silver Donor"] },
    { name: "Mary Dallman", tags: ["🥉 Silver Donor"] },
    { name: "Dennis & JoAnn Cook", tags: ["🥉 Silver Donor"] },
    { name: "Wendy Bertagnole", tags: ["🥉 Silver Donor"] },
  ]

  const donorCarouselRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % donors.length
      goToSlide(nextSlide)
    }, 4000)

    return () => clearInterval(interval)
  }, [currentSlide, isHovering, donors.length])

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      {/* New Hero Section with Bike MS Focus */}
      <section className="relative">
        {/* Hero Image */}
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Podcast%20Seats.jpg-5BvgoqJRLerI7F6Wd226YzErPbx7g4.jpeg"
            alt="Bike MS Fundraising Event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Bike MS 2025 – Cycling to End Multiple Sclerosis
            </h1>
            <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-6 rounded-lg">
              <p className="text-white text-lg md:text-xl leading-relaxed">
                Join us in the fight against MS through the power of cycling. Every mile ridden and every dollar raised
                brings us closer to a world free of multiple sclerosis.
              </p>
            </div>
          </div>
          {/* Florida vs Wisconsin CTA Box - Brightened Up */}
        </div>
      </section>

      {/* Hero Section with improved styling */}
      <section className="relative bg-gradient-to-b from-blue-100 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <ReliableImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Logo.jpg-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg"
                alt="Bike MS Logo - National MS Society Cycling Fundraiser"
                width={220}
                height={110}
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="text-center mt-2 md:mt-0 max-w-2xl">
              <div className="flex flex-col items-center">
                <div className="flex justify-center mb-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-4 text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center gap-1">
                        🐊 <span>Florida: $4,960</span>
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="flex items-center gap-1">
                        🦡 <span>Wisconsin: $3,000</span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Florida vs Wisconsin Fundraising Challenge - Which team are you on?
                    </p>
                    <a
                      href="/about-bike-ms"
                      className="inline-flex items-center gap-2 px-6 py-4 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md text-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                      Florida vs Wisconsin Challenge - Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3 ml-1 opacity-70"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mb-5 font-medium max-w-md mx-auto">
                  Every single dollar you donate goes directly to the National Multiple Sclerosis Society — funding
                  research, delivering services, and providing support for those living with MS.
                </p>
                <Link
                  href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ?si=97200f7d613a4054"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-sm md:text-base lg:text-lg font-medium text-gray-700">
                      Listen to the latest episode of &apos;The Other Side of MS&apos; podcast
                    </span>
                    <div className="transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-md rounded-lg overflow-hidden mt-2">
                      <SpotifyBadge />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/podcast" className="transition-transform hover:scale-105">
                <ReliableImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%20LOGO-h0RSu6vloZsMjIlxVlqVb3HlRPxxMW.png"
                  alt="The Other Side of MS podcast logo"
                  width={220}
                  height={110}
                  className="object-contain rounded-lg shadow-md"
                />
              </Link>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <blockquote className="text-gray-700 italic text-sm md:text-base lg:text-lg bg-white/80 p-5 rounded-lg shadow-sm border-l-4 border-primary">
              &quot;We ride alongside the stories too often left behind—the fatigue no one sees, the symptoms no one
              talks about, the truth most don't understand. This isn't about speaking for people with MS—it's about
              making space to hear them, fully. Every mile, every donation helps expand access to care, fuel research,
              and make sure no one feels invisible in their fight. We're not just fundraising. We're listening—and
              following their lead.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[300px] overflow-hidden">
              <div className="bg-blue-600 text-white p-3 text-center">
                <h2 className="text-xl font-semibold">Fundraising Totals</h2>
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-center space-y-2">
                    <div className="flex items-baseline justify-center text-gray-800">
                      <span className="font-bold text-3xl">$7,610</span>
                      <span className="ml-2">raised</span>
                    </div>
                    <div className="text-gray-600">Goal: $20,000</div>
                  </div>
                  <div className="relative w-full h-4 bg-gray-200 rounded-full mt-4 overflow-hidden">
                    <div className="bg-primary rounded-full" style={{ width: "38.1%" }}></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 mt-1">38.1%</div>
                  <p className="text-xs text-center text-gray-600 mt-4 bg-blue-50 p-3 rounded-lg">
                    $5,000 provides 20 people with dedicated MS Navigator support to address their unique MS challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Thank You Donors - Auto-Scrolling Cards with Pagination */}
            <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[350px] overflow-hidden">
              <div className="bg-blue-600 text-white p-3 text-center">
                <h2 className="text-xl font-semibold">Thank You to Our Donors</h2>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <p className="text-center text-gray-700 italic mb-4">
                  "Every mile we ride, every dollar you give — brings us closer to a world free of MS."
                </p>
                <div className="relative flex flex-col flex-grow">
                  <div
                    ref={donorCarouselRef}
                    className="overflow-hidden flex-grow"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="h-full">
                      {donors.map((donor, index) => (
                        <div
                          key={index}
                          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
                          }`}
                        >
                          <div className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-100 mx-auto max-w-xs">
                            <div className="flex justify-center mb-2">
                              <Heart className="w-6 h-6 text-orange-500" fill="#f97316" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{donor.name}</h3>
                            {donor.tags.length > 0 && (
                              <div className="flex flex-wrap justify-center gap-2 mt-2">
                                {donor.tags.map((tag, tagIndex) => (
                                  <span key={tagIndex} className="inline-flex items-center text-sm text-gray-600">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pagination Indicators - Small Dots/Bubbles */}
                  <div className="flex justify-center mt-auto pt-4 space-x-2">
                    {donors.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          currentSlide === index ? "bg-blue-800" : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[350px]">
              <div className="bg-blue-600 text-white p-3 text-center">
                <h2 className="text-xl font-semibold">Your Donation Provides</h2>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="text-center space-y-4">
                  <ul className="text-left list-disc pl-8 text-black">
                    <li>One researcher one step closer to a breakthrough</li>
                    <li>One person getting the clarity they need from a Navigator</li>
                    <li>One newly diagnosed patient realizing they're not alone</li>
                  </ul>
                  <div className="flex flex-col items-center mt-4">
                    <div className="relative w-64 h-28 overflow-hidden rounded-lg shadow-sm mx-auto">
                      <ReliableImage
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/100Bill-i9nf28jeSx9CL6yPqLujoKL5gxjvGI.jpeg"
                        alt="100 Dollar Bill"
                        width={256}
                        height={112}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center"
          href="https://www.nationalmssociety.org/news-and-magazine/momentum-magazine"
        >
          <div className="rounded-xl border bg-gradient-to-r from-orange-50 to-white hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]">
            <div className="p-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-globe w-6 h-6 text-orange-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <h2 className="text-xl font-semibold text-orange-600">Stay Informed About MS Research</h2>
              </div>
              <p className="text-gray-700">
                Learn more about the latest breakthroughs in MS Research via Momentum Magazine online
              </p>
            </div>
          </div>
        </Link>
      </div>

      <section id="events-section" className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Bike MS Rides 2025</h2>
            <p className="text-gray-700 text-lg">
              Follow my journey as a Bike MS Passport rider across six different Bike MS events, including my home ride
              (PGA Tour, Bike to the Shore)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Completed Ride - Suncoast Challenge */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px]">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">Suncoast Challenge</h3>
                  <span className="bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-full">COMPLETED</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-col items-center mb-4">
                  <div className="relative w-full h-32 my-2">
                    <Image
                      src="/images/bike-ms-complete-badge.png"
                      alt="Bike MS Complete Badge"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 mt-4">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">March 29, 2025</p>
                    <p className="text-gray-600 mt-1">65.68 miles / 4hrs 26 min</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Ride - Bluegrass Bourbon Ride */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px]">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">Bluegrass Bourbon - KY</h3>
                  <span className="bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-full">COMPLETED</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-col items-center mb-4">
                  <div className="relative w-full h-32 my-2">
                    <Image
                      src="/images/bike-ms-complete-badge.png"
                      alt="Bike MS Complete Badge"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 mt-4">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">June 14/15th, 2025</p>
                    <p className="text-gray-600 mt-1">86.4 miles / 6hrs 55 min</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Ride - Bike MS Colorado */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px]">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">Bike MS Colorado</h3>
                  <span className="bg-white text-yellow-600 text-xs font-bold px-2 py-1 rounded-full">UPCOMING</span>
                </div>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="font-medium">Boulder, CO</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                    <span className="font-medium">June 28, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="font-medium">7:00 AM ET</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="18.5" cy="17.5" r="3.5" />
                      <circle cx="5.5" cy="17.5" r="3.5" />
                      <circle cx="15" cy="5" r="1" />
                      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                    </svg>
                    <span className="font-medium">150 Miles</span>
                  </div>
                </div>
                <div className="mt-5">
                  <CountdownTimer eventDate="2025-06-28T07:00:00-04:00" eventName="Bike MS Colorado" />
                  <div className="mt-3 text-center">
                    <a
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donorDrive.event&eventID=2099"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      About this Ride
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Ride - Best Dam Bike Tour WI */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px]">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">Best Dam Bike Tour WI</h3>
                  <span className="bg-white text-yellow-600 text-xs font-bold px-2 py-1 rounded-full">UPCOMING</span>
                </div>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="font-medium">Baraboo, WI</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                    <span className="font-medium">August 2, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="font-medium">7:00 AM ET</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="18.5" cy="17.5" r="3.5" />
                      <circle cx="5.5" cy="17.5" r="3.5" />
                      <circle cx="15" cy="5" r="1" />
                      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                    </svg>
                    <span className="font-medium">150 Miles</span>
                  </div>
                </div>
                <div className="mt-5">
                  <CountdownTimer eventDate="2025-08-02T07:00:00-04:00" eventName="Best Dam Bike Tour WI" />
                  <div className="mt-3 text-center">
                    <a
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donorDrive.event&eventID=2263"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      About this Ride
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Ride - Georgia Peach Ride */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px]">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">Georgia Peach Ride</h3>
                  <span className="bg-white text-yellow-600 text-xs font-bold px-2 py-1 rounded-full">UPCOMING</span>
                </div>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="font-medium">LaGrange, GA</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                    <span className="font-medium">September 13, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="font-medium">7:00 AM ET</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="18.5" cy="17.5" r="3.5" />
                      <circle cx="5.5" cy="17.5" r="3.5" />
                      <circle cx="15" cy="5" r="1" />
                      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                    </svg>
                    <span className="font-medium">75 Miles</span>
                  </div>
                </div>
                <div className="mt-5">
                  <CountdownTimer eventDate="2025-09-13T07:00:00-04:00" eventName="Georgia Peach Ride" />
                  <div className="mt-3 text-center">
                    <a
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donorDrive.event&eventID=2379"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      About this Ride
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Ride - PGA Tour, Bike to the Shore */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px]">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">Bike MS: PGA TOUR Cycle to the Shore</h3>
                  <span className="bg-white text-yellow-600 text-xs font-bold px-2 py-1 rounded-full">UPCOMING</span>
                </div>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="font-medium">Daytona, FL</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                    <span className="font-medium">October 4, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="font-medium">7:00 AM ET</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="18.5" cy="17.5" r="3.5" />
                      <circle cx="5.5" cy="17.5" r="3.5" />
                      <circle cx="15" cy="5" r="1" />
                      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                    </svg>
                    <span className="font-medium">150 Miles</span>
                  </div>
                </div>
                <div className="mt-5">
                  <CountdownTimer
                    eventDate="2025-10-04T07:00:00-04:00"
                    eventName="Bike MS: PGA TOUR Cycle to the Shore"
                  />
                  <div className="mt-3 text-center">
                    <a
                      href="https://events.nationalmssociety.org/index.cfm?fuseaction=donorDrive.event&eventID=2396"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      About this Ride
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto py-1 space-y-8">
        <section className="text-center bg-blue-50 rounded-xl p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-3">Interested in cycling for MS?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            Join us in the fight against MS through the power of cycling. Every mile ridden and every dollar raised
            brings us closer to a world free of multiple sclerosis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bike w-4 h-4"
              >
                <circle cx="18.5" cy="17.5" r="3.5" />
                <circle cx="5.5" cy="17.5" r="3.5" />
                <circle cx="15" cy="5" r="1" />
                <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
              </svg>
              Find Your Ride
            </Link>
            <Link
              href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1227&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&language=en&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bike w-4 h-4"
              >
                <circle cx="18.5" cy="17.5" r="3.5" />
                <circle cx="5.5" cy="17.5" r="3.5" />
                <circle cx="15" cy="5" r="1" />
                <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
              </svg>
              About Bike MS
            </Link>
            <Link
              href="http://email.fundraisers.donordrive.com/c/eJw80MGOpCAQgOGngZsGChrkwKFnbJO97GlfoEZKm0TRAHZ23n6jvZkjCfmrvhqXSKn-xpX8Wso2RqrffNxSqbEelOqv3n-6h_ronWvMp3CNfih3d0o1ILvbXQ723j8-ePBSSmO05eSl1UJqoXXHacW4_Pneye9brrg0lXBtYnrFSpxe7z4oZ_jTByIrOknSIQYFXyBosthp4ch0hIJHDwJuAkBKAKG71ungvoKdRquNsHJiWkxHChljoVzasKUthxxf1I7byhf_rHUvTN0ZDAyGa3xpE9a4JVx-9O2WZwZDTIH-tuO0MjVMRyEcz39M9ZnmWCrltlTMlYH572CqPyUMzIm83p3sbpKBWTDNB87EVE-J75hrHOOOl94ocObGs5d2PfL-ZFrM59Wund8lf3X4y8O_AAAA___w74eR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary/90 text-lg font-medium transition-all hover:translate-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users w-4 h-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Join Team Spanish Beer</span>
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
              🎙️ Real Stories. Raw Truth. The Other Side of MS.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Quote 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary/20"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic mb-4 flex-grow">
                    "The hardest part isn't the physical symptoms, it's having to constantly explain to people why you
                    can't do what you used to do."
                  </blockquote>
                  <div className="flex items-center mt-auto">
                    <div className="ml-4">
                      <p className="font-bold text-gray-800">Amber Cunningham</p>
                      <p className="text-sm text-gray-500">Finding Strength Beyond the Diagnosis</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary/20"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic mb-4 flex-grow">
                    "Sometimes people just don't need a silver lining. They need empathy. They need someone just to sit
                    with them in that moment and say, 'Hey, I hear you.'"
                  </blockquote>
                  <div className="flex items-center mt-auto">
                    <div className="ml-4">
                      <p className="font-bold text-gray-800">Jessica</p>
                      <p className="text-sm text-gray-500">The Other Side of MS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/podcast"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg font-medium"
              >
                Explore All Episodes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section id="sponsors-section" className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold text-center text-primary">Our Sponsors</h2>
          <div className="flex flex-col items-center space-y-4 bg-white rounded-xl p-6 shadow-sm">
            <div className="w-48 h-48 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Birch%20Island%20Vet.jpg-4d3gtkh4cnGBdUL3uTO4Za2C1JR80C.jpeg"
                alt="Birch Island Veterinary Center Logo"
                width={192}
                height={192}
                className="object-contain"
                unoptimized
              />
            </div>
            <Link
              href="https://www.birchislandvet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Visit Birch Island Vet</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-4 h-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        <section id="feedback-section" className="text-center mt-8 mb-8 bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-center mb-4 text-primary">Leave Feedback</h2>
          <p className="text-gray-700 mb-4">
            We&apos;d love to hear from you! Share your thoughts, questions, or suggestions.
          </p>
          <a
            href="mailto:CMURPHY@SJMALAW.COM"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail w-5 h-5"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Contact Us</span>
          </a>
        </section>

        {/* Add Social Media Links */}
        <SocialMediaLinks />
      </main>

      {/* As Featured Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">As Featured on</h2>

          {/* On a Mission with Jack Sears - ADD THIS FIRST */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-primary">
              On a Mission with Jack Sears
            </h3>
            <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-lg shadow-md">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1092530487?h=fc93edee8a"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* YouTube Sub-section - EXISTING VIDEO STAYS SECOND */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-primary">
              YouTube - Will Anthony Talk MS
            </h3>
            <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-lg shadow-md">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/W9ByLBLhg1Q?si=13GfEXRiGqxkJwHU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
