"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"
import { season1, season2, season3 } from "@/data/episodes-update"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [openSeason, setOpenSeason] = useState<number | null>(null)
  const [activeQuote, setActiveQuote] = useState(0)

  const toggleSeason = (seasonNumber: number) => {
    if (openSeason === seasonNumber) {
      setOpenSeason(null)
    } else {
      setOpenSeason(seasonNumber)
    }
  }

  // Rotating quotes from listeners and guests
  const impactfulQuotes = [
    {
      text: "It was almost like a death of my former self.",
      author: "Selena - Season 4, Episode 1",
    },
    {
      text: "If it don't align, I decline.",
      author: "Tiffany - Season 4, Episode 2",
    },
    {
      text: "People will abandon you. They will come up with whatever they need to justify it.",
      author: "Tyler - Season 4, Episode 3",
    },
    {
      text: "Some days are tougher than others.",
      author: "Justin Yuhaze - Season 4, Episode 4",
    },
    {
      text: "We will Win.",
      author: "Mark Morabito - Season 4, Episode 5",
    },
    {
      text: "This is not a story about inspiration. It's about learning how to live inside something you didn't choose, together.",
      author: "Rachael Fenich - Season 4, Episode 6",
    },
  ]

  // Rotate quotes every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % impactfulQuotes.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [impactfulQuotes.length])

  // Start Listening episodes data (ordered by release date, left to right)
  const startListeningEpisodes = [
    {
      title: "This Is Not About Silver Linings",
      guest: "Tyler Campbell",
      description: "Nine years of denial and isolation.",
      link: "https://open.spotify.com/episode/2IF9Yd950JarGdF2sUPnOf?si=8XcWBdi8QCOF-Nt8SH0mAQ",
    },
    {
      title: "We Will Win",
      guest: "Mark Morabito",
      description: "A story of survival, love, and choosing to fight.",
      link: "https://open.spotify.com/episode/07CZRgLvTzKkt0WsgtgSXx?si=87c089007a7c4298",
    },
    {
      title: "Death of My Former Self",
      guest: "Selena Buongiorno",
      description: "Navigating MS from both sides of care.",
      link: "https://open.spotify.com/episode/1VQF7VkP17AXqWN4ivB9Wd?si=ee8f5d3eb5b8487c",
    },
    {
      title: "Living Inside Something You Didn't Choose",
      guest: "Rachael Fenich",
      description: "What MS looks like inside a marriage.",
      link: "https://open.spotify.com/episode/0UQDHcxcj9nuAd0ECs8V2Z?si=5f85a67aaee14580",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Add padding to account for fixed banner and navigation */}
      <div className="pt-[56px] md:pt-[16px]"></div>

      <main className="relative">
        {/* Hero Banner Section */}
        <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-gray-900">
            <img
              src="/images/podcast-seats.png"
              alt="The Other Side of MS Podcast - Two chairs and microphone"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 flex flex-col items-center justify-center text-white p-4">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">The Other Side of <span className="text-orange-500">MS</span></h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-gray-200 mb-10">
                  Unfiltered voices. Uncomfortable truths. Deep humanity.
                </p>

                {/* Hear the Stories Button */}
                <a
                  href="https://directory.libsyn.com/shows/view/id/e02b301a-9cb5-48e2-a16d-02b3600051fa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#5A5A5A] text-white px-8 py-3 rounded-lg hover:bg-[#4A4A4A] transition-colors font-semibold text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  Hear the Stories
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Rotating Quote Section - Blue */}
        <section className="bg-primary text-white py-2 relative overflow-hidden">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="relative h-[36px]">
              {impactfulQuotes.map((quote, index) => (
                <blockquote
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 flex items-center justify-center text-center ${
                    index === activeQuote ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-sm md:text-base font-light italic">
                    "{quote.text}" <span className="opacity-75">— {quote.author}</span>
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Progress Block */}
        <section className="py-4 bg-gray-100">
          <div className="container mx-auto max-w-2xl px-4">
            <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">We&apos;re not just a podcast. We ride Bike MS to fund the fight against MS.</h3>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold text-primary">$2,270</span>
                  <span className="text-gray-500 text-sm">of $10,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                  <div 
                    className="bg-primary h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: '22.7%' }}
                  ></div>
                </div>
              </div>
              <a
                href="https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-full hover:bg-secondary/90 transition-all whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
                Donate
              </a>
            </div>
          </div>
        </section>

        {/* Why These Stories Matter + Latest Episode Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left - Why These Stories Matter */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why These Stories Matter</h2>
                
                {/* Text content with floated logo */}
                <div className="text-gray-700 text-base leading-relaxed">
                  <img
                    src="/images/2026-other-side-of-ms-logo.png"
                    alt="The Other Side of MS Podcast Logo"
                    className="float-left w-32 h-32 md:w-44 md:h-44 object-contain mr-3 -ml-1 -mt-1"
                    onError={(e) => {
                      e.currentTarget.src = "/images/podcast-logo.png"
                    }}
                  />
                  <p className="mb-3">
                    The Other Side of MS isn&apos;t here to inspire you. It&apos;s here to show you what it really means to live with multiple sclerosis (MS): The chaos behind the smiles, the invisible symptoms, the quiet grief, and the complex resilience.
                  </p>
                  <p className="mb-3">
                    This podcast creates a space where people with MS can tell their stories without performing, without toxic positivity, and without being reduced to a diagnosis.
                  </p>
                  <p className="mb-3">
                    These aren&apos;t highlight reels or polished success stories. They&apos;re raw conversations, sometimes uncomfortable, always honest.
                  </p>
                  <p className="mb-3">
                    Here, we don&apos;t ask guests to be brave, we ask them to be real. MS isn&apos;t just a disease, it&apos;s a life that keeps unfolding in ways most people never see. We explore the parts most people avoid: the rage, the fear, the mourning of who you used to be, and the strength that doesn&apos;t come with a cape but with survival.
                  </p>
                  <p className="mb-3">
                    This podcast isn&apos;t about the host. It&apos;s about the people who live with MS, who deserve to be seen, heard, and understood, not as heroes or fighters but as complex humans trying to make it through another day.
                  </p>
                  <p>
                    Inspiration may happen, too. This podcast creates that space. If their honesty inspires you, let it.
                  </p>
                </div>
              </div>

              {/* Right - Latest Episode */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  {/* Episode Details */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                        Latest Episode
                      </span>
                      <span className="text-sm text-gray-500 font-medium">Season 4, Episode 6 • May 14, 2026</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Living Inside Something You Didn&apos;t Choose</h3>
                    <p className="text-lg text-primary font-medium mb-3">with Rachael Fenich</p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Rachael Fenich has seen multiple sclerosis from more than one angle. Her husband lives with it. So do other members of her family. In this conversation, Rachael talks about what MS actually looks like inside a marriage. The parts you don&apos;t see. The things that don&apos;t get said. This is not a story about inspiration. It&apos;s about learning how to live inside something you didn&apos;t choose, together.
                    </p>
                    {/* Libsyn Embed Player */}
                    <div className="w-full rounded-lg overflow-hidden">
                      <iframe 
                        title="Embed Player" 
                        style={{ border: 'none' }} 
                        src="https://play.libsyn.com/embed/episode/id/41103540/height/192/theme/modern/size/large/thumbnail/yes/custom-color/0c215f/time-start/00:00:00/playlist-height/200/direction/backward/download/yes/font-color/FFFFFF" 
                        height="192" 
                        width="100%" 
                        scrolling="no" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Start Listening Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Start Listening</h2>
            <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
              Not sure where to begin? These episodes are a great place to start.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {startListeningEpisodes.map((episode, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
                  <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight">{episode.title}</h3>
                  <p className="text-primary font-medium text-sm mb-2">with {episode.guest}</p>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{episode.description}</p>
                  <a
                    href={episode.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1DB954] text-white text-sm font-medium rounded-full hover:bg-[#1ed760] transition-colors w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.6 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    Listen on Spotify
                  </a>
                </div>
              ))}
            </div>

            {/* Platform Buttons */}
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm mb-4">Listen on your favorite platform</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ?si=97200f7d613a4054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1DB954] text-white px-5 py-2.5 rounded-full hover:bg-[#1ed760] transition-colors font-medium shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.6 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Spotify
                </a>
                <a
                  href="https://podcasts.apple.com/us/podcast/the-other-side-of-ms/id1682272920"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors font-medium shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 2a6 6 0 0 0-6 6c0 2.21 1.194 4.132 2.969 5.168a.5.5 0 0 0 .531-.848A4.978 4.978 0 0 1 7 12a5 5 0 1 1 7.5 4.32.5.5 0 0 0 .531.848A5.978 5.978 0 0 0 18 12a6 6 0 0 0-6-6zm0 3a3 3 0 0 0-3 3c0 1.098.596 2.052 1.477 2.573a.5.5 0 0 0 .523-.852A1.988 1.988 0 0 1 10 12a2 2 0 1 1 3 1.721.5.5 0 0 0 .523.852A2.988 2.988 0 0 0 15 12a3 3 0 0 0-3-3zm0 3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5z"/>
                  </svg>
                  Apple Podcasts
                </a>
                <a
                  href="https://music.amazon.com/podcasts/343490f1-fe67-4b30-9049-500c3baf378d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors font-medium shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Amazon Music
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Episode Library</h2>
            <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
              Browse all episodes by season.
            </p>

            {/* Season Archives Accordion */}
            <div className="max-w-4xl mx-auto">
              
              {/* Season 4 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 bg-white">
                <button
                  onClick={() => toggleSeason(4)}
                  className="w-full p-5 text-left bg-primary text-white font-semibold flex justify-between items-center hover:bg-primary/90 transition-colors"
                >
                  <span className="text-lg">Season 4</span>
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
                    className={`transition-transform duration-300 ${openSeason === 4 ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openSeason === 4 ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-5 space-y-4">
                    {[
                      { title: "Living Inside Something You Didn't Choose", guest: "Rachael Fenich", episode: "S4 E6", link: "https://open.spotify.com/episode/0UQDHcxcj9nuAd0ECs8V2Z" },
                      { title: "We Will Win - Mark's Story", guest: "Mark Morabito", episode: "S4 E5", link: "https://open.spotify.com/episode/07CZRgLvTzKkt0WsgtgSXx" },
                      { title: "A Different Kind of Victory", guest: "Justin Yuhaze", episode: "S4 E4", link: "https://open.spotify.com/episode/1QIJLP3Yr7CEg1W2ECxSmR" },
                      { title: "This Is Not a Story About Silver Linings", guest: "Tyler", episode: "S4 E3", link: "https://open.spotify.com/episode/2IF9Yd950JarGdF2sUPnOf" },
                      { title: "If It Don't Align, I Decline", guest: "Tiffany A. Vinson", episode: "S4 E2", link: "https://open.spotify.com/episode/2J2pYJ2B8VXlsJplbBv3jb" },
                      { title: "The Death of My Former Self", guest: "Selena Buongiorno", episode: "S4 E1", link: "https://open.spotify.com/episode/1VQF7VkP17AXqWN4ivB9Wd" },
                    ].map((ep, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <span className="text-xs font-bold text-primary">{ep.episode}</span>
                          <h4 className="font-semibold text-gray-900">{ep.title}</h4>
                          <p className="text-sm text-gray-500">{ep.guest}</p>
                        </div>
                        <a href={ep.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Season 3 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 bg-white">
                <button
                  onClick={() => toggleSeason(3)}
                  className="w-full p-5 text-left bg-primary text-white font-semibold flex justify-between items-center hover:bg-primary/90 transition-colors"
                >
                  <span className="text-lg">Season 3</span>
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
                    className={`transition-transform duration-300 ${openSeason === 3 ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openSeason === 3 ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-5 space-y-4">
                    {season3.episodes.map((episode, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">{episode.title}</h4>
                          <p className="text-sm text-gray-500">{episode.guest}</p>
                        </div>
                        <a href={episode.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Season 2 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 bg-white">
                <button
                  onClick={() => toggleSeason(2)}
                  className="w-full p-5 text-left bg-primary text-white font-semibold flex justify-between items-center hover:bg-primary/90 transition-colors"
                >
                  <span className="text-lg">Season 2</span>
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
                    className={`transition-transform duration-300 ${openSeason === 2 ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openSeason === 2 ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-5 space-y-4">
                    {season2.episodes.map((episode, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">{episode.title}</h4>
                          <p className="text-sm text-gray-500">{episode.guest}</p>
                        </div>
                        <a href={episode.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Season 1 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleSeason(1)}
                  className="w-full p-5 text-left bg-primary text-white font-semibold flex justify-between items-center hover:bg-primary/90 transition-colors"
                >
                  <span className="text-lg">Season 1</span>
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
                    className={`transition-transform duration-300 ${openSeason === 1 ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openSeason === 1 ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-5 space-y-4">
                    {season1.episodes.map((episode, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">{episode.title}</h4>
                          <p className="text-sm text-gray-500">{episode.guest}</p>
                        </div>
                        <a href={episode.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NPR Section - Reduced Prominence */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-4 flex-shrink-0">
                <Image src="/images/npr-logo.png" alt="NPR Logo" width={60} height={24} className="object-contain opacity-80" />
                <span className="text-gray-300">|</span>
                <Image src="/images/wjct-logo.png" alt="WJCT Logo" width={60} height={36} className="object-contain opacity-80" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">As Featured on NPR&apos;s First Coast Connect</h3>
                <p className="text-sm text-gray-600">
                  A conversation about MS, advocacy, and the raw storytelling that drives the podcast.
                </p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=5YiuhgqDCI8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors flex-shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
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
