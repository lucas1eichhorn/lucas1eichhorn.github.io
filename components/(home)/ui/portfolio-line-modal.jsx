"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const tags = [
    {
        name: "Web Design",
        path: "/",
    },
    {
        name: "Social Media",
        path: "/",
    },
    {
        name: "Product",
        path: "/",
    },
];

const social = [
    {
        icon: "fab fa-facebook-f",
        color: "facebook-color",
        path: "/",
    },
    {
        icon: "fab fa-twitter",
        color: "twitter-color",
        path: "/",
    },
    {
        icon: "fab fa-google-plus-g",
        color: "google-color",
        path: "/",
    },
    {
        icon: "fab fa-linkedin-in",
        color: "linkedin-color",
        path: "/",
    },
];

export default function PortfolioLineModal() {
    const { portfolioInfo } = useSelector((state) => state.portfolio);

    if (!portfolioInfo) return null;

    return (
        <div
            className="modal fade"
            id="portfolio-area-modal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="portfolio-area-modal"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="close-icon float-right pt-10 pr-10">
                        <button
                            type="button"
                            className="close d-inline-block"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">
                                <i className="fa fa-times" />
                            </span>
                        </button>
                    </div>
                    <div className="modal-content border-0">
                        <div className="modal-body pl-50 pr-50 pt-10 pb-20">
                            <div className="blog-modal-img">
                                <Image
                                    height="0"
                                    width="0"
                                    className="w-100 h-100"
                                    sizes="100vw"
                                    quality={50}
                                    src={portfolioInfo?.imgLargeUrl}
                                    alt="product image 02"
                                />
                            </div>
                            <div className="row">
                                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                    <div className="content-wrapper">
                                        <h2 className="modal-title">
                                            QuboHub Custom CMS
                                        </h2>
                                        <p>
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Lorem ipsum dolor sit
                                            amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui
                                            officia deserunt mollit anim id est
                                            laborum.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Dignissimos laudantium fuga
                                            molestiae, aut eius minus
                                            reprehenderit.
                                        </p>
                                        <p className="mb-0">
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                                {/* /col */}
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                                    <div className="meta-wrapper form-bg mt-60 pt-40 pb-45 pr-20 pl-45 mt-40 mb-10">
                                        <ul className="item-meta">
                                            <li>
                                                Project Type :
                                                <span className="pl-2 openS-font-family">
                                                    {portfolioInfo?.title}
                                                </span>
                                            </li>
                                            <li>
                                                Clien :
                                                <span className="pl-2 openS-font-family">
                                                    Juwel Khan
                                                </span>
                                            </li>
                                            <li>
                                                Duration :
                                                <span className="pl-2 openS-font-family">
                                                    2 Weeks
                                                </span>
                                            </li>
                                            <li>
                                                Task :
                                                <span className="pl-2 openS-font-family">
                                                    UI/UX, Frontend
                                                </span>
                                            </li>
                                            <li>
                                                Budget :
                                                <span className="pl-2 openS-font-family">
                                                    $2000
                                                </span>
                                            </li>
                                        </ul>
                                        <Link
                                            href="/"
                                            className="btn position-relative over-hidden text-white theme-bg theme-border2 text-uppercase mt-20 pt-2 pb-2"
                                        >
                                            View Live
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* /row */}
                            <div className="pro-modal-footer mt-30 mb-45">
                                <div className="row align-items-center justify-content-md-between">
                                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                        <div className="modal-tags d-sm-flex align-items-center pt-25">
                                            <h6 className="mb-0 pr-15 black-color">
                                                Tags :
                                            </h6>
                                            <ul className="tag-list">
                                                {/* tags start */}
                                                {tags.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="d-inline-block pr-10"
                                                    >
                                                        <Link
                                                            className="d-block"
                                                            href={item.path}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                                {/* tags end */}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /col */}
                                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-10 col-12">
                                        <div className="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25">
                                            <h6 className="pr-12 mb-0 primary-color">
                                                Share this product :
                                            </h6>
                                            <ul className="social-link text-md-right">
                                                {/* social start */}
                                                {social.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="d-inline-block"
                                                    >
                                                        <Link
                                                            className={`${item.color} text-center pl-15 d-inline-block transition-3`}
                                                            href={item.path}
                                                        >
                                                            <i
                                                                className={
                                                                    item.icon
                                                                }
                                                            />
                                                        </Link>
                                                    </li>
                                                ))}
                                                {/* social end */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
