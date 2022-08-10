import React, { createContext, Dispatch, useReducer } from "react"
import { Action, ActionKind, datasetsReducer, DatasetsType, initialState } from "./reducer"

const DatasetsContext = createContext<{
    state: DatasetsType[];
    dispatch: Dispatch<ActionKind>;
}>({
    state: initialState,
    dispatch: () => null,
})

const mainReducer = ( datasets: DatasetsType[], action: Action) => ({
    datasets: datasetsReducer(datasets, action)
});

const DatasetsProvider: React.FC = ({ children }) => {
    
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <DatasetsContext.Provider value={{state, dispatch}}>
            {children}
        </DatasetsContext.Provider>
    )
}

export { DatasetsProvider, DatasetsContext }