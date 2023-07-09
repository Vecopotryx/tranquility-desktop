import { useState } from "react";
import styled from "styled-components";
import LogoSideView from "../../assets/img/LogoSideView.png";
import { BsGithub } from "react-icons/bs"

const AboutContainer = styled.div`
  text-align: center;
  user-select: none;
  
  > a {
    text-decoration: underline gray;
    color: var(--primary-color);
    font-size: 1.2rem;

    :hover {
      background-color: rgba(128,128,128,0.5);
      border-radius: 0.3em;
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

      <InfoBox>Project <span>Tranquility Desktop</span></InfoBox>
      <CreditBox onClick={() => setCreditsVisible(!creditsVisible)}>
        Credits <span style={{ transform: creditsVisible ? "rotate(270deg)" : "" }}>{">"}</span>
        {creditsVisible && <CreditsList />}
      </CreditBox>

      <br />
      <BsGithub />
      {" "}
      <a
        href="https://github.com/vecopotryx/tranquility-desktop"
        target="_blank"
        rel="noopener noreferrer"
      >
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
          href="https://github.com/vecopotryx/tranquility-desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tranquility Desktop
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
