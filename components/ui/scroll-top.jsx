"use client";
import useSticky from "@/hooks/useSticky";
import Link from "next/link";

export default function ScrollTop() {
    // scroll top
    const scrollHandler = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const isShow = useSticky(700);

    return (
        <div
            id="scroll"
            className={`scrollTop text-right ui-scroll-top ${
                isShow ? "active" : ""
            }`}
        >
            <Link
                href="#"
                onClick={scrollHandler}
                className="theme-bg white-text text-center d-inline-block mr-10 transition5"
            >
                <span>
                    <i className="fal fa-angle-double-up" />
                </span>
            </Link>
        </div>
    );
}
