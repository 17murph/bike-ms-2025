import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function RelatedBikeMSLinks() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Related Links</h3>
      <ul className="space-y-3">
        <li>
          <Link
            href="https://mssociety.donordrive.com/index.cfm?fuseaction=cms.page&id=1227&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&language=en&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            <span>About Bike MS</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://mssociety.donordrive.com/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Find a Bike MS Ride</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://mssociety.donordrive.com/index.cfm?fuseaction=cms.page&id=1228&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Bike MS Fundraising</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://mssociety.donordrive.com/index.cfm?fuseaction=cms.page&id=1229&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Bike MS Training</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
