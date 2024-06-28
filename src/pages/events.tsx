import React from "react";
import { Link } from "react-router-dom";

const Events = [
  {
    id: 1,
    date: "24 - 25 JUNE 2021",
    title: "Higher Education in the 21st Century",
    description:
      "Universities and Colleges Association of Malawi(UCAM), in conjuction with the Ministry of Education(MoE), National Council for Higher ",
    location: "Sunbird Nkopola Lodge",
    time: "7:00 - 17:00",
    link: "/conference",
  },
  {
    id: 2,
    date: "23 AUGUST 2022",
    title:
      "Advancing the Influence of Civil Society on Universities and Colleges in Malawi: Scholars in Dialog",
    description:
      "Scholars in Dialog, Three Guest Speakers from AAC&U will be presenting",
    location: "UNICAF Univeristy Boardroom",
    time: "09:00 - 12:00",
    link: "/scholars",
  },
  {
    id: 3,
    date: "23 & 24 NOVEMBER 2022",
    title: "Malawi's 3rd International Conference On Higher Education",
    description:
      "Universities and Colleges as Drivers of Knowledge-Based Economy in Implementing Malawi 2063 Vision",
    location: "MIM Campus",
    time: "Two Day Event Ending in the Evenings",
    link: "/3rd-conference",
  },
  {
    id: 4,
    date: "17th JANUARY 2023",
    title: "Higher Education Discussion Platform",
    description:
      "Continuation of the debate on Universities & Colleges being drivers of a Knowledge-Based Economy towards MW2063",
    location: "ZOOM Virtual Event",
    time: "18:30 - 20:30",
    link: "/discussion",
  },
  {
    id: 5,
    date: "16th FEBRUARY 2023",
    title: "Panel Discussion with Private Sector",
    description:
      "“Forging A Better Partnership Between Industry and Higher Education Institutions for A Knowledge-Based Economy Towards Mw2063”",
    location: "ZOOM Virtual Event",
    time: "18:30 - 20:30",
    link: "/2nd-discussion",
  },
];
export default function EventsPage() {
  return (
    <>
      <section className="py-20">
        <div className="w-full max-w-7xl m-auto ">
          <div>
            <div className="px-4 grid grid-flow-row-dense xl:grid-cols-1 grid-rows-1 md:grid-cols-2 justify-center w-[100%] h-[100%] overflow-y-hidden overflow-x-auto whitespace-nowrap pb-2  scroll-smooth gap-10">
              {Events.slice(0)
                .reverse()
                .map((item: any) => {
                  return (
                    <div
                      key={item.id}
                      className=" px-4 grid grid-flow-row-dense xl:grid-cols-5 grid-rows-1 md:grid-cols-2 justify-center w-[100%] h-[100%] overflow-y-hidden overflow-x-auto whitespace-nowrap pb-2  scroll-smooth gap-10"
                    >
                      <div className="col-span-1 font-bold text-2xl text-gray-600 text-wrap">
                        {item.date}
                      </div>
                      <div className="col-span-3 overflow-hidden text-wrap">
                        <div className="font-bold text-2xl text-gray-600 pb-5">
                          {item.title}
                        </div>
                        <div>{item.description}</div>
                        <div className="justify-start flex">
                          <Link className="" to={item.link} target="_blank">
                            <div className="p-0 bg-white text-red-600 rounded-lg text-lg font-medium">
                              Details
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-span-1 text-wrap">
                        <div className=" font-bold text-2xl text-gray-600 pb-5">
                          {item.time}
                        </div>
                        <div>{item.location}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
