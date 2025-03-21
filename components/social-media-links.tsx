import Link from "next/link"
import { Facebook, Linkedin, Mail, MessageSquare } from "lucide-react"

export function SocialMediaLinks() {
  return (
    <section className="my-8 py-6 border-t border-gray-200">
      <h2 className="text-xl font-bold text-center mb-6">Connect With Us</h2>
      <div className="flex justify-center space-x-6">
        <Link
          href="https://www.facebook.com/OtherSideOfMS"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-110"
          aria-label="Facebook"
        >
          <Facebook className="w-6 h-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/caseymurphy/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </Link>
        <Link
          href="https://x.com/theothersidems?s=11&t=tlzOgmkXwzTvVden5dn58A"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-110"
          aria-label="X (formerly Twitter)"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Link>
        <a
          href="mailto:cmurphy@sjmalaw.com"
          className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all transform hover:scale-110"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
        <Link
          href="https://theothersideofms.podbean.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all transform hover:scale-110"
          aria-label="Podcast"
        >
          <MessageSquare className="w-6 h-6" />
        </Link>
      </div>
    </section>
  )
}

