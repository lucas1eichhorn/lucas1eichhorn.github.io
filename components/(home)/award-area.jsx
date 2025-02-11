import { certificationsInfo } from "@/data/site";
import AwardAreaLine from "./ui/award-area-line";

export default function AwardArea() {
    return (
        <div className="award-area over-hidden position-relative z-index11 pt-160 pb-170">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="title text-center">
                            <span className="theme-color text-uppercase d-block mb-6">
                                Success Stories
                            </span>
                            <h2>Licenses &amp; certifications</h2>
                        </div>
                    </div>
                </div>
                <div className="award-wrapper mt-70">
                    {/* certifications info line start */}
                    {certificationsInfo?.slice(0, 3).map((item, i) => (
                        <AwardAreaLine
                            key={i}
                            data={item}
                            index={{
                                i,
                                length: certificationsInfo?.length - 1,
                            }}
                        />
                    ))}
                    {/* certifications info line end */}
                </div>
            </div>
        </div>
    );
}
