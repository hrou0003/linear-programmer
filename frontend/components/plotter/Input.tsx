import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { CustomInput } from "../sharedComponents/CustomInput";
import { DatasetsContext } from "./context";
import { nanoid } from "nanoid";
import { ActionKind } from "./reducer";
import math, { evaluate, compile, range } from "mathjs";
import { PlotData } from "plotly.js";


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

function Input() {
  const id = useRef(nanoid())
  const [expression, setExpression] = useState("");
  const [valid, setValid] = useState(false);

  const { state, dispatch } = useContext(DatasetsContext);

  const updateExpression = (expression: string) => {
    setExpression(expression);

    if (validExpression(expression)) {
      setValid(true);

      let expr = compile(expression);

      let xValues = [1, 2, 3, 4, 5, 6, 7, 8];
      let yValues = xValues.map((x) => expr.evaluate({ x: x }))

      let payload: Partial<PlotData> = {
        ids: [id.current],
        name: `f(x) = ${expression}`,
        x: xValues,
        y: yValues,
        type: "scatter"
      };

      dispatch({ type: ActionKind.Update, payload: payload });
    } else {
      setValid(false);
    }
  };

  return (
    <Box sx={{ display: "inline-block", padding: 2 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <CustomInput
          id="rows-input"
          value={expression}
          onChange={(e) => updateExpression(e.target.value)}
        />
      </Stack>
    </Box>
  );
}

export default Input;
