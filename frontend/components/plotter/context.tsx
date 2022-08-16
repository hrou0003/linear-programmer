import { Data } from "plotly.js";
import React, { createContext, Dispatch, useReducer, useState } from "react"
import { Action, ActionKind, datasetsReducer, initialState } from "./reducer"

type Inputs = {
    id: string;
    index: number;
}

const DatasetsContext = createContext<{
    inputs: Inputs[];
    state: Data[];
    dispatch: Dispatch<Action>;
    setInputs: React.Dispatch<React.SetStateAction<{
    id: string;
    index: number;
}[]>>;
}>({
    inputs: [{ id: "1", index: 0 }],
    state: initialState,
    dispatch: () => null,
    setInputs: () => null,
})

interface Props {
    children: React.ReactNode
}

const DatasetsProvider = ({ children }: Props) => {
    
    const [state, dispatch] = useReducer(datasetsReducer, initialState);
    const [inputs, setInputs] = useState([{ id: "1", index: 0}])

    return (
        <DatasetsContext.Provider value={{inputs, setInputs, state, dispatch}}>
            {children}
        </DatasetsContext.Provider>
    )
}

export { DatasetsProvider, DatasetsContext }