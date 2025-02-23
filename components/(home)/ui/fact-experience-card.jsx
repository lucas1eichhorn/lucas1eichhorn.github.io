"use client";
import CountUp from "react-countup";

export default function FactExperienceCard({ data }) {
    return (
        <div className="single-fact d-block d-flex align-items-center border-radius10 mb-30">
            <div className="mr-25 d-flex align-content-start justify-content-center">
                <span className="theme-color d-inline-block counter">
                    {typeof data.x === "string" ? (
                        <>
                            <CountUp
                                end={Number(data.x.split("")[0])}
                                enableScrollSpy={true}
                            />
                            {data.x.split("")[1]}
                        </>
                    ) : (
                        <CountUp end={data.x} enableScrollSpy={true} />
                    )}
                </span>
            </div>
            <h3 className="text-white mb-0">{data.title}</h3>
        </div>
    );
}
