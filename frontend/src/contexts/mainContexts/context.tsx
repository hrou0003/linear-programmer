import { Data, PlotData } from "plotly.js";
import React, { createContext, Dispatch, useReducer, useState } from "react"

export type SolutionType = {
    pivots: number[][];
    matrix: number[][];
}

const SolutionContext = createContext<{
    solution: SolutionType,
    setSolution: React.Dispatch<React.SetStateAction<SolutionType>>,
}>
({
    solution: { pivots: [], matrix: [] },
    setSolution: () => null
})

interface Props {
    children: React.ReactNode
}

const SolutionProvider = ({ children }: Props) => {
    
    const [solution, setSolution] = useState<SolutionType>({ pivots: [], matrix: [] })

    return (
        <SolutionContext.Provider value={{ solution, setSolution }}>
            {children}
        </SolutionContext.Provider>
    )
}

export { SolutionProvider, SolutionContext }