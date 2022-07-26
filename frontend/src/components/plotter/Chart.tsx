import React, { useContext } from "react";
import { DatasetsContext } from "../../contexts/plotterContexts/context";
import Plotly, { PlotData } from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
import { Box } from "@mui/material";
import { SolutionType } from "../../contexts/mainContexts/context";
import { compile } from "mathjs";
import { ActionKind } from "../../contexts/plotterContexts/reducer";
const Plot = createPlotlyComponent(Plotly);

const validExpression = (expression: string) => {
  try {
    let expr = compile(expression);
    let scope = { x: 1 };
    expr.evaluate(scope);
    return true;
  } catch (err) {
    return false;
  }
};

type Props = {
  solution: SolutionType;
}

function Chart({ solution }: Props) {
  const { state, dispatch } = useContext(DatasetsContext);

  const updateExpression = (expression: string) => {

    if (validExpression(expression)) {

      let expr = compile(expression);

      let xValues = [1, 2, 3, 4, 5, 6, 7, 8];
      let yValues = xValues.map((x) => expr.evaluate({ x: x }))

      let payload: Partial<PlotData> = {
        ids: [id.current],
        name: `f(x) = ${expression}`,
        x: xValues,
        y: yValues,
        fill: "tozeroy",
        type: "scatter"
      };

      dispatch({ type: ActionKind.Update, payload: payload });
    } else {
      console.log('invalid expression') 
    }
  };

  const data = [
    {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      mode: "lines",
    },
  ];
  const layout = { title: "Chart Title" };

  return (
    <Box margin="auto">
      <Plot 
        data={state} 
        layout={layout}
      />
    </Box>
  );
}

export default Chart;
