"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { BackToTopButton } from "@/components/back-to-top-button"
import { PodcastSection } from "@/components/podcast-section"
import { FundraisingSection } from "@/components/fundraising-section"
import { SocialMediaLinks } from "@/components/social-media-links"
import { Bike, Calendar, Heart, Camera, Mic, ExternalLink } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate parallax effect
  const headerOpacity = Math.max(0, Math.min(1, 1 - scrollY / 500))
  const parallaxOffset = Math.min(scrollY * 0.5, 200) // Limit the parallax effect

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?key=gtro6')",
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" style={{ opacity: Math.max(0.4, headerOpacity) }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
            style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
          >
            Cycling to End MS
          </h1>
          <p
            className="text-xl md:text-2xl text-center max-w-3xl mb-8"
            style={{ transform: `translateY(${-parallaxOffset * 0.1}px)` }}
          >
            Join the journey to create a world free of multiple sclerosis
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about-bike-ms"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Learn More
            </Link>
            <Link
              href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Donate to Bike MS Supporting the National MS Society
            </Link>
          </div>
        </div>
      </div>

      <main className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Fundraising Progress Section */}
          <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-center mb-6">2025 Fundraising Progress</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Goal: $20,000</span>
                  <span className="text-lg font-medium">$5,460 Raised (27.3%)</span>
                </div>
                <Progress value={109.2} className="h-4" />
              </div>
              <p className="text-center text-lg">
                Your support helps fund critical MS research and programs. Every dollar brings us closer to a world free
                of MS.
              </p>
              <div className="flex justify-center mt-4">
                <Link
                  href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  <Heart className="w-5 h-5" />
                  <span>Donate Now</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* About Bike MS */}
              <Link
                href="/about-bike-ms"
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Bike className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">About Bike MS</h3>
                <p className="text-gray-600">Learn about the largest fundraising cycling series in the world</p>
              </Link>

              {/* Events */}
              <Link
                href="/events"
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Events</h3>
                <p className="text-gray-600">Discover upcoming Bike MS rides and fundraising events</p>
              </Link>

              {/* Podcast */}
              <Link
                href="/podcast"
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">MS Podcast</h3>
                <p className="text-gray-600">Listen to conversations about MS, cycling, and making a difference</p>
              </Link>

              {/* Photos */}
              <Link
                href="/pictures"
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Photo Gallery</h3>
                <p className="text-gray-600">View photos from Bike MS events and team activities</p>
              </Link>
            </div>
          </section>

          {/* Podcast Section */}
          <PodcastSection />

          {/* Fundraising Section */}
          <FundraisingSection />

          {/* About MS Section */}
          <section className="bg-blue-50 rounded-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-center mb-6">About Multiple Sclerosis</h2>
            <div className="prose max-w-none">
              <p>
                Multiple sclerosis (MS) is an unpredictable disease of the central nervous system that disrupts the flow
                of information within the brain, and between the brain and body. The cause of MS is still unknown, and
                there is currently no cure.
              </p>
              <p>
                MS symptoms vary from person to person and can include numbness and tingling, vision problems, balance
                and mobility issues, and cognitive changes. Most people with MS are diagnosed between the ages of 20 and
                50, with at least two to three times more women than men being diagnosed with the disease.
              </p>
              <p>
                The National MS Society funds cutting-edge research, drives change through advocacy, facilitates
                professional education, and provides programs and services to help people with MS and their families
                move their lives forward.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Link
                href="/about-ms"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Learn More About MS</span>
              </Link>
            </div>
          </section>

          {/* Social Media Links */}
          <SocialMediaLinks />
        </div>
      </main>

      <Footer />
      <BackToTopButton />
      <MobileTextButton />
    </div>
  )
}
