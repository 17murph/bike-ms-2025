import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-32 md:pt-36">
      <h1 className="text-3xl font-bold mb-6">About Bike MS 2025</h1>

      {/* Personal Introduction Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Meet Casey Murphy</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            I'm Casey Murphy, a passionate cyclist and MS advocate. My journey with Bike MS began in 2018, and since
            then, I've been dedicated to raising awareness and funds for multiple sclerosis research and support
            services.
          </p>
          <p className="mb-4">
            As a member of Team Spanish Beer, I participate in multiple Bike MS events each year across the country. My
            goal is to help create a world free of MS while building a community of support for those affected by this
            disease.
          </p>
          <p className="mb-4">
            Through cycling, podcasting, and community events, I'm committed to making a difference in the lives of
            people living with MS. Join me in this important mission!
          </p>
        </div>

        {/* Achievements and Experience Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6">
          <h3 className="font-bold text-lg mb-2">Experience & Achievements</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cycling for Bike MS since 1995</li>
            <li>Completed over 35 Bike MS events</li>
            <li>Top fundraiser in the Southeast Region</li>
            <li>Board of Trustees member for the National MS Society in North Florida (Jacksonville)</li>
          </ul>
        </div>
      </section>

      {/* Hero/Intro Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">About Bike MS</h2>

        <div className="mb-6">
          <Image
            src="/images/bike-ms-group-photo.jpg"
            alt="Team Spanish Beer cyclists at Bike MS event"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            priority
          />
        </div>

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
