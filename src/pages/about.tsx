import React from "react";
import Service1 from "../assets/images/services/team_01.jpg";
import Service2 from "../assets/images/services/team_02.jpg";
import Service3 from "../assets/images/services/team_03.jpg";
import Service4 from "../assets/images/services/team_03.jpg";
import Image from "../components/image/image";
import About1 from "../assets/images/services/service_02red.jpg";
import About2 from "../assets/images/services/service_02r.jpg";
import About3 from "../assets/images/services/missred.jpg";
const Services = [
  {
    id: 1,
    image: Service1,
    title: "Training and Conferences",
    description:
      "UCAM leverages the large pool of talented educators and academic leaders to host conferences and cutting-edge training for innovation and excellence in Higher Education. ",
  },
  {
    id: 2,
    image: Service2,
    title: "Faculty Mentoring",
    description:
      "Malawi has a pool of talented professors and lectures. UCAM will link interested faculty with national and international mentors with the goal of increasing classroom learning outcomes.",
  },
  {
    id: 3,
    image: Service3,
    title: "Quality Enhancement",
    description:
      "Quality is key to successful educational outcomes. UCAM assists institutions and programmes in capacity building for excellence in Higher Education.",
  },
  {
    id: 4,
    image: Service4,
    title: "Democracy building",
    description:
      "UCAM is the civil society arm of higher education in Malawi. This is where all have voice in the future of our Universities and Colleges. ",
  },
];

const Abouts = [
  {
    id: 1,
    image: About1,
    title: "Our Leadership Trustees",
    description:
      "We have a great Board of Trustees who are elected by the annual general assembly. Our Trustees come from both public and private higher education institutions in Malawi. ",
  },
  {
    id: 2,
    image: About2,
    title: "Our History",
    description:
      "UCAM was created at the first International Conference on Higher Education in Malawi held at Sunbird Nkopola Lodge in Mangochi from 27th to 29th June 2018. It was attended by 112 delegates from within Malawi and abroad. A total of 34 Higher Education Institutions (hereinafter, HEIs) and stakeholder organisations participated.",
  },
  {
    id: 3,
    image: About3,
    title: "Our Mission",
    description:
      "We focus on making the maximum positive effort for our UCAM member services. Our staff and volunteers provide the momentum that helps us affect change. Using data-driven, evidence-based models, we provide educational solutions that make a long-lasting difference in academic outcomes.",
  },
];

export default function About() {
  return (
    <>
      <div>
        <section className="w-full text-black pt-10 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                UCAM BACKGROUND
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full px-5 text-black py-20 bg-white items-center flex justify-center">
          <div className=" bg-white max-w-7xl  ">
            <div className="w-full">
              <div className="font-normal">
                UCAM was created at the first International Conference on Higher
                Education in Malawi held at Sunbird Nkopola Lodge in Mangochi
                from 27th to 29th June 2018. It was attended by 112 delegates
                from within Malawi and abroad. A total of 34 Higher Education
                Institutions (hereinafter, HEIs) and stakeholder organisations
                participated.
              </div>
              <div className="font-normal py-4">
                The 2018 Nkopola Lodge Conference was organised by public and
                private universities in Malawi, including, representatives from
                the Association of Private Universities Malawi; Ministry of
                Education, Science and Technology; National Council for Higher
                Education and Friends of Higher Education.
              </div>
              <div>
                In 2018, the conference theme was 'Higher Education in the 21st
                Century. The conference aimed at bringing academics, higher
                education managers, policymakers and other stakeholders together
                to discuss opportunities and challenges facing Higher Education
                in the 21st Century. Participants and paper presenters shared
                experiences, opportunities, and best practices on how to deal
                with the challenges. It was clear that our community needed to
                interface routinely, hence the idea was born to propose the
                establishment of an association at the national level to promote
                HEI issues. The Association has since been established and
                annual conferences are now part of the Association's agenda.
              </div>
              <div className="font-normal py-4">
                The overall control, accountability and responsibility related
                to policy for UCAM operations are exercised on behalf of UCAM by
                the Board of Trustees. Trustees are unpaid members. The day to
                day operations of UCAM is undertaken by the Secretariat whose
                duties and responsibilities are spelt out in UCAM Conditions of
                Service. The Secretariat headed by the Executive Director who is
                also the Secretary to the Board.
              </div>

              <div className="font-normal py-4">
                While UCAM is an emerging organization, the Board of Trustees is
                comprised of highly seasoned senior leadership from Malawi's top
                Public and Private Universities. This team takes an active
                leadership role in the management and oversight of the
                association.
              </div>
            </div>
          </div>
        </section>
        <section className="w-full text-black py-10 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                OUR SERVICES
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full text-black py-10 bg-white">
          <div className="w-full max-w-7xl m-auto flex justify-center items-center ">
            <div>
              <div className=" items-center align-middle  px-4 grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 grid-rows-1 md:grid-cols-2 justify-center w-[100%] h-[100%] overflow-y-hidden overflow-x-auto whitespace-nowrap pb-2  scroll-smooth gap-10">
                {Services.map((item: any) => {
                  return (
                    <div
                      key={item.id}
                      className="col-span-1   items-center justify-center max-w-80 w-[100%] h-[100%] overflow-y-hidden overflow-x-auto whitespace-nowrap pb-2  scroll-smooth gap-10"
                    >
                      <div className="">
                        <div className=" flex justify-center h-[100%] w-[100%]  overflow-hidden  object-fill items-center align-middle pb-4">
                          <Image
                            source={item.image}
                            alt=""
                            styling=" items-center justify-center h-full w-full object-contain"
                          />
                        </div>
                        <div className="  col-span-1 overflow-hidden text-wrap">
                          <div className="font-bold text-2xl text-gray-600 pb-5">
                            {item.title}
                          </div>
                          <div>{item.description}</div>
                          <div className="justify-start flex"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full text-black py-10 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                ABOUT
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full text-black py-10 bg-white">
          <div className="w-full max-w-7xl m-auto flex justify-center items-center ">
            <div>
              <div className=" items-center align-middle   px-4 grid grid-flow-row-dense lg:grid-cols-3 grid-rows-1 md:grid-cols-2 justify-center w-[100%] h-[100%] overflow-y-hidden overflow-x-auto whitespace-nowrap pb-2  scroll-smooth gap-10">
                {Abouts.map((item: any) => {
                  return (
                    <div
                      key={item.id}
                      className="col-span-1   items-center justify-center max-w-80 w-[100%] h-[100%] overflow-y-hidden overflow-x-auto whitespace-nowrap pb-2  scroll-smooth gap-10"
                    >
                      <div className="">
                        <div className=" flex justify-center h-[100%] w-[100%]  overflow-hidden  object-fill items-center align-middle pb-4">
                          <Image
                            source={item.image}
                            alt=""
                            styling=" items-center justify-center h-full w-full object-contain"
                          />
                        </div>
                        <div className="  col-span-1 overflow-hidden text-wrap">
                          <div className="font-bold text-2xl text-gray-600 pb-5">
                            {item.title}
                          </div>
                          <div>{item.description}</div>
                          <div className="justify-start flex"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
