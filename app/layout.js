import Preloader from "@/components/ui/preloader";
import { jostMedium, openSans } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  "title": "Lucas Eichhorn | Data and Software Engineer",
  "description": "Portfolio of Lucas Eichhorn, a Data and Software Engineer with experience in Big Data, Machine Learning, and Software development. Based in Amsterdam, Netherlands, specializing in innovative technological solutions and business process optimization.",
  "keywords": [
    "Lucas Eichhorn",
    "Data Engineer",
    "Software Engineer",
    "Big Data",
    "Machine Learning",
    "Cloud Computing",
    "Data Science",
    "Madrid",
    "Spain",
    "technological solutions",
    "process optimization"
  ],
  "openGraph": {
    "title": "Lucas Eichhorn | Data and Software Engineer",
    "description": "Explore the portfolio of Lucas Eichhorn, an expert in Big Data, Machine Learning, and Software development, offering innovative technological solutions from Amsterdam, Netherlands.",
    "image": "https://lucaseichhorn.com.ar/images/slider/person.png",
    "url": "https://lucaseichhorn.com.ar",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Lucas Eichhorn | Data and Software Engineer",
    "description": "Meet Lucas Eichhorn, a specialist in Big Data, Machine Learning, and Software development, providing technological solutions from Amsterdam, Netherlands.",
    "image": "https://lucaseichhorn.com.ar/images/slider/person.png"
  },
  "robots": "index, follow",
  "canonical": "https://lucaseichhorn.com.ar",
  "favicon": "/favicon.ico"
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
