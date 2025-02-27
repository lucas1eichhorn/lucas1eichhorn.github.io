import  Link  from "next/link";
const social = [
    {
        icon: "fab fa-github",
        color: "dark-bg",
        link: "https://github.com/lucas1eichhorn",
    },
    {
        icon: "fab fa-linkedin-in",
        color: "linkedin-bg",
        link: "https://www.linkedin.com/in/lucas-eichhorn",
    }
];
export default function SidebarSocial() {
    return (
        <div>
        <h5 className="text-white text-center mt-35 pb-1 d-inline-block ml-3">
        Follow me
    </h5>
        <ul className="social social-bg text-center d-flex mt-10 ml-3">
                    {social?.map((item, i) => (
                        <li key={i} className="mr-2 rotate-hover">
                            <Link
                                className={`${item.color} text-center pr-0 text-white d-block transition-3 rotate`}
                                href={item.link}
                                target="_blank"
                            >
                                <i className={item.icon} />
                            </Link>
                        </li>
                    ))}
                </ul>
                </div>
    );
}
