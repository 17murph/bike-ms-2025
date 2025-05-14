import Link from "next/link"
import { ReliableImage } from "@/components/reliable-image"
import { ArrowRight, Heart } from "lucide-react"

export function FundraisingSection() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4">
          <Link
            href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="w-full bg-gradient-to-r from-secondary via-secondary/90 to-secondary hover:from-secondary/90 hover:via-secondary hover:to-secondary/90 text-white py-3 rounded-lg transition-all duration-300 text-xl md:text-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2">
              DONATE NOW
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[300px] overflow-hidden">
            <div className="bg-primary text-white p-3 text-center">
              <h2 className="text-xl font-semibold">Fundraising Totals</h2>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <div className="text-center space-y-2">
                  <div className="flex items-baseline justify-center text-gray-800">
                    <span className="font-bold text-3xl">$1,950</span>
                    <span className="ml-2">raised</span>
                  </div>
                  <div className="text-gray-600">Goal: $25,000</div>
                </div>
                <div className="relative w-full h-4 bg-gray-200 rounded-full mt-4 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: "7.8%" }}></div>
                </div>
                <div className="text-right text-sm text-gray-600 mt-1">7.8%</div>
                <p className="text-xs text-center text-gray-600 mt-4 bg-blue-50 p-3 rounded-lg">
                  $5,000 provides 20 people with dedicated MS Navigator support to address their unique MS challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm flex flex-col h-[300px]">
            <div className="bg-primary text-white p-3 text-center">
              <h2 className="text-xl font-semibold">Thank You Donors</h2>
            </div>
            <div className="p-4 flex-grow overflow-hidden">
              <div className="h-full overflow-y-auto custom-scrollbar hide-scrollbar">
                {[
                  "Karyn Laterza",
                  "Dan Sweeney",
                  "Michael Cavicchia",
                  "Rob & Lisa Farthing",
                  "Genese Sweeney",
                  "Susan Levin",
                  "Mark & Dawn Windley",
                  "Terry & April Walter",
                  "Jan Mobley",
                  "Heidi Katz",
                  "Erik Henderson & Lyn Yarbrough",
                  "Mike Hull",
                  "Elaine Wuerstlin",
                  "Jennifer Long",
                  "Debbie & Brian Hamm",
                  "Mary Dallman",
                  "Tom & Mary Beth Cook",
                  "Michele Katz",
                  "Ken Bailey",
                  "Dennis & JoAnn Cook",
                ].map((donor, index) => (
                  <div key={index} className="text-center py-2 text-gray-700 flex items-center justify-center">
                    <Heart className="w-3 h-3 text-red-500 mr-2" />
                    <span>{donor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm flex flex-col h-auto md:h-[300px]">
            <div className="bg-primary text-white p-3 text-center">
              <h2 className="text-xl font-semibold">Fundraising Challenge</h2>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div className="text-center space-y-3">
                <p>Not only do I ask for support via funds, but I also contribute - I've donated over $250!</p>
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative w-48 h-20 overflow-hidden rounded-lg shadow-sm">
                    <ReliableImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/100Bill-i9nf28jeSx9CL6yPqLujoKL5gxjvGI.jpeg"
                      alt="100 Dollar Bill"
                      width={192}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <p className="font-bold text-secondary text-lg">Who will match $100?</p>
                </div>
              </div>
              <Link
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=donordrive.participant&participantID=632965"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 md:mt-0"
              >
                <button className="w-full bg-secondary/90 hover:bg-secondary text-white py-2 rounded-lg transition-colors text-sm font-medium">
                  Match the Challenge
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
