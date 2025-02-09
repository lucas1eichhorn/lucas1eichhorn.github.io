"use client";
import { addPortfolioInfo } from "@/redux/features/portfolio/poftfolioSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function PortfolioLine({ data }) {
    const dispatch = useDispatch();

    // portfolio handler
    const portfolioHandler = () => {
        dispatch(addPortfolioInfo(data));
    };

    return (
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
                    data-toggle="modal"
                    data-target="#portfolio-area-modal"
                    onClick={portfolioHandler}
                >
                    <span className="d-inline-block">
                        <i className="far fa-plus" />
                    </span>
                </div>
            </div>
        </div>
    );
}
