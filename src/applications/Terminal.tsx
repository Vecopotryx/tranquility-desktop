import React, { useState } from "react";

const Terminal = () => {
  // const [currentInput, setCurrentInput] = useState<string>("");

  let currentInput = "";
  const InputLine = ({ id }: { id: number }) => {
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

  interface CommandHistoryProps {
    id: number;
    component: JSX.Element;
  }

  // const [currentId, setCurrentId] = useState(0);
  // let currentId = 0;

  const [commandHistory, setCommandHistory] = useState<CommandHistoryProps[]>([
    {
      id: 0,
      component: <InputLine id={0} />,
    },
  ]);

  const handleInput = () => {
    switch (currentInput.toLowerCase()) {
      case "test":
        handleCommand(<Test />);
        break;
      default:
        handleCommand(<p>{currentInput}</p>)
        break;
    }
  };

  const handleCommand = (element: JSX.Element) => {
    setCommandHistory([
      ...commandHistory,
      { id: 1, component: element },
      { id: 1, component: <br/> },
    ]);
  };

  const Test = () => {
    return <>Test</>;
  };
  return (
    <div>
      {commandHistory.map((element) => element.component)}

      <InputLine id={1}/>
    </div>
  );
};

export default Terminal;
