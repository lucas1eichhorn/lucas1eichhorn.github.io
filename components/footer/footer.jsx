"use client";
import Image from "next/image";
import { Link } from "react-scroll";

const social = [
    {
        icon: "fab fa-facebook-f",
        color: "facebook-bg",
        link: "/",
    },
    {
        icon: "fab fa-twitter",
        color: "twitter-bg",
        link: "/",
    },
    {
        icon: "fab fa-linkedin-in",
        color: "linkedin-bg",
        link: "/",
    },
    {
        icon: "fab fa-instagram",
        color: "instagram-bg",
        link: "/",
    },
];

export default function Footer() {
    return (
        <footer>
            <div className="footer-area over-hidden pt-110 mb-80">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4  col-lg-5  col-md-8  col-sm-7 col-12">
                                <div className="footer-widget footer-logo pb-40">
                                    <div className="foot-logo mb-30">
                                        <Image
                                            height={36}
                                            width={160}
                                            src="/images/logo/logo-dark.png"
                                            alt="Themes"
                                        />
                                    </div>
                                    <div className="copyright-text">
                                        <p className="mb-0">
                                            All rights reserved{" "}
                                            <Link
                                                href="hhttps://themeforest.net/user/qubohub/portfolio"
                                                className="c-theme primary-color f-600"
                                            >
                                                QuboHub
                                            </Link>{" "}
                                            © {new Date().getFullYear()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 offset-xl-2 col-lg-3  col-md-4 col-sm-4 col-12 d-none d-sm-block d-lg-none">
                                <div className="footer-widget pb-40">
                                    <h4 className="mb-28 mt-2">Follow Me</h4>
                                    <ul className="social social-bg text-center d-flex">
                                        {/* footer social start */}
                                        {social?.map((item, i) => (
                                            <li
                                                key={i}
                                                className="mr-2 rotate-hover"
                                            >
                                                <Link
                                                    className={`${item.color} text-center pr-0 text-white d-block transition-3 rotate`}
                                                    href={item.link}
                                                >
                                                    <i className={item.icon} />
                                                </Link>
                                            </li>
                                        ))}
                                        {/* footer social end */}
                                    </ul>
                                </div>
                            </div>
                            {/* /col */}
                            <div className="col-xl-3  col-lg-4  col-md-12  col-sm-12 col-12">
                                <div className="footer-widget pb-40">
                                    <h4 className="mb-28 mt-2">Newsletter</h4>
                                    <div className="newsletter-form">
                                        <form action="#">
                                            <div className="subscribe-info position-relative">
                                                <input
                                                    className="sub-name theme-border pl-25 pt-15 pb-15 pr-10 w-100 secondary-color2 border-radius5 bg-white"
                                                    type="email"
                                                    name="email"
                                                    id="Email"
                                                    required
                                                    placeholder="Submit your email"
                                                />
                                                <span className="d-block position-absolute theme-color cursor-pointer">
                                                    <i className="fal fa-envelope" />
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* /col */}
                            <div className="col-xl-3 offset-xl-2 col-lg-3  col-md-4 col-sm-4 col-12  d-sm-none d-lg-block">
                                <div className="footer-widget pb-40">
                                    <h4 className="mb-28 mt-2">Follow Me</h4>
                                    <ul className="social social-bg text-center d-flex">
                                        {/* footer social start */}
                                        {social?.map((item, i) => (
                                            <li
                                                key={i}
                                                className="mr-2 rotate-hover"
                                            >
                                                <Link
                                                    className={`${item.color} text-center pr-0 text-white d-block transition-3 rotate`}
                                                    href={item.link}
                                                >
                                                    <i className={item.icon} />
                                                </Link>
                                            </li>
                                        ))}
                                        {/* footer social end */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
