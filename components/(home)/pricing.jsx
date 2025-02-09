import { pricing } from "@/data/site";
import PricingCard from "./ui/pricing-card";

export default function Pricing() {
    return (
        <div className="pricing-area over-hidden pt-160 pb-140">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                        <div className="title text-center">
                            <span className="theme-color text-uppercase d-block mb-6">
                                Let’s Start Working
                            </span>
                            <h2>Pricing Plans</h2>
                        </div>
                    </div>
                </div>
                <div className="row price-wrapper justify-content-center mt-80">
                    {/* pricing card start */}
                    {pricing?.slice(0, 3).map((item, i) => (
                        <PricingCard key={i} data={item} index={i} />
                    ))}
                    {/* pricing card end */}
                </div>
            </div>
        </div>
    );
}
