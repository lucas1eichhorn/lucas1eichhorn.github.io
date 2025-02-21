"use client";
import Image from "next/image";
import HeroSociable from "./ui/hero-sociable";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <div id="home" className="slider-area slider-bg-color over-hidden">
            <div
                className="single-slider slider-height over-hidden position-relative xxl-device-width bg-cover no-repeat"
                style={{
                    backgroundImage: "url(/images/slider/slider-bg.jpg)",
                }}
            >
                <div className="parallax position-absolute w-100 h-100 z-index1">
                    <Image
                        height={74}
                        width={88}
                        alt="shape"
                        className="hero-shape hero-shape1 position-absolute d-none d-lg-inline-block"
                        src="/images/shape/shape1.png"
                    />
                    <Image
                        height={44}
                        width={53}
                        alt="shape"
                        className="hero-shape hero-shape2 position-absolute d-none d-lg-inline-block"
                        src="/images/shape/shape2.png"
                    />
                    <Image
                        height={29}
                        width={31}
                        alt="shape"
                        className="hero-shape hero-shape3 position-absolute d-none d-lg-inline-block"
                        src="/images/shape/shape3.png"
                    />
                    <Image
                        height={98}
                        width={94}
                        alt="shape"
                        className="hero-shape hero-shape4 position-absolute d-none d-lg-inline-block"
                        src="/images/shape/shape4.png"
                    />
                </div>
                <div className="container slider-height d-flex align-items-end">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-11 col-12 d-flex align-items-center justify-content-center">
                            <div className="slider-wrapper h-100">
                                <div
                                    className="slider-content text-center mt--45 text-lg-left position-relative z-index11"
                                    data-aos="fade-right"
                                    data-aos-duration={2200}
                                >
                                    <h1 className="mb-15 white-text">
                                        <span className="sub-heading d-block text-uppercase theme-color mb-0">
                                            Hello world! I’m
                                        </span>
                                        Lucas Eichhorn
                                    </h1>
                                    <h2 className="text-capitalize white-text mb-40">
                                        A Passionate
                                        <span className="d-text d-block d-sm-inline-block">
                                            {/* type animation start */}
                                            <TypeAnimation
                                                className="typer theme-color d-inline-block pl-2"
                                                sequence={[
                                                    "Data Engineer",
                                                    1000,
                                                    "Software Engineer",
                                                    1000,
                                                    "Tech Enthusiast",
                                                    1000,
                                                ]}
                                                wrapper="span"
                                                speed={30}
                                                repeat={Infinity}
                                            />
                                            {/* type animation end */}
                                        </span>
                                    </h2>
                                    <Link
                                        href="https://www.linkedin.com/in/lucas-eichhorn/"
                                        className="btn position-relative over-hidden theme-bg text-uppercase transition5"
                                        target="_blank"
                                    >
                                        contact me
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-7 col-sm-10 col-12 d-flex justify-content-center align-items-end h-100">
                            <div className="slider-img pl-120 position-relative z-index1">
                                <Image
                                    height="0"
                                    width="0"
                                    src="/images/slider/person.png"
                                    alt="hero image"
                                    sizes="100vw"
                                    className="h-100 w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* social media start */}
                <HeroSociable />
                {/* social media end */}
            </div>
        </div>
    );
}
