import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <div className="flex-grow">
        <section className="mb-12 mt-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="p-4 md:p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Jax Bourbon Social section with improved responsive design */}
                  <div className="relative w-full mb-6">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jax%20BS.jpg-kAlLdQLw3wGq52XlZm7zEF9ikQcyiz.jpeg"
                      alt="Jax Bourbon Social - July 19, 2025 4PM-9PM at 3130 Parental Home Road"
                      className="w-full rounded-lg"
                    />

                    {/* Mobile buttons - stacked below image on small screens */}
                    <div className="md:hidden flex flex-col gap-3 mt-4">
                      <a
                        href="https://www.jaxbourbonsocial.com/event-details"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-amber-700 text-white font-medium rounded shadow hover:bg-amber-800 transition-all"
                      >
                        Purchase Tickets Online
                      </a>
                      <a
                        href="https://www.jaxbourbonsocial.com/event-details"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded shadow hover:bg-blue-700 transition-all"
                      >
                        View Event Details
                      </a>
                    </div>

                    {/* Desktop buttons - positioned on the right side of the image on larger screens */}
                    <div className="absolute top-0 right-0 h-full hidden md:flex flex-col justify-center gap-3 pr-4">
                      <a
                        href="https://www.jaxbourbonsocial.com/event-details"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-amber-700 bg-opacity-80 text-white font-medium rounded backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-100 transition-all whitespace-nowrap"
                      >
                        Purchase Tickets Online
                      </a>
                      <a
                        href="https://www.jaxbourbonsocial.com/event-details"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 bg-opacity-80 text-white font-medium rounded backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-100 transition-all whitespace-nowrap"
                      >
                        View Event Details
                      </a>
                    </div>
                  </div>

                  {/* Responsive grid for event details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mb-6">
                    <div className="bg-blue-50 p-4 rounded-md">
                      <p className="font-semibold text-gray-700">Date</p>
                      <p>July 19, 2025</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md">
                      <p className="font-semibold text-gray-700">Location</p>
                      <p>3130 Parental Home Road, Jacksonville, FL</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md sm:col-span-2 md:col-span-1">
                      <p className="font-semibold text-gray-700">Time</p>
                      <p>4:00 PM - 9:00 PM</p>
                    </div>
                  </div>

                  <div className="mb-6 text-gray-700 text-left sm:text-center">
                    <h4 className="font-bold text-xl mb-2">Jacksonville's Premiere Bourbon & Whiskey Tasting Event</h4>
                    <p className="mb-4 text-sm md:text-base">
                      Jax Bourbon Social is a registered 501(C)3 organization dedicated to bringing bourbon enthusiasts
                      together for a cause. Founded in 2020, we host events to raise funds and awareness for the
                      National Multiple Sclerosis (MS) Society.
                    </p>
                    <h4 className="font-bold text-xl mb-2">Join Us</h4>
                    <p className="mb-4 text-sm md:text-base">
                      Tickets are $100 per person. There will be raffle tickets and a live auction during the event. All
                      proceeds benefit the National MS Society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="p-4 md:p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Dinner of Champions section with improved responsive design */}
                  <div className="relative w-full mb-6">
                    <img
                      src="/images/dinner-of-champions.png"
                      alt="2025 Dinner of Champions: Jacksonville - Jun 5 at 6:00 PM EDT at Florida Blue Conference Center"
                      className="w-full rounded-lg"
                    />

                    {/* Mobile buttons - stacked below image on small screens */}
                    <div className="md:hidden flex flex-col gap-3 mt-4">
                      <a
                        href="https://my.onecause.com/event/organizations/92771a7b-c025-4a2e-a533-fe6e8a011f5e/events/vevt:be06f33b-5f5e-47b5-a80a-2c2493ed533d/home/story"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-orange-500 text-white font-medium rounded shadow hover:bg-orange-600 transition-all"
                      >
                        Purchase Tickets Online
                      </a>
                      <a
                        href="https://my.onecause.com/event/organizations/92771a7b-c025-4a2e-a533-fe6e8a011f5e/events/vevt:be06f33b-5f5e-47b5-a80a-2c2493ed533d/home/story"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded shadow hover:bg-blue-700 transition-all"
                      >
                        View Event Details
                      </a>
                    </div>

                    {/* Desktop buttons - positioned on the right side of the image on larger screens */}
                    <div className="absolute top-0 right-0 h-full hidden md:flex flex-col justify-center gap-3 pr-4">
                      <a
                        href="https://my.onecause.com/event/organizations/92771a7b-c025-4a2e-a533-fe6e8a011f5e/events/vevt:be06f33b-5f5e-47b5-a80a-2c2493ed533d/home/story"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-orange-500 bg-opacity-80 text-white font-medium rounded backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-100 transition-all whitespace-nowrap"
                      >
                        Purchase Tickets Online
                      </a>
                      <a
                        href="https://my.onecause.com/event/organizations/92771a7b-c025-4a2e-a533-fe6e8a011f5e/events/vevt:be06f33b-5f5e-47b5-a80a-2c2493ed533d/home/story"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 bg-opacity-80 text-white font-medium rounded backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-100 transition-all whitespace-nowrap"
                      >
                        View Event Details
                      </a>
                    </div>
                  </div>

                  {/* Responsive grid for event details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mb-6">
                    <div className="bg-blue-50 p-4 rounded-md">
                      <p className="font-semibold text-gray-700">Date</p>
                      <p>September 26, 2025</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md">
                      <p className="font-semibold text-gray-700">Location</p>
                      <p>EverBank Stadium, Jacksonville, FL</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md sm:col-span-2 md:col-span-1">
                      <p className="font-semibold text-gray-700">Hosted by</p>
                      <p>The National MS Society</p>
                    </div>
                  </div>

                  <div className="mb-6 text-gray-700 text-left sm:text-center">
                    <h4 className="font-bold text-xl mb-2">Why Attend?</h4>
                    <p className="mb-4 text-sm md:text-base">
                      The Dinner of Champions is the National MS Society's premier fundraising event, offering an
                      inspirational evening of fine dining and community spirit. This distinguished gathering honors
                      outstanding leaders and organizations dedicated to making a difference in the lives of those
                      affected by multiple sclerosis. Attendees will enjoy a reception, a gourmet dinner, and
                      opportunities to engage with influential community members, all while supporting critical research
                      and services aimed at achieving a world free of MS.
                    </p>
                    <h4 className="font-bold text-xl mb-2">Join Us</h4>
                    <p className="mb-4 text-sm md:text-base">
                      By participating in the Dinner of Champions, you contribute to vital efforts that empower
                      individuals with MS to live their best lives. Your support fuels research, advocacy, and programs
                      that bring us closer to a cure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Training Rides &amp; Events</h1>

          <div className="text-center space-y-4 max-w-4xl mx-auto bg-gray-50 p-4 md:p-6 rounded-lg mb-12">
            <h2 className="text-xl md:text-2xl font-bold">Interested in cycling for MS?</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Join thousands of cyclists across the country who are riding to create a world free of MS. Find a ride
              near you or learn more about Bike MS.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-base font-medium"
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1230&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <circle cx="18.5" cy="17.5" r="3.5"></circle>
                  <circle cx="5.5" cy="17.5" r="3.5"></circle>
                  <circle cx="15" cy="5" r="1"></circle>
                  <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
                </svg>
                Find Your Ride
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-base font-medium"
                href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=1227&eventGroupID=5D8E661A-FD97-846A-4224AE4CFDCC4BAA&language=en&cmsContentSetID=24FE9BE9-DB92-A369-C8DB6AF2F89959A0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <circle cx="18.5" cy="17.5" r="3.5"></circle>
                  <circle cx="5.5" cy="17.5" r="3.5"></circle>
                  <circle cx="15" cy="5" r="1"></circle>
                  <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
                </svg>
                About Bike MS
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-base font-medium"
                href="https://mssociety.donordrive.com/participant/casey-murphy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                Donate to MS Society
              </a>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Next Bike MS Ride</h2>
            <div className="max-w3xl mx-auto">
              <div className="bg-blue-50 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-yellow-400 text-black p-3 md:p-4 text-center">
                  <h3 className="text-xl md:text-2xl font-bold">Kentucky Bourbon Country Ride</h3>
                </div>
                <div className="p-4 md:p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <div>
                        <p className="font-semibold text-base md:text-lg">Date &amp; Time</p>
                        <p className="text-gray-700 text-sm md:text-base">June 7, 2025 at 7:30 AM ET</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <div>
                        <p className="font-semibold text-base md:text-lg">Location</p>
                        <p className="text-gray-700 text-sm md:text-base">Louisville, Kentucky</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0"
                      >
                        <circle cx="18.5" cy="17.5" r="3.5"></circle>
                        <circle cx="5.5" cy="17.5" r="3.5"></circle>
                        <circle cx="15" cy="5" r="1"></circle>
                        <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
                      </svg>
                      <div>
                        <p className="font-semibold text-base md:text-lg">Distance</p>
                        <p className="text-gray-700 text-sm md:text-base">50, 75, or 100 Miles</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 md:py-3 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm md:text-base font-medium"
                        href="https://mssociety.donordrive.com/participant/casey-murphy"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 md:w-5 md:h-5"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                        Donate to Bike MS
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 md:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm md:text-base font-medium"
                        href="https://events.nationalmssociety.org/index.cfm?fuseaction=cms.page&id=8754&eventID=2094"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 md:w-5 md:h-5"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                        About this Ride
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Ride Totals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">2025 Cycling Totals</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-base md:text-lg">Distance</p>
                  <p className="text-2xl md:text-4xl font-bold">507.54 miles</p>
                </div>
                <div>
                  <p className="text-gray-600 text-base md:text-lg">Time In Saddle</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-blue-50 p-2 rounded-md text-center">
                      <p className="text-xl md:text-2xl font-bold">01</p>
                      <p className="text-xs md:text-sm text-gray-600">Days</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-md text-center">
                      <p className="text-xl md:text-2xl font-bold">33</p>
                      <p className="text-xs md:text-sm text-gray-600">Hours</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-md text-center">
                      <p className="text-xl md:text-2xl font-bold">47</p>
                      <p className="text-xs md:text-sm text-gray-600">Minutes</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-md text-center">
                      <p className="text-xl md:text-2xl font-bold">27</p>
                      <p className="text-xs md:text-sm text-gray-600">Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">2025 Cycling Breakdown by Quarter</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-base md:text-lg">Quarter</th>
                      <th className="text-left py-2 font-semibold text-base md:text-lg">Distance</th>
                      <th className="text-left py-2 font-semibold text-base md:text-lg">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 md:py-3 text-sm md:text-base">Quarter 1</td>
                      <td className="py-2 md:py-3 text-sm md:text-base">366.74 miles</td>
                      <td className="py-2 md:py-3 text-sm md:text-base">24:47:48</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 md:py-3 text-sm md:text-base">Quarter 2</td>
                      <td className="py-2 md:py-3 text-sm md:text-base">140.8 miles</td>
                      <td className="py-2 md:py-3 text-sm md:text-base">8:59:39</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Fundraisers</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-black text-white p-3 md:p-4 text-center">
                  <h3 className="text-xl md:text-2xl font-bold">Jax Bourbon Social</h3>
                  <p className="text-xs md:text-sm">Est. 2020</p>
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex justify-center mb-4">
                    <img
                      alt="Jax Bourbon Social Logo"
                      width="300"
                      height="150"
                      className="rounded max-w-full h-auto"
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jax%20BS.jpg-kAlLdQLw3wGq52XlZm7zEF9ikQcyiz.jpeg"
                    />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-center mb-1 md:mb-2">Jacksonville's Premiere</h4>
                  <h4 className="text-base md:text-lg font-bold text-center mb-3 md:mb-4">
                    BOURBON &amp; WHISKEY TASTING EVENT
                  </h4>
                  <p className="text-center font-semibold mb-4 text-sm md:text-base">July 19, 2025 4PM-9PM</p>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2 text-sm md:text-base">Event Location:</p>
                    <p className="mb-1 text-sm md:text-base">3130 Parental Home Road</p>
                    <p className="mb-4 text-sm md:text-base">Jacksonville, FL 32216</p>
                    <p className="mb-2 text-sm md:text-base">
                      <strong>Tickets:</strong> $100 per person
                    </p>
                    <p className="mb-2 text-sm md:text-base">
                      There will be raffle tickets and a live auction during the event.
                    </p>
                  </div>
                  <p className="mb-4 text-sm md:text-base">
                    Jax Bourbon Social is a registered 501(C)3 organization dedicated to bringing bourbon enthusiasts
                    together for a cause. Founded in 2020, we host events to raise funds and awareness for the National
                    Multiple Sclerosis (MS) Society.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="https://www.jaxbourbonsocial.com/event-details"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition w-full text-sm md:text-base"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 md:w-5 md:h-5"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                      View Event Details and Purchase Tickets
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="my-6 md:my-8 py-4 md:py-6 border-t border-gray-200">
            <h2 className="text-lg md:text-xl font-bold text-center mb-4 md:mb-6">Connect With Us</h2>
            <div className="flex justify-center space-x-4 md:space-x-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-110"
                aria-label="Facebook"
                href="https://www.facebook.com/OtherSideOfMS"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all transform hover:scale-110"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/caseymurphy/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-110"
                aria-label="X (formerly Twitter)"
                href="https://x.com/theothersidems?s=11&t=tlzOgmkXwzTvVden5dn58A"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a
                href="mailto:CMURPHY@SJMALAW.COM"
                className="p-2 md:p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all transform hover:scale-110"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all transform hover:scale-110"
                aria-label="Podcast"
                href="https://theothersideofms.podbean.com/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/BikeMS"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bikems/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://twitter.com/bikems"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="mailto:info@bikems.org" className="hover:text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 py-2 text-center text-gray-600 text-sm">
        Today's Date: Monday, March 31, 2025
      </div>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
