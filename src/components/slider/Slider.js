import React, { useState } from "react";
import "./slider.css";
import "swiper/swiper-bundle.min.css";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Cat from "../../assets/img/cat.jpg";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import useWindowDimensions from "../../hooks/useWindowDimensions";

SwiperCore.use([Navigation, Pagination]);
SwiperCore.use([Autoplay]);

function Slider() {
  const { height, width } = useWindowDimensions();
  const [my_swiper, set_my_swiper] = useState({});

  return (
    <Swiper
      autoplay={{ delay: 7000 }}
      slidesPerView={width / 400}
      spaceBetween={10}
      pagination={{ clickable: true }}
      tag="section"
      wrapperTag="ul"
      id="main"
      centeredSlides={true}
      loop={true}
      onInit={(swiper) => console.log("swiper initialized")}
      onSlideChange={(swiper) => console.log("slide index changed")}
    >
      <SwiperSlide tag="li" key="1">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="2">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="3">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="3">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="3">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="3">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="3">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
