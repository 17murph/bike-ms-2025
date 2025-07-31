"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"
import { SocialMediaLinks } from "@/components/social-media-links"
import Image from "next/image"
import Link from "next/link"

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Media Coverage</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how The Other Side of MS podcast and Bike MS fundraising efforts are making headlines and
              creating awareness about multiple sclerosis.
            </p>
          </div>
        </div>
      </section>

      {/* NPR First Coast Connect Feature */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
              {/* Header with Logos */}
              <div className="flex items-center justify-between mb-8">
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
                <div className="mt-6">
                  <Link
                    href="https://www.youtube.com/watch?v=5YiuhgqDCI8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Watch Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Media Appearances */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Media Appearances</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spreading awareness about MS through various media platforms and interviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* NPR Feature */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image src="/images/npr-logo.png" alt="NPR Logo" width={60} height={24} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">NPR First Coast Connect</h3>
                <p className="text-gray-600 mb-4">
                  Featured discussion about MS awareness, fundraising efforts, and the impact of The Other Side of MS
                  podcast.
                </p>
                <div className="text-sm text-gray-500">
                  <p>Host: Al Emerick</p>
                  <p>Guests: Teresa Eichner, Casey Murphy</p>
                </div>
              </div>
            </div>

            {/* Jack Sears Show */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" x2="12" y1="19" y2="22" />
                    <line x1="8" x2="16" y1="22" y2="22" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">The Jack Sears Show</h3>
                <p className="text-gray-600 mb-4">
                  In-depth conversation about living with MS, the importance of authentic storytelling, and community
                  support.
                </p>
                <div className="text-sm text-gray-500">
                  <p>Radio Interview</p>
                  <p>Focus: MS Awareness & Support</p>
                </div>
                <Link
                  href="https://player.vimeo.com/video/1092530487?h=fc93edee8a"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold mt-4"
                >
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
                  >
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                  Listen Now
                </Link>
              </div>
            </div>

            {/* Will Anthony Interview */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" x2="12" y1="19" y2="22" />
                    <line x1="8" x2="16" y1="22" y2="22" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Will Anthony Interview</h3>
                <p className="text-gray-600 mb-4">
                  Discussing the mission behind Bike MS fundraising and the personal stories that drive advocacy
                  efforts.
                </p>
                <div className="text-sm text-gray-500">
                  <p>Podcast Interview</p>
                  <p>Topic: Bike MS & Advocacy</p>
                </div>
                <Link
                  href="https://www.youtube.com/watch?v=W9ByLBLhg1Q"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold mt-4"
                >
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
                    className="lucide lucide-play"
                  >
                    <polygon points="5 3 19 12 5 21" />
                  </svg>
                  Watch Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Other Side of MS Podcast Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">The Other Side of MS Podcast</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Raw, authentic conversations about living with multiple sclerosis. Real stories from real people
              navigating the challenges and triumphs of MS.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/podcast-logo-new.png"
                    alt="The Other Side of MS Podcast Logo"
                    width={200}
                    height={200}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-primary mb-4">Listen on Your Favorite Platform</h3>
                  <p className="text-gray-700 mb-6">
                    Available on Spotify, Apple Podcasts, and all major podcast platforms. New episodes released
                    regularly featuring guests sharing their MS journey.
                  </p>
                  <Link
                    href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    Listen on Spotify
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Photos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Photo gallery coming soon! Check back for images from Bike MS events, podcast recordings, and community
              gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Bike MS Events</h3>
              <p className="text-gray-600">Photos from various Bike MS rides and fundraising events</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                  <line x1="8" x2="16" y1="22" y2="22" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Podcast Sessions</h3>
              <p className="text-gray-600">Behind-the-scenes photos from podcast recordings and interviews</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Community Events</h3>
              <p className="text-gray-600">Images from MS awareness events and community gatherings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Get Involved</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join us in spreading awareness about multiple sclerosis through cycling, storytelling, and community
              support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/podcast"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
              >
                Listen to Podcast
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
              <Link
                href="/about-bike-ms"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors text-lg font-semibold"
              >
                Learn About Bike MS
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
        </div>
      </section>

      <SocialMediaLinks />
      <Footer />
      <BackToTopButton />
    </div>
  )
}
