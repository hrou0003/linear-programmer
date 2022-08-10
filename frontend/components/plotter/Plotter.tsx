import React, { useReducer, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/system";
import Inputs from "./Inputs";
import { Grid } from "@mui/material";
import { DatasetsType, reducer, initialState, addDefault } from "./datasetReducerContext";


const Plotter = () => {

  const [datasets, dispatchDatasets] = useReducer(reducer, initialState)

  const functionPlugin = {
    id: 'test',
    beforeInit: function (chart: any) {
      var data = chart.config.data;
      for (var i = 0; i < data.datasets.length; i++) {
        for (var j = 0; j < data.labels.length; j++) {
          var fct = data.datasets[i].function,
            x = data.labels[j],
            y = fct(x);
          data.datasets[i].data.push(y);
        }
      }
    },
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    functionPlugin,
    Title,
    Tooltip,
    Legend
  );


  var newData = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "f(x) = x", // Name it as you want
        function: function (x: number) {
          return x;
        },
        data: [], // Don't forget to add an empty data array, or else it will break
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "f(x) = x²",
        function: function (x: number) {
          return x * x;
        },
        data: [],
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  return (
    <Box
      sx={{
        margin: "auto",
        padding: "5px",
        marginLeft: "3rem",
        height: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3} margin="auto">
          <Inputs />
        </Grid>
        <Grid item xs={9}>
          <Box width="90%" height="90vh">
            <Line options={options} data={newData} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Plotter;
