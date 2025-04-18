"use client"
import Image from "next/image"
import Link from "next/link"
import DonorCarousel from "./donor-carousel"

// Donor data
const donors = [
  { name: "Karyn Laterza", tags: ["Top Donor"] },
  { name: "John Smith", tags: ["Monthly Donor"] },
  { name: "Sarah Johnson", tags: ["Team Captain"] },
  { name: "Michael Brown", tags: ["First Time Donor"] },
  { name: "Emily Davis", tags: ["Top Donor", "Team Captain"] },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <Image src="/bike-ms-logo.png" alt="Bike MS Logo" width={300} height={300} className="object-contain" />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Bike MS 2025 - Cycling to End Multiple Sclerosis</h1>
            <p className="mb-4">Listen to the newest Episode of "The Other Side of MS"</p>
            <div className="flex justify-center md:justify-start mb-6">
              <a href="https://open.spotify.com/show/example" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/spotify-badge.png"
                  alt="Listen on Spotify"
                  width={180}
                  height={56}
                  className="object-contain"
                />
              </a>
            </div>
            <div className="flex justify-center md:justify-start items-center">
              <span className="mr-2">
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
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
              <Link href="/join-team" className="text-blue-600 hover:underline">
                Join Team Spanish Beer
              </Link>
            </div>
          </div>
          <div className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2">
            <Image
              src="/team-spanish-beer-logo.png"
              alt="Team Spanish Beer Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8">
          <blockquote className="italic text-center text-gray-600 max-w-3xl mx-auto">
            "Last year, Bike MS fundraising helped advance a breakthrough treatment—fewer relapses, fewer hospital
            visits, and more hope for people living with MS. That's the power of every donation. That's why I ride."
          </blockquote>
        </div>
      </section>

      {/* Donation Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-[#1e40af] text-white text-center py-4 rounded-t-lg">
            <h2 className="text-2xl font-bold">Donate to Bike MS supporting the National MS Society</h2>
          </div>
          <div className="bg-blue-50 p-4 text-center rounded-b-lg mb-6">
            <p>100% of donations go directly to the MS Society</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fundraising Totals Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#1e40af] text-white text-center py-3">
                <h3 className="text-xl font-semibold">Fundraising Totals</h3>
              </div>
              <div className="p-6 text-center">
                <div className="text-4xl font-bold text-[#1e40af]">$2,360</div>
                <div className="text-gray-600 mb-2">raised</div>
                <div className="mb-2">Goal: $25,000</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "9.44%" }}></div>
                </div>
                <div className="text-right text-sm text-gray-600 mt-1">9.44%</div>
                <div className="mt-4 p-3 bg-blue-50 text-sm rounded-lg">
                  $5,000 provides 20 people with dedicated MS Navigator support to address their unique MS challenges.
                </div>
              </div>
            </div>

            {/* Thank You Donors Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#2563eb] text-white text-center py-3">
                <h3 className="text-xl font-semibold">Thank You to Our Donors</h3>
              </div>
              <div className="p-6">
                <DonorCarousel donors={donors} />
              </div>
            </div>

            {/* Your Donation Provides Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#3b82f6] text-white text-center py-3">
                <h3 className="text-xl font-semibold">Your Donation Provides</h3>
              </div>
              <div className="p-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li>One researcher one step closer to a breakthrough</li>
                  <li>One person getting the clarity they need from a Navigator</li>
                  <li>One newly diagnosed patient realizing they're not alone</li>
                </ul>
                <div className="mt-4 flex justify-center">
                  <Image
                    src="/donation-image.png"
                    alt="Donation Impact"
                    width={200}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bike MS Rides 2025 Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Bike MS Rides 2025</h2>
          {/* Ride content would go here */}
        </div>
      </section>
    </main>
  )
}
