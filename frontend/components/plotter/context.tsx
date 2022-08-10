import React, { createContext, Dispatch, useReducer } from "react"
import { Action, ActionKind, datasetsReducer, DatasetsType, initialState } from "./reducer"

const DatasetsContext = createContext<{
    state: DatasetsType[];
    dispatch: Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
})

interface Props {
    children: React.ReactNode
}

const DatasetsProvider = ({ children }: Props) => {
    
    const [state, dispatch] = useReducer(datasetsReducer, initialState);

    return (
        <DatasetsContext.Provider value={{state, dispatch}}>
            {children}
        </DatasetsContext.Provider>
    )
}

export { DatasetsProvider, DatasetsContext }