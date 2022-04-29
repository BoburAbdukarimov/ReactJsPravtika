import React, { useRef, useState } from "react";
// Import Swiper React components
import photo from  "../components/style/Abdullayev-removebg-preview.png"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";

    export default function Swipper() {
    return (
        <div className="Swipper">
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className="PhotoContain">
                <img src={photo} alt="abdullayev" />
                <p>Abdullayev Abdulla <br /> <span>Himoyachi</span></p>
            </SwiperSlide>
            <SwiperSlide className="PhotoContain">
                <img src={photo} alt="abdullayev" />
                <p>Abdullayev Abdulla <br /> <span>Himoyachi</span></p>
            </SwiperSlide>
            <SwiperSlide className="PhotoContain">
                <img src={photo} alt="abdullayev" />
                <p>Abdullayev Abdulla <br /> <span>Himoyachi</span></p>
            </SwiperSlide>
            <SwiperSlide className="PhotoContain">
                <img src={photo} alt="abdullayev" />
                <p>Abdullayev Abdulla <br /> <span>Himoyachi</span></p>
            </SwiperSlide>
            <SwiperSlide className="PhotoContain">
                <img src={photo} alt="abdullayev" />
                <p>Abdullayev Abdulla <br /> <span>Himoyachi</span></p>
            </SwiperSlide>
            <SwiperSlide className="PhotoContain">
                <img src={photo} alt="abdullayev" />
                <p>Abdullayev Abdulla <br /> <span>Himoyachi</span></p>
            </SwiperSlide>
            <SwiperSlide className="PhotoContain">
                <img src={photo} alt="abdullayev" />
                <p>Abdullayev Abdulla <br /> <span>Himoyachi</span></p>
            </SwiperSlide>
            
        </Swiper>
        </div>
    );
    }
