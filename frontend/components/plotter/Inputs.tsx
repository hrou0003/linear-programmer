import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { CustomInput } from "../sharedComponents/CustomInput";
import { DatasetsContext } from "./context";
import { nanoid } from 'nanoid';
import { ActionKind } from "./reducer";


const id = nanoid();

function Inputs() {

  const [gradient, setGradient] = useState('1')
  const [intercept, setIntercept] = useState('1')

  const { state, dispatch } = useContext(DatasetsContext)

  enum Param {
    Gradient = 'gradient',
    Intercept = 'intercept'
  }

  const updateParam = (whichParam: Param, param: string) => {

    switch(whichParam) {
      case Param.Gradient:
        setGradient(param)
      case Param.Intercept:
        setIntercept(param)
    }

    let payload = {
      label: id,
      function: function(x: number) {
        return x*parseInt(gradient)+parseInt(intercept)
      },
      data: [],
      borderColor: "rgba(75, 192, 192, 1)",
      fill: false,
    }

    dispatch({ type: ActionKind.Update, payload: payload})

  }

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
          onChange={(e) => updateParam(Param.Gradient, e.target.value)}
        />
        <Typography variant="body1">+</Typography>
        <CustomInput
          id="rows-input"
          type="number"
          value={intercept}
          onChange={(e) => updateParam(Param.Intercept, e.target.value)}
        />
      </Stack>
    </Box>
  );
}

export default Inputs;
