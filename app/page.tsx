"use client"

import Link from "next/link"
import Image from "next/image"
import { ReliableImage } from "@/components/reliable-image"
import { SpotifyBadge } from "@/components/spotify-badge"
import { Navigation } from "@/components/navigation"
import { useRef, useState, useEffect, useCallback, useMemo } from "react"
import { Heart } from "lucide-react"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"

export default function Home() {
  const donors = useMemo(() => [
    { name: "Joseph Monticello", tags: ["Bronze Donor"] },
    { name: "Your name could be listed here...", tags: [] }
  ], [])

  const donorCarouselRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % donors.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isHovering, donors.length])

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      {/* New Hero Section with Bike MS Focus */}
      <section className="relative">
        {/* Hero Image */}
        <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src="/images/podcast-20seats.jpeg"
            alt="Bike MS Fundraising Event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pb-32 md:pb-24">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
              The Other Side of MS
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
              Where Stories Move Us and Miles Unite Us
            </p>
            <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-4 md:p-6 rounded-lg">
              <p className="text-white text-base md:text-lg leading-normal">
                <em>
                  A National Bike MS Cycling Team and Podcast Platform cycling across the U.S. to raise awareness, fund
                  research, and amplify the voices of those living with MS.
                </em>
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 px-4">
            <Link
              href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ?si=2f0d4d87eae44a62"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white/90 hover:bg-white text-gray-800 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              <span className="text-lg sm:text-xl">🎧</span>
              <span className="font-medium">Listen to the Podcast</span>
            </Link>
            <Link
              href="/about-bike-ms"
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white/90 hover:bg-white text-gray-800 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              <span className="text-lg sm:text-xl">🚴</span>
              <span className="font-medium">Meet the Traveling Team</span>
            </Link>
            <Link
              href="https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white/90 hover:bg-white text-gray-800 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              <span className="text-lg sm:text-xl">❤️</span>
              <span className="font-medium">Donate to Support MS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section with improved styling */}
      <section className="relative bg-gradient-to-b from-blue-100 to-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center justify-center">
              <ReliableImage
                src="/images/ms-20logo.jpeg"
                alt="Bike MS Logo - National MS Society Cycling Fundraiser"
                width={400}
                height={200}
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="text-center mt-2 md:mt-0 max-w-2xl">
              <div className="flex flex-col items-center">
                <div className="flex justify-center mb-6">
                  <div className="text-center space-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <a
                      href="https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      Donate to Bike MS - 100% goes to MS Society
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
                    <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-3 mt-3">
                      Every single dollar you donate goes directly to the National Multiple Sclerosis Society, funding
                      research, delivering services, and providing support for those living with MS.
                    </p>
                  </div>
                </div>
                <Link
                  href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ?si=97200f7d613a4054"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-sm md:text-base lg:text-lg font-medium text-gray-700">
                      Listen to the latest episode of &apos;The Other Side of MS&apos; podcast...
                      <em>Sponsored by Birch Island Vet</em>
                    </span>
                    <div className="transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-md rounded-lg overflow-hidden mt-2">
                      <SpotifyBadge />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link href="/podcast" className="transition-transform hover:scale-105">
                <ReliableImage
                  src="/images/2025-20logo.png"
                  alt="The Other Side of MS podcast logo"
                  width={400}
                  height={200}
                  className="object-contain rounded-lg shadow-md"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-3">
        <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[320px] overflow-hidden">
              <div className="bg-blue-600 text-white p-3 text-center">
                <h2 className="text-xl font-semibold">Fundraising Totals</h2>
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-center space-y-2">
                    <div className="flex items-baseline justify-center text-gray-800">
                      <span className="font-bold text-3xl">$375</span>
                      <span className="ml-2">raised</span>
                    </div>
                    <div className="text-gray-600">Goal: $12,000</div>
                  </div>
                  <div className="relative w-full h-4 bg-gray-200 rounded-full mt-4 overflow-hidden">
                    <div className="bg-primary rounded-full h-full" style={{ width: "3.13%" }}></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 mt-1">3.13%</div>
                  <p className="text-xs text-center text-gray-600 mt-4 bg-blue-50 p-3 rounded-lg">
                    Your $100 Donation strengthens the research, support, and advocacy systems people with MS rely on every day.
                  </p>
                </div>
              </div>
            </div>

            {/* Thank You Donors - Scrolling Ticker */}
            <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[320px] overflow-hidden">
              <div className="bg-blue-600 text-white p-3 text-center">
                <h2 className="text-xl font-semibold">Thank You to Our Donors</h2>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-center">
                <p className="text-center text-gray-700 italic mb-6 text-sm">
                  "Every mile we ride, every dollar you give — brings us closer to a world free of MS."
                </p>
                <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg py-4">
                  <div className="animate-scroll-slow whitespace-nowrap">
                    {[...donors, ...donors].map((donor, index) => (
                      <span key={index} className="inline-block px-8 text-center">
                        <span className="font-bold text-gray-800 text-lg">{donor.name}</span>
                        {donor.tags.length > 0 && (
                          <span className="ml-2 text-sm text-gray-600">({donor.tags.join(", ")})</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[320px]">
              <div className="bg-blue-600 text-white p-3 text-center">
                <h2 className="text-xl font-semibold">What $100 Donation Supports</h2>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="text-center space-y-4">
                  <ul className="text-left list-disc pl-8 text-black">
                    <li>Research advancing treatments and long-term solutions</li>
                    <li>Support and guidance so people living with MS do not have to face it alone</li>
                  </ul>
                  <div className="flex flex-col items-center mt-4">
                    <div className="relative w-64 h-28 overflow-hidden rounded-lg shadow-sm mx-auto">
                      <ReliableImage
                        src="/images/100bill.jpeg"
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

      <div className="container mx-auto px-4 py-2">
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
                <h2 className="text-xl md:text-4xl font-semibold text-center mb-4 text-primary">
                  Stay Informed About MS Research
                </h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Bike MS Rides 2026</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              This year, we will call the Jack and Back Bike MS Ride, estimated for Sept. 2026, to be our "Featured
              Ride," though we will accept donations for any of our rides.
            </p>
            <a
              href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold underline"
            >
              Look for your Bike MS Ride Here
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Ride 1 - Cape Cod Getaway */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px] flex flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3">
                <div className="flex items-center justify-center">
                  <h3 className="font-bold text-lg text-center">Cape Cod Getaway</h3>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex flex-col items-center mb-3 flex-grow">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">📍 Quincy, MA</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 mt-auto">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-sm">June 27/28, 2026</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-600 font-medium mb-1">Team Spanish Beer - Passport Ride</p>
                  <a
                    href="https://events.nationalmssociety.org/pages/10304?eventID=2517"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium underline"
                  >
                    Event Details
                  </a>
                </div>
              </div>
            </div>

            {/* Ride 2 - Best Dam Bike Tour */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px] flex flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3">
                <div className="flex items-center justify-center">
                  <h3 className="font-bold text-lg text-center">Best Dam Bike Tour</h3>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex flex-col items-center mb-3 flex-grow">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">📍 Baraboo, WI</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 mt-auto">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-sm">August 1/2, 2026</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-600 font-medium mb-1">Team CCC Passport Ride</p>
                  <a
                    href="https://events.nationalmssociety.org/pages/11402?eventID=2735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium underline"
                  >
                    Event Details
                  </a>
                </div>
              </div>
            </div>

            {/* Ride 3 - Jack and Back (Featured Ride) */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px] flex flex-col">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3">
                <div className="flex items-center justify-center">
                  <h3 className="font-bold text-lg text-center">Jack and Back</h3>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex flex-col items-center mb-3 flex-grow">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-orange-600 mb-1">🏠 Featured Ride</p>
                    <p className="text-sm text-gray-600">📍 Eagleville, TN</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-600 font-medium mb-3">The Other Side of MS Featured Passport Ride</p>
                </div>
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 mt-auto">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-sm">ETA: Sept, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ride 4 - Bike MS: Cycle to the Shore */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-5px] flex flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3">
                <div className="flex items-center justify-center">
                  <h3 className="font-bold text-lg text-center">Bike MS: Cycle to the Shore</h3>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex flex-col items-center mb-3 flex-grow">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">📍 Daytona, FL</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-600 font-medium mb-3">Team Spanish Beer - Home Ride</p>
                </div>
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 mt-auto">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-sm">ETA: Oct, 2026</p>
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
              National Cycling Team
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

        {/* NPR First Coast Connect Section */}
        <section className="container mx-auto px-4 py-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
              {/* Header with Logos */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Image src="/images/npr-logo.png" alt="NPR Logo" width={80} height={32} className="object-contain" />
                </div>
                <div className="text-center flex-1 mx-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    As Featured on NPR's "First Coast Connect"
                  </h2>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/wjct-logo.png"
                    alt="WJCT Logo"
                    width={80}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                  In this NPR segment, host Al Emerick is joined by Teresa Eichner and Casey Murphy for a powerful
                  conversation about multiple sclerosis, the mission behind the Jax Bourbon Social fundraiser, and the
                  raw storytelling that drives The Other Side of MS podcast.
                </p>

                {/* Embedded YouTube Video */}
                <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-lg shadow-md max-w-4xl mx-auto">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/5YiuhgqDCI8?si=Xt3HGfK6aYY2PYUv"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sponsors-section" className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold text-center text-primary">Our Sponsors</h2>
          <div className="flex flex-col items-center space-y-4 bg-white rounded-xl p-6 shadow-sm">
            <div className="w-48 h-48 relative">
              <Image
                src="/images/birch-20island-20vet.jpeg"
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
      </main>

      {/* Footer and utility components */}
      <Footer />
      <BackToTopButton />
    </div>
  )
}
