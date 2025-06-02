import { Mail } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Your other content here */}
      <h3 className="text-2xl font-bold mb-2">2025 Fundraising Progress</h3>
      <p className="text-lg mb-4">$4,460 raised of $10,000 goal (44.6%)</p>
      <a href="mailto:CMURPHY@SJMALAW.COM" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
        <Mail className="w-5 h-5" />
        <span>CMURPHY@SJMALAW.COM</span>
      </a>
      {/* Your other content here */}
    </div>
  )
}
