import Image from "../components/image/image";
import Styles from "../components/LandingCarousel.module.css";
import StylesHome from "./home.module.css";
import Box from "../components/box";
import Team from "../assets/images/events/DSC_0175.jpg";
// import Finance from "../assets/resources/Files/UCAM Job Advert.pdf";
import { Carousel } from "react-responsive-carousel";
import Slide2 from "../assets/images/slides/slide_02.jpg";
import VolPic from "../assets/images/volunteer/volunteer.jpg";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
export default function Volunteer() {
  return (
    <>
      <div>
        <section className="w-full text-black py-20 bg-white ">
          <div className="w-full max-w-7xl m-auto items-center flex justify-center">
            <section className="space-y-4">
              <div className="text-3xl font-bold text-black text-center">
                WHY NOT JOIN US AT UC
                <span className="text-[#BE0B32]">A</span>
                <span className="text-[#1a7c22]">M</span>
              </div>
              <div className="justify-center flex items-center font-medium">
                TOGETHER WE CAN ACHIEVE EXCELLENCE!
              </div>
              <div className="flex justify-center">
                <div className="border-2 border-gray-200 w-10"></div>
                <div className="border-2 border-red-600 w-10"></div>
                <div className="border-2 border-gray-200 w-10"></div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full text-black py-20 bg-white ">
          <div className="w-full  mx-auto items-center flex justify-center">
            {" "}
            <div className="relative w-[100%] object-contain  ">
              <Carousel
                interval={5000}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                dynamicHeight={true}
                renderArrowPrev={(clickHandler, hasPrev) => {
                  return (
                    <div
                      className={`${
                        hasPrev ? "absolute" : "hidden"
                      } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                      onClick={clickHandler}
                    >
                      <ArrowBackIosNewRoundedIcon
                        className="text-white font-bold"
                        style={{ fontSize: 40 }}
                      />
                    </div>
                  );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                  return (
                    <div
                      className={`${
                        hasNext ? "absolute" : "hidden"
                      } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                      onClick={clickHandler}
                    >
                      <ArrowForwardIosRoundedIcon
                        className="text-white font-bold"
                        style={{ fontSize: 40 }}
                      />
                    </div>
                  );
                }}
                width="100%"
                className="relative w-[100%] h-[100%] lg:h-[800px] "
              >
                <div className="relative w-[100%] object-contain  ">
                  <div>
                    <Image
                      source={Slide2}
                      alt=""
                      styling="h-[500px] lg:h-[800px] w-[100%] object-cover "
                    />
                  </div>

                  <div className="absolute inset-0 flex justify-center items-center py-10  px-4 lg:px-20 bg-black bg-opacity-30 ">
                    <div className="  h-[40%]  w-[100%] max-w-7xl md:px-12 bg-transparent">
                      <div className="h-[100%] w-[100%]  grid xl:justify-center xl:py-5 py-0 xl:items-start lg:items-center items-start">
                        <div className={Styles.Heading}>
                          <p>TOGETHER WE CAN ACHIEVE EXCELLENCE!</p>
                        </div>
                        <div className={Styles.Description}>
                          <p>
                            "Advancing Enterprise and Innovation In Higher
                            Education for Malawi"
                          </p>
                        </div>
                        <div className={Styles.ButtonContainer}>
                          <button
                            onClick={() =>
                              window.open(
                                "https://docs.google.com/forms/d/e/1FAIpQLSe2Ys19boGll__9u-IwkWeArgtq8LsilTLaVwYJknBHFAmqSw/viewform?usp=sf_link",
                                "_blank",
                                "rel=noopener noreferrer"
                              )
                            }
                            className="bg-transparent border border-white hover:bg-red-600 py-2 px-2 my-1 text-white flex justify-center rounded-md text-xl md:text-lg"
                          >
                            <div className=" w-full h-full">Join Us</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[100%] object-contain  ">
                  <div>
                    <Image
                      source={VolPic}
                      alt=""
                      styling="h-[500px] lg:h-[800px] w-[100%] object-cover "
                    />
                  </div>

                  <div className="absolute inset-0 flex justify-center items-center py-10  px-4 lg:px-20 bg-black bg-opacity-30 ">
                    <div className="  h-[40%]  w-[100%] max-w-7xl md:px-12 bg-transparent">
                      <div className="h-[100%] w-[100%]  grid xl:justify-center xl:py-5 py-0 xl:items-start lg:items-center items-start">
                        <div className={Styles.Heading}>
                          <p>TOGETHER WE CAN ACHIEVE EXCELLENCE!</p>
                        </div>
                        <div className={Styles.Description}>
                          <p>
                            "Advancing Enterprise and Innovation In Higher
                            Education for Malawi"
                          </p>
                        </div>

                        <div className={Styles.ButtonContainer}>
                          <button
                            onClick={() =>
                              window.open(
                                "https://docs.google.com/forms/d/e/1FAIpQLSe2Ys19boGll__9u-IwkWeArgtq8LsilTLaVwYJknBHFAmqSw/viewform?usp=sf_link",
                                "_blank",
                                "rel=noopener noreferrer"
                              )
                            }
                            className="bg-transparent border-white border hover:bg-red-600 py-2 px-2 my-1 text-white flex justify-center rounded-md text-xl md:text-lg"
                          >
                            <div className=" w-full h-full">Join Us</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        <section className="space-y-9 w-full flex justify-center py-10">
          <div className="flex gap-10 flex-col max-w-7xl">
            <div>
              <div className={StylesHome.Grid4}>
                <div className={StylesHome.Grid4Items}>
                  <Box
                    title={<div></div>}
                    key="11"
                    description={
                      <div>
                        Do you have five or more years' professional experience
                        in Higher Education? Come Volunteer with us as trustees,
                        on short term projects or with an ongoing commitment.
                      </div>
                    }
                    link=""
                    box_styling={StylesHome.SoftwareBoostBox}
                    description_styling={StylesHome.CustomizedSystemText}
                    button_styling="p-2 bg-white hover:bg-[#BE0B32] hover:text-white text-xl border-2 text-red-600 rounded-3xl mt-4  text-center justify-center align-center items-center"
                    button_text={
                      <div className="w-full h-full">
                        <div
                          onClick={() =>
                            window.open(
                              "https://docs.google.com/forms/d/e/1FAIpQLSe2Ys19boGll__9u-IwkWeArgtq8LsilTLaVwYJknBHFAmqSw/viewform?usp=sf_link",
                              "_blank",
                              "rel=noopener noreferrer"
                            )
                          }
                          className=" w-full h-full"
                        >
                          Join Us
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className={StylesHome.Grid4Items}>
                  <div className={StylesHome.Grid4Image}>
                    <Image
                      source={Team}
                      alt="team"
                      styling={StylesHome.Image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
