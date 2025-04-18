import Link from "next/link"
import { Users } from "lucide-react"

export function VirtualRidersSection() {
  return (
    <section className="my-8 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Can't Ride? Become a Virtual Rider</h2>
      <p className="mb-4">
        Not everyone can participate in a physical ride, but that doesn't mean you can't be part of the movement to end
        MS. Virtual riders fundraise alongside physical participants, making a real difference without having to get on
        a bike.
      </p>
      <p className="mb-4">
        As a virtual rider, you'll receive the same fundraising tools, support, and recognition as physical riders.
        You'll be an integral part of the Bike MS community, helping to drive MS research and programs forward.
      </p>
      <div className="mt-6">
        <Link
          href="https://mssociety.donordrive.com/index.cfm?fuseaction=cms.page&id=1231&eventID=632"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
        >
          <Users className="w-5 h-5" />
          <span>Become a Virtual Rider</span>
        </Link>
      </div>
    </section>
  )
}
