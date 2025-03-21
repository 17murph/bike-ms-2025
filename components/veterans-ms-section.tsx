import Link from "next/link"
import { Shield, FileText, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VeteransMSSection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-sm p-6 my-8">
      <div className="flex items-center gap-3 mb-4">
        <Shield className="h-7 w-7 text-primary" />
        <h2 className="text-2xl font-bold text-primary">MS Research for Veterans & Service Members</h2>
      </div>

      <div className="prose prose-blue max-w-none">
        <p className="text-lg">
          The National MS Society supports the MS Research Program (MSRP) through the Congressionally Directed Medical
          Research Program (CDMRP) to fund critical research on service-connected multiple sclerosis.
        </p>

        <div className="bg-white p-5 rounded-lg shadow-sm my-6 border-l-4 border-primary">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Why Veterans' Stories Matter
          </h3>
          <p>
            Veterans and service members with MS face unique challenges. Your personal experiences help researchers and
            legislators understand the specific needs of military personnel affected by MS and can directly influence
            funding priorities for research that could improve care and treatment.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3 flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          How Your Story Makes a Difference
        </h3>

        <ul className="space-y-2 list-disc pl-6">
          <li>
            <strong>Informs Research Priorities:</strong> Helps researchers understand the unique aspects of MS in
            military populations
          </li>
          <li>
            <strong>Guides Funding Decisions:</strong> Shows legislators why this program is critical for addressing
            urgent research gaps
          </li>
          <li>
            <strong>Accelerates Discoveries:</strong> Enables flexibility to pursue novel discoveries that could make an
            immediate impact
          </li>
          <li>
            <strong>Improves Care:</strong> Leads to better understanding of service-connected MS and its treatment
          </li>
        </ul>

        <div className="bg-primary/5 p-5 rounded-lg my-6">
          <p className="italic text-gray-700">
            "The National MS Society will never share your story without speaking with you first. Your privacy and
            comfort are our priority."
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="https://nmss.quorum.us/campaign/113830/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg font-medium flex items-center gap-2 shadow-sm hover:shadow-md transition-all">
              Share Your Service Experience with MS
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

