"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { Globe, Phone, Mail, Home } from "lucide-react"
import { ReliableImage } from "@/components/reliable-image"
import { SocialMediaLinks } from "@/components/social-media-links"

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Add padding-top to account for the fixed navigation bar */}
      <main className="container mx-auto pt-24 md:pt-28 pb-12 px-4">
        <Link href="/" className="absolute top-24 md:top-28 left-4">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
            <Home className="h-4 w-4" />
          </button>
        </Link>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Our Sponsors Section */}
          <section className="space-y-8">
            <h1 className="text-4xl font-bold text-center">Our Sponsors</h1>
            <div className="grid gap-6">
              {/* Coggin BMW of Treasure Coast */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                  <a
                    href="https://www.cogginbmw.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="w-64 h-32 relative bg-black rounded-lg overflow-hidden">
                      <img
                        src="/images/coggin-bmw-logo.png"
                        alt="Coggin BMW of Treasure Coast"
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  </a>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Coggin BMW of Treasure Coast</h3>
                    <p className="text-gray-600 mb-3">
                      Ask for Matthew McNeal, tell him Casey Murphy sent you!
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+17724298300"
                        className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
                      >
                        <Phone className="w-4 h-4" />
                        772-429-8300
                      </a>
                      <p className="inline-flex items-center gap-2 text-gray-700">
                        <Home className="w-4 h-4" />
                        429 S US Hwy 1, Fort Pierce, FL 34982
                      </p>
                      <a
                        href="https://www.cogginbmw.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <Globe className="w-4 h-4" />
                        Visit Coggin BMW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Become a Sponsor</h2>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 pt-6">
                <p className="text-center text-lg mb-6">
                  Interested in becoming a sponsor? We'd love to hear from you! Contact Casey Murphy:
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="tel:+19045041500">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full sm:w-auto">
                      <Phone className="mr-2 h-4 w-4" />
                      Call 904-504-1500
                    </button>
                  </a>
                  <a href="mailto:cmurphy@sjmalaw.com">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full sm:w-auto">
                      <Mail className="mr-2 h-4 w-4" />
                      Email cmurphy@sjmalaw.com
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Add Social Media Links */}
        <SocialMediaLinks />
      </main>

      <Footer />
      <MobileTextButton />
    </div>
  )
}
