import React from "react";
import "./home.css";
import TypeWriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container home-content">
        <h1>
          <TypeWriter
            options={{
              strings: ["Web Development|", "World", "Mobile App"],
              autoStart: true,
              loop: true,
              delay: 5,
            }}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          itaque totam rem tempore suscipit! Doloremque consequuntur ipsa
          assumenda eos!
        </p>
        <span className="view-details-home-button">View Details</span>
      </div>
    </div>
  );
};

export default Home;
