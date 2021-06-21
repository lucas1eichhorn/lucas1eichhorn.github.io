import { Link } from "react-scroll";
import NextLink from "next/link";
import Collapse from "react-bootstrap/Collapse";
import { Button } from "react-bootstrap";
import { useState } from "react";
const Navbar = ({ menu = true }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar navbar-dark bg-blue1">
      <div className="container">
        <NextLink href="/">
          <a className="navbar-brand">Lucas Eichhorn <br></br>
            <small>Engineer &amp; FullStack Developer</small></a>
        </NextLink>
        {menu &&
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            variant="link"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
        }
        <Collapse
          in={open}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="jobs"
                spy={true}
                smooth={true}
                onClick={() => setOpen(!open)}
              >
                Job experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="skills"
                spy={true}
                smooth={true}
                onClick={() => setOpen(!open)}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="education"
                spy={true}
                smooth={true}
                onClick={() => setOpen(!open)}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="certifications"
                spy={true}
                smooth={true}
                onClick={() => setOpen(!open)}
              >
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="learning"
                spy={true}
                smooth={true}
                onClick={() => setOpen(!open)}
              >
                Learning now
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="languages"
                spy={true}
                smooth={true}
                onClick={() => setOpen(!open)}
              >
                Languages
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="projects"
                spy={true}
                smooth={true}
                onClick={() => setOpen(!open)}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <NextLink href="/github">
                <a className="nav-link">Github</a>
              </NextLink>
            </li>
          </ul>
        </Collapse>
      </div>
    </nav>
  );
};
export default Navbar;
