import React from "react";

export const Settings = ({ theme, setTheme }) => {
  return (
    <React.Fragment>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </React.Fragment>
  );
};
