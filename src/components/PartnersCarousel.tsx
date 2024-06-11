import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./PartnersCarousel.module.css";

const PartnersCarousel = () => {
  const settings = {
    dots: true,
    color: "red",
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className={Styles.mainContainer}>
      <Slider {...settings}>
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/client-en.png" />
        </div>
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/nche.png" />
        </div>
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/usaid.png" />
        </div>
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/gov.png" />
        </div>
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/loan.png" />
        </div>
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/airtel.png" />
        </div>{" "}
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/tnm.png" />
        </div>{" "}
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/acu.png" />
        </div>{" "}
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/worldb.png" />
        </div>{" "}
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/afr.png" />
        </div>{" "}
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/afruni.png" />
        </div>{" "}
        <div className={Styles.container}>
          <img src="../src/assets/images/clients/SARUA.png" />
        </div>
      </Slider>
    </div>
  );
};

export default PartnersCarousel;
