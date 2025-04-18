import { Suspense } from "react"
import { SearchParamsWrapper } from "./search-params-wrapper"

export function SearchParamsContainer() {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-4">Search Parameters Example</h2>
      <Suspense fallback={<div className="p-4 bg-gray-100 rounded-lg">Loading search parameters...</div>}>
        <SearchParamsWrapper />
      </Suspense>
    </div>
  )
}
