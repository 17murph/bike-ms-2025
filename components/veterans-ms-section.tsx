import Link from "next/link"
import { Users } from "lucide-react"

export function VeteransMSSection() {
  return (
    <section className="my-8 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Veterans & MS: A Special Connection</h2>
      <p className="mb-4">
        Studies have shown that veterans are at a higher risk of developing multiple sclerosis compared to the general
        population. This connection is particularly strong for those who served in specific conflicts or regions.
      </p>
      <p className="mb-4">
        The National MS Society is committed to supporting veterans with MS through specialized programs, research
        initiatives, and advocacy efforts. If you're a veteran living with MS, or know someone who is, the Society has
        resources specifically designed to help navigate both the VA system and MS care.
      </p>
      <div className="mt-6">
        <Link
          href="https://www.nationalmssociety.org/Get-Involved/Personal-Stories/Share-Your-Story"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
        >
          <Users className="w-5 h-5" />
          <span>Share Your Experience with MS</span>
        </Link>
      </div>
    </section>
  )
}
