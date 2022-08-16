

import React, { useContext, useState } from 'react'
import { DatasetsContext } from "./context";
import Input from './Input';

function Inputs() {

  const [inputBoxes, setInputBoxes] = useState([<Input key={1}/>])
  const { state, dispatch } = useContext(DatasetsContext)

  const addNewInput = () => {
    setInputBoxes(prev => [...prev, <Input key={state.length} />])
  }

  const displayInputs = () => {
    return inputBoxes.map(input => input)
  }

  return (
    <div>
      {displayInputs()}
      <button onClick={() => addNewInput()}>Add new</button>
    </div>
  )
}

export default Inputs