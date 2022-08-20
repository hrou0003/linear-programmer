import { Typography } from "@mui/material";
import { MathComponent } from "mathjax-react";
import math from "mathjs";
import React, { useContext } from "react";
import { SolutionContext } from "../../contexts/mainContexts/context";

function DisplayMatrix() {
  const { solution, setSolution } = useContext(SolutionContext);

  const arrayToLatex = (array: number[][]) => {

   let latex = '\begin{bmatrix}' 

   for (let i = 0; i < array.length; i++) {
    let subArray = array[i]

    for (let j = 0; i < subArray.length; i++) {
        if (j === 0) {
            latex += subArray[j]
        } else {
            latex += `&${subArray[j]}`
        }
    }
    
    if (i !== array.length - 1) {
       latex += '\\' 
    }
   }
    
   return latex + '\end{bmatrix}'

  }

  const displayMatrix = () => {
    if (solution.matrix.length > 2) {
      try {
        console.log(arrayToLatex(solution.matrix))
      } catch (err) {
        console.log(err)
        return <></>;
      }
    } else {
        console.log('no solution')
      return <></>;
    }
  };

  return <>{displayMatrix()}</>;
}

export default DisplayMatrix;
