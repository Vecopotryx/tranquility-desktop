import React from "react";
import "../../assets/styles/componentStyles/Settings.css";
import githubIcon from "../../assets/img/github.svg";

const About = () => {
  return (
    <div className="aboutContainer">
      <div>
        <p style={{ float: "left", marginLeft: "0.5cm" }}>System</p>
        <p style={{ float: "right", marginRight: "0.5cm" }}>
          Retro Desktop Environment
        </p>
      </div>
      <br />
      <a
        href="https://github.com/Vecopotryx/retro-desktop-environment"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubIcon}
          width="64px"
          alt="githubIcon"
          className="githubIcon"
        ></img>
      </a>
    </div>
  );
};

export default About;
