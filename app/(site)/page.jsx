import Hero from "@/components/(home)/hero";
import Header1 from "@/components/header/header-1";
import IntroFeature from "@/components/(home)/intro-feature";
import About from "@/components/(home)/about";
import PortfolioArea from "@/components/(home)/portfolio-area";
import FunFact from "@/components/(home)/fun-fact";
import AwardArea from "@/components/(home)/award-area";
import Experience from "@/components/(home)/experience";
import Education from "@/components/(home)/education";
import SkillArea from "@/components/(home)/skill-area";
import Lifestyle from "@/components/(home)/lifestyle";
import CourseArea from "@/components/(home)/courses-area";
import Footer from "@/components/footer/footer";

export default function Home() {
    return (
        <>
            <Header1 />
            <Hero />
            <IntroFeature />
            <About />
            <FunFact />
            <AwardArea />
            <Experience />
            <Education />
            
            <CourseArea />
            <SkillArea />
            <Lifestyle />
            <PortfolioArea />
            <Footer />

        </>
    );
}
