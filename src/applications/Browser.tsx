import React, { useState } from "react";
import loadingSpinner from "../assets/img/tail-spin.svg";

const Browser = () => {
  const [year, setYear] = useState(2000);
  const [site, setSite] = useState("https://www.w3.org");
  const [loading, setLoading] = useState(true);
  const [frameSource, setFrameSource] = useState(
    "https://web.archive.org/web/20000301012010/http://w3.org"
  );

  const updateIframe = () => {
    const newSource =
      "https://web.archive.org/web/" + year + "0301012010/" + site;
    setFrameSource(newSource);
    if(frameSource !== newSource){
        setLoading(true);
    }
  };

  return (
    <div className="browser" style={{ height: "100%" }}>
      <div id="browserNavbar" style={{ textAlign: "center" }}>
        <label>
          Year:
          <select onChange={(e) => setYear(Number(e.target.value))}>
            <option value="2000">2000</option>
            <option value="2005">2005</option>
            <option value="2010">2010</option>
            <option value="2015">2015</option>
          </select>
        </label>
        <input
          type="text"
          placeholder="Enter address"
          onChange={(e) => setSite(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") updateIframe();
          }}
          style={{ marginLeft: "1%", marginRight: "1%", width: "50%" }}
        />
        <button onClick={() => updateIframe()}>Go</button>
        {loading && (
          <>
            <img className="loadingSpinner" src={loadingSpinner} alt="Loading"></img>
            <p>
              Retrieving data from
              <a href="https://archive.org/">Archive.org</a>
            </p>
          </>
        )}
      </div>
      <iframe
        title="browserFrame"
        src={frameSource}
        width="100%"
        height="100%"
        onLoad={() => setLoading(false)}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default Browser;
