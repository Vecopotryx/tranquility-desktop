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
      default:
        handleCommand(<br/>);
        break;
    }
  };

  const handleCommand = (element: JSX.Element) => {
    setCommandHistory([...commandHistory, <PrevUserInput/>, <>{element} <br /></>]);
  };

  const PrevUserInput = () => {
    return (<p>$ {currentInput}</p>)
  }

  const Test = () => {
    return <>Test</>;
  };

  return (
    <div>
      {commandHistory.map((element, index) => <div key={index}>{element}</div>)}

      <InputLine key={-1} />
    </div>
  );
};

export default Terminal;
