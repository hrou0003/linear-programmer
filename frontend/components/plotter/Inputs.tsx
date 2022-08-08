import { Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomInput } from "../sharedComponents/CustomInput";

function Inputs() {

    const [gradient, setGradient] = useState("0");
    const [intercept, setIntercept] = useState("0");

  return (
    <Paper sx={{display: 'inline-block', padding: 2}}>
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
    </Paper>
  );
}

export default Inputs;
