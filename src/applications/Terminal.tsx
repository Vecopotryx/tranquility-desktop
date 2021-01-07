import React, { useState } from "react";

const Terminal = () => {
  // const [currentInput, setCurrentInput] = useState<string>("");

  let currentInput = "";
  const InputLine = () => {
    return (
      <div>
        $
        <input
          type="text"
          onChange={(e) => {
            currentInput = e.target.value;
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") handleInput();
          }}
        ></input>
      </div>
    );
  };

  const [commandHistory, setCommandHistory] = useState<JSX.Element[]>([
    <InputLine />,
  ]);

  const handleInput = () => {
    switch (currentInput.toLowerCase()) {
      case "test":
        setCommandHistory([...commandHistory, <Test />]);
        break;
      default:
        break;
    }
  };

  const Test = () => {
    return <>Test</>;
  };
  return <div>{commandHistory.map((element) => element)}</div>;
};

export default Terminal;
