import { ExternalLink } from "lucide-react"

export default function AboutMSPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">About Multiple Sclerosis</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is MS?</h2>
        <p className="mb-4">
          Multiple sclerosis (MS) is an unpredictable disease of the central nervous system that disrupts the flow of
          information within the brain, and between the brain and body.
        </p>
        <p className="mb-4">
          The cause of MS is still unknown – scientists believe the disease is triggered by an unidentified
          environmental factor in a person who is genetically predisposed to respond.
        </p>
        <p className="mb-4">
          The progress, severity and specific symptoms of MS in any one person cannot yet be predicted. Most people with
          MS are diagnosed between the ages of 20 and 50, with at least two to three times more women than men being
          diagnosed with the disease.
        </p>
        <a
          href="https://www.nationalmssociety.org/What-is-MS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline font-medium hover:text-primary/80"
        >
          Learn more about MS
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">MS Symptoms</h2>
        <p className="mb-4">
          MS symptoms are variable and unpredictable. No two people have exactly the same symptoms, and each person's
          symptoms can change or fluctuate over time.
        </p>
        <p className="mb-4">
          Common symptoms include fatigue, walking difficulties, numbness or tingling, spasticity, weakness, vision
          problems, dizziness, bladder problems, cognitive changes, emotional changes, and pain.
        </p>
        <a
          href="https://www.nationalmssociety.org/Symptoms-Diagnosis/MS-Symptoms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline font-medium hover:text-primary/80"
        >
          Learn more about MS symptoms
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">MS Treatments</h2>
        <p className="mb-4">
          While there is not yet a cure for MS, there are treatments that can help modify the course of the disease and
          manage symptoms.
        </p>
        <p className="mb-4">
          Disease-modifying therapies may reduce disease activity and progression for many individuals with relapsing
          forms of MS, including clinically isolated syndrome, relapsing-remitting MS, and active secondary progressive
          MS.
        </p>
        <a
          href="https://www.nationalmssociety.org/Treating-MS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline font-medium hover:text-primary/80"
        >
          Learn more about MS treatments
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">MS Research</h2>
        <p className="mb-4">
          Research is progressing at a remarkable rate, and the future holds tremendous promise. The National MS Society
          is a driving force of MS research, investing over $1 billion in research to date.
        </p>
        <p className="mb-4">
          Scientists are making breakthroughs in understanding the causes of MS, developing new treatments, and working
          toward a world free of MS.
        </p>
        <a
          href="https://www.nationalmssociety.org/Research"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline font-medium hover:text-primary/80"
        >
          Learn more about MS research
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Support for People with MS</h2>
        <p className="mb-4">
          Living with MS can be challenging, but there are many resources available to help people with MS and their
          families navigate the journey.
        </p>
        <p className="mb-4">
          The National MS Society offers a variety of programs and services to help people affected by MS live their
          best lives, including education, emotional support, and connection to resources.
        </p>
        <a
          href="https://www.nationalmssociety.org/Living-Well-With-MS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline font-medium hover:text-primary/80"
        >
          Find MS support resources
        </a>
      </section>

      <section className="mb-8 flex flex-col gap-4">
        <a
          href="https://mssociety.donordrive.com/index.cfm?fuseaction=cms.page&id=1075"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Become a Virtual Rider</span>
        </a>

        <a
          href="https://www.nationalmssociety.org/Get-Involved/Personal-Stories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Share your Experience with MS</span>
        </a>
      </section>
    </main>
  )
}
