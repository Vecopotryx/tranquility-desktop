import React from "react";

export const Settings = ({ theme, setTheme, background, setBackground }) => {
  return (
    <React.Fragment>
      <h1>{background}</h1>
      <button onClick={() => setBackground("url('https://images.unsplash.com/photo-1607166303098-19ed940446bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80');")}>Change background</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("classic")}>Classic</button>
    </React.Fragment>
  );
};
