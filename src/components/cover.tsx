import Header from "./header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "./image/image";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Carousel } from "react-responsive-carousel";

import Slide1 from "../assets/images/slides/slide_01.jpg";
import Slide2 from "../assets/images/slides/slide_02.jpg";
import Slide3 from "../assets/images/slides/slide_03.jpg";
import CoverImg from "../assets/images/cover/darken_cap.jpeg";
import Styles from "./LandingCarousel.module.css";

const Cover = () => {
  const router = useLocation();
  const navigate = useNavigate();
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
            className="relative w-[100%] h-[100%] lg:h-[800px] "
          >
            <div className="relative w-[100%] object-contain  h-full">
              <div>
                <Image
                  source={Slide1}
                  alt=""
                  styling=" lg:h-[800px] h-[500px] w-[100%] object-cover "
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
                      <button
                        onClick={() => navigate("/contact")}
                        className="bg-transparent  hover:bg-red-600 py-2 px-2 my-1 text-white flex justify-center rounded-md text-xl md:text-lg"
                      >
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
                        "Advancing Enterprise and Innovation In Higher Education
                        for Malawi"
                      </p>
                    </div>

                    <div className={Styles.ButtonContainer}>
                      <button
                        onClick={() => navigate("/contact")}
                        className="bg-transparent  hover:bg-red-600 py-2 px-2 my-1 text-white flex justify-center rounded-md text-xl md:text-lg"
                      >
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
      {["/about"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">About</div>
            </div>
          </div>
        </div>
      )}
      {["/contact"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                Contact Us!
              </div>
            </div>
          </div>
        </div>
      )}
      {["/donate"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">Donate</div>
            </div>
          </div>
        </div>
      )}
      {["/events"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">Events</div>
            </div>
          </div>
        </div>
      )}
      {["/gallery"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">Gallery</div>
            </div>
          </div>
        </div>
      )}
      {["/institutions"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                Institutions
              </div>
            </div>
          </div>
        </div>
      )}
      {["/join-us"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">Join Us</div>
            </div>
          </div>
        </div>
      )}
      {["/online-application"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                Online Application
              </div>
            </div>
          </div>
        </div>
      )}
      {["/partners"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                Partners
              </div>
            </div>
          </div>
        </div>
      )}
      {["/resources"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                Resources
              </div>
            </div>
          </div>
        </div>
      )}
      {["/trustees"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                Meet Our Trustees
              </div>
            </div>
          </div>
        </div>
      )}
      {["/available-jobs"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                Available Jobs
              </div>
            </div>
          </div>
        </div>
      )}
      {["/internship"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                Internship
              </div>
            </div>
          </div>
        </div>
      )}
      {["/volunteer"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                Volunteer
              </div>
            </div>
          </div>
        </div>
      )}
      {["/conference"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                1st Conference
              </div>
            </div>
          </div>
        </div>
      )}
      {["/scholars"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                Scholars
              </div>
            </div>
          </div>
        </div>
      )}
      {["/3rd-conference"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                3rd Conference
              </div>
            </div>
          </div>
        </div>
      )}
      {["/discussion"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                1st Panel Discussion
              </div>
            </div>
          </div>
        </div>
      )}
      {["/2nd-discussion"].includes(router.pathname) && (
        <div
          className=" overflow-hidden justify-center flex"
          style={{
            backgroundImage: `url(${CoverImg})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="bg-black bg-opacity-0 w-full">
            <div className="  max-w-6xl  m-auto h-[70vh] justify-center flex flex-col items-center">
              <div className="text-5xl text-white font-bold pt-10">
                2nd Panel Discussion
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
