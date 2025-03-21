"use client" // Ensure this is at the top

export default function Contact() {
  // For a simple mailto link, we don't actually need useState/useEffect
  // since the mailto: protocol is handled natively by the browser
  return (
    <div>
      <p>
        Contact me at:
        <a href="mailto:cmurphy@sjmalaw.com" className="text-blue-500 underline">
          cmurphy@sjmalaw.com
        </a>
      </p>
    </div>
  )
}

