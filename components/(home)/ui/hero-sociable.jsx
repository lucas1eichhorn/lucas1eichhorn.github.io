import Link from "next/link";

const socialLink = [
    {
        icon: "fab fa-github",
        link: "https://github.com/lucas1eichhorn/",
    },
   
    {
        icon: "fab fa-linkedin-in",
        link: "https://www.linkedin.com/in/lucas-eichhorn/",
    },
  
];

export default function HeroSociable() {
    return (
        <div className="slider-social-link position-absolute right-0 d-none d-md-block z-index11">
            <ul className="social pr-60">
                {socialLink.map((item, i) => (
                    <li key={i} className="mt-10 mb-10 rotate-hover">
                        <Link
                            className="text-white text-center d-inline-block rotate"
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
