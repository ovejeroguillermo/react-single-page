import React, { useState } from "react";
import "./mavbarmobileview.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobileView = ({ theme, handleChangeTheme }) => {
  const [open, setOpen] = useState(false);

  const handleNavbaropen = () => {
    setOpen(!open);
  };

  return (
    <div className="responsive-mobile-view">
      <div className="container-fluid mobile-view-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleNavbaropen} />
        </p>
      </div>

      {open ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Service
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="career"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Career
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="video"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Video
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="team"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="feedback"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Contact
              </Link>
            </li>

            <li>
              <Switch
                onChange={handleChangeTheme}
                checked={theme === "light"}
              />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
