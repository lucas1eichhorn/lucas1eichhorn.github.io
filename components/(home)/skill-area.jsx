"use client";
import { skills } from "@/data/site";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SkillArea() {
    return (
        <div className="skill-area over-hidden position-relative pt-130 pb-110">
            <div className="marquee-w mb-125">
                <div className="marquee">
                    <span className="pl-4">
                        Senior Data Engineer from Madrid *
                    </span>
                    <span className="pl-4">
                        Senior Fullstack Developer *
                    </span>
                </div>
                <div className="marquee marquee2 pb-1">
                    <span className="pl-4">
                        I’m Open for new projects * Let’s Work Together *
                    </span>
                    <span className="pl-4">
                        Cloud Certifications * GCP * Azure * AWS *
                    </span>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-start justify-content-center">
                    <div className="col-xl-5 col-lg-5  col-md-12  col-sm-12 col-12">
                        <div className="position-relative">
                            <div className="title mb-50">
                                <span className="theme-color text-uppercase d-block mb-6">
                                    My Skill
                                </span>
                                <h2 className="mb-25">Growing Over Times</h2>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    Sed ut perspiciatis unde omnis iste natus
                                    kobita tumi sopno charini hoye khbor nio na
                                    sit voluptatem accusantium dolore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-6 col-lg-7 offset-xl-1 col-md-12  col-sm-12 col-12"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration={1400}
                    >
                        <div className="row justify-content-center mt-10">
                            {/* skill circle start */}
                            {skills?.map((item, i) => (
                                <div
                                    key={i}
                                    className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-9 mb-30"
                                >
                                    <div className="single-skill mb-15 text-center text-lg-left">
                                        <div className="progress-circular over-hidden">
                                            <div
                                                style={{
                                                    width: "190px",
                                                    height: "190px",
                                                    marginInline: "auto",
                                                }}
                                            >
                                                <CircularProgressbar
                                                    value={item.percentage}
                                                    text={`${item.percentage}%`}
                                                    strokeWidth={3}
                                                    styles={buildStyles({
                                                        textColor: "#2e2e37",
                                                        pathColor: "#80db66",
                                                        pathTransition:
                                                            item.percentage ===
                                                            0
                                                                ? "none"
                                                                : "stroke-dashoffset 0.5s ease 0s",
                                                    })}
                                                />
                                            </div>

                                            <h4 className="mt-15 text-center">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* skill circle end */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="skill-text-style position-absolute d-none d-md-inline-block">
                <span className="d-inline-block section-text-color">
                    Skills
                </span>
            </div>
        </div>
    );
}
