import UNIMA from "../assets/images/Logos/UnimaLogo.png";
import MUBAS from "../assets/images/Logos/MUBAS lg.jpg";
import KUHES from "../assets/images/Logos/KuHES.jpg";
import LUANAR from "../assets/images/Logos/LUANAR.jpg";
import MUST from "../assets/images/Logos/MUST.jpg";
import MZUNI from "../assets/images/Logos/mzuzu_university_0.png";
import MSG from "../assets/images/Logos/MSG.jpg";
import CU from "../assets/images/Logos/CU-Logo-official.png";
import ABC from "../assets/images/Logos/ABC.png";
import MAGU from "../assets/images/Logos/Magu.png";
import MAU from "../assets/images/Logos/MAU-LOGO.png";
import MCA from "../assets/images/Logos/mca.png";
import ESAMI from "../assets/images/Logos/esami.png";
import MARBLE from "../assets/images/Logos/MHU.png";
import EXPLOITS from "../assets/images/Logos/Exploits.png";
import PLU from "../assets/images/Logos/plu.png";
import UNILIA from "../assets/images/Logos/unilia.jpg";
import JU from "../assets/images/Logos/JU.jpg";
import NKHUNI from "../assets/images/Logos/nkoma.jpg";
import UNICAF from "../assets/images/Logos/UNICAF.png";
// import HEBRON from "../assets/images/Logos/heb.jpg";
import DYUNI from "../assets/images/Logos/DYU.png";
import SKYWAY from "../assets/images/Logos/SU.jpg";
import SOUMA from "../assets/images/Logos/Souma.png";
// import UNILIL from "../assets/images/Logos/unilil_logo_circle.png";
import DMI from "../assets/images/Logos/DMI.jpg";
import EU from "../assets/images/Logos/Emmu.jpg";
import BIU from "../assets/images/Logos/BIU.jpg";
import MU from "../assets/images/Logos/Milli.png";
import UBS from "../assets/images/Logos/UBS.png";
import LAMAU from "../assets/images/Logos/lamau.png";
import ZTU from "../assets/images/Logos/ztu.png";
import { Grid } from "@mui/material";
import Image from "../components/image/image";
import { Link } from "react-router-dom";
const PublicUni = [
  {
    id: 1,
    name: "University of Malawi",
    desc: "Accredited",
    image: UNIMA,
    website: "https://www.unima.ac.mw/",
    paid: true,
  },
  {
    id: 2,
    name: "Malawi University of Business and Applied Science",
    desc: "Accredited",
    image: MUBAS,
    website: "http://www.mubas.ac.mw/",
  },
  {
    id: 3,
    name: "Kamuzu University of Health Sciences",
    desc: "Accredited",
    image: KUHES,
    website: "https://www.kuhes.ac.mw/",
  },
  {
    id: 4,
    name: "Lilongwe University of Agriculture and Natural Resources",
    desc: "Accredited",
    image: LUANAR,
    website: "http://www.luanar.ac.mw",
  },
  {
    id: 5,
    name: " Malawi University of Science and Technology",
    desc: "Accredited",
    image: MUST,
    website: "https://www.must.ac.mw/",
  },
  {
    id: 6,
    name: "Mzuzu University",
    desc: "Accredited",
    image: MZUNI,
    website: "https://www.mzuni.ac.mw/",
  },
  {
    id: 7,
    name: "Malawi School of Government",
    desc: "Accredited",
    image: MSG,
    website:
      "https://www.nccedu.com/study-centres/malawi-institute-of-management-mim/",
  },
  {
    id: 8,
    name: "Malawi College of Accountancy",
    desc: "Accredited",
    image: MCA,
    website: "https://www.mca.ac.mw/",
  },
  {
    id: 9,
    name: "Eastern and Southern Africa Management Institute",
    desc: "Accredited",
    image: ESAMI,
    website: "https://esami-africa.org/",
  },
];
const PrivateUni = [
  {
    id: 1,
    name: "UNICAF University ",
    desc: "Accredited",
    image: UNICAF,
    website: "https://unicafuniversity.ac.mw/",
    paid: true,
  },

  {
    id: 2,
    name: " African Bible College",
    desc: "Accredited",
    image: ABC,
    website: "https://africanbiblecolleges.com/abcmalawi",
  },
  {
    id: 3,
    name: "Malawi Assemblies of God University",
    desc: "Accredited",
    image: MAGU,
    website: "https://magu.ac.mw/",
  },
  {
    id: 4,
    name: "Malawi Adventist University",
    desc: "Accredited",
    image: MAU,
    website: "https://www.mau.ac.mw/",
  },
  {
    id: 5,
    name: " The Catholic University of Malawi",
    desc: "Accredited",
    image: CU,
    website: "https://www.cunima1.online/",
  },
  {
    id: 6,
    name: "Marble Hill University",
    desc: "Accredited",
    image: MARBLE,
    website: "http://www.marblehilluniversity.ac.mw/",
  },

  {
    id: 7,
    name: "Pentecostal Life University",
    desc: "Accredited",
    image: PLU,
    website: "https://www.plu.mw/",
  },
  {
    id: 8,
    name: "University of Livingstonia",
    desc: "Accredited",
    image: UNILIA,
    website: "https://www.unilia.ac.mw/",
  },
  {
    id: 9,
    name: "DMI St John the Baptist University",
    desc: "Accredited",
    image: DMI,
    website: "https://www.dmisjbu.edu.mw/",
  },

  {
    id: 10,
    name: "Exploits University",
    desc: "Accredited",
    image: EXPLOITS,
    website: "https://www.exploitsmw.com/",
  },
  {
    id: 11,
    name: "Nkhoma University",
    desc: "Accredited",
    image: NKHUNI,
    website: "https://www.nkhoma.ac.mw/",
  },
  // {
  //   id: 12,
  //   name: "University of Hebron ",
  //   desc: "Accredited",
  //   image: HEBRON,
  //   website: "https://uhb.ac.mw/",
  // },
  {
    id: 13,
    name: "Deayang University",
    desc: "Accredited",
    image: DYUNI,
    website: "https://www.dyuni.ac.mw/",
  },
  {
    id: 14,
    name: "Skyway University",
    desc: "Accredited",
    image: SKYWAY,
    website: "https://www.skywayuniversity.com/",
  },
  {
    id: 15,
    name: "ShareWORLD Open University",
    desc: "Accredited",
    image: SOUMA,
    website: "https://souma.ac.mw/",
  },
  // {
  //   id: 16,
  //   name: " University of Lilongwe",
  //   desc: "Accredited",
  //   image: UNILIL,
  //   website: "https://unilil.ac.mw/",
  // },
  {
    id: 17,
    name: "Jubilee University",
    desc: "Accredited",
    image: JU,
    website: "https://www.jubileeuniversity.ac.mw/",
  },
  {
    id: 18,
    name: "Emmanuel University",
    desc: "Accredited",
    image: EU,
    website: "https://emmanueluniversitymw.org/",
  },
  {
    id: 20,
    name: "Blantyre International University",
    desc: "Accredited",
    image: BIU,
    website: "https://www.biu-edu.com/",
  },
  {
    id: 21,
    name: "Millenium University",
    desc: "Accredited",
    image: MU,
    website: "https://www.mu.ac.mw/",
  },
  {
    id: 22,
    name: " University of Blanytre Synod",
    desc: "Accredited",
    image: UBS,
    website: "http://ubsmw.com/",
  },
  {
    id: 23,
    name: "Lake Malawi Anglican University",
    desc: "Accredited",
    image: LAMAU,
    website: "https://lamau.edu.mw/",
  },
  {
    id: 24,
    name: "Zomba Theological University",
    desc: "Accredited",
    image: ZTU,
    website: "http://www.zombatheological.org/",
  },
];

