"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"
import Image from "next/image"
import Link from "next/link"

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Media & Press</h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Discover how The Other Side of MS podcast and our Bike MS journey are making waves in the media, spreading
            awareness about multiple sclerosis and the power of authentic storytelling.
          </p>

          {/* Featured Media Appearances */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">Featured Media Appearances</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* NPR First Coast Connect */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Image
                      src="/images/npr-logo.png"
                      alt="NPR Logo"
                      width={80}
                      height={32}
                      className="object-contain"
                    />
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

                <h3 className="text-2xl font-bold text-primary mb-4">NPR's "First Coast Connect"</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Host Al Emerick is joined by Teresa Eichner and Casey Murphy for a powerful conversation about
                  multiple sclerosis, the mission behind the Jax Bourbon Social fundraiser, and the raw storytelling
                  that drives The Other Side of MS podcast.
                </p>

                <div className="flex gap-4">
                  <Link
                    href="https://www.youtube.com/watch?v=5YiuhgqDCI8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
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
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Watch Now
                  </Link>
                </div>
              </div>

              {/* Jack Sears Show */}
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-primary mb-4">The Jack Sears Show</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Casey Murphy joins Jack Sears for an in-depth discussion about living with MS, the importance of
                  authentic storytelling, and how cycling has become a powerful tool for advocacy and fundraising.
                </p>

                <div className="flex gap-4">
                  <Link
                    href="https://player.vimeo.com/video/1092530487?h=fc93edee8a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
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
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Listen Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Will Anthony Interview */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Will Anthony Interview</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-center">
                A candid conversation with Will Anthony about the personal journey behind The Other Side of MS podcast,
                the challenges of living with multiple sclerosis, and the mission to amplify unheard voices in the MS
                community.
              </p>

              <div className="flex justify-center">
                <Link
                  href="https://www.youtube.com/watch?v=W9ByLBLhg1Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
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
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Watch Now
                </Link>
              </div>
            </div>
          </section>

          {/* The Other Side of MS Podcast Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">🎙️ The Other Side of MS Podcast</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Real stories. Raw truth. Unfiltered conversations about living with multiple sclerosis.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">About the Podcast</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The Other Side of MS goes beyond the typical MS narrative to explore the stories that often go
                    untold. We dive deep into the emotional, psychological, and social aspects of living with multiple
                    sclerosis.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Each episode features authentic conversations with people affected by MS, healthcare professionals,
                    researchers, and advocates who are making a difference in the MS community.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/podcast"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-center"
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
                      Explore All Episodes
                    </Link>

                    <Link
                      href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                      Listen on Spotify
                    </Link>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative w-80 h-80">
                    <Image
                      src="/images/podcast-logo-new.png"
                      alt="The Other Side of MS Podcast Logo"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Photos Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">📸 Photos & Moments</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Capturing the journey, the people, and the moments that make our mission meaningful.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto text-gray-400 mb-4"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">Photo Gallery Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  We're working on curating a collection of photos from our Bike MS rides, podcast recordings, and
                  community events. Check back soon to see the faces and moments behind our mission.
                </p>
              </div>

              <Link
                href="/pictures"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
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
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                View Photo Gallery
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20">
              <h2 className="text-3xl font-bold text-primary mb-4">Join Our Mission</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Every story shared, every mile ridden, and every dollar raised brings us closer to a world free of MS.
                Be part of the movement that's changing how we talk about multiple sclerosis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
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
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
                  </svg>
                  Support Our Cause
                </Link>

                <Link
                  href="/podcast"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold text-lg"
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
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" x2="12" y1="19" y2="22" />
                    <line x1="8" x2="16" y1="22" y2="22" />
                  </svg>
                  Listen to Our Podcast
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
