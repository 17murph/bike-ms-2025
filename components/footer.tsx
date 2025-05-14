import Link from "next/link"
import { ReliableImage } from "@/components/reliable-image"
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  ExternalLink,
  Calendar,
  Users,
  Home,
  Info,
  ImageIcon,
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
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Site Navigation */}
          <div className="text-center">
            <h3 className="font-semibold mb-4 text-primary text-xl">Site Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about-bike-ms"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Info className="w-4 h-4" />
                  <span>About Bike MS</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Upcoming Events</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/podcast"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Headphones className="w-4 h-4" />
                  <span>Podcast Episodes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/pictures"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>Photo Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* MS Resources */}
          <div className="text-center">
            <h3 className="font-semibold mb-4 text-primary text-xl">MS Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Find Your Ride</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
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
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
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
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
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
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Users className="w-4 h-4" />
                  <span>Join Team Spanish Beer</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Casey */}
          <div className="text-center">
            <h3 className="font-semibold mb-4 text-primary text-xl">Contact Casey</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:9045041500"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>904-504-1500</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:CMURPHY@SJMALAW.COM"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>CMURPHY@SJMALAW.COM</span>
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium text-gray-700 mb-2">Connect With Us</h4>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.facebook.com/BikeMS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/national-ms-society"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/mssociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="X (Twitter)"
                >
                  <XLogo className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-gray-200 pt-4 pb-4">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
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
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors text-sm">
              About / Contact
            </Link>
          </nav>
        </div>

        <div className="border-t border-gray-200 pt-4 text-center">
          <div className="flex justify-center mb-4">
            <ReliableImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Logo.jpg-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg"
              alt="Bike MS Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="text-center text-sm text-gray-500 mt-2">
            <p>Made with ❤️ for the MS community</p>
            <p className="mt-1">
              © 2025 The National Multiple Sclerosis Society is a tax exempt 501(c)3 nonprofit organization. EIN:
              13-5661935
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