export default function Institutions() {
  return (
    <>
      <div>
        <section className="w-full text-black py-20 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                UNIVERSITIES AND COLLEGES
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
              <div className="text-lg">
                Following are the Universities and Colleges that are registered
                with NCHE and eligible for membership:
              </div>
            </section>
          </div>
        </section>
        <section className="w-full text-black py-1 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-2">
              <div className="text-xl font-bold text-black text-center">
                PUBLIC UNIVERSITIES AND COLLEGES
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full space-y-9 justify-center flex my-20 ">
          <div className="max-w-7xl  ">
            <Grid container spacing={5}>
              {PublicUni.map((item) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={4}
                    key={item.id}
                    className=" block  align-middle items-center col-span-1 py-5  "
                  >
                    <div className="bg-white border-2 border-spacing-1 border-gray-100 my-2 rounded-xl shadow-xl w-full   h-[450px]">
                      <div className=" align-middle items-center overflow-hidden rounded-lg w-full ">
                        <div className="bg-white h-72 p-10 flex justify-center rounded-t-lg overflow-hidden w-full object-contain items-center align-middle">
                          <Image
                            source={item.image}
                            alt=""
                            styling=" items-center justify-center h-[100%] items-center object-contain"
                          />
                        </div>
                      </div>
                      <div className=" px-2 justify-center flex w-full h-46 bg-white">
                        <div>
                          <div className="mb-8 h-8 text-lg font-semibold flex justify-center text-center">
                            {item.name}
                          </div>
                          {/* <div className="h-[20%]  text-md font-normal flex justify-center text-center">
                            {item.desc}
                          </div> */}
                          {item.paid ? (
                            <div className=" items-center flex justify-center mb-2 text-white ">
                              <div
                                className="w-36  bg-green-500 text-center rounded-md p-2"
                              
                              >
                                Paid Member
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
                          <div className=" items-center flex justify-center   text-white ">
                            <Link
                              className="w-36 hover:cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-500 bg-blue-500 text-center rounded-md p-2"
                              to={item.website}
                              target="_blank"
                            >
                              Visit Website
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </section>
        <section className="w-full text-black py-1 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-2">
              <div className="text-xl font-bold text-black text-center">
                PRIVATE UNIVERSITIES AND COLLEGES
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full space-y-9 justify-center flex my-20 ">
          <div className="max-w-7xl  ">
            <Grid container spacing={5}>
              {PrivateUni.map((item) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={4}
                    key={item.id}
                    className=" block  align-middle items-center col-span-1 py-5  "
                  >
                    <div className="bg-white border-2 border-spacing-1 border-gray-100 my-2 rounded-xl shadow-xl w-full   h-[450px]">
                      <div className=" align-middle items-center overflow-hidden rounded-lg w-full ">
                        <div className="bg-white h-72 p-10 flex justify-center rounded-t-lg overflow-hidden w-full object-contain items-center align-middle">
                          <Image
                            source={item.image}
                            alt=""
                            styling=" items-center justify-center h-[100%] items-center object-contain"
                          />
                        </div>
                      </div>
                      <div className=" px-2 justify-center flex w-full h-46 bg-white">
                        <div>
                          <div className="mb-8 h-8   text-lg font-semibold flex justify-center text-center">
                            {item.name}
                          </div>
                          {/* <div className="h-[20%]  text-md font-normal flex justify-center text-center">
                            {item.desc}
                          </div> */}
                          {item.paid ? (
                            <div className=" items-center flex justify-center mb-2 text-white ">
                              <div
                                className="w-36  bg-green-500 text-center rounded-md p-2"
                              
                              >
                                Paid Member
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
                          <div className=" items-center flex justify-center   text-white ">
                            <Link
                              className="w-36 hover:cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-500 bg-blue-500 text-center rounded-md p-2"
                              to={item.website}
                              target="_blank"
                            >
                              Visit Website
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </section>
      </div>
    </>
  );
}
