import React, { useState } from "react";
import "../../assets/styles/componentStyles/Settings.css";
import githubIcon from "../../assets/img/github.svg";
import LogoSideView from "../../assets/img/LogoSideView.png";

const About = () => {
  const [creditsVisible, setCreditsVisible] = useState(false);
  return (
    <div className="aboutContainer">
      <img src={LogoSideView} width="15%" alt="Logo"></img>
      <br />

      <div>
        <p className="aboutLeft">Project</p>
        <p className="aboutRight">Retro Desktop Environment</p>
      </div>

      <div
        className="credits"
        style={{ height: creditsVisible ? "3cm" : "1.3cm" }}
        onClick={() => setCreditsVisible(!creditsVisible)}
      >
          
        <div style={{ height: "1cm" }}>
          <p className="aboutLeft">Credits</p>
          <p
            className="aboutRight"
            style={{ transform: creditsVisible ? "rotate(270deg)" : "" }}
          >
            {">"}
          </p>
        </div>

        {creditsVisible && <CreditsList />}
      </div>
      
      <br />
      <a
        href="https://github.com/Vecopotryx/retro-desktop-environment"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <img
          src={githubIcon}
          width="32px"
          alt="githubIcon"
          className="githubIcon"
        ></img>
        <p> GitHub Repository</p>
      </a>
    </div>
  );
};

const CreditsList = () => {
  return (
    <div className="creditsList">
      <p>
        • Vecopotryx -{" "}
        <a
          href="https://github.com/Vecopotryx/retro-desktop-environment"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retro Desktop Environment
        </a>
      </p>
      <br />
      <p>
        • Matt Montag -{" "}
        <a
          href="https://github.com/mmontag/chip-player-js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chip Player JS
        </a>
      </p>
    </div>
  );
};

export default About;
