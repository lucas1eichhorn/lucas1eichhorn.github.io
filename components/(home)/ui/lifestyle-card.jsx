
import Image from "next/image";

export default function LifestyleCard({ data }) {
    return (
        <div className="row lifestyle-content">
            <div className="col-xl-6 col-lg-6 col-md-6">

                <blockquote className="ml-20 lifestyle-text position-relative mb-0 font-italic openS-font-family text-color">
                    {data.brief}
                </blockquote>
                <div className="testi-info d-flex align-items-center ml-20 mt-40">

                    <div className="avatar-info">
                        <h5 className="mb-1 text-capitalize">{data.activity}</h5>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div
                    className="lifestyle-img position-relative z-index1"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                >
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        className="border-radius10 h-100 w-100"
                        src={data.profileUrl}
                        alt={data.activity}
                    />
                </div>
            </div>
        </div>

    );
}
