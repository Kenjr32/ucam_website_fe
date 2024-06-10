import Header from "./header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image from "./image/image";
import {  useLocation } from "react-router-dom";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Carousel } from "react-responsive-carousel";


import Slide1 from "../assets/images/slides/slide_01.jpg";
import Slide2 from "../assets/images/slides/slide_02.jpg";
import Slide3 from "../assets/images/slides/slide_03.jpg";

import Styles from "./LandingCarousel.module.css";

const Cover = () => {
  const router = useLocation();
  return (
    <div className="">
      <Header />
      {["/"].includes(router.pathname) && (
        <div className="py-20 ]">
          <Carousel
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
            className="relative w-[100%] h-[100%] lg:h-[500px] "
          >
            <div className="relative w-[100%] object-contain  ">
              <div>
                <Image
                  source={Slide1}
                  alt=""
                  styling="h-[500px] lg:h-[600px] w-[100%] object-cover "
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
                        "Advancing Enterprise and Innovation In Higher Education
                        for Malawi"
                      </p>
                    </div>

                    <div className={Styles.ButtonContainer}>
                      <button className="bg-transparent  hover:bg-red-600 py-2 px-2 my-1 text-white flex justify-center rounded-md text-xl md:text-lg">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[100%] object-contain  ">
              <div>
                <Image
                  source={Slide2}
                  alt=""
                  styling="h-[500px] lg:h-[600px] w-[100%] object-cover "
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
                        "Advancing Enterprise and Innovation In Higher Education
                        for Malawi"
                      </p>
                    </div>

                    <div className={Styles.ButtonContainer}>
                      <button className="bg-transparent  hover:bg-red-600 py-2 px-2 my-1 text-white flex justify-center rounded-md text-xl md:text-lg">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[100%] object-contain  ">
              <div>
                <Image
                  source={Slide3}
                  alt=""
                  styling="h-[500px] lg:h-[600px] w-[100%] object-cover "
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
                        "Advancing Enterprise and Innovation In Higher Education
                        for Malawi"
                      </p>
                    </div>

                    <div className={Styles.ButtonContainer}>
                      <button className="bg-transparent  hover:bg-red-600 py-2 px-2 my-1 text-white flex justify-center rounded-md text-xl md:text-lg">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      )}
      {["/le-centre"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${Slide1})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-30 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-start">
              <div className="text-5xl text-white font-bold pt-10">
                le-centre
              </div>
              <div className="text-xl text-white font-bold py-2">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
        </div>
      )}
      {["/faire-un-don"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${Slide2})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-30 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-start">
              <div className="text-5xl text-white font-bold pt-10">
                Faire un don
              </div>
              <div className="text-xl text-white font-bold py-2">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
        </div>
      )}
      {["/nous-joindre"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${Slide3})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-30 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-start">
              <div className="text-5xl text-white font-bold pt-10">
                nous-joindre
              </div>
              <div className="text-xl text-white font-bold py-2">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
        </div>
      )}
      {["/soutenir"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${Slide1})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-30 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-start">
              <div className="text-5xl text-white font-bold pt-10">
                soutenir
              </div>
              <div className="text-xl text-white font-bold py-2">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
        </div>
      )}
      {["/activites"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${Slide2})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-30 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-start">
              <div className="text-5xl text-white font-bold pt-10">
                activites
              </div>
              <div className="text-xl text-white font-bold py-2">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
        </div>
      )}

      <div></div>
    </div>
  );
};

export default Cover;
