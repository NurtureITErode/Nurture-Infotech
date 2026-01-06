import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Company.css";

import Logos from "./Companylogos.json";
import Logos2 from "./Companylogos2.json";
import Logos3 from "./Companylogos3.json";

const Company = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 968) {
        setSlidesToShow(5);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 480) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(2);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseSettings = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: false,
    draggable: false,
  };

  const settings1 = { ...baseSettings, rtl: false, speed: 5000 };
  const settings2 = { ...baseSettings, rtl: true, speed: 5500 };
  const settings3 = { ...baseSettings, rtl: false, speed: 5200 };

  return (
    <div className="slider-container">
      <Slider {...settings1} className="Sliderow">
        {Logos.map((e, i) => (
          <div key={i} className="slideDesign">
            <img src={e.src} className="cmplogo" alt={`Logo ${i}`} height={100} />
          </div>
        ))}
      </Slider>

      <Slider {...settings2} className="Sliderow">
        {Logos2.map((e, i) => (
          <div key={i} className="slideDesign">
            <img src={e.src} className="cmplogo" alt={`Logo ${i}`} height={100} />
          </div>
        ))}
      </Slider>

      <Slider {...settings3} className="Sliderow">
        {Logos3.map((e, i) => (
          <div key={i} className="slideDesign">
            <img src={e.src} className="cmplogo" alt={`Logo ${i}`} height={100} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Company;
