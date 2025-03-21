"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { RelatedBikeMSLinks } from "@/components/related-bike-ms-links"
import { Bike, Heart, Users, ExternalLink, MapPin } from "lucide-react"
import { VirtualRidersSection } from "@/components/virtual-riders-section"
import { ReliableImage } from "@/components/reliable-image"
import { VeteransMSSection } from "@/components/veterans-ms-section"
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

      <main className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-8">
            <h1 className="text-4xl font-bold text-center">About Bike MS</h1>

            <div className="flex justify-center gap-4 my-6">
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 text-lg font-medium transition-all hover:translate-x-1"
              >
                <Bike className="w-5 h-5" />
                <span>Find Your Ride</span>
              </Link>
              <Link
                href="http://email.fundraisers.donordrive.com/c/eJw80MGOpCAQgOGngZsGChrkwKFnbJO97GlfoEZKm0TRAHZ23n6jvZkjCfmrvhqXSKn-xpX8Wso2RqrffNxSqbEelOqv3n-6h_ronWvMp3CNfih3d0o1ILvbXQ723j8-ePBSSmO05eSl1UJqoXXHacW4_Pneye9brrg0lXBtYnrFSpxe7z4oZ_jTByIrOknSIQYFXyBosthp4ch0hIJHDwJuAkBKAKG71ungvoKdRquNsHJiWkxHChljoVzasKUthxxf1I7byhf_rHUvTN0ZDAyGa3xpE9a4JVx-9O2WZwZDTIH-tuO0MjVMRyEcz39M9ZnmWCrltlTMlYH572CqPyUMzIm83p3sbpKBWTDNB87EVE-J75hrHOOOl94ocObGs5d2PfL-ZFrM59Wund8lf3X4y8O_AAAA___w74eR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary/90 text-lg font-medium transition-all hover:translate-x-1"
              >
                <Users className="w-5 h-5" />
                <span>Join Team Spanish Beer</span>
              </Link>
            </div>

            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <ReliableImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Sarasota%202024%20-%20Team%20Spanish%20Beer.jpg-vp4Po2gtCKuQRr77tV5rNb6mgjAxRf.jpeg"
                alt="Early morning start in downtown Sarasota with hundreds of cyclists ready to ride"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>What is Bike MS?</h2>

              <div className="flex justify-center my-6">
                <Link
                  href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1227&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Official About Bike MS Page
                </Link>
              </div>

              <p>
                Bike MS is the largest fundraising cycling series in the world. Each year, nearly 75,000 cyclists and
                more than 6,000 teams ride together to change the world for people affected by multiple sclerosis. Bike
                MS participants have raised more than $1.4 billion to date, funding critical research and programs to
                improve the lives of people living with MS.
              </p>

              <h2>Why We Ride</h2>
              <p>
                Bike MS brings together thousands of cyclists of all levels who share a passion for making a difference
                in the lives of people affected by MS. The camaraderie, passion, and memories that come from the weekend
                create an experience unlike any other. Bike MS is more than a ride—it's an extraordinary experience
                grounded in making a difference in the lives of people affected by MS.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg my-8">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                  <Heart className="text-red-500" /> The Impact of Bike MS
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Funds critical MS research and programs</li>
                  <li>Raises awareness about multiple sclerosis</li>
                  <li>Creates a community of support for those affected by MS</li>
                  <li>Drives breakthroughs in treatments and care</li>
                  <li>Brings hope to the 2.8 million people worldwide living with MS</li>
                </ul>
              </div>

              <VirtualRidersSection />

              {/* Add the new Veterans MS Section here */}
              <VeteransMSSection />

              <h2>Unlock More Rides, More Impact – The Bike MS Passport Program</h2>
              <p>
                Every year, hundreds of dedicated riders push beyond their limits, raising $5,000 or more for MS
                research and support. Their reward? The Bike MS Passport Program—a special opportunity that allows top
                fundraisers to ride in any Bike MS event across the country the following year without additional
                fundraising or registration fees.
              </p>
              <p>
                This isn't just about riding more miles—it's about amplifying the mission and experiencing the Bike MS
                community on a national scale. Passport riders bring their passion to new routes, meet inspiring
                cyclists, and strengthen the movement to end MS forever.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg my-8">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                  <MapPin className="text-primary" /> The Bike MS Passport Program
                </h3>
                <p className="mb-4">
                  This year, Passport riders will roll through scenic coastlines, mountain passes, and historic towns,
                  all united by one goal: a world free of MS.
                </p>
                <p>
                  If you're aiming for $5,000 or more in fundraising, you could be part of this incredible program.
                  Where will your Passport take you?
                </p>
                <p className="mt-4 font-medium text-primary">
                  Join us, push past your limits, and ride toward a future without MS.
                </p>
              </div>

              <div className="flex justify-center my-8">
                <Link
                  href="http://email.fundraisers.donordrive.com/c/eJw80MGOpCAQgOGngZsGChrkwKFnbJO97GlfoEZKm0TRAHZ23n6jvZkjCfmrvhqXSKn-xpX8Wso2RqrffNxSqbEelOqv3n-6h_ronWvMp3CNfih3d0o1ILvbXQ723j8-ePBSSmO05eSl1UJqoXXHacW4_Pneye9brrg0lXBtYnrFSpxe7z4oZ_jTByIrOknSIQYFXyBosthp4ch0hIJHDwJuAkBKAKG71ungvoKdRquNsHJiWkxHChljoVzasKUthxxf1I7byhf_rHUvTN0ZDAyGa3xpE9a4JVx-9O2WZwZDTIH-tuO0MjVMRyEcz39M9ZnmWCrltlTMlYH572CqPyUMzIm83p3sbpKBWTDNB87EVE-J75hrHOOOl94ocObGs5d2PfL-ZFrM59Wund8lf3X4y8O_AAAA___w74eR"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 text-lg font-medium transition-all hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Bike className="w-5 h-5" />
                  <span>Join Team Spanish Beer</span>
                </Link>
              </div>

              <h2>Upcoming Bike MS Events</h2>
              <p>
                Through the Bike MS Passport Program, I'll be participating in the following events in 2025,
                representing Team Spanish Beer across the country:
              </p>

              <ul className="list-disc pl-6 space-y-2">
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

            <RelatedBikeMSLinks />

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

