import { useEffect } from "react";
import Grid from "@mui/material/Grid";

import Box from "../components/box";
import Styles from "./home.module.css";
import Image from "../components/image/image";
import ObjectiveCard from "../components/ObjectiveCard";
import PartnersCarousel from "../components/PartnersCarousel";
import Homepage from "../assets/images/homepage/Malawi graduation ceremony.jpg";
import Banner from "../components/banner";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Banner/>
      <div>
        <section className="w-full text-black py-20 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                WELCOME TO UC
                <span className="text-[#BE0B32]">A</span>
                <span className="text-[#1a7c22]">M</span>
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="space-y-9 w-full flex justify-center">
          <div className="flex gap-10 flex-col max-w-7xl">
            <div>
              <div className={Styles.Grid4}>
                <div className={Styles.Grid4Items}>
                  <Box
                    title={<div></div>}
                    key="11"
                    description={
                      <div>
                        Welcome to the virtual home for the Universities and
                        Colleges Association of Malawi (UCAM). Where the aim of
                        our membership-based association is to provide a
                        platform of common interest for reflection,
                        consultation, debates, cooperation and collaboration for
                        the advancement of all higher education in Malawi.
                      </div>
                    }
                    link=""
                    box_styling={Styles.SoftwareBoostBox}
                    description_styling={Styles.CustomizedSystemText}
                    button_styling="p-2 bg-white hover:bg-[#BE0B32] hover:text-white text-xl border-2 text-red-600 rounded-3xl mt-4  text-center justify-center align-center items-center"
                    button_text="Read More"
                  />
                </div>
                <div className={Styles.Grid4Items}>
                  <div className={Styles.Grid4Image}>
                    <Image
                      source={Homepage}
                      alt="Homepage"
                      styling={Styles.Image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full text-black py-20 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-9">
              <div className="text-3xl font-bold text-black text-center">
                OBJECTIVES OF THE ASSOCIATION INCLUDE:
              </div>
            </section>
          </div>
        </section>
        <section className="w-full space-y-9 justify-center flex ">
          <div className="max-w-7xl">
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <ObjectiveCard
                  number="01"
                  objective='"To serve as an inter-university and college organization for both public and private higher education institutions in Malawi"'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <ObjectiveCard
                  number="02"
                  objective='"To contribute to Malawi’s higher education policy formulation and review"'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <ObjectiveCard
                  number="03"
                  objective='"To promote and facilitate networking, collaboration and experience sharing in teaching, learning, research, community service/outreach and industry engagement"'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <ObjectiveCard
                  number="04"
                  objective='"To enhance leadership and institutional management capacity"'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <ObjectiveCard
                  number="05"
                  objective='"To facilitate effective dialogue among universities, colleges and other stakeholders on issues affecting higher education"'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                {" "}
                <ObjectiveCard
                  number="06"
                  objective='"To organize fora for the dissemination of research on key issues affecting higher education in Malawi"'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <ObjectiveCard
                  number="07"
                  objective='"To establish a Secretariat that is effective, efficient and sustainable for the pursuit of the Association’s goals"'
                />
              </Grid>
            </Grid>
          </div>
        </section>
        <section className="w-full text-black py-20 bg-white justify-center flex">
          <div className="w-full max-w-7xl px-1 items-center flex justify-center">
            <section className="space-y-5">
              <div className="text-3xl font-bold text-black text-center">
                OUR PARTNERS
              </div>
              <div className="font-medium">
                We have partnered with the following organisations and
                companies:
              </div>
            </section>
          </div>
        </section>
        <section className="w-full space-y-9 py-10 justify-center flex bg-white">
          <div className="max-w-7xl overflow-hidden">
            <PartnersCarousel />
          </div>
        </section>
        <section></section>
      </div>
    </>
  );
}
