"use client";
import React from "react";
import Navigation from "./ui/navigation";
import Link from "next/link";
import useSticky from "@/hooks/useSticky";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/redux/features/toggle/toggleSlice";

export default function Header1() {
    const isSticky = useSticky(2);

    const dispatch = useDispatch();

    // sidebar handler
    const sidebarHandler = (e) => {
        e.preventDefault();
        dispatch(toggleSidebar());
    };

    return (
        <header>
            <div
                className={`transparent-header header-area ${
                    isSticky ? "sticky-menu" : ""
                }`}
            >
                <div className="header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
                                
                               
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7 pl-0 d-flex justify-content-end align-items-center">
                                <div className="main-menu">
                                    {/* navigation start */}
                                    <Navigation />
                                    {/* navigation end */}
                                </div>

                                <div className="header-btn pl-45">
                                    <Link
                                        href="https://lucaseichhorn.com.ar/public/files/Lucas_Eichhorn_CV.pdf"
                                        download
                                        target="_blank"
                                        className="white-text text-uppercase d-inline-block"
                                    >
                                        Download Cv
                                    </Link>
                                </div>

                                <div className="mobile-m-bar d-block d-lg-none ml-30">
                                    <Link
                                        href="#"
                                        onClick={sidebarHandler}
                                        className="mobile-menubar theme-color primary-hover"
                                    >
                                        <i className="far fa-bars" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
