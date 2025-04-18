import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Bike MS 2025</h1>

      {/* Hero/Intro Section */}
      <section className="mb-12">
        <div className="prose max-w-none">
          <p className="mb-4">
            Bike MS is a fundraising cycling series organized by the National Multiple Sclerosis Society with a mission
            to raise awareness and funds for MS research and support services. As part of Team Spanish Beer, we're
            committed to this cause through our cycling events and The Other Side of MS podcast, sharing stories and
            building community among those affected by MS.
          </p>
        </div>
      </section>

      {/* Big Bananas Fundraiser Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Big Bananas Fundraiser</h2>
        <p className="mb-6">
          Save the date. 300 items valued at more than $40,000. 100 percent of proceeds benefit the MS Society.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Image
              src="/images/big-bananas1.jpg"
              alt="13th Annual Silent Auction by The Big Bananas Cycling Team"
              width={500}
              height={700}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <Image
              src="/images/big-bananas2.jpg"
              alt="Big Bananas Fundraiser QR Code"
              width={500}
              height={700}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Jax Bourbon Social Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Jax Bourbon Social</h2>
        <p className="mb-6">
          Join us for an evening of fine bourbon tasting to support Bike MS. This exclusive event features premium
          bourbon selections, gourmet appetizers, and a silent auction of rare bourbon bottles.
        </p>
        <p className="mb-6">
          <strong>Date:</strong> April 18, 2025
          <br />
          <strong>Location:</strong> River City Brewing Company, Jacksonville
          <br />
          <strong>Tickets:</strong> $75 per person (includes tastings and appetizers)
        </p>
        <p>All proceeds directly benefit the National MS Society. Space is limited, so reserve your spot early!</p>
      </section>
    </div>
  )
}
