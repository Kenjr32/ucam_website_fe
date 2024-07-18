import React from "react";

const list = [
  { id: 1, name: "Identifying grant writing basics" },
  { id: 2, name: "Finding the right donor niche" },
  { id: 3, name: "Drafting your concept paper" },
  { id: 4, name: "Crafting your logic framework " },
  { id: 5, name: "Outlining the donor-specified grant format" },
  { id: 6, name: "Writing your narrative" },
  { id: 7, name: "Budget preparation" },
  { id: 8, name: "Review and submission guidelines" },
  { id: 9, name: "Proposal writing for research funding" },
];
export default function Funding() {
  return (
    <>
      <div className="py-20 w-full justify-center flex ">
        <div className="max-w-5xl  px-10 w-full">
          <section className="w-full text-black py-20  ">
            <div className="w-full  items-center flex justify-start">
              <section className="space-y-9">
                <div className="text-3xl font-bold text-black text-center">
                  Maximising Funding: Mastering the Art of Grant Writing!
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
                <div className="text-md">
                  During this professional development training, attendees will
                  learn grant writing basics. They will also be able to, free of
                  charge, do a personalised donor search for funding for their
                  institutional priorities from the UCAM-funded donor directory.
                </div>
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
                  <strong>Date: </strong>August 21, 2024 Wednesday, Blantyre
                </div>
                <div className="">
                  <strong>Venue: </strong>Joe's, 8 Kidney Crescent, Blantyre,
                </div>
                <div>
                  <strong>Date: </strong>August 28, 2024 Wednesday, Lilongwe
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
                <div>
                  <span className="font-bold text-lg">Trainer:</span> Prof Pittman, PhD Executive Director,
                  UCAM Prof. has taught fundraising, grant writing, and donor
                  management for over 30 years. More importantly, she has been
                  fundraising as an academic administrator with a solid track
                  record in setting up fundraising programs for higher
                  education. In this training, she will share tips and funding
                  strategies to move higher education in Malawi beyond fee-only
                  to exploring new resource-generation funding opportunities.
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
