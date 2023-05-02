import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-main">
        <ul>
          <li className="navi-item">Home</li>
          <li className="navi-item">About</li>
          <li className="navi-item">Services</li>
          <li className="navi-item">Career</li>
          <li className="navi-item">Video</li>
          <li className="navi-item">Team</li>
          <li className="navi-item">Testimonial</li>
          <li className="navi-item">Feedback</li>
          <li className="navi-item">Contact</li>
          <li className="navi-item">Subscription</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
