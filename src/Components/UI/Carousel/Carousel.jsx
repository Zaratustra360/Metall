import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./Carousel.module.sass";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <div className={style.main}>
        <Swiper
          loop={true}
          slidesPerView={1}
          width={600}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className={style.img}
              src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcanopy11.a4ec159d.jpeg&w=2048&q=75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={style.img}
              src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcanopy8.70692fb2.jpeg&w=2048&q=75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={style.img}
              src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcanopy11.a4ec159d.jpeg&w=2048&q=75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={style.img}
              src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcanopy8.70692fb2.jpeg&w=2048&q=75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={style.img}
              src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcanopy11.a4ec159d.jpeg&w=2048&q=75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={style.img}
              src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcanopy8.70692fb2.jpeg&w=2048&q=75"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
