import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";
import SwiperComponent from "./SwiperComponent";

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
                <SwiperComponent title={"Abdullayev Abdulla"} spann={"himoyachi"} img={"https://fcbunyodkor.com/uploads/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/Asosir%20tarkib/Abdullayev.png"} />
                </SwiperSlide>
                <SwiperSlide className="PhotoContain">
                <SwiperComponent title={"Abdukarimov humoyun"} spann={"hujumchi"} img={"https://fcbunyodkor.com/uploads/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/Asosir%20tarkib/Mirahmadov.png"} />
                </SwiperSlide>
                <SwiperSlide className="PhotoContain">
                <SwiperComponent title={"Abdukarimov humoyun"} spann={"hujumchi"} img={"https://fcbunyodkor.com/uploads/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/Asosir%20tarkib/Mirahmadov.png"} />
                </SwiperSlide>
                <SwiperSlide className="PhotoContain">
                <SwiperComponent title={"Abdukarimov humoyun"} spann={"hujumchi"} img={"https://fcbunyodkor.com/uploads/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/Asosir%20tarkib/Mirahmadov.png"} />
                </SwiperSlide>
                <SwiperSlide className="PhotoContain">
                <SwiperComponent title={"Abdukarimov humoyun"} spann={"hujumchi"} img={"https://fcbunyodkor.com/uploads/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/Asosir%20tarkib/Mirahmadov.png"} />
                </SwiperSlide>
        </Swiper>
        </div>
    );
    }
