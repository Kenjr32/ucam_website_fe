import React, { useState } from 'react';
import Card from "../components/card";
import Presenter1 from "../assets/images/events/DSC_1553.jpg"
import Presenter2 from "../assets/images/events/DSC_1633.jpg";
import Presenter3 from "../assets/images/events/DSC_1560.jpg";
import Presenter4 from "../assets/images/events/DSC_1574.jpg";
import Presenter5 from "../assets/images/events/DSC_1630.jpg";
import Presenter6 from "../assets/images/events/DSC_1803.jpg";
import Presenter7 from "../assets/images/events/DSC_1809.jpg";
import Presenter8 from "../assets/images/events/DSC_1819.jpg";
import Presenter9 from "../assets/images/events/DSC_1828.jpg";
import Presenter10 from "../assets/images/events/DSC_0011.jpg";
import Presenter11 from "../assets/images/events/DSC_0022.jpg";
import Presenter12 from "../assets/images/events/DSC_0033.jpg";
import Presenter13 from "../assets/images/events/DSC_0107.jpg";
import Presenter14 from "../assets/images/events/DSC_0121.jpg";
import Presenter15 from "../assets/images/events/DSC_0323.jpg";
import Presenter16 from "../assets/images/events/DSC_0175.jpg";
import Presenter17 from "../assets/images/events/DSC_0208.jpg";
import Presenter18 from "../assets/images/events/DSC_0583.jpg";

const Activities = [
  {
    id: 1,
    description: "MIM Welcomes UCAM Conference Delegates",
    conference: "3rd International Conference",
    image: Presenter1,
  },
  {
    id: 2,
    description: "Hon. Minister delivers inspiring speech to HEIs",
    conference: "3rd International Conference",
    image: Presenter2,
  },
  {
    id: 3,
    description:
      "UCAM President introduces the deleagtes to the agenda of the conference.",
    conference: "3rd International Conference",
    image: Presenter3,
  },
  {
    id: 4,
    description:
      "NPC DG chimes in on the importance of human capital development & labour skills.",
    conference: "3rd International Conference",
    image: Presenter4,
  },
  {
    id: 5,
    description:
      "Director of Higher Education appreciates the work put in by UCAM.",
    conference: "3rd International Conference",
    image: Presenter5,
  },
  {
    id: 6,
    description:
      "Prof. Masanjala detailed the divide between what is being taught and what is expected in the workplace.",
    conference: "3rd International Conference",
    image: Presenter6,
  },
  {
    id: 7,
    description:
      "MSU Delegates present plans, structures and implemntations of the USAID THES project.",
    conference: "3rd International Conference",
    image: Presenter7,
  },
  {
    id: 8,
    description:
      "MSU Delegates present plans, structures and implemntations of the USAID THES project.",
    conference: "3rd International Conference",
    image: Presenter8,
  },
  {
    id: 9,
    description:
      "MSU Delegates present plans, structures and implemntations of the USAID THES project.",
    conference: "3rd International Conference",
    image: Presenter9,
  },
  {
    id: 10,
    description: "Executives Meet & Greet",
    conference: "2nd International Conference",
    image: Presenter10,
  },
  {
    id: 11,
    description: "Leaders Meeting Before Conference",
    conference: "2nd International Conference",
    image: Presenter11,
  },
  {
    id: 12,
    description: "Guest of Honour & Sponsors",
    conference: "2nd International Conference",
    image: Presenter12,
  },
  {
    id: 13,
    description: "Delegates",
    conference: "2nd International Conference",
    image: Presenter13,
  },
  {
    id: 14,
    description: "Delegates",
    conference: "2nd International Conference",
    image: Presenter14,
  },
  {
    id: 15,
    description: "Delegates",
    conference: "2nd International Conference",
    image: Presenter15,
  },
  {
    id: 16,
    description: "HEIs United in the aftermath of the COVID Pandemic",
    conference: "2nd International Conference",
    image: Presenter16,
  },
  {
    id: 17,
    description: "NCHE's Exhibition Display during the Conference",
    conference: "2nd International Conference",
    image: Presenter17,
  },
  {
    id: 18,
    description: "Presenter",
    conference: "2nd International Conference",
    image: Presenter18,
  },
];
export default function Gallery() {

    const [activitiesItems, setActivitiesItems] = useState(
      Activities.map((item) => ({ ...item, isHover: false }))
    );
    const handleMouseEnter = (itemId: any) => {
      setActivitiesItems((prevItems:any) =>
        prevItems.map((item:any) =>
          item.id === itemId ? { ...item, isHover: true } : item
        )
      );
    };
    const handleMouseLeave = (itemId: any) => {
      setActivitiesItems((prevItems:any) =>
        prevItems.map((item:any) =>
          item.id === itemId ? { ...item, isHover: false } : item
        )
      );
    };
  return (
    <>
      <div>
        <section className="py-20">
          <div className="w-full max-w-7xl m-auto ">
            {Activities && Activities.length > 0 && (
              <div className=" items=center px-4 grid grid-flow-row-dense xl:grid-cols-3 lg:grid-cols-2 grid-rows-1 md:grid-cols-1  justify-center w-[100%] h-[100%] overflow-y-hidden overflow-x-auto whitespace-nowrap pb-2  scroll-smooth gap-10">
                {activitiesItems.map((item) => {
                  return (
                    <div key={item.id} className="flex justify-center  ">
                      <Card
                        mouseEnter={() => handleMouseEnter(item.id)}
                        mouseLeave={() => handleMouseLeave(item.id)}
                        id={item.id}
                        image={item.image}
                        conference={item.conference}
                        description={item.description}
                        hover={item.isHover}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
