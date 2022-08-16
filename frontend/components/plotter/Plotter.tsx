import React, { useReducer, useState } from "react";
import { Box } from "@mui/system";
import Inputs from "./Inputs";
import { Grid } from "@mui/material";
import { DatasetsProvider } from "./context";
import Chart from "./Chart";
import dynamic from "next/dynamic";

const ChartDynamic = dynamic(() => import('./Chart'), { ssr: false })

const Plotter = () => {


  return (
    <DatasetsProvider>
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
            <ChartDynamic />
          </Box>
        </Grid>
      </Grid>
    </Box>
    </DatasetsProvider>
  );
};

export default Plotter;
