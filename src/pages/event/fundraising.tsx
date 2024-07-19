

const list = [
  { id: 1, name: "Exploring fundraising fundamentals" },
  { id: 2, name: "Creating an organisational culture for fundraising" },
  { id: 3, name: "Setting your fundraising goals" },
  { id: 4, name: "Identifying crowdfunding opportunities" },
  { id: 5, name: "Targeting your donor base" },
  { id: 6, name: "Nurturing business partnerships" },
  { id: 7, name: "Planning fundraising events" },
  { id: 8, name: "Managing capital campaigns" },
  { id: 9, name: "Developing your annual fundraising plan" },
];

export default function Fundraising() {
  return (
    <>
      <div className="py-20 w-full justify-center flex ">
        <div className="max-w-5xl  px-10 w-full">
          <section className="w-full text-black py-20  ">
            <div className="w-full  items-center flex justify-start">
              <section className="space-y-9">
                <div className="text-3xl font-bold text-black text-center">
                  Fundraising for Higher Education: Unlocking Potential,
                  Transforming Futures
                </div>
                <div className="flex justify-center">
                  <div className="border-2 border-gray-200 w-10"></div>
                  <div className="border-2 border-red-600 w-10"></div>
                  <div className="border-2 border-gray-200 w-10"></div>
                </div>
              </section>
            </div>
          </section>
          <section id="portfolio-details" className="">
            <div className="w-full">
              <div className="text-md">
                During this professional development training, attendees will
                learn about the rapidly evolving world of fundraising. They will
                learn about the diverse fundraising methods and build skills for
                implementing multiple new ways of resource generation in higher
                education.{" "}
              </div>
              <div className="text-2xl py-2">Learning Objectives: </div>
              <div className="px-4">
                {list.map((item) => {
                  return (
                    <div key={item.id} className="text-lg py-2">
                      {item.id} {item.name}
                    </div>
                  );
                })}
              </div>
              <div className="space-y-4 py-4 text-md">
                <div className="">
                  <strong>Date: </strong>August 20, 2024 Wednesday, Blantyre
                </div>
                <div className="">
                  <strong>Venue: </strong>Joe's, 8 Kidney Crescent, Blantyre,
                </div>
                <div>
                  <strong>Date: </strong>August 27, 2024 Wednesday, Lilongwe
                </div>
                <div className="">
                  <strong>Venue: </strong>The Forty Four Hotel's, Area 44/105,
                  Lilongwe
                </div>
              </div>
              <div className="space-y-4 py-4 text-md">
                <div className="">
                  <strong>Fee: </strong>100,000 MWK for UCAM's current member
                  institutions
                </div>
                <div>
                  <strong>Fee: </strong>150,000 MWK for Non-members
                </div>
                <div className="text-2xl pt-2">
                  Training is limited to 30 attendees
                </div>
                <div className="text-md">
                  To check the status of your fee payments for membership to
                  UCAM, please email us at{" "}
                  <span className="text-red-600">
                    universitiesmalawi@gmail.com
                  </span>{" "}
                </div>
              </div>

              <div className="py-3 text-lg font-bold">
                Payment for UCAM Bank Acct. No.: 1007214916, National Bank of
                Malawi, Branch: NTCHEU Please send a copy of the bank deposit
                slip to this email:{" "}
                <span className="text-red-600">
                  universitiesmalawi@gmail.com
                </span>
              </div>
              <ul>
                <li>
                  <strong>Fore More Info Email: </strong>
                  <a href="Universitiesmalawi@gmail.com" className="twitter">
                    <span className="text-red-600">
                      universitiesmalawi@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <div>
                    <strong>or Call: </strong>
                    <span className="text-red-600">0991491522</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
8;
