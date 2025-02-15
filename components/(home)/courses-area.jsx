import Image from "next/image";
import CourseAreaCard from "./ui/course-area-card";
import { courses } from "@/data/site";

export default function CourseArea() {
    return (
        <div
            id="service"
            className="course-area primary-bg over-hidden pt-160 pb-145"
        >
            <div className="service-wrapper position-relative">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                            <div className="title text-center">
                                <span className="theme-color text-uppercase d-block mb-6">
                                    Online
                                </span>
                                <h2 className="text-white">Courses</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row service-wrappers mt-80">
                        {/* course card start */}
                        {courses?.slice(0, 4).map((item, i) => (
                            <CourseAreaCard key={i} data={item} index={i} />
                        ))}
                        {/* course card end */}
                    </div>
                </div>
                <div className="about-icon position-absolute d-none d-md-inline-block z-index1 zoom-animation">
                    <Image
                        height={44}
                        width={47}
                        src="/images/shape/content-shape2.png"
                        alt="shape 2"
                    />
                </div>
            </div>
        </div>
    );
}
