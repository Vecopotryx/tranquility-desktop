import { useState } from "react";
import styled from "styled-components";
import githubIcon from "../../assets/img/github.svg";
import LogoSideView from "../../assets/img/LogoSideView.png";

const AboutContainer = styled.div`
  text-align: center;
  user-select: none;
  
  > a {
    text-decoration: underline blue;
    color: var(--primary-color);
    font-size: 1.2rem;
    
    > img {
      height: 1.5rem;
      vertical-align: text-top;
      margin-right: 0.5ch;      
    }
  }
`

const InfoBox = styled.p`
  display: inline-block;
  text-align: left;
  margin-top: 0;
  padding-left: 0.5cm;
  padding-right: 0.5cm;
  width: 75%;
  border: 1px solid gray;
  border-radius: var(--borderRadius);
  line-height: 1.3cm;

  span {
    float: right;
  }
`

const CreditBox = styled(InfoBox)`
  cursor: pointer;
  
  span {
    transition: transform 0.3s;
  }
`

const About = () => {
  const [creditsVisible, setCreditsVisible] = useState(false);
  return (
    <AboutContainer>
      <img src={LogoSideView} style={{ height: "10rem" }} alt="Logo"></img>
      <br />

      <InfoBox>Project <span>Retro Desktop Environment</span></InfoBox>
      <CreditBox onClick={() => setCreditsVisible(!creditsVisible)}>
        Credits <span style={{ transform: creditsVisible ? "rotate(270deg)" : "" }}>{">"}</span>
        {creditsVisible && <CreditsList />}
      </CreditBox>

      <br />
      <a
        href="https://github.com/Vecopotryx/retro-desktop-environment"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubIcon}
          alt="githubIcon"
          className="githubIcon"
        ></img>
        GitHub Repository
      </a>
    </AboutContainer>
  );
};

const CreditsList = () => {
  return (
    <>
      <br />
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
    </>
  );
};

export default About;
