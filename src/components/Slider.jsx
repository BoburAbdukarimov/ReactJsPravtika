    import React, { useRef, useState } from "react";
    // Import Swiper React components
    import { Swiper, SwiperSlide, } from "swiper/react";
    import photoTwo from "./style/photo.jpg";
    import photoSree from "./style/IMG_3471.jpg";
    import photoFour from "./style/IMG_3498.jpg";


    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import 'swiper/css/effect-fade';
    import "swiper/css/autoplay";


    // import required modules
    import { Pagination, Navigation, EffectFade, Autoplay  } from "swiper";

    export default function App() {
    return (
        <>
        <Swiper
            pagination={{
            type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation, EffectFade, Autoplay]}
            className="Slider"
            effect="fade"
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
        >
            <SwiperSlide>
                <img src={photoTwo} alt="" />
                <h1 className="SliderH">Bunyodkor maglub bo'ldi mehmoda</h1>

            </SwiperSlide>
            <SwiperSlide>
            <img src={photoFour} alt="" />
                <h1 className="SliderH">1-лига. Дастлабки ғалаба!</h1>
            </SwiperSlide>
            <SwiperSlide>    
                <img src={photoSree} alt="" />
                <h1 className="SliderH">Суперлига. Мағлубият...</h1></SwiperSlide>
        </Swiper>
        </>
    );
    }
