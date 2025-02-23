"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Provider } from "react-redux";
import { store } from "@/redux/app/store";
import SidebarNavigation from "@/components/header/sidebar-navigation";
import ScrollTop from "@/components/ui/scroll-top";

if (typeof window !== "undefined") {
    require("bootstrap");
}

export default function Providers({ children }) {
    const [isMounted, setIsMounted] = useState(false);

    // init aos
    useEffect(() => {
        if (typeof window !== "undefined") {
            AOS.init();
            AOS.refresh();
        }
    }, []);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <Provider store={store}>
                {children}

                {/* sidebar mobile nav start */}
                <SidebarNavigation />
                {/* sidebar mobile nav end */}

                {/* scroll top start */}
                <ScrollTop />
                {/* scroll top end */}
            </Provider>
        </>
    );
}
