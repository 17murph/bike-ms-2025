import Link from "next/link"
import { Bike, Heart, Users, ExternalLink } from "lucide-react"

export function RelatedBikeMSLinks() {
  return (
    <div className="bg-blue-50 rounded-lg p-6 my-8">
      <h2 className="text-xl font-bold mb-4 text-center">Related Bike MS Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Bike className="w-5 h-5 text-primary" />
          <span>Find Your Ride</span>
          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
        </Link>
        <Link
          href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1227&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&language=en&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Bike className="w-5 h-5 text-primary" />
          <span>About Bike MS</span>
          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
        </Link>
        <Link
          href="https://mssociety.donordrive.com/index.cfm?fuseaction=donorDrive.event&eventID=1005"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Heart className="w-5 h-5 text-red-500" />
          <span>Donate to MS Research</span>
          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
        </Link>
        <Link
          href="http://email.fundraisers.donordrive.com/c/eJw80MGOpCAQgOGngZsGChrkwKFnbJO97GlfoEZKm0TRAHZ23n6jvZkjCfmrvhqXSKn-xpX8Wso2RqrffNxSqbEelOqv3n-6h_ronWvMp3CNfih3d0o1ILvbXQ723j8-ePBSSmO05eSl1UJqoXXHacW4_Pneye9brrg0lXBtYnrFSpxe7z4oZ_jTByIrOknSIQYFXyBosthp4ch0hIJHDwJuAkBKAKG71ungvoKdRquNsHJiWkxHChljoVzasKUthxxf1I7byhf_rHUvTN0ZDAyGa3xpE9a4JVx-9O2WZwZDTIH-tuO0MjVMRyEcz39M9ZnmWCrltlTMlYH572CqPyUMzIm83p3sbpKBWTDNB87EVE-J75hrHOOOl94ocObGs5d2PfL-ZFrM59Wund8lf3X4y8O_AAAA___w74eR"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Users className="w-5 h-5 text-primary" />
          <span>Join Team Spanish Beer</span>
          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
        </Link>
      </div>
    </div>
  )
}

