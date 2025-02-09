"use client";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import navigation from "@/data/navigation";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/features/toggle/toggleSlice";

const social = [
    {
        name: "Facebook",
        icon: "fab fa-github",
        color: "facebook-bg",
        href: "#",
    },
    {
        name: "Twitter",
        icon: "fab fa-twitter",
        color: "twitter-bg",
        href: "#",
    },
    {
        name: "Linkedin",
        icon: "fab fa-linkedin-in",
        color: "linkedin-bg",
        href: "#",
    },
    {
        name: "Instagram",
        icon: "fab fa-instagram",
        color: "instagram-bg",
        href: "#",
    },
];

export default function SidebarNavigation() {
    const isSidebarActive = useSelector(
        (state) => state.toggle.isSidebarActive
    );

    const dispatch = useDispatch();

    return (
        <div className={`ui-sidebar ${isSidebarActive ? "active" : ""}`}>
            <Sidebar>
                <button
                    onClick={() => dispatch(toggleSidebar())}
                    className="ui-sidebar-close"
                >
                    <i className="fa fa-times"></i>
                </button>
                <Menu>
                    {navigation?.map((item, i) => (
                        <MenuItem
                            key={i}
                            component={
                                <Link
                                    href="#"
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    activeClass="ui-sidebar-active"
                                />
                            }
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            {item.name}
                        </MenuItem>
                    ))}
                </Menu>

                {/* social link start */}
                <h5 className="text-white text-center mt-35 pb-1 d-inline-block ml-3">
                    Follow me
                </h5>

                <ul className="social social-bg text-center d-flex mt-10 ml-3">
                    {social?.map((item, i) => (
                        <li key={i} className="mr-2 rotate-hover">
                            <Link
                                className={`${item.color} text-center pr-0 text-white d-block transition-3 rotate`}
                                href={item.href}
                            >
                                <i className={item.icon} />
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* social link end */}
            </Sidebar>
        </div>
    );
}
