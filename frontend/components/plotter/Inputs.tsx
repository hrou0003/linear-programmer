import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { CustomInput } from "../sharedComponents/CustomInput";
import { DatasetsContext } from "./context";
import { nanoid } from 'nanoid';
import { ActionKind, DatasetsType } from "./reducer";


const id = nanoid();

function Inputs() {

  const [gradient, setGradient] = useState('1')
  const [intercept, setIntercept] = useState('1')

  const { state, dispatch } = useContext(DatasetsContext)


  const updateGradient = (gradient: string) => {
    setGradient(gradient)

    let payload: DatasetsType = {
      label: id,
      function: function (x: number) {
        return x
      },
      data: [],
      borderColor: "green",
      fill: false,
    }

    console.log(state)

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
          onChange={(e) => updateGradient(e.target.value)}
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
