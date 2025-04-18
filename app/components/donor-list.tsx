"use client"

import { useState } from "react"

interface DonorListProps {
  donors: string[]
}

export function DonorList({ donors }: DonorListProps) {
  const [showAll, setShowAll] = useState(false)
  const displayDonors = showAll ? donors : donors.slice(0, 10)

  return (
    <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[300px] overflow-hidden">
      <div className="bg-primary text-white p-3 text-center">
        <h2 className="text-xl font-semibold">Recent Donors</h2>
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div className="overflow-y-auto flex-grow">
          <ul className="space-y-2">
            {displayDonors.map((donor, index) => (
              <li key={index} className="text-gray-700 flex items-center gap-2">
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
                  className="lucide lucide-heart w-4 h-4 text-red-500 flex-shrink-0"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <span>{donor}</span>
              </li>
            ))}
          </ul>
        </div>
        {donors.length > 10 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            {showAll ? "Show Less" : `Show All (${donors.length})`}
          </button>
        )}
      </div>
    </div>
  )
}

export default DonorList
