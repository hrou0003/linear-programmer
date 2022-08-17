import React, { useContext, useEffect, useState } from "react";
import { DatasetsContext } from "./context";
import Input from "./Input";

function Inputs() {
  const [recentInput, setRecentInput] = useState("");
  const [inputBoxes, setInputBoxes] = useState([
    <Input setRecentInput={setRecentInput} key={1} index={1} />,
  ]);
  const { state, dispatch } = useContext(DatasetsContext);

  const addNewInput = () => {
    if (recentInput.length > 0) {
      setRecentInput("");
      setInputBoxes((prev) => [
        ...prev,
        <Input
          setRecentInput={setRecentInput}
          key={state.length + 1}
          index={state.length + 1}
        />,
      ]);
    }
  };

  const displayInputs = () => {
    return inputBoxes.map((input) => input);
  };

  return (
    <div>
      {displayInputs()}
      <button onClick={() => addNewInput()}>Add new</button>
    </div>
  );
}

export default Inputs;
