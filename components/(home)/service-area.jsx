import Image from "next/image";
import ServiceAreaCard from "./ui/service-area-card";
import { service } from "@/data/site";

export default function ServiceArea() {
    return (
        <div
            id="service"
            className="service-area primary-bg over-hidden pt-160 pb-145"
        >
            <div className="service-wrapper position-relative">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                            <div className="title text-center">
                                <span className="theme-color text-uppercase d-block mb-6">
                                    Service
                                </span>
                                <h2 className="text-white">What I offer</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row service-wrappers mt-80">
                        {/* service card start */}
                        {service?.slice(0, 4).map((item, i) => (
                            <ServiceAreaCard key={i} data={item} index={i} />
                        ))}
                        {/* service card end */}
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
