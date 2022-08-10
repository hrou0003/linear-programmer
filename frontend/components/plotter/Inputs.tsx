import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomInput } from "../sharedComponents/CustomInput";
import { DatasetsType } from "../plotter/Plotter"

type Props = {
    datasets: DatasetsType[];
    setDatasets: React.Dispatch<React.SetStateAction<DatasetsType[]>>;
}

function Inputs({datasets, setDatasets}: Props) {


  return (
    <Box sx={{display: 'inline-block', padding: 2}}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Typography variant="body1">y=x*</Typography>
        <CustomInput
          id="rows-input"
          type="number"
          value={gradient}
          onChange={(e) => setGradient(e.target.value)}
        />
        <Typography variant="body1">+</Typography>
        <CustomInput
          id="rows-input"
          type="number"
          value={intercept}
          onChange={(e) => setIntercept(e.target.value)}
        />
      </Stack>
    </Box>
  );
}

export default Inputs;
