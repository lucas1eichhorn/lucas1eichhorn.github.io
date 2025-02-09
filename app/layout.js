import Preloader from "@/components/ui/preloader";
import { jostMedium, openSans } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
    title: "Lucas Eichhorn | Software Data Engineer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${jostMedium.className} ${openSans.variable} over-hiddenn position-relative`}
                style={{
                    backgroundImage: "url('/images/slider/body-bg.jpg')",
                }}
            >
                <Preloader />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
