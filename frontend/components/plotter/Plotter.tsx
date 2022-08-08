import React from "react";
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

const Plotter = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

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

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Box
      sx={{
        margin: "auto",
        padding: '5px',
        marginLeft: "3rem",
        height: '100%'
      }}
    >
      <Grid container spacing={2} >
      <Grid item xs={3} margin="auto">
      <Inputs />
      </Grid>
      <Grid item xs={9}>
      <Box width="90%" height="90vh">
        <Line options={options} data={data} />
      </Box>
      </Grid>
      </Grid>
    </Box>
  );
};

export default Plotter;
