import React, { useState } from "react";
import loadingSpinner from "../assets/img/tail-spin.svg";

const Browser = () => {
  let year = 2000;
  let site = "http://w3.org";

  // const [year, setYear] = useState(2000);
  // const [site, setSite] = useState("https://www.w3.org");
  const [loading, setLoading] = useState(true);
  const [frameSource, setFrameSource] = useState(
    "https://web.archive.org/web/2000/0301012010/http://w3.org"
  );

  const updateIframe = () => {
    const newSource =
      "https://web.archive.org/web/" + year + "0301012010/" + site;
    console.log(newSource);
    console.log(frameSource);
    if (newSource !== frameSource) {
      setLoading(true);
      setFrameSource(newSource);
    }
  };

  return (
    <div className="browser">
      <div id="browserNavbar">
        <label>
          Year:
          <select onChange={(e) => (year = Number(e.target.value))}>
            <option value="2000">2000</option>
            <option value="2005">2005</option>
            <option value="2010">2010</option>
            <option value="2015">2015</option>
          </select>
        </label>
        <input
          type="text"
          placeholder="Enter address"
          onChange={(e) => (site = e.target.value)}
        />
        <button onClick={() => updateIframe()}>Go</button>
        {loading && (
          <>
            <img className="loadingSpinner" src={loadingSpinner}></img>
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
        height="300%"
        onLoad={() => setLoading(false)}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default Browser;
