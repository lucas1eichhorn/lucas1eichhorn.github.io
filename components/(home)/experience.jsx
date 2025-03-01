"use client";
import { useState } from "react";
import { experience2 } from "@/data/site";
import ExperienceList from "./ui/experience-list";




export default function Experience() {
        const [expanded, setExpanded] = useState(false);
        
        const visibleExperience = expanded ? experience2 : experience2.slice(0, 4);
        
    return (
        <div className="experience-area over-hidden pb-20">
            <div id="work" className="experience-wrapper extra-width position-relative">
                <div
                    className="experience-bg-img left-0 top-0 bottom-0  no-repeat w-50 position-absolute"
                    style={{
                        backgroundImage: "url(/images/work/work-img.jpg)",
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-none">
                            <div
                                className="experience-img"
                                data-aos="fade-right"
                                data-aos-duration={2000}
                            ></div>
                        </div>
                        <div className="col-xl-6 col-lg-6 offset-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="experience-margin pb-80 mb-50">
                                <div className="position-relative">
                                    <div className="title">
                                        <span className="theme-color text-uppercase d-block mb-6 mt--5">
                                            From code to data
                                        </span>
                                        <h2 className="mb-25">Work Experience</h2>
                                        <p>
                                         Started as a software engineer, fell in love with data, and never looked back! Now, I design scalable data solutions, turning raw information into powerful insights.
                                        </p>
                                    </div>
                                </div>
                                <div className="experience-wrapper pt-25">
                                    <ul className="experience-content">
                                        {/* experience list start */}
                                        {visibleExperience.map((item, i) => (
                                                <ExperienceList
                                                    key={i}
                                                    data={item}
                                                    index={{
                                                                                    i,
                                                                                    length: experience2.length - 1,
                                                                                }}
                                                />
                                            ))}
                                        {/* experience list end */}
                                    </ul>
                                       {/* certifications info line end */}
                    <div className="cert-btn">
                                    <button
                                        className="black-color text-uppercase d-inline-block"
                                    
                        onClick={() => setExpanded(!expanded)}
                        title={expanded ? "Show Less" : "More"}
                >
                        {expanded ? "Show Less" : "+ More"}
                    </button>
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
