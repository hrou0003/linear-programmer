import React, { useContext } from "react";
import { DatasetsContext } from "./context";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

function Chart() {
  const { state, dispatch } = useContext(DatasetsContext);



  const data = [
    {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      mode: "lines",
    },
  ];
  const layout = { title: "Chart Title" };

  return (
    <>
      <Plot 
        data={state} 
        layout={layout}
      />
    </>
  );
}

export default Chart;
