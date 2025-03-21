import Link from "next/link"
import { ReliableImage } from "@/components/reliable-image"
import { SpotifyBadge } from "@/components/spotify-badge"
import { IHeartBadge } from "@/components/iheart-badge"
import {
  Phone,
  Mail,
  Mic,
  Facebook,
  Linkedin,
  ExternalLink,
  Heart,
  Calendar,
  Users,
  Home,
  Info,
  Image,
  Headphones,
} from "lucide-react"

// Custom X (formerly Twitter) logo component
function XLogo({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-6 text-primary text-xl">Contact Casey</h3>
            <div className="space-y-4">
              <Link
                href="tel:+19045041500"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>904-504-1500</span>
              </Link>
              <a
                href="mailto:cmurphy@sjmalaw.com"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>cmurphy@sjmalaw.com</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="font-medium mb-4 text-gray-700">Connect With Us:</h4>
              <div className="flex justify-center md:justify-start items-center space-x-4">
                <Link
                  href="https://www.facebook.com/OtherSideOfMS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-125 text-blue-600 hover:text-blue-700"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/caseymurphy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-125 text-blue-600 hover:text-blue-700"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="https://x.com/theothersidems?s=11&t=tlzOgmkXwzTvVden5dn58A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-125 text-black hover:text-gray-800"
                  aria-label="X (formerly Twitter)"
                >
                  <XLogo className="w-6 h-6" />
                </Link>
                <a
                  href="mailto:cmurphy@sjmalaw.com"
                  className="transition-transform hover:scale-125 text-red-600 hover:text-red-700"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-6 text-primary text-xl">Site Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about-bike-ms"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Info className="w-4 h-4" />
                  <span>About Bike MS</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Upcoming Events</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/podcast"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Headphones className="w-4 h-4" />
                  <span>Podcast Episodes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/pictures"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Image className="w-4 h-4" />
                  <span>Photo Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* MS Resources */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-6 text-primary text-xl">MS Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Find Your Ride</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.nationalmssociety.org/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Donate to MS Society</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.nationalmssociety.org/Resources-Support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>MS Support Resources</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.nationalmssociety.org/Research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>MS Research Updates</span>
                </Link>
              </li>
              <li>
                <Link
                  href="http://email.fundraisers.donordrive.com/c/eJw80MGOpCAQgOGngZsGChrkwKFnbJO97GlfoEZKm0TRAHZ23n6jvZkjCfmrvhqXSKn-xpX8Wso2RqrffNxSqbEelOqv3n-6h_ronWvMp3CNfih3d0o1ILvbXQ723j8-ePBSSmO05eSl1UJqoXXHacW4_Pneye9brrg0lXBtYnrFSpxe7z4oZ_jTByIrOknSIQYFXyBosthp4ch0hIJHDwJuAkBKAKG71ungvoKdRquNsHJiWkxHChljoVzasKUthxxf1I7byhf_rHUvTN0ZDAyGa3xpE9a4JVx-9O2WZwZDTIH-tuO0MjVMRyEcz39M9ZnmWCrltlTMlYH572CqPyUMzIm83p3sbpKBWTDNB87EVE-J75hrHOOOl94ocObGs5d2PfL-ZFrM59Wund8lf3X4y8O_AAAA___w74eR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Users className="w-4 h-4" />
                  <span>Join Team Spanish Beer</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Podcast Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-6 text-primary text-xl">The Other Side of MS Podcast</h3>
            <p className="text-sm text-gray-700 mb-4">Listen to our podcast on these platforms:</p>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-6">
              <Link
                href="https://open.spotify.com/episode/2mgTM4aV6BRTA1mWFfd2FD?si=7sAb2qGYSB26ahSVLHmyHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <SpotifyBadge width={120} height={30} />
              </Link>
              <Link
                href="https://iheart.com/podcast/185724874"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <IHeartBadge width={120} height={30} />
              </Link>
            </div>

            <div className="space-y-3">
              <Link
                href="https://TheOtherSideofMS.podbean.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Mic className="w-4 h-4" />
                <span>Podbean</span>
              </Link>
              <Link
                href="https://podcasts.apple.com/us/podcast/the-other-side-of-ms/id1504876027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v8l6-4-6-4z" />
                </svg>
                <span>Apple Podcasts</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-gray-200 pt-6 pb-6">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors text-sm">
              Home
            </Link>
            <Link href="/about-bike-ms" className="text-gray-600 hover:text-primary transition-colors text-sm">
              About Bike MS
            </Link>
            <Link href="/events" className="text-gray-600 hover:text-primary transition-colors text-sm">
              Events
            </Link>
            <Link href="/podcast" className="text-gray-600 hover:text-primary transition-colors text-sm">
              Podcast
            </Link>
            <Link href="/pictures" className="text-gray-600 hover:text-primary transition-colors text-sm">
              Photos
            </Link>
            <a href="mailto:cmurphy@sjmalaw.com" className="text-gray-600 hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </nav>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <div className="flex justify-center mb-6">
            <ReliableImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Logo.jpg-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg"
              alt="Bike MS Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Made with <Heart className="inline-block w-4 h-4 text-red-500 mx-1" /> for the MS community
          </p>
          <p className="text-xs text-gray-500">
            © {currentYear} The National Multiple Sclerosis Society is a tax exempt 501(c)3 nonprofit organization. EIN:
            13-5661935
          </p>
        </div>
      </div>
    </footer>
  )
}

