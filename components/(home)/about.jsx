"use client";
import Image from "next/image";
import Link from "next/link";
import { Tilt } from "react-tilt";
import AboutInfo from "./ui/about-info";

const defaultOptions = {
    reverse: false,
    max: 20,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function About() {
    return (
        <div id="about" className="about-area over-hidden">
            <div className="about-content-wrapper about-margin mt-170 mb-110 position-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-8 offset-md-0 col-sm-10 col-10">
                            <div className="about-img-wrapper position-relative mb-90">
                                <div
                                    className="about-img position-relative z-index11"
                                    data-aos="fade-right"
                                    data-aos-duration={2000}
                                    data-aos-delay={100}
                                >
                                    <div
                                        className="about-img-over pl-50 transition5 d-inline-block position-relative"
                                        style={{ background: "none" }}
                                    >
                                        <div
                                            className="position-relative z-index11"
                                            data-tilt
                                            data-tilt-max={10}
                                        >
                                            <Tilt options={defaultOptions}>
                                                <Image
                                                    height="0"
                                                    width="0"
                                                    sizes="100vw"
                                                    className="border-radius10 position-relative z-index11 h-100 w-100"
                                                    src="/images/about/about-img.jpg"
                                                    alt="about image 1"
                                                />
                                            </Tilt>
                                        </div>

                                        {/* shape 1 */}
                                        <div
                                            className="about-shape1 position-absolute"
                                            data-aos="fade-right"
                                            data-aos-duration={2000}
                                            data-aos-delay={800}
                                        />
                                        {/* shape 2 */}
                                        <div
                                            className="about-shape2 position-absolute z-index11"
                                            data-aos="fade-right"
                                            data-aos-duration={2000}
                                            data-aos-delay={800}
                                        />
                                        <div className="about-download-wrapper position-absolute z-index11">
                                            <Image
                                                height={268}
                                                width={268}
                                                className="download-bg rotate-animation d-inline-block h-100 w-auto"
                                                src="/images/about/download-bg.png"
                                                alt="about image 2"
                                            />
                                            <Link
                                                 href="/files/CV_Lucas_Eichhorn_en.pdf"
                                                 download
                                                 target="_blank"
                                                className="cv-download-link transition5"
                                            >
                                                <Image
                                                    height={25}
                                                    width={25}
                                                    className="d-icon d-inline-block position-absolute"
                                                    src="/images/icon/download-icon.png"
                                                    alt="about image 3"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* about content start */}
                            <AboutInfo />
                            {/* about content end */}
                        </div>
                    </div>
                </div>
                <div className="about-text-style position-absolute d-none d-md-inline-block">
                    <span className="d-inline-block section-text-color">
                        Lucas
                    </span>
                </div>
                <div className="about-icon position-absolute d-none d-md-inline-block z-index1 zoom-animation">
                    <Image
                        height={44}
                        width={47}
                        src="/images/shape/content-shape2.png"
                        alt="about shape 2"
                    />
                </div>
            </div>
        </div>
    );
}
