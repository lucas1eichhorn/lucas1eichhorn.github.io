import { useEffect, useState } from "react";

export default function useSticky(y = 50) {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                window.scrollY > y ? setSticky(true) : setSticky(false);
            };

            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", () => handleScroll);
            };
        }
    }, [isSticky]);

    return isSticky;
}
