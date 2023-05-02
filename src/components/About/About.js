import React from "react";
import "./about.css";
import about from "../../Image/about.jpg";

const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img
              src="{about}"
              height={"400px"}
              width={"400px"}
              alt="about_image"
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12"></div>
      </div>
    </div>
  );
};

export default About;
