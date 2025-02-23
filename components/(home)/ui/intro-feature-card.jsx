import Image from "next/image";

export default function IntroFeatureCard({ data, index }) {
    // check if the index is odd
    const isOdd = index % 2 === 0;

    return (
        <div
            className={`single-intro-feature-content white-bg border-radius10 intro-feature-margin transition5 mb-30 ${
                !isOdd ? "mt-60" : ""
            }`}
            data-tilt
            data-tilt-max={10}
        >
            <div className="intro-ft-icon d-inline-block mb-30 transition5">
                <Image
                    height={74}
                    width={74}
                    className="h-auto w-100"
                    priority
                    src={data.iconUrl}
                    alt="icon1"
                />
            </div>
            <div className="intro-feature-text">
                <h4 className="mb-22">{data.title}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    );
}
