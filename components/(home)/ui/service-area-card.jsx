import Image from "next/image";

export default function ServiceAreaCard({ data, index }) {
    const first2 = index === 0 || index === 1;
    return (
        <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={first2 ? 1000 : 1200}
            data-aos-delay={500}
        >
            <div className="single-service shadow-hover transition3 white-bg border-radius10 pl-50 pr-50 pt-65 pb-55 mb-25">
                <div className="row">
                    <div className="col-xl-3  col-lg-3  col-md-6  col-sm-4 col-4 text-lg-center">
                        <div className="service-ser-icon d-inline-block text-center position-relative mb-15">
                            <Image
                                height={72}
                                width={72}
                                className="position-relative z-index1"
                                src={data.iconUrl}
                                alt="icon"
                            />
                            <div className="service-small-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"></div>
                            <div className="service-large-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"></div>
                        </div>
                    </div>
                    <div className="col-xl-9  col-lg-9  col-md-12  col-sm-12 col-12">
                        <div className="service-text d-inline-block ml-xl-2">
                            <h3 className="mb-15">{data.title}</h3>
                            <p className="mb-0">{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
