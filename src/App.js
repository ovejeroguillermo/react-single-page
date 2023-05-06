import React, { useState, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import Subscription from "./components/Subscription/Subscription.js";
import Footer from "./components/Footer/Footer.js";
import Team from "./components/Team/Team.js";
import Feedback from "./components/Feedback/Feedback.js";
import Video from "./components/Video/Video";
import Career from "./components/Career/Career.js";
import NavbarMobileView from "./components/Navbar/NavbarMobileView";
import Contact from "./components/Contact/Contact.js";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("ligth");

  const handleChangeTheme = () => {
    setTheme((current) => (current === "ligth" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Navbar />
      <NavbarMobileView theme={theme} handleChangeTheme={handleChangeTheme} />

      <Home theme={theme} handleChangeTheme={handleChangeTheme} />

      <div className="main-theme-compo" id={theme}>
        <About />
        <Service />
        <Career />
        <Video />
        <Team />
        <Testimonial />
        <Feedback />
        <Contact />
      </div>

      <Subscription />
      <Footer />

      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
