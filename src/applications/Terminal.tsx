import { clear } from "console";
import React, { useState, useRef, useEffect } from "react";

const Terminal = () => {
  let currentInput = "";
  const inputRef = useRef<any>();

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
          ref={inputRef}
        ></input>
      </div>
    );
  };

  const [commandHistory, setCommandHistory] = useState<JSX.Element[]>([]);

  useEffect(() => {
    inputRef.current.focus();
  }, [commandHistory]);

  const handleInput = () => {
    switch (currentInput.toLowerCase()) {
      case "test":
        handleCommand(<Test />);
        break;
      case "clear":
        setCommandHistory([]);
        break;
      case "neofetch":
        handleCommand(<Neofetch />);
        break;
      default:
        handleCommand(<InvalidCommand />);
        break;
    }
  };

  const handleCommand = (element: JSX.Element) => {
    setCommandHistory([
      ...commandHistory,
      <PrevUserInput />,
      <>
        {element} <br />
      </>,
    ]);
  };

  const PrevUserInput = () => {
    return <p>$ {currentInput}</p>;
  };

  const Test = () => {
    return <>Test</>;
  };

  const Neofetch = () => {
    return (
      <span style={{ display: "block" }}>
        <pre>{neofetchContent}</pre>
      </span>
    );
  };

  const neofetchContent = `
   ____________________ 
  |  |              |  |      user@RDE
  |[]|              |[]|      --------
  |  |              |  |      OS: Retro Desktop Enviornment
  |  |              |  |      Host: Waygate Miga ST 740
  |  |              |  |      Kernel: 2.0.0
  |  |______________|  |      Packages: 8 (rpt)
  |                    |      Shell: /system/rdsh
  |     ____________   |      DE: RDE
  |    | __      |  |  |      WM: RWM
  |    ||  |     |  |  |      CPU: Interola 68040+ (1) @ 230 MHz
  |    ||__|     |  |  |      GPU: 2dfx Vodude 16
  |____|_________|__|__|      Memory: 5 MiB / 256 MiB
`;

  const InvalidCommand = () => {
    return (
      <p>
        <i>{currentInput}</i> is not a valid command
      </p>
    );
  };

  return (
    <div>
      {commandHistory.map((element, index) => (
        <div key={index}>{element}</div>
      ))}

      <InputLine />
    </div>
  );
};

export default Terminal;
