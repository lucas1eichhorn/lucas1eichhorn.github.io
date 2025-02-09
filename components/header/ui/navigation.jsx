import navigation from "@/data/navigation";
import { Link } from "react-scroll";

export default function Navigation() {
    return (
        <nav className="d-none d-lg-block">
            <ul className="d-block">
                {/* navigation start */}
                {navigation?.map((item, i) => (
                    <li key={i}>
                        <Link
                            href="#"
                            to={item.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            activeClass="ui-nav-active"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
                {/* navigation end */}
            </ul>
        </nav>
    );
}
