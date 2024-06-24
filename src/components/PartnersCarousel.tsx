import React, { ReactNode, useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./cardSlider.module.css";
import NCST from "../assets/images/clients/client-en.png";
import NCHE from "../assets/images/clients/nche.png";
import USAID from "../assets/images/clients/usaid.png";
import GOV from "../assets/images/clients/gov.png";
import LOAN from "../assets/images/clients/loan.png";
import AIRTEL from "../assets/images/clients/airtel.png";
import TNM from "../assets/images/clients/tnm.png";
import ACU from "../assets/images/clients/acu.png";
import WORLDB from "../assets/images/clients/worldb.png";
import AFR from "../assets/images/clients/afr.png";
import AFRUNI from "../assets/images/clients/afruni.png";
import SARUA from "../assets/images/clients/SARUA.png";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Button } from "@mui/material";
import Image from "../components/image/image";
import { Col, Row } from "react-bootstrap";
const PartnersCarousel = () => {
  const ref: any = useRef(null);
  const scroll = (scrollOffset: any) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const partners = [
    {
      id: 1,
      name: "NCST",
      image: NCST,
    },
    {
      id: 2,
      name: "NCHE",
      image: NCHE,
    },
    {
      id: 3,
      name: "USAID",
      image: USAID,
    },
    {
      id: 4,
      name: "GOV",
      image: GOV,
    },
    {
      id: 5,
      name: "LOAN",
      image: LOAN,
    },
    {
      id: 6,
      name: "AIRTEL",
      image: AIRTEL,
    },
    {
      id: 7,
      name: "TNM",
      image: TNM,
    },
    {
      id: 8,
      name: "ACU",
      image: ACU,
    },
    {
      id: 9,
      name: "WORLDB",
      image: WORLDB,
    },
    {
      id: 10,
      name: "AFR",
      image: AFR,
    },
    {
      id: 11,
      name: "AFRUNI",
      image: AFRUNI,
    },
    {
      id: 12,
      name: "SARUA",
      image: SARUA,
    },
  ];
  return (
    <>
      {partners && partners.length > 0 && (
        <>
          <div className="flex justify-center align-middle items-center bg-white overflow-x-hidden">
            <div className="inline-flex justify-center items-center h-[100%] w-[100%] mt-[5px]">
              <div className="mt-0 h-[100%] justify-center  align-middle hidden md:flex">
                <Button onClick={() => scroll(-300)}>
                  <div className="flex text-transparent">
                    <ArrowBackIosNewRoundedIcon
                      className="text-red-600"
                      style={{ fontSize: "40px" }}
                    />
                  </div>
                </Button>
              </div>

              <div
                className="flex flex-row no-scrollbar  w-[100%] h-[100%] overflow-y-hidden whitespace-nowrap pb-2 pl-0 scroll-smooth "
                ref={ref}
              >
                {partners.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex justify center col-span-1 py-10 mx-10 "
                    >
                      <div className=" overflow-hidden rounded-lg w-24 min-h-[10px] hover:cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-500">
                        <div className=" h-full rounded-t-lg overflow-hidden w-full object-fill items-center align-middle">
                          <Image
                            source={item.image}
                            alt=""
                            styling=" items-center justify-center h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-0 h-[100%] justify-center  align-middle hidden md:flex">
                {" "}
                <Button onClick={() => scroll(300)}>
                  <div className="flex text-transparent">
                    {" "}
                    <ArrowForwardIosRoundedIcon
                      className="text-red-600"
                      style={{ fontSize: "40px" }}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className={Styles.BrandsDisplayShelf}>
            <Row className={Styles.BrandsDisplayRow}>
              {partners.map((item) => {
                return (
                  <Col
                    style={{ paddingLeft: "5%", paddingRight: "5%" }}
                    key={item.id}
                  >
                    <BrandBox>
                      <Image source={item.image} alt="" styling="" />
                    </BrandBox>
                  </Col>
                );
              })}
            </Row>
          </div>
        </>
      )}
    </>
  );
};
type BrandBoxProps = {
  children: ReactNode;
};

const BrandBox = ({ children }: BrandBoxProps) => {
  return <div className={Styles.BrandBox}>{children}</div>;
};

export default PartnersCarousel;
