
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
    // link: "/conference",
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
    // link: "/scholars",
  },
  {
    id: 3,
    date: "23 & 24 NOVEMBER 2022",
    title: "Malawi's 3rd International Conference On Higher Education",
    description:
      "Universities and Colleges as Drivers of Knowledge-Based Economy in Implementing Malawi 2063 Vision",
    location: "MIM Campus",
    time: "Two Day Event Ending in the Evenings",
    // link: "/3rd-conference",
  },
  {
    id: 4,
    date: "17th JANUARY 2023",
    title: "Higher Education Discussion Platform",
    description:
      "Continuation of the debate on Universities & Colleges being drivers of a Knowledge-Based Economy towards MW2063",
    location: "ZOOM Virtual Event",
    time: "18:30 - 20:30",
    // link: "/discussion",
  },
  {
    id: 5,
    date: "16th FEBRUARY 2023",
    title: "Panel Discussion with Private Sector",
    description:
      "“Forging A Better Partnership Between Industry and Higher Education Institutions for A Knowledge-Based Economy Towards Mw2063”",
    location: "ZOOM Virtual Event",
    time: "18:30 - 20:30",
    // link: "/2nd-discussion",
  },
  {
    id: 6,
    date: "20th August 2024",
    date2: "27th August 2024",
    title: "Fundraising for Higher Education: ",
    description: "Unlocking Potential, Transforming Futures",
    location2: "Lilongwe",
    location:"Blantyre",
    time: "18:30 - 20:30",
    link: "/event-fundraising",
  },
  {
    id: 7,
    date: "21st August 2024",
    date2: "28th August 2024",
    title: "Maximising Funding:  ",
    description: "Mastering the Art of Grant Writing",
    location: "Blantyre",
    location2:"Lilongwe",
    time: "18:30 - 20:30",
    link: "/event-maximizing-funding",
  },
];
export default function EventsPage() {
  return (
    <>
      <section className="py-20">
        <div className="w-full max-w-7xl m-auto ">
          <div>
            <div className="px-4 grid grid-flow-row-dense xl:grid-cols-1 grid-rows-1 md:grid-cols-1 justify-center w-[100%] h-[100%] overflow-y-hidden overflow-x-auto whitespace-nowrap pb-2  scroll-smooth gap-10">
              {Events.slice(0)
                .reverse()
                .map((item: any) => {
                  return (
                    <div
                      key={item.id}
                      className="py-10 col-span-1 grid grid-flow-row-dense  lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4"
                    >
                      <div className="lg:col-span-4 md:col-span-4 sm:col-span-4 overflow-hidden text-wrap">
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
                      <div className="lg:col-span-1 md:col-span-1 sm:col-span-4 font-bold text-xl text-gray-600 text-wrap">
                        <div> {item.date}</div>
                        <div className="text-lg">{item.location}</div>
                        <div className="pt-5"> {item.date2}</div>
                        <div className="text-lg">{item.location2}</div>
                      </div>
                      <div className="flex justify-center lg:col-span-5  md:col-span-5 sm:col-span-5">
                        <div className="border-2 border-gray-200 w-10"></div>
                        <div className="border-2 border-red-600 w-10"></div>
                        <div className="border-2 border-gray-200 w-10"></div>
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
