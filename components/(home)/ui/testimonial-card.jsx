import Image from "next/image";

export default function TestimonialCard({ data }) {
    return (
        <div className="testimonial-content">
            <blockquote className="testimonial-text position-relative mb-0 font-italic openS-font-family text-color">
                {data.brief}
            </blockquote>
            <div className="testi-info d-flex align-items-center mt-40">
                <div className="testi-avatar mr-25">
                    <Image
                        height={72}
                        width={72}
                        className="rounded-circle"
                        src={data.profileUrl}
                        alt="author image 1"
                    />
                </div>
                <div className="avatar-info">
                    <h5 className="mb-1 text-capitalize">{data.name},</h5>
                    <p className="meta-text-color mb-0">{data.profession}</p>
                </div>
            </div>
        </div>
    );
}
