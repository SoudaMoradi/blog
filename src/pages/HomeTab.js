import React from 'react';
import {local_image_dir} from "../config";
import {InputText} from "primereact/inputtext";
// import {Swiper, SwiperSlide} from "swiper/swiper-react";
// import 'swiper/css';

function HomeTab(props) {
    return (
        <div className="h-full w-full flex flex-column align-items-center">
            <div className="w-full flex justify-content-center">
                <img className="w-full "  src={local_image_dir.replace('{{IMAGE}}','blog3.png')}/>
                <InputText className="w-5 h-4rem absolute z-2 bottom-50 border-round-2xl text-xl font-bold font-italic border-none shadow-5" placeholder={'جستجو'}/>
            </div>
            <div className="w-full bg-yellow-200">
                {/*<Swiper className="w-6">*/}
                {/*    <SwiperSlide><img decoding="async" class="lazyload" src={local_image_dir.replace('{{IMAGE}}','food1.png')}/></SwiperSlide>*/}
                {/*</Swiper>*/}
            </div>
            <div>maghale</div>
            <div>footer</div>
        </div>
    );
}

export default HomeTab;