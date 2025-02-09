"use client";
import React, { useEffect, useState } from "react";

export default function Preloader() {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setShowPreloader(false);
        };

        if (typeof window !== "undefined") {
            window.addEventListener("load", handleLoad);

            if (window.document.readyState === "complete") {
                setShowPreloader(false);
            }

            return () => {
                window.removeEventListener("load", handleLoad);
            };
        }
    }, []);

    return (
        showPreloader && (
            <div id="preloader">
                <div id="loading">
                    <div id="loading-center">
                        <div id="loading-center-absolute">
                            <div className="object" id="object_one" />
                            <div className="object" id="object_two" />
                            <div className="object" id="object_three" />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
