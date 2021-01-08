import React, { useState } from "react";
import loadingSpinner from "../assets/img/tail-spin.svg";

const Browser = () => {
  const [year, setYear] = useState(2010);
  const [site, setSite] = useState("https://www.w3.org");
  const [loading, setLoading] = useState(true);
  const [frameSource, setFrameSource] = useState(
    "https://web.archive.org/web/19950301012010/netscape.com"
  );

  const updateIframe = () => {
    const newSource =
      "https://web.archive.org/web/" + year + "0301012010/" + site;
    setFrameSource(newSource);
    if (frameSource !== newSource) {
      setLoading(true);
    }
  };

  const YearOptions = () => {
    let years: number[] = [];
    for (let i = 1995; i <= 2020; i++) {
      years.push(i);
    }

    return (
      <>
        {years.map((year) => (
          <option value={year} key={year}>{year}</option>
        ))}
      </>
    );
  };

  return (
    <div className="browser" style={{height: "100%", overflow: "hidden"}}>
      <div id="browserNavbar" style={{ textAlign: "center" }}>
        <label>
          Year:
          <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
              <YearOptions/>
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
            <img
              className="loadingSpinner"
              src={loadingSpinner}
              alt="Loading"
            ></img>
            <p>
              Retrieving data from
              <a href="https://archive.org/" target="_blank" rel="noopener noreferrer"> Archive.org</a>
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
        style={{border: "none"}}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default Browser;
