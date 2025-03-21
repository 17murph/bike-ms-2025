import { Mail } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Your other content here */}
      <a href="mailto:cmurphy@sjmalaw.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
        <Mail className="w-5 h-5" />
        <span>cmurphy@sjmalaw.com</span>
      </a>
      {/* Your other content here */}
    </div>
  )
}

