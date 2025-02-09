export default function EducationList({ data }) {
    const { start, end } = data.date || {};

    return (
        <li className="mb-32 d-flex align-items-start rotate-hover">
            <div className="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3">
                <span className="theme-color d-inline-block">
                    <span
                        className={`d-block rotate flat-family ${data.icon}`}
                    />
                </span>
            </div>
            <div className="experience-service-text d-inline-block">
                <h3 className="mb-2">{data.title}</h3>
                <h4>
                    New York University{" "}
                    <span className="meta-text-color openS-font-family">
                        ( {start} - {end} )
                    </span>
                </h4>
                <p className="mb-0 mt-15">{data.description}</p>
            </div>
        </li>
    );
}
