"use client";
import { blog } from "@/data/site";
import BlogAreaCard from "./ui/blog-area-card";
import BlogAreaModal from "./ui/blog-area-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function BlogArea() {
    return (
        <div id="blog" className="blog-area over-hidden">
            <div className="marquee-w mb-125">
                <div className="marquee">
                    <span className="pl-4">
                        Senior Data Engineer from Madrid *
                    </span>
                    <span className="pl-4">
                        Senior Fullstack Developer *
                    </span>
                </div>
                
            </div>

            <div className="blog-wrappers section-bg pt-160 pb-120">
                <div className="container">
                    <div className="row mb-5 mb-md-0">
                        <div className="col-6">
                            <div className="title">
                                <span className="theme-color text-uppercase d-block mb-6">
                                    Get Updates
                                </span>
                                <h2>Recent Blog</h2>
                            </div>
                        </div>
                        <div className="col-6 align-self-end">
                            <div className="ui-slide-box d-flex justify-content-end align-items-center">
                                <button
                                    className="ui-slide-btn"
                                    id="ui-prev-btn"
                                >
                                    <i className="l-a fas fa-angle-left"></i>
                                </button>
                                <button
                                    className="ui-slide-btn"
                                    id="ui-next-btn"
                                >
                                    <i className="l-a fas fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" mt-75">
                        {/* blog area card start */}
                        <Swiper
                            spaceBetween={30}
                            navigation={{
                                prevEl: "#ui-prev-btn",
                                nextEl: "#ui-next-btn",
                            }}
                            modules={[Pagination, Navigation]}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                576: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {blog?.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <BlogAreaCard data={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* blog area card end */}
                    </div>
                    <div className="blog-modal-wrapper">
                        {/* blog area modal start */}
                        <BlogAreaModal />
                        {/* blog area modal end */}
                    </div>
                </div>
            </div>
        </div>
    );
}
