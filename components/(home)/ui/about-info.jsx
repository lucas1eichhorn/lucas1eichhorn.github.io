import Image from "next/image";

export default function AboutInfo() {
    return (
        <div className="about-content position-relative mb-50">
            <div className="position-relative">
                <div className="title">
                    <span className="theme-color text-uppercase d-block mb-1 mt--5">
                        About Me
                    </span>
                    <h2 className="mb-30">I am passionate about my work </h2>
                </div>
            </div>
            <p className="mb-2">
                Let's see. where I do begin? I'm an Argentinian system engineer now based in Madrid, where I moved to study a master degree in Big Data Science in 2021.
            </p>
            <p className="mb-2">
                I have solid background in full stack development, with +6 years in the software industry in the past, working as a Full Stack developer, creating web and mobile applications for different industries. Therefore, I have a deep understanding of transactional applications world, data and software engineering lifecycle with coding best practices in different programming languages,
            </p>
            <p className="mb-2">
                3 years ago, I decided to focus my career on Big Data & AI technologies. I found my experience along with data engineering tools really useful. Using all these acquired skills together helping my teams achieve the organization's goals.
            </p>
            
            <div className="about-info-wrapper pt-25 pb-20 mt-25">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-50">
                                <p className="jostMedium-font-family mb-6">
                                    Name
                                </p>
                                <p className="jostMedium-font-family mb-6">
                                    Last Name
                                </p>
                                <p className="jostMedium-font-family mb-6">
                                    Age
                                </p>
                            </li>

                            <li className="d-inline-block">
                                <p className="mb-6">Lucas Alberto</p>
                                <p className="mb-6">Eichhorn Muller</p>
                                <p className="mb-6">31 Years</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-50">
                                <p className="jostMedium-font-family mb-6">
                                    Occupation
                                </p>
                                <p className="jostMedium-font-family mb-6">
                                    Residence
                                </p>
                                <p className="jostMedium-font-family mb-6">
                                    Nationality
                                </p>
                            </li>

                            <li className="d-inline-block">
                                <p className="mb-6">Data engineer</p>
                                <p className="mb-6">Madrid, Spain</p>
                                <p className="mb-6">Argentina & Spain</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
