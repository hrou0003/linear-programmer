import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { CustomInput } from "../sharedComponents/CustomInput";
import { DatasetsContext } from "./context";

function Inputs() {

  const [gradient, setGradient] = useState('')
  const [intercept, setIntercept] = useState('')

  const { state, dispatch } = useContext(DatasetsContext)

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
