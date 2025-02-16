"use client";
import Image from "next/image";
import { Link } from "react-scroll";

const social = [
    {
        icon: "fab fa-github",
        color: "dark-bg",
        link: "https://github.com/lucas1eichhorn",
    },
    {
        icon: "fab fa-linkedin-in",
        color: "linkedin-bg",
        link: "https://www.linkedin.com/in/lucas-eichhorn",
    }
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
                                            src="/images/logo/logo.png"
                                            alt="Lucas"
                                        />
                                    </div>
                                    <div className="copyright-text">
                                        <p className="mb-0">
                                            All rights reserved{" "}
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
