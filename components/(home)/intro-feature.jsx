"use client";
import { Tilt } from "react-tilt";
import IntroFeatureCard from "./ui/intro-feature-card";
import { introFeature } from "@/data/site";
import Image from "next/image";

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

export default function IntroFeature() {
    return (
        <div className="intro-feature-area over-hidden position-relative section-bg">
            <div className="container">
                <div className="row single-intro-feature-wrapper justify-content-center pt-170 pb-140">
                    {/* intro feature card start */}
                    {introFeature?.map((item, i) => (
                        <div
                            key={i}
                            className="col-xl-3 col-lg-3 col-md-6 col-sm-9 col-11"
                        >
                            <Tilt options={defaultOptions}>
                                <IntroFeatureCard data={item} index={i} />
                            </Tilt>
                        </div>
                    ))}
                    {/* intro feature card end */}
                </div>
            </div>

            <div className="intro-feature-text-style position-absolute d-none d-md-inline-block">
                <span className="d-inline-block">Lucas</span>
            </div>

            <div className="intro-feature-icon position-absolute d-none d-md-inline-block zoom-animation">
                <Image
                    height={29}
                    width={40}
                    src="/images/shape/content-shape1.png"
                    alt="intro shape 1"
                />
            </div>
        </div>
    );
}
