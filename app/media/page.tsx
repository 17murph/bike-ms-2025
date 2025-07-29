import type { Metadata } from "next"
import { Navigation } from "@/components"
import { Footer } from "@/components"
import { BackToTopButton } from "@/components"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Camera, Mic, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Media Coverage | Bike MS 2025",
  description: "Media coverage and appearances for Bike MS 2025 and The Other Side of MS podcast",
}

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Media Coverage</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Spreading awareness about Multiple Sclerosis and Bike MS through media appearances and podcast features
            </p>
          </div>
        </section>

        {/* Featured Media Appearances */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Media Appearances</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* NPR First Coast Connect */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/YourVideoID"
                      title="NPR First Coast Connect Interview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">NPR First Coast Connect</h3>
                    <p className="text-gray-600 mb-4">
                      Featured interview discussing Bike MS 2025 and raising awareness for Multiple Sclerosis research
                      and support.
                    </p>
                    <Button asChild variant="outline">
                      <a
                        href="https://www.wjct.org/programs/first-coast-connect/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        Listen on NPR
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Other Media Appearances */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mic className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Jack Sears Show</h3>
                        <p className="text-gray-600 mb-3">
                          Guest appearance discussing the mission of Bike MS and personal stories from the MS community.
                        </p>
                        <Button asChild variant="outline" size="sm">
                          <a href="#" className="inline-flex items-center gap-2">
                            Learn More
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mic className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Will Anthony Interview</h3>
                        <p className="text-gray-600 mb-3">
                          In-depth conversation about the impact of Bike MS events and community fundraising efforts.
                        </p>
                        <Button asChild variant="outline" size="sm">
                          <a href="#" className="inline-flex items-center gap-2">
                            Watch Interview
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Other Side of MS Podcast */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Other Side of MS Podcast</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our podcast features inspiring stories from the MS community, expert interviews, and insights into
                living with Multiple Sclerosis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Weekly Episodes</h3>
                  <p className="text-gray-600">New episodes every week featuring guests from the MS community</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Expert Guests</h3>
                  <p className="text-gray-600">Interviews with doctors, researchers, and MS advocates</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Real Stories</h3>
                  <p className="text-gray-600">Authentic conversations about living with and supporting MS</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <a
                  href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ?si=97200f7d613a4054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Listen on Spotify
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Photos Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Photos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Photo gallery coming soon! We'll be adding photos from Bike MS events, podcast recordings, and community
                gatherings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-dashed border-gray-300">
                <CardContent className="p-8 text-center">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-600">Bike MS Events</h3>
                  <p className="text-gray-500">Photos from rides and events</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-dashed border-gray-300">
                <CardContent className="p-8 text-center">
                  <Mic className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-600">Podcast Sessions</h3>
                  <p className="text-gray-500">Behind the scenes recordings</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-dashed border-gray-300">
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-600">Community Events</h3>
                  <p className="text-gray-500">MS community gatherings</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join us in raising awareness and funds for Multiple Sclerosis research and support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/podcast">Listen to Podcast</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/about-bike-ms">Learn About Bike MS</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Follow Our Journey</h3>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline">
                  <a
                    href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ?si=97200f7d613a4054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Spotify
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://www.nationalmssociety.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    National MS Society
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
