"use client"

import { useEffect, useState } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Unhandled error:", error)
    
    // Check if this is a chunk loading error (common on mobile after deployments)
    const isChunkError = 
      error.message?.includes('Loading chunk') ||
      error.message?.includes('ChunkLoadError') ||
      error.message?.includes('failed to fetch') ||
      error.name === 'ChunkLoadError'
    
    // Auto-refresh once for chunk errors to get the latest version
    if (isChunkError) {
      const hasRefreshed = sessionStorage.getItem('chunk_error_refresh')
      if (!hasRefreshed) {
        sessionStorage.setItem('chunk_error_refresh', 'true')
        setIsRefreshing(true)
        // Clear any cached service worker and reload
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistrations().then(registrations => {
            registrations.forEach(registration => registration.unregister())
          })
        }
        // Force a hard refresh to get new assets
        window.location.reload()
      }
    }
  }, [error])

  const handleRefresh = () => {
    // Clear the refresh flag and reload the page
    sessionStorage.removeItem('chunk_error_refresh')
    window.location.reload()
  }

  const handleReset = () => {
    sessionStorage.removeItem('chunk_error_refresh')
    reset()
  }

  // Check if this is a chunk loading error
  const isChunkError = 
    error.message?.includes('Loading chunk') ||
    error.message?.includes('ChunkLoadError') ||
    error.message?.includes('failed to fetch') ||
    error.name === 'ChunkLoadError'

  if (isRefreshing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Updating to the latest version...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        {isChunkError ? (
          <>
            <p className="text-gray-600 mb-6">
              The page failed to load properly. This usually happens when the website was recently updated. 
              Please refresh the page to get the latest version.
            </p>
            <button
              onClick={handleRefresh}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition-colors font-medium"
            >
              Refresh Page
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-6">We apologize for the inconvenience. An unexpected error has occurred.</p>
            <div className="bg-gray-100 p-4 rounded mb-6 overflow-auto">
              <code className="text-sm text-gray-800 break-words">{error.message || "Unknown error"}</code>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Try again
              </button>
              <button
                onClick={handleRefresh}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
              >
                Refresh
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
