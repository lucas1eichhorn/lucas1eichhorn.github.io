"use client";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import navigation from "@/data/navigation";
import { Link } from "react-scroll";
import SidebarSocial from "./ui/sidebar-social"
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/features/toggle/toggleSlice";




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
               
                    <SidebarSocial />
                
                {/* social link end */}
            </Sidebar>
        </div>
    );
}
