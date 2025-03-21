import { Users, Heart, DollarSign, Award, Calendar } from "lucide-react"
import Link from "next/link"

export function VirtualRidersSection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-sm p-4 sm:p-6 my-8">
      <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 flex items-center gap-2">
        <Users className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
        Virtual Riders: Support Without the Saddle
      </h2>

      <p className="text-base sm:text-lg mb-6">
        Not everyone can ride 150 miles, but everyone can make a difference in the fight against MS. Virtual Riders are
        essential members of the Bike MS community who fundraise without having to physically cycle.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <DollarSign className="w-7 h-7 sm:w-8 sm:h-8 text-secondary mb-2" />
          <h3 className="font-semibold mb-2">Fundraise Your Way</h3>
          <p className="text-gray-700 text-sm">
            Raise funds through your own creative methods without the physical demands of cycling
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-secondary mb-2" />
          <h3 className="font-semibold mb-2">Support Team Members</h3>
          <p className="text-gray-700 text-sm">
            Perfect for family, friends, and colleagues who want to support riders from the sidelines
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <Award className="w-7 h-7 sm:w-8 sm:h-8 text-secondary mb-2" />
          <h3 className="font-semibold mb-2">Same Impact</h3>
          <p className="text-gray-700 text-sm">
            Every dollar raised by Virtual Riders has the same impact as those raised by cyclists
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-secondary mb-2" />
          <h3 className="font-semibold mb-2">Join the Celebration</h3>
          <p className="text-gray-700 text-sm">
            Attend the finish line festivities to cheer on riders and celebrate together
          </p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-3">Who Should Consider Being a Virtual Rider?</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700 text-sm sm:text-base">
          <li>Supporters who can't ride due to health, schedule, or other reasons</li>
          <li>Family members and friends of cyclists who want to contribute</li>
          <li>Team supporters who prefer to help with logistics and cheering</li>
          <li>Anyone passionate about ending MS who prefers not to cycle</li>
          <li>Corporate team members who want to participate without riding</li>
        </ul>
      </div>

      <div className="flex justify-center mt-6">
        <Link
          href="https://mssociety.donordrive.com/index.cfm?fuseaction=cms.page&id=1230"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-secondary text-white rounded-md hover:bg-secondary/90 text-base sm:text-lg font-medium transition-all hover:translate-x-1"
        >
          <Users className="w-5 h-5" />
          <span>Become a Virtual Rider</span>
        </Link>
      </div>
    </div>
  )
}

