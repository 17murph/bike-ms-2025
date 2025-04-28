"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"
import { season1, season2, season3 } from "@/data/episodes-update"
import Image from "next/image"

export default function PodcastPage() {
  const [openSeason, setOpenSeason] = useState<number | null>(null)
  const [activeQuote, setActiveQuote] = useState(0)

  const toggleSeason = (seasonNumber: number) => {
    if (openSeason === seasonNumber) {
      setOpenSeason(null)
    } else {
      setOpenSeason(seasonNumber)
    }
  }

  // Quotes that will rotate - updated with authentic quotes from the podcast
  const impactfulQuotes = [
    {
      text: "MS is like having a roommate that you never invited to live with you, and they're always messing with your stuff.",
      author: "Becca Fuqua - Becca's Unfiltered Journey with MS",
    },
    {
      text: "The hardest part isn't the physical symptoms, it's having to constantly explain to people why you can't do what you used to do.",
      author: "Amber Cunningham - Finding Strength Beyond the Diagnosis",
    },
    {
      text: "Sometimes people just don't need a silver lining. They need empathy. They need someone just to sit with them in that moment and say, 'Hey, I hear you.'",
      author: "Jessica - The Other Side of MS",
    },
    {
      text: "Where was the second half of this story — where we have these amazing medical breakthroughs and innovative research to prevent that from happening?",
      author: "Delaney - The Other Side of MS",
    },
    {
      text: "MS is isolating. But you're not alone. You have to be proactively not alone.",
      author: "Karyn - The Other Side of MS",
    },
    {
      text: "I'm not gonna let this… be the decision maker for anything in my life. I'm not gonna sit on the sidelines and miss out on incredible opportunities because I have MS… it's been the reason I've done most of the things in my life since I was diagnosed.",
      author: "Maddie - The Other Side of MS",
    },
    {
      text: "We need to go from awareness to action to impact… And that means changing the conversation from something daunting or taboo to something we celebrate—recovery, support, and the courage to ask for help.",
      author: "Dr. Sally Spencer-Thomas - The Suicide Episode",
    },
  ]

  // Rotate quotes every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % impactfulQuotes.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [impactfulQuotes.length])

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <main className="relative">
        {/* Hero Banner Section */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/podcast-banner.jpg"
            alt="The Other Side of MS Podcast"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 flex flex-col items-center justify-center text-white p-4">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The Other Side of MS</h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
                  Unfiltered voices. Uncomfortable truths. Deep humanity.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <a
                    href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ?si=2f80883c052d4c2f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <img src="/images/spotify-podcast-badge.png" alt="Listen on Spotify" className="h-10 w-auto" />
                  </a>
                  <a
                    href="https://podcasts.apple.com/us/podcast/the-other-side-of-ms/id1682272920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.7 10.7c-.1-3.1-2.6-5.6-5.7-5.6-3.1 0-5.6 2.5-5.7 5.6-.1 1.3.3 2.6 1.1 3.6.8 1 1.9 1.7 3.2 1.8 0 0 0 0 .1 0 .1 0 .2 0 .3 0 .1 0 .2 0 .3 0 .1 0 .1 0 .1 0 1.3-.2 2.4-.8 3.2-1.8.8-1 1.2-2.3 1.1-3.6zm-5.6 5.4c-.1 0-.2 0-.3 0-.1 0-.2 0-.3 0-1.1-.1-2.1-.7-2.8-1.5-.7-.9-1-2-1-3.1.1-2.7 2.3-4.9 5-4.9 2.7 0 4.9 2.2 5-4.9.1 1.1-.3 2.2-1 3.1-.7.8-1.7 1.4-2.8 1.5h-.8z" />
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                      <path d="M12.3 14.2c0 .1-.1.2-.3.2s-.3-.1-.3-.2v-4.5c0-.1.1-.2.3-.2s.3.1.3.2v4.5z" />
                    </svg>
                    <span>Apple</span>
                  </a>
                  <a
                    href="https://music.amazon.com/podcasts/343490f1-fe67-4b30-9049-500c3baf378d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.42 14.29c-.22-.12-.43-.23-.63-.35-.56-.35-1.26-.79-1.26-1.47 0-.65.39-1.15 1.16-1.15.35 0 .64.11.89.34.25.23.37.55.37.98h1.96c0-1.16-.46-2.04-1.14-2.64-.68-.6-1.62-.91-2.71-.91-1.17 0-2.14.3-2.87.91-.73.6-1.1 1.45-1.1 2.54 0 1.58.95 2.54 2.19 3.32.41.26.83.5 1.24.74.63.36 1.07.89 1.07 1.47 0 .7-.43 1.14-1.28 1.14-.35 0-.68-.12-.93-.35-.25-.23-.38-.55-.38-.98h-1.96c0 1.16.47 2.04 1.15 2.64.68.6 1.63.91 2.72.91 1.17 0 2.15-.3 2.88-.91.73-.6 1.1-1.45 1.1-2.54 0-1.58-.95-2.54-2.19-3.32-.07-.04-.14-.09-.22-.13-.01-.01-.03-.02-.04-.03-.01-.01-.02-.01-.02-.01z" />
                      <path d="M13.77 2.3c-1.22 0-2.36.18-3.42.54-1.06.36-1.97.89-2.71 1.59-.75.7-1.34 1.57-1.77 2.61-.43 1.04-.65 2.25-.65 3.63v4.8c0 1.38.22 2.59.65 3.63.43 1.04 1.02 1.9 1.77 2.61.74.7 1.65 1.24 2.71 1.59 1.06.36 2.2.54 3.42.54 1.22 0 2.36-.18 3.42-.54 1.06-.36 1.97-.89 2.71-1.59.75-.7 1.34-1.57 1.77-2.61.43-1.04.65-2.25.65-3.63v-4.8c0-1.38-.22-2.59-.65-3.63-.43-1.04-1.02-1.9-1.77-2.61-.74-.7-1.65-1.24-2.71-1.59-1.06-.36-2.2-.54-3.42-.54zm0 1.93c.9 0 1.73.13 2.49.4.76.27 1.4.65 1.91 1.15.51.5.91 1.11 1.19 1.85.28.73.42 1.56.42 2.47v5.4c0 .91-.14 1.74-.42 2.47-.28.73-.67 1.35-1.19 1.85-.51.5-1.15.88-1.91 1.15-.76.27-1.59.4-2.49.4-.9 0-1.73-.13-2.49-.4-.76-.27-1.4-.65-1.91-1.15-.51-.5-.91-1.11-1.19-1.85-.28-.73-.42 1.56-.42-2.47v-5.4c0-.91.14-1.74.42-2.47.28-.73.67 1.35 1.19-1.85.51-.5 1.15-.88 1.91-1.15.76-.27 1.59-.4 2.49-.4z" />
                    </svg>
                    <span>Amazon</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rotating Quote Section */}
        <section className="bg-primary text-white py-8 relative overflow-hidden">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="relative h-[120px] md:h-[100px]">
              {impactfulQuotes.map((quote, index) => (
                <blockquote
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center text-center ${
                    index === activeQuote ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-xl md:text-2xl font-light italic mb-2">"{quote.text}"</p>
                  <footer className="text-sm opacity-75">— {quote.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* About the Podcast / Why These Stories Matter */}
        <section className="pt-12 pb-4 bg-white">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-24">
                  <Image
                    src="/images/podcast-logo.png"
                    alt="The Other Side of MS Podcast Logo"
                    width={280}
                    height={280}
                    className="rounded-lg shadow-lg mx-auto"
                  />

                  <div className="mt-6 text-center">
                    <a
                      href="https://mssociety.donordrive.com/participant/casey-murphy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
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
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                      Donate to Bike MS
                    </a>
                    <p className="text-sm text-gray-600 mt-3 px-4">
                      Every story is a voice. Every voice deserves to be heard. Donations help us keep sharing them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Why these stories matter</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      The Other Side of MS isn't here to inspire you. It's here to show you what it really means to live
                      with MS—the chaos behind the smiles, the invisible symptoms, the quiet grief, the complicated
                      resilience.
                    </p>
                    <p>
                      This podcast creates a space where people with MS can tell their stories without performance,
                      without toxic positivity, and without being reduced to a diagnosis.
                    </p>
                    <p>
                      These aren't highlight reels or polished success stories. They're raw conversations—sometimes
                      uncomfortable, always honest.
                    </p>
                    <p>
                      Here, we don't ask guests to be brave. We ask them to be real. Because MS isn't just a
                      disease—it's a life that keeps unfolding in ways most people never see. We explore the parts most
                      people avoid: the rage, the fear, the mourning of who you used to be, and the strength that
                      doesn't come with a cape—but with survival.
                    </p>
                    <p>
                      This podcast isn't about the host. It's about the people who live with MS—who deserve to be seen,
                      heard, and understood not as heroes or fighters, but as complex humans trying to make it through
                      another day.
                    </p>
                    <p>
                      Inspiration might happen too. This podcast creates the space—so if their honesty happens to
                      inspire you, let it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Voices Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Featured Voices</h2>

            {/* Pam Grimes - Featured Guest */}
            <div className="mb-16">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative">
                    <div className="h-[300px] md:h-full relative">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pam.jpg-Hr20T3xi1qB6ZEtbiyKCfogoG6NW6S.jpeg"
                        alt="Pam Grimes - The Other Side of MS Podcast Guest"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-gradient-to-r"></div>
                      <div className="absolute bottom-0 left-0 p-4 md:hidden">
                        <h3 className="text-2xl font-bold text-white">Pam Grimes</h3>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-primary hidden md:block">Pam Grimes</h3>
                      <div className="mb-4">
                        <blockquote className="text-xl italic text-gray-700 border-l-4 border-primary pl-4 my-4">
                          "MS doesn't define me, but it has shaped how I navigate the world. I've learned to adapt, to
                          find new ways to live fully despite the challenges."
                        </blockquote>
                        <p className="text-gray-600 mt-4">
                          In this powerful episode, Pam shares her journey of resilience and adaptation living with MS.
                          From the initial diagnosis to finding new ways to embrace life, her story highlights the
                          importance of support systems and maintaining a positive outlook while acknowledging the very
                          real challenges of MS.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-500">Season 3, Episode 4</span>
                      <a
                        href="https://open.spotify.com/episode/6yqxdnVWODQ26hUdbwn348?si=2e4b4d71940842c3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition-colors"
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
                          className="mr-2"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        Listen Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Becca - Featured Guest */}
            <div className="mb-16">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-2/5 relative">
                    <div className="h-[300px] md:h-full relative">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Becca.jpg-1SmsrxAk0vFx9v7d2zxINIJRNX4PKD.jpeg"
                        alt="Becca Fuqua - The Other Side of MS Podcast Guest"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-gradient-to-l"></div>
                      <div className="absolute bottom-0 left-0 p-4 md:hidden">
                        <h3 className="text-2xl font-bold text-white">Becca Fuqua</h3>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-primary hidden md:block">Becca Fuqua</h3>
                      <div className="mb-4">
                        <blockquote className="text-xl italic text-gray-700 border-l-4 border-primary pl-4 my-4">
                          "What happens when your body betrays you—but you still show up like nothing's wrong? This is
                          my unfiltered journey with MS."
                        </blockquote>
                        <p className="text-gray-600 mt-4">
                          In this powerful episode, Becca shares her raw, unfiltered experience living with MS while
                          navigating career, relationships, and the emotional toll of an invisible illness. Her story
                          reminds us that strength isn't always visible, and sometimes the bravest act is simply showing
                          up.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-500">Season 3, Episode 3</span>
                      <a
                        href="https://open.spotify.com/episode/4UKicNgDubGAfj9EIKhUJL?si=3d6f33be8de244a5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition-colors"
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
                          className="mr-2"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        Listen Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-8 bg-white border-t border-gray-100">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center bg-blue-50 p-6 rounded-lg">
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
                  className="w-5 h-5 text-gray-600"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>904-504-1500</span>
              </div>
              <a
                href="mailto:CMURPHY@SJMALAW.COM"
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
                  className="w-5 h-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>CMURPHY@SJMALAW.COM</span>
              </a>
            </div>
          </div>
        </section>

        {/* Episode Archives */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">Episode Archives</h2>

            {/* Season 3 */}
            <div className="border rounded-lg overflow-hidden mb-8 bg-white shadow-sm">
              <button
                onClick={() => toggleSeason(3)}
                className="w-full p-5 text-left bg-primary text-white font-semibold flex justify-between items-center"
              >
                <span className="text-xl">Season 3</span>
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
                  className={`h-5 w-5 transition-transform duration-300 ${openSeason === 3 ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openSeason === 3 ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5">
                  <div className="space-y-6">
                    {/* Add Pam to Season 3 episodes */}
                    <div className="border-b border-gray-100 pb-5">
                      <div className="flex flex-col">
                        <h4 className="font-bold text-gray-800 text-lg">S3_E4: Pam Grimes - Navigating Life with MS</h4>
                        <p className="text-gray-600 italic text-sm my-2">Guest: Pam Grimes</p>
                        <p className="text-gray-700 my-2 text-sm">
                          Pam shares her journey of resilience and adaptation living with MS, highlighting the
                          importance of support systems and maintaining a positive outlook while acknowledging the
                          challenges.
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500">Season 3</span>
                          <a
                            className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center gap-1"
                            href="https://open.spotify.com/episode/6yqxdnVWODQ26hUdbwn348?si=2e4b4d71940842c3"
                            target="_blank"
                            rel="noopener noreferrer"
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
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            Listen Now
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Add Becca to Season 3 episodes */}
                    <div className="border-b border-gray-100 pb-5">
                      <div className="flex flex-col">
                        <h4 className="font-bold text-gray-800 text-lg">
                          S3_E3: Becca Fuqua - Becca's Unfiltered Journey with MS
                        </h4>
                        <p className="text-gray-600 italic text-sm my-2">Guest: Becca Fuqua</p>
                        <p className="text-gray-700 my-2 text-sm">
                          Becca shares her raw, unfiltered experience living with MS while navigating career,
                          relationships, and the emotional toll of an invisible illness.
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500">Season 3</span>
                          <a
                            className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center gap-1"
                            href="https://open.spotify.com/episode/4UKicNgDubGAfj9EIKhUJL?si=3d6f33be8de244a5"
                            target="_blank"
                            rel="noopener noreferrer"
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
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            Listen Now
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Existing Season 3 episodes */}
                    {season3.episodes.map((episode, index) => (
                      <div key={index} className="border-b border-gray-100 pb-5 last:border-0">
                        <div className="flex flex-col">
                          <h4 className="font-bold text-gray-800 text-lg">{episode.title}</h4>
                          <p className="text-gray-600 italic text-sm my-2">
                            Guest: {episode.guest === "Amber" ? "Amber Cunningham" : episode.guest}
                          </p>
                          <p className="text-gray-700 my-2 text-sm">
                            {episode.guest === "Amber"
                              ? "Amber discusses the daily challenges of MS, the misconceptions others have, and how she's learned to advocate for herself."
                              : "A powerful conversation about living with MS and the complex reality behind the diagnosis."}
                          </p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-gray-500">Season 3</span>
                            <a
                              className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center gap-1"
                              href={episode.link}
                              target="_blank"
                              rel="noopener noreferrer"
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
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                              Listen Now
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Season 2 */}
            <div className="border rounded-lg overflow-hidden mb-8 bg-white shadow-sm">
              <button
                onClick={() => toggleSeason(2)}
                className="w-full p-5 text-left bg-primary text-white font-semibold flex justify-between items-center"
              >
                <span className="text-xl">Season 2</span>
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
                  className={`h-5 w-5 transition-transform duration-300 ${openSeason === 2 ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openSeason === 2 ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5">
                  <div className="space-y-6">
                    {season2.episodes.map((episode, index) => (
                      <div key={index} className="border-b border-gray-100 pb-5 last:border-0">
                        <div className="flex flex-col">
                          <h4 className="font-bold text-gray-800 text-lg">{episode.title}</h4>
                          <p className="text-gray-600 text-sm my-2">Guest: {episode.guest}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-gray-500">Season 2</span>
                            <a
                              className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center gap-1"
                              href={
                                episode.link.replace("podbean.com", "open.spotify.com").includes("open.spotify.com")
                                  ? episode.link
                                  : `https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ?si=2f80883c052d4c2f`
                              }
                              target="_blank"
                              rel="noopener noreferrer"
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
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                              Listen Now
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Season 1 */}
            <div className="border rounded-lg overflow-hidden mb-8 bg-white shadow-sm">
              <button
                onClick={() => toggleSeason(1)}
                className="w-full p-5 text-left bg-primary text-white font-semibold flex justify-between items-center"
              >
                <span className="text-xl">Season 1</span>
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
                  className={`h-5 w-5 transition-transform duration-300 ${openSeason === 1 ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openSeason === 1 ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5">
                  <div className="space-y-6">
                    {season1.episodes.map((episode, index) => (
                      <div key={index} className="border-b border-gray-100 pb-5 last:border-0">
                        <div className="flex flex-col">
                          <h4 className="font-bold text-gray-800 text-lg">{episode.title}</h4>
                          <p className="text-gray-600 text-sm my-2">Guest: {episode.guest}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-gray-500">Season 1</span>
                            <a
                              className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center gap-1"
                              href={
                                episode.link.replace("podbean.com", "open.spotify.com").includes("open.spotify.com")
                                  ? episode.link
                                  : `https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ?si=2f80883c052d4c2f`
                              }
                              target="_blank"
                              rel="noopener noreferrer"
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
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                              Listen Now
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy of Leaders Video Section */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-primary">As Featured on Legacy of Leaders</h2>
            <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1071910885?h=1d25836381"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Contact Us</h2>
            <div className="max-w-md mx-auto text-center">
              <p className="mb-6 text-gray-700">
                Have a story to share or just want to share your comments? Reach out to me directly:
              </p>
              <div className="flex justify-center">
                <a
                  href="mailto:CMURPHY@SJMALAW.COM"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
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
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>CMURPHY@SJMALAW.COM</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="py-8 border-t border-gray-200 bg-gray-50">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-xl font-bold text-center mb-6">Connect With Us</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/OtherSideOfMS"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-110"
                aria-label="Facebook"
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
                  className="w-6 h-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/caseymurphy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all transform hover:scale-110"
                aria-label="LinkedIn"
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
                  className="w-6 h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://x.com/theothersidems?s=11&t=tlzOgmkXwzTvVden5dn58A"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-110"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="mailto:CMURPHY@SJMALAW.COM"
                className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all transform hover:scale-110"
                aria-label="Email"
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
                  className="w-6 h-6"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
              <a
                href="https://theothersideofms.podbean.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all transform hover:scale-110"
                aria-label="Podcast"
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
                  className="w-6 h-6"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
