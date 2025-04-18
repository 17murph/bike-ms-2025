import { EnhancedImage } from "@/components/enhanced-image"

export function PodcastSection() {
  return (
    <section className="container mx-auto py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Other Side of MS</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to "The Other Side of MS," a podcast dedicated to amplifying the voices and stories of those whose
            lives are deeply affected by Multiple Sclerosis (MS). Through honest conversations and heartfelt stories, we
            shed light on the strength, resilience, and challenges of the MS community. Each episode goes beyond
            awareness; it's about action, whether that means learning, supporting, advocating, or simply listening with
            an open heart. This podcast is not just a platform for stories—it's a movement fueled by everyone who
            believes in a brighter future. Together, let's make a difference—one conversation, one story at a time.
          </p>
          <a
            href="https://open.spotify.com/show/4mbtaL1bqpXpmUPmhYBlrZ?si=97200f7d613a4054"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
        <div className="flex justify-center">
          <EnhancedImage
            src="2025 Logo.JPEG-LznTItVGXC64kGQ29mVEzAWohOa9LN.jpeg"
            alt="The Other Side of MS Podcast Logo"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
