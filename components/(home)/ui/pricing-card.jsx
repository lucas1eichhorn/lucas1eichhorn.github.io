import Link from "next/link";

export default function PricingCard({ data, index }) {
    return (
        <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200 + index * 200}
        >
            <div className="single-price white-bg shadow-hover transition3 border-radius10 pl-45 pr-45 pt-45 pb-50 mb-30">
                <h3 className="theme-border-bottom pb-25">{data.time}</h3>
                <p className="mt-20 mb-10 f-500 primary-color ">
                    <span className="theme-color rate pr-12">
                        ${data.price}
                    </span>
                    / Per {data.priceTime}
                </p>
                <ul className="price-list">
                    {data.list.map((item, i) => (
                        <li key={i} className="d-flex align-items-center">
                            <span
                                className={`theme-color d-inline-block text-center ${
                                    !item.isCheck ? "disable" : ""
                                }`}
                            >
                                <i
                                    className={
                                        item.isCheck
                                            ? "far fa-check"
                                            : "far fa-times"
                                    }
                                />
                            </span>
                            <p className="mb-0 ml-20">{item.name}</p>
                        </li>
                    ))}
                </ul>
                <Link
                    href="/"
                    className="btn position-relative over-hidden theme-bg text-uppercase mt-25"
                >
                    Start now
                </Link>
            </div>
        </div>
    );
}
