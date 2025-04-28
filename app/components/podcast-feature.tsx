export function PodcastFeature() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">The Other Side of MS Podcast</h2>
          <p className="mt-4 text-xl text-gray-600">
            Listen to stories and insights from people living with Multiple Sclerosis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Featured Episode</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-24 h-24 relative rounded-md overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Becca.jpg-1SmsrxAk0vFx9v7d2zxINIJRNX4PKD.jpeg"
                    alt="Becca Fuqua"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Becca Fuqua's Unfiltered Journey with MS</h4>
                  <p className="text-gray-600 mt-1">
                    Becca shares her personal story of living with MS and how she navigates the challenges while
                    maintaining her passion for life.
                  </p>
                  <a
                    href="https://open.spotify.com/episode/4UKicNgDubGAfj9EIKhUJL?si=3d6f33be8de244a5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 mt-3 font-medium"
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

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img src="/images/spotify-podcast-badge.png" alt="Listen on Spotify" className="h-10 w-auto" />
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/the-other-side-of-ms/id1504876027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.7 10.7c-.1-3.1-2.6-5.6-5.7-5.6-3.1 0-5.6 2.5-5.7 5.6-.1 1.3.3 2.6 1.1 3.6.8 1 1.9 1.7 3.2 1.8 0 0 0 0 .1 0 .1 0 .2 0 .3 0 .1 0 .2 0 .3 0 .1 0 .1 0 .1 0 1.3-.2 2.4-.8 3.2-1.8.8-1 1.2-2.3 1.1-3.6zm-5.6 5.4c-.1 0-.2 0-.3 0-.1 0-.2 0-.3 0-1.1-.1-2.1-.7-2.8-1.5-.7-.9-1-2-1-3.1.1-2.7 2.3-4.9 5-4.9 2.7 0 4.9 2.2 5-4.9.1 1.1-.3 2.2-1 3.1-.7.8-1.7 1.4-2.8 1.5h-.8z" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                  <path d="M12.3 14.2c0 .1-.1.2-.3.2s-.3-.1-.3-.2v-4.5c0-.1.1-.2.3-.2s.3.1.3.2v4.5z" />
                </svg>
                <span>Apple</span>
              </a>
              <a
                href="https://www.amazon.com/The-Other-Side-of-MS/dp/B0D733D15P/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="/images/amazon-music-podcasts.jpeg"
                  alt="Listen on Amazon Music Podcasts"
                  className="h-10 w-auto rounded-lg"
                />
              </a>
            </div>

            <div className="text-center md:text-left">
              <a
                href="/podcast"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-md"
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
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                  <path d="M10 2c1 .5 2 2 2 5"></path>
                </svg>
                Explore All Episodes
              </a>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/podcast-studio.jpg"
              alt="Podcast Studio"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold">The Other Side of MS</h3>
              <p className="text-white/90 mt-2">
                Hosted by Casey Murphy, exploring the journey of living with Multiple Sclerosis
              </p>
              <a
                href="https://open.spotify.com/episode/4UKicNgDubGAfj9EIKhUJL?si=3d6f33be8de244a5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-md mt-4 w-full md:w-auto"
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
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Listen to the Latest Episode
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
