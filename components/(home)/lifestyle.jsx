"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import LifestyleCard from "./ui/lifestyle-card";
import { lifestyle } from "@/data/site";

export default function Lifestyle() {
    return (
        <div className="lifestyle-area position-relative over-hidden">
            <div className="container">
                <div className="lifestyle-bg section-bg pt-170 pb-170 position-relative">
                    <div className="row align-items-start justify-content-center">
                        <div className="col-12">
                            <div className="position-relative">
                                <div className="title">
                                    <span className="theme-color text-uppercase d-block mb-6">
                                        Lifestyle
                                    </span>
                                    <h2 className="mb-20">Not everything is work</h2>
                                </div>
                            </div>
                            <div className="lifestyle-wrapper position-relative mt-40 pb-50">
                         
                                <div className="lifestyle-active">
                                    <Swiper
                                        pagination={{
                                            el: ".ui-pagination",
                                            clickable: true,
                                        }}
                                        modules={[Pagination]}
                                        loop={true}
                                    >
                                        {lifestyle?.map((item, i) => (
                                            <SwiperSlide key={i}>
                                                <LifestyleCard data={item} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="ui-pagination"></div>
                                </div>
                            </div>
                   
                        </div>
                        
                    </div>
                  
                </div>
            </div>
        </div>
    );
}
