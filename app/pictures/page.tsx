"use client"

import { Navigation, Footer, BackToTopButton } from "@/components"
import Link from "next/link"
import Image from "next/image"

const PicturesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Media & Coverage</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our media appearances, podcast features, and photo galleries from our Bike MS journey
          </p>
        </div>

        {/* NPR First Coast Connect Feature */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
            {/* Header with Logos */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Image src="/images/npr-logo.png" alt="NPR Logo" width={80} height={32} className="object-contain" />
              </div>
              <div className="text-center flex-1 mx-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Featured on NPR's "First Coast Connect"</h2>
              </div>
              <div className="flex items-center">
                <Image src="/images/wjct-logo.png" alt="WJCT Logo" width={80} height={48} className="object-contain" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                In this NPR segment, host Al Emerick is joined by Teresa Eichner and Casey Murphy for a powerful
                conversation about multiple sclerosis, the mission behind the Jax Bourbon Social fundraiser, and the raw
                storytelling that drives The Other Side of MS podcast.
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
        </section>

        {/* Podcast Media */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6">
              <h2 className="text-3xl font-bold text-center">The Other Side of MS Podcast</h2>
              <p className="text-center mt-2 text-primary-foreground/90">
                Real stories, raw truth, and authentic conversations about living with MS
              </p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Listen on Your Favorite Platform</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our podcast features unfiltered conversations with people living with MS, caregivers, and healthcare
                    professionals. Each episode dives deep into the realities that often go unspoken.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Image src="/images/spotify-logo.png" alt="Spotify" width={20} height={20} />
                      Listen on Spotify
                    </Link>

                    <Link
                      href="/podcast"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      View All Episodes
                    </Link>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/images/podcast-logo-new.png"
                    alt="The Other Side of MS Podcast Logo"
                    width={300}
                    height={300}
                    className="object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photos Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
              <h2 className="text-3xl font-bold text-center">Photos</h2>
              <p className="text-center mt-2 text-orange-100">
                Capturing moments from our Bike MS journey and podcast adventures
              </p>
            </div>

            <div className="p-8">
              <div className="text-center">
                <div className="mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto text-gray-300 mb-4"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Photo Gallery Coming Soon</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    We're working on adding a comprehensive photo gallery featuring images from our Bike MS rides,
                    podcast recordings, fundraising events, and community gatherings. Check back soon to see our journey
                    in pictures!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto text-primary mb-2"
                    >
                      <circle cx="18.5" cy="17.5" r="3.5" />
                      <circle cx="5.5" cy="17.5" r="3.5" />
                      <circle cx="15" cy="5" r="1" />
                      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                    </svg>
                    <h4 className="font-semibold text-gray-800">Bike MS Rides</h4>
                    <p className="text-sm text-gray-600 mt-1">Action shots from our cycling events</p>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto text-primary mb-2"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                      <line x1="8" x2="16" y1="22" y2="22" />
                    </svg>
                    <h4 className="font-semibold text-gray-800">Podcast Sessions</h4>
                    <p className="text-sm text-gray-600 mt-1">Behind-the-scenes podcast moments</p>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto text-primary mb-2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <h4 className="font-semibold text-gray-800">Community Events</h4>
                    <p className="text-sm text-gray-600 mt-1">Fundraising and awareness events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-50 to-white rounded-xl p-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Join Our Media Journey</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Follow our story as we continue to raise awareness about MS through cycling, podcasting, and community
            engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/podcast"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
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
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
                <line x1="8" x2="16" y1="22" y2="22" />
              </svg>
              Listen to Podcast
            </Link>

            <Link
              href="/about-bike-ms"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
            >
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
                <circle cx="18.5" cy="17.5" r="3.5" />
                <circle cx="5.5" cy="17.5" r="3.5" />
                <circle cx="15" cy="5" r="1" />
                <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
              </svg>
              Learn About Bike MS
            </Link>
          </div>
        </section>
      </div>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default PicturesPage
