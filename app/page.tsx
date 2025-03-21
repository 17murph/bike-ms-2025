"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ReliableImage } from "@/components/reliable-image"
import { SpotifyBadge } from "@/components/spotify-badge"
import { CountdownTimer } from "@/components/countdown-timer"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DonorList } from "@/components/donor-list"
import { BackToTopButton } from "@/components/back-to-top-button"
import { SocialMediaLinks } from "@/components/social-media-links"

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <ReliableImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Logo.jpg-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg"
                alt="Bike MS Logo - National MS Society Cycling Fundraiser"
                width={220}
                height={110}
                className="object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="text-center mt-2 md:mt-0">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
                Bike MS 2025 - Cycling to End Multiple Sclerosis
              </h1>
              <div className="flex flex-col items-center">
                <Link
                  href="https://open.spotify.com/episode/2mgTM4aV6BRTA1mWFfd2FD?si=7sAb2qGYSB26ahSVLHmyHQ"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-sm md:text-base lg:text-lg font-medium text-gray-700">
                      Listen to the latest episode of &apos;The Other Side of MS&apos; podcast
                    </span>
                    <div className="transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-md rounded-lg overflow-hidden">
                      <SpotifyBadge />
                    </div>
                  </div>
                </Link>
                <Link
                  href="http://email.fundraisers.donordrive.com/c/eJw80MGOpCAQgOGngZsGChrkwKFnbJO97GlfoEZKm0TRAHZ23n6jvZkjCfmrvhqXSKn-xpX8Wso2RqrffNxSqbEelOqv3n-6h_ronWvMp3CNfih3d0o1ILvbXQ723j8-ePBSSmO05eSl1UJqoXXHacW4_Pneye9brrg0lXBtYnrFSpxe7z4oZ_jTByIrOknSIQYFXyBosthp4ch0hIJHDwJuAkBKAKG71ungvoKdRquNsHJiWkxHChljoVzasKUthxxf1I7byhf_rHUvTN0ZDAyGa3xpE9a4JVx-9O2WZwZDTIH-tuO0MjVMRyEcz39M9ZnmWCrltlTMlYH572CqPyUMzIm83p3sbpKBWTDNB87EVE-J75hrHOOOl94ocObGs5d2PfL-ZFrM59Wund8lf3X4y8O_AAAA___w74eR"
                  className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 mt-3 font-medium transition-colors text-sm md:text-base lg:text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    className="lucide lucide-users w-4 h-4 md:w-5 md:h-5"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Join Team Spanish Beer</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=donate.team&teamID=73254"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <ReliableImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TSB-logo-YalpHen52DqYkUZknWmKZmHJOMCo3n.png"
                  alt="Team Spanish Beer Logo - Bike MS Fundraising Team"
                  width={220}
                  height={110}
                  className="object-contain rounded-lg shadow-sm"
                />
              </Link>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-6 text-center">
            <p className="text-gray-700 italic text-sm md:text-base bg-white/50 p-3 rounded-lg shadow-sm">
              &quot;Last year, Bike MS fundraising helped advance a breakthrough treatment—fewer relapses, fewer
              hospital visits, and more hope for people living with MS. That&apos;s the power of every donation.
              That&apos;s why I ride.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://mssociety.donordrive.com/participant/casey-murphy"
            >
              <Button className="w-full bg-gradient-to-r from-secondary via-secondary/90 to-secondary hover:from-secondary/90 hover:via-secondary hover:to-secondary/90 text-white py-3 rounded-lg transition-all duration-300 text-xl md:text-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                Support MS through Bike MS Fundraiser
              </Button>
            </Link>
          </div>
          <p className="text-center text-sm text-gray-600 px-4 pb-2">100% of donations go directly to the MS Society</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[300px] overflow-hidden">
              <div className="bg-primary text-white p-3 text-center">
                <h2 className="text-xl font-semibold">Fundraising Totals</h2>
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-center space-y-2">
                    <div className="flex items-baseline justify-center text-gray-800">
                      <span className="font-bold text-3xl">$1,950</span>
                      <span className="ml-2">raised</span>
                    </div>
                    <div className="text-gray-600">Goal: $25,000</div>
                  </div>
                  <div className="relative w-full h-4 bg-gray-200 rounded-full mt-4 overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-primary rounded-full"
                      style={{ width: "7.8%" }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 mt-1">7.8%</div>
                  <p className="text-xs text-center text-gray-600 mt-4 bg-blue-50 p-3 rounded-lg">
                    $5,000 provides 20 people with dedicated MS Navigator support to address their unique MS challenges.
                  </p>
                </div>
              </div>
            </div>
            <DonorList
              donors={[
                "Karyn Laterza",
                "Dan Sweeney",
                "Michael Cavicchia",
                "Rob & Lisa Farthing",
                "Genese Sweeney",
                "Susan Levin",
                "Mark & Dawn Windley",
                "Terry & April Walter",
                "Jan Mobley",
                "Heidi Katz",
                "Erik Henderson & Lyn Yarbrough",
                "Mike Hull",
                "Elaine Wuerstlin",
                "Jennifer Long",
                "Debbie & Brian Hamm",
                "Mary Dallman",
                "Tom & Mary Beth Cook",
                "Michele Katz",
                "Ken Bailey",
                "Dennis & JoAnn Cook",
              ]}
            />
            <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[300px]">
              <div className="bg-primary text-white p-3 text-center">
                <h2 className="text-xl font-semibold">Fundraising Challenge</h2>
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div className="text-center space-y-3">
                  <p>My commitment goes beyond just riding—I actively support the cause through my own donations</p>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative w-48 h-20 overflow-hidden rounded-lg shadow-sm">
                      <ReliableImage
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/100Bill-i9nf28jeSx9CL6yPqLujoKL5gxjvGI.jpeg"
                        alt="100 Dollar Bill"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-bold text-secondary text-lg">Who will match $100?</p>
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

      <div id="events-section" className="container mx-auto px-4 mt-8 mb-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Bike MS Rides 2025</h2>
          <p className="text-gray-600">
            Follow my journey as a Bike MS Passport rider across six different Bike MS events, including my home ride
            (PGA Tour, Bike to the Shore)
          </p>
        </div>
      </div>

      <main className="container mx-auto py-1 space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col overflow-hidden">
            <div className="bg-primary text-white p-3 text-center">
              <h3 className="font-semibold text-lg">Suncoast Challenge</h3>
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-map-pin w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Sarasota, FL</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-calendar w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  <span>March 29, 2025</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-clock w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>7:00 AM ET</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-bike w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="15" cy="5" r="1" />
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                  </svg>
                  <span>75 Miles</span>
                </div>
              </div>
              <CountdownTimer eventDate="2025-03-29T07:00:00-04:00" eventName="Suncoast Challenge" />
            </div>
          </div>

          <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col overflow-hidden">
            <div className="bg-primary text-white p-3 text-center">
              <h3 className="font-semibold text-lg">Bluegrass Bourbon Ride</h3>
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-map-pin w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Bardstown, KY</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-calendar w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  <span>June 14, 2025</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-clock w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>7:00 AM ET</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-bike w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="15" cy="5" r="1" />
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                  </svg>
                  <span>150 Miles</span>
                </div>
              </div>
              <CountdownTimer eventDate="2025-06-14T07:00:00-04:00" eventName="Bluegrass Bourbon Ride" />
            </div>
          </div>

          <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col overflow-hidden">
            <div className="bg-primary text-white p-3 text-center">
              <h3 className="font-semibold text-lg">Bike MS Colorado</h3>
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-map-pin w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Boulder, CO</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-calendar w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  <span>June 28, 2025</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-clock w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>7:00 AM ET</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-bike w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="15" cy="5" r="1" />
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                    <circle cx="15" cy="5" r="1" />
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                  </svg>
                  <span>150 Miles</span>
                </div>
              </div>
              <CountdownTimer eventDate="2025-06-28T07:00:00-04:00" eventName="Bike MS Colorado" />
            </div>
          </div>

          <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col overflow-hidden">
            <div className="bg-primary text-white p-3 text-center">
              <h3 className="font-semibold text-lg">Best Dam Bike Tour WI</h3>
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-map-pin w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Baraboo, WI</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-calendar w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  <span>August 2, 2025</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-clock w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>7:00 AM ET</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-bike w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="15" cy="5" r="1" />
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                  </svg>
                  <span>150 Miles</span>
                </div>
              </div>
              <CountdownTimer eventDate="2025-08-02T07:00:00-04:00" eventName="Best Dam Bike Tour WI" />
            </div>
          </div>

          <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col overflow-hidden">
            <div className="bg-primary text-white p-3 text-center">
              <h3 className="font-semibold text-lg">Georgia Peach Ride</h3>
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-map-pin w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>LaGrange, GA</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-calendar w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  <span>September 13, 2025</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-clock w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>7:00 AM ET</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-bike w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="15" cy="5" r="1" />
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                  </svg>
                  <span>75 Miles</span>
                </div>
              </div>
              <CountdownTimer eventDate="2025-09-13T07:00:00-04:00" eventName="Georgia Peach Ride" />
            </div>
          </div>

          <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col overflow-hidden">
            <div className="bg-primary text-white p-3 text-center">
              <h3 className="font-semibold text-lg">PGA Tour, Bike to the Shore</h3>
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-map-pin w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Daytona, FL</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-calendar w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  <span>October 4, 2025</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-clock w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>7:00 AM ET</span>
                </div>
                <div className="flex items-start gap-2">
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
                    className="lucide lucide-bike w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="15" cy="5" r="1" />
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                  </svg>
                  <span>150 Miles</span>
                </div>
              </div>
              <CountdownTimer eventDate="2025-10-04T07:00:00-04:00" eventName="PGA Tour, Bike to the Shore" />
            </div>
          </div>
        </section>

        <section className="text-center bg-blue-50 rounded-xl p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-3">Interested in cycling for MS?</h2>
          <p className="text-gray-700 mb-4">
            Join thousands of cyclists across the country who are riding to create a world free of MS.
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

        <section id="podcast-section" className="rounded-xl overflow-hidden shadow-md mt-8 w-full">
          <div className="bg-gradient-to-r from-blue-100 to-white p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-6">
              The Other Side of MS - Bike MS Stories Podcast
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2 space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Welcome to our podcast dedicated to amplifying the voices and stories of those whose lives are deeply
                  affected by Multiple Sclerosis (MS). Through honest conversations and heartfelt stories, we shed light
                  on the strength, resilience, and challenges of the MS community.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Each episode goes beyond awareness; it&apos;s about action, whether that means learning, supporting,
                  advocating, or simply listening with an open heart. Join us as we explore The Other Side of MS.
                </p>
                <div className="pt-2 flex flex-col items-center lg:items-start">
                  <span className="text-sm md:text-base lg:text-lg font-medium text-gray-700">
                    Listen to the latest episode of &apos;The Other Side of MS&apos; podcast, featuring special guest
                    Jasmine Hanna
                  </span>
                  <Link
                    href="https://open.spotify.com/episode/2mgTM4aV6BRTA1mWFfd2FD?si=7sAb2qGYSB26ahSVLHmyHQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spotify-podcast-badge-blk-grn-165x40-SglaMqZjS2grniJuucL8iprpdTENzF.png"
                      alt="Listen on Spotify"
                      width={165}
                      height={40}
                      className="rounded-lg"
                      unoptimized
                    />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-[300px] h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%20Logo.JPEG-LznTItVGXC64kGQ29mVEzAWohOa9LN.jpeg"
                    alt="The Other Side of MS Podcast Logo"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center mt-8">
              <div className="flex items-center gap-2">
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
                  className="lucide lucide-phone w-5 h-5 text-gray-600"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-lg">904-504-1500</span>
              </div>
              <a
                href="mailto:cmurphy@sjmalaw.com"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
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
                <span>cmurphy@sjmalaw.com</span>
              </a>
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
            href="mailto:cmurphy@sjmalaw.com"
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

      <Footer />
      <BackToTopButton />
    </div>
  )
}

