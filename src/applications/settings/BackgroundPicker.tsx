import { useState } from "react";
import defaultBackground1 from "../../assets/img/backgrounds/sylvain-mauroux-jYCUBAIUsk8-unsplash.jpg";
import defaultBackground2 from "../../assets/img/backgrounds/patrick-robert-doyle-r4PxPNSIzHw-unsplash.jpg";
import defaultBackground3 from "../../assets/img/backgrounds/kyle-bushnell-wjrlOqZCvCM-unsplash.jpg";
import defaultBackground4 from "../../assets/img/backgrounds/nasa-Q1p7bh3SHj8-unsplash.jpg";
import styled from "styled-components";

const DefaultBackgroundHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0.2cm;
  grid-row-gap: 0.2cm;
  width:50%;

  & img {
    height: 4cm;
    object-fit: cover;
    width: 100%;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const CurrentBackgroundPreview = styled.img`
  object-fit: cover;
  float: left;
  width: 49%;
  margin-right: 1%;
  height: 8.2cm;
  border-radius: 5px;
`

const BackgroundOptions = styled.div`
  text-align: center;

  & label {
    margin-left: 1%;
    margin-right: 1%;
  }

  & label & * {
    margin-left: 0.2cm;
  }
`

const BackgroundPicker = () => {
  const [unsplashTerm, setUnsplashTerm] = useState("");
  const [fetchingUnsplash, setFetchingUnsplash] = useState(false);
  const [background, setBackground] = useState<string>(document.documentElement.style.getPropertyValue("--backgroundImg").slice(4, -1).replace(/\\/g, ''));

  const onImageChange = (event: { target: HTMLInputElement }) => {
    if (event.target.files && event.target.files[0]) {
      let newImage = URL.createObjectURL(event.target.files[0]);
      setBackground(newImage);
      document.documentElement.style.setProperty('--backgroundImg', "url(" + newImage + ")");
      // Don't store URL since it is temporary
    }
  };

  const updateBackground = (value: string) => {
    setBackground(value);
    document.documentElement.style.setProperty('--backgroundImg', "url(" + value + ")");
    localStorage.setItem("backgroundImg", "url(" + value + ")");
  };

  const unsplashHandler = () => {
    setFetchingUnsplash(true);
    let widthHeight = window.screen.availWidth + "x" + window.screen.availHeight;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://source.unsplash.com/" +
      widthHeight +
      "/?" +
      (unsplashTerm === "" ? "nature" : unsplashTerm), true);
    xhr.onreadystatechange = () => {
      updateBackground(xhr.responseURL);
      setFetchingUnsplash(false);
    };
    xhr.send();
  };

  const handleUnsplashInput = (event: { target: HTMLInputElement }) => {
    setUnsplashTerm(event.target.value);
  };

  const DefaultBackground = ({ background }: { background: string }) => {
    return (
      <img
        src={background}
        alt=""
        onClick={() => updateBackground(background)}
      ></img>
    );
  };

  return (
    <div style={{ padding: "2%", userSelect: "none" }}>
      <CurrentBackgroundPreview src={background} />
      <DefaultBackgroundHolder>
        <DefaultBackground background={defaultBackground1} />
        <DefaultBackground background={defaultBackground2} />
        <DefaultBackground background={defaultBackground3} />
        <DefaultBackground background={defaultBackground4} />
      </DefaultBackgroundHolder>
      {fetchingUnsplash && <progress style={{ width: "47%", position: "absolute", left: "2%" }} />}
      <br />
      <BackgroundOptions>
        <label>
          Random from Unsplash:
          <input
            type="text"
            onChange={handleUnsplashInput}
            onKeyUp={(e) => {
              if (e.key === "Enter") unsplashHandler();
            }}
          ></input>
          <button onClick={unsplashHandler}>Search for photo</button>
        </label>

        <label>
          Upload from computer: <input type="file" onChange={onImageChange} />
        </label>
      </BackgroundOptions>
    </div>
  );
};

export default BackgroundPicker;
