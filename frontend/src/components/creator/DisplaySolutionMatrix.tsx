import { Grid, Typography } from "@mui/material";
import { MathComponent } from "mathjax-react";
import math from "mathjs";
import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { SolutionContext } from "../../contexts/mainContexts/context";

function DisplayMatrix() {
  const { solution, setSolution } = useContext(SolutionContext);

  const arrayToLatex = (array: number[][]) => {

   let latex = `\\left[\\begin{array}{${'r'.repeat((array.length-1))}|r}` 

   for (let i = 0; i < array.length; i++) {
    let subArray = array[i]

    for (let j = 0; j < subArray.length; j++) {
        if (j === 0) {
            latex += subArray[j]
        } else if (j === subArray.length - 1 && i !== array.length-1) {
            latex += `&${subArray[j]}\\\\`
        } else {
            latex += `&${subArray[j]}`
        }
    }
    
   }
    return latex + "\\end{array}\\right]"
  }

  const arrayToGrid = (array: number[]) => {
    return <Grid container spacing={2}>
      {array.map((item) => (
        <Grid item key={nanoid()}>
          {item}
        </Grid>
      ))}
    </Grid>
  }

  const showMatrix = () => {
    if (solution.matrix.length > 0) {
      return <Grid container spacing={2}>
        {solution.matrix.map((row) => (
          arrayToGrid(row)
        ))}
      </Grid>
  }};

  return (<>
  <Typography>Solved Matrix:</Typography>
  {showMatrix()}
  </>)
  }

export default DisplayMatrix;
