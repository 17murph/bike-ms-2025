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
          <section className="space-y-8">
            <h1 className="text-4xl font-bold text-center">Sponsor Spotlight</h1>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-br from-blue-50 to-white">
              <div className="flex flex-col p-6 text-center space-y-4">
                <div className="w-64 h-64 mx-auto relative">
                  <ReliableImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Birch%20Island%20Vet.jpg-4d3gtkh4cnGBdUL3uTO4Za2C1JR80C.jpeg"
                    alt="Birch Island Veterinary Center Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <Link
                  href="https://www.birchislandvet.com"
                  className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 text-lg font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-5 h-5" />
                  Visit Birch Island Veterinary Center
                </Link>
                <div className="font-semibold tracking-tight text-3xl">
                  Birch Island Veterinary Center – Supporting The Other Side of MS
                </div>
              </div>
              <div className="p-6 pt-0 prose prose-blue mx-auto">
                <p className="lead text-lg text-gray-700">
                  We are honored to announce Birch Island Veterinary Center as a proud sponsor of Casey Murphy and The
                  Other Side of MS podcast. Their generosity and commitment to this cause are truly remarkable—not only
                  do they believe in raising awareness for multiple sclerosis (MS), but 100% of their sponsorship goes
                  directly to the National MS Society. Not a single penny is taken in by us—every dollar they contribute
                  fuels critical MS research, patient support, and the mission to find a cure.
                </p>
                <h3 className="text-xl font-semibold mt-8 mb-4">
                  A Special Thanks to Dr. Deanna Greer and her husband Mike
                </h3>
                <p className="text-gray-700">
                  A heartfelt shoutout to Dr. Deanna Greer and her husband Mike for their continued dedication and
                  unwavering support. As an animal clinic, their sponsorship of an MS-focused initiative is something
                  truly special and unique. Animals don't get MS—but their commitment to helping the people who do shows
                  their deep compassion and generosity.
                </p>
                <h3 className="text-xl font-semibold mt-8 mb-4">Why We Trust Birch Island Veterinary Center</h3>
                <p className="text-gray-700">
                  For over five years, Birch Island Veterinary Center has provided exceptional care for our fur family.
                  Their team is not only incredibly skilled but also deeply compassionate, treating every pet as if they
                  were their own. We trust them completely with the care of our beloved pets.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-bold mb-4">If You Have a Pet, You Deserve the Best Vet in Florida!</h4>
                  <p className="flex items-center gap-2 mb-2">
                    🐾 Looking for a veterinary clinic that treats your pets like family? Visit Birch Island Veterinary
                    Center today!
                  </p>
                  <p className="flex items-center gap-2">
                    🌐{" "}
                    <Link
                      href="https://www.birchislandvet.com"
                      className="text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.birchislandvet.com
                    </Link>
                  </p>
                </div>
                <p className="text-gray-700 mt-8">
                  To Dr. Deanna, Mike, and the entire Birch Island team—thank you for believing in this mission, for
                  supporting The Other Side of MS, and for helping us push forward in the fight against MS. Your
                  generosity means the world. 🧡🐾🎙️
                </p>
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
