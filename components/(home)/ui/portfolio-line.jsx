"use client";
import { useState } from "react";
import Image from "next/image";

export default function PortfolioLine({ data }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // portfolio handler
    const portfolioHandler = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="portfolio-item">
            <div className="row single-portfolio position-relative theme-border-top align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-7 col-sm- col-">
                    <div className="port-category">
                        <span className="meta-text-color text-uppercase">
                            {data.title}
                        </span>
                    </div>
                </div>

                <div className="col-xl-5 col-lg-5 col-md-6 col-sm- col- pl-lg-0">
                    <h3>{data.description}</h3>
                </div>

                <div className="col-xl-5 col-lg-5 col-md-6 col-sm- col- d-flex justify-content-end align-items-center">
                    <Image
                        height={196}
                        width={304}
                        className="port-img position-absolute left-0 ml-xl-3 transition5"
                        src={data.imgUrl}
                        alt="portfolio image 1"
                        priority
                    />
                    <div
                        className="port-content text-center transition5 z-index11"
                        onClick={portfolioHandler}
                        style={{ cursor: "pointer" }}
                    >
                        <span className="d-inline-block">
                            <i className={isExpanded ? "far fa-minus" : "far fa-plus"} />
                        </span>
                    </div>
                </div>
            </div>
            
            {isExpanded && (
                <div className="portfolio-details p-3 mt-2 bg-light">
                    <p>{data.fullText}</p>
                </div>
            )}
        </div>
    );
}
