import { experience } from "@/data/site";
import FactExperienceCard from "./ui/fact-experience-card";
import Image from "next/image";

export default function FunFact() {
    return (
        <div
            className="fun-fact-area fun-fact-bg position-relative over-hidden pt-150 pb-120"
            data-aos="fade-up"
            data-aos-duration={1800}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm- col-">
                        <div className="fun-fact-content mb-50 mr-lg-2 mr-xl-0">
                            <div className="position-relative">
                                <div className="title">
                                    <span className="theme-color text-uppercase d-block mb-1 mt--5">
                                        Fun Facts
                                    </span>
                                    <h2 className="mb-30 text-white">
                                        I Develop System that Works
                                    </h2>
                                </div>
                            </div>
                            <p>
                            Passionate about building reliable and efficient systems, I create digital solutions that deliver real impact. With 8 years of experience across multiple industries, I've contributed to 50+ projects, shaping innovative products and enhancing business operations.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1 col-lg-6 col-md-12 col-sm- col-">
                        <div className="row justify-content-center align-items-center">
                            {/* fun fact exp. card start */}
                            {experience?.map((item, i) => (
                                <div
                                    key={i}
                                    className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10"
                                >
                                    <FactExperienceCard data={item} />
                                </div>
                            ))}
                            {/* fun fact exp. card end */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="fact-style1 position-absolute d-none d-md-inline-block">
                <Image
                    height={410}
                    width={310}
                    src="/images/shape/fact-icon1.png"
                    alt="shape 1"
                />
            </div>

            <div className="fact-style2 position-absolute d-none d-md-inline-block">
                <Image
                    height={410}
                    width={357}
                    src="/images/shape/fact-icon2.png"
                    alt="shape 2"
                    className="h-100 w-auto"
                />
            </div>
        </div>
    );
}
