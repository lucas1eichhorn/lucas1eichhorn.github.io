"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TestimonialCard from "./ui/testimonial-card";
import { testimonial } from "@/data/site";
import Image from "next/image";

export default function Testimonial() {
    return (
        <div className="testimonial-area position-relative over-hidden">
            <div className="container">
                <div className="testimonial-bg section-bg pt-170 pb-170 position-relative">
                    <div className="row align-items-start justify-content-center">
                        <div className="col-xl-7 col-lg-7 col-md-12  col-sm-12 col-12">
                            <div className="position-relative">
                                <div className="title">
                                    <span className="theme-color text-uppercase d-block mb-6">
                                        Testimonials
                                    </span>
                                    <h2 className="mb-20">What People Say</h2>
                                </div>
                            </div>
                            <div className="testimonial-wrapper position-relative mt-40 pb-50">
                                <div className="quit d-inline-block position-absolute left-0">
                                    <Image
                                        height={36}
                                        width={48}
                                        className="theme-color"
                                        src="/images/testimonial/testimonial-icon.png"
                                        alt="quote"
                                    />
                                </div>
                                <div className="testimonial-active pl-80 pr-90">
                                    <Swiper
                                        pagination={{
                                            el: ".ui-pagination",
                                            clickable: true,
                                        }}
                                        modules={[Pagination]}
                                        loop={true}
                                    >
                                        {testimonial?.map((item, i) => (
                                            <SwiperSlide key={i}>
                                                <TestimonialCard data={item} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="ui-pagination"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-11 col-12">
                            <div
                                className="testimonial-img position-relative z-index1"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                            >
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    className="border-radius10 h-100 w-100"
                                    src="/images/testimonial/testimonials-img.jpg"
                                    alt="author image "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="intro-feature-text-style testimonial-text-style position-absolute d-none d-md-inline-block">
                        <span className="d-inline-block">Testim</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
