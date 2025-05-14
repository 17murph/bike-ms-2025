"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileTextButton } from "@/components/mobile-text-button"
import { BackToTopButton } from "@/components/back-to-top-button"
import { ReliableImage } from "@/components/reliable-image"
import { Heart, Mail, Send, Bike, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SocialMediaLinks } from "@/components/social-media-links"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  // Set metadata via useEffect to avoid server-side rendering issues
  useEffect(() => {
    document.title = "About & Contact | Cycling to End Multiple Sclerosis"
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form
      setName("")
      setEmail("")
      setMessage("")
      setIsSubmitted(true)

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <main className="container mx-auto py-6 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold text-center">About & Contact</h1>
            <p className="text-lg text-center text-gray-700">Learn more about our mission and get in touch</p>

            <div className="flex justify-center gap-4 my-6">
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                <Heart className="w-5 h-5" />
                <span>Donate to Bike MS</span>
              </Link>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="mb-4">
                I'm Casey Murphy, a passionate cyclist and MS advocate. My journey with Bike MS began in 2018, and since
                then, I've been dedicated to raising awareness and funds for multiple sclerosis research and support
                services.
              </p>
              <p className="mb-4">
                As a member of Team Spanish Beer, I participate in multiple Bike MS events each year across the country.
                My goal is to help create a world free of MS while building a community of support for those affected by
                this disease.
              </p>
              <p>
                Through cycling, podcasting, and community events, I'm committed to making a difference in the lives of
                people living with MS. Join me in this important mission!
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Bike className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Bike MS Passport Rider</h3>
                    <p className="text-gray-600">Participating in multiple Bike MS events nationwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Team Spanish Beer Member</h3>
                    <p className="text-gray-600">Proud member of an amazing fundraising team</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Get in Touch</h3>
                    <p className="text-gray-600">Have questions or want to collaborate? Reach out below!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[350px] rounded-lg overflow-hidden">
              <ReliableImage
                src="/placeholder.svg?key=dbytf"
                alt="Casey Murphy - Bike MS cyclist and advocate"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Me</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email address"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Your message"
                  rows={5}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90 text-white">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>

              {isSubmitted && (
                <div className="p-3 bg-green-50 text-green-700 rounded-md">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              {error && <div className="p-3 bg-red-50 text-red-700 rounded-md">{error}</div>}
            </form>
          </section>

          {/* Add Social Media Links */}
          <SocialMediaLinks />
        </div>
      </main>

      <Footer />
      <BackToTopButton />
      <MobileTextButton />
    </div>
  )
}
