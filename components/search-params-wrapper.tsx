"use client"

import { useSearchParams } from "next/navigation"

export function SearchParamsWrapper() {
  const searchParams = useSearchParams()

  // Example usage of searchParams
  const query = searchParams.get("query") || ""
  const filter = searchParams.get("filter") || "all"

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-medium mb-2">Search Parameters</h3>
      <p className="mb-1">
        <strong>Query:</strong> {query}
      </p>
      <p>
        <strong>Filter:</strong> {filter}
      </p>
    </div>
  )
}
