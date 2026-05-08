import { Heart } from "lucide-react"

export const metadata = {
  title: "Donate - Casey Murphy Bike MS",
  description: "Support Casey Murphy's Bike MS fundraising to help end multiple sclerosis.",
}

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary/90 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center text-white">
        {/* Simple hero */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Help End MS</h1>
        </div>

        {/* Brief copy */}
        <div className="mb-8 text-lg leading-relaxed text-white/90">
          <p className="mb-3">
            I&apos;m Casey Murphy. I ride hundreds of miles each year in Bike MS events because nearly 1 million Americans live with multiple sclerosis.
          </p>
          <p>
            Every dollar funds research, programs, and support for people fighting this disease.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full max-w-xs px-8 py-4 bg-secondary text-white text-xl font-bold rounded-full hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Heart className="w-6 h-6" />
          Donate Now
        </a>

        {/* Trust signal */}
        <p className="mt-6 text-sm text-white/70">
          100% goes to the National MS Society
        </p>
      </div>
    </div>
  )
}
