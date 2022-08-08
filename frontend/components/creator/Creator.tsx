import { InputUnstyled } from "@mui/base";
import { useState } from "react";
import { styled } from "@mui/system";
import { CustomInput } from "../sharedComponents/CustomInput";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const Creator = () => {
  // const handlerFunction = (event) = {
  //     if (event.key.toLowerCase() === "enter") {
  //         const form = event?.target.form;
  //         const index = [...form].indexOf(event.target);
  //         form.elements[index + 1].focus();
  //         event?.preventDefault;
  //     }
  // }

  const [rows, setRows] = useState("3");
  const [columns, setColumns] = useState("3");
  const [matrix, setMatrix] = useState<number[][]>([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);

  //   const updateRows = (newRows: string) => {
  //     let numberOfNewRows = parseInt(newRows) - parseInt(rows);
  //     console.log(`current rows: ${rows}, new rows: ${newRows}, difference: ${numberOfNewRows}`)

  //     setMatrix(oldMatrix => {
  //         let newMatrix = [...oldMatrix];
  //         if (numberOfNewRows > 0) {
  //             for (let i = 0; i < numberOfNewRows; i++) {
  //                 newMatrix.push(Array(parseInt(columns)).fill(0))
  //                 console.log(newMatrix)
  //             }
  //         } else {
  //             for (let i = 0; i < -numberOfNewRows; i++) {
  //                 newMatrix.pop()
  //             }
  //         }
  //         console.log(newMatrix)

  //         return newMatrix
  //     })
  //     setRows(newRows)
  //   };

  const createMatrix = (rows: number, columns: number) => {
    // let newMatrix = Array(rows).fill(structuredClone(Array(columns).fill(0)));
    let newMatrix = Array(rows)
      .fill()
      .map(() => Array(columns).fill(0));
    setMatrix(newMatrix);
  };

  const updateDimensions = ({ newRows = rows, newCols = columns } = {}) => {
    setRows(newRows);
    setColumns(newCols);

    if (!isNaN(parseInt(newRows)) && !isNaN(parseInt(newCols))) {
      createMatrix(parseInt(newRows), parseInt(newCols));
    }
  };

  const updateMatrix = (rowIndex: number, colIndex: number, value: number) => {
    let oldMatrix = [...matrix];
    oldMatrix[rowIndex][colIndex] = value;
    setMatrix(oldMatrix);
  };

  const style = {
    fontSize: "0.875rem",
    flex: "grow",
  };

  return (
    <Box
      sx={{
        padding: "10px",
      }}
    >
        <Grid container spacing={2}>
          <Grid item lg={3} >
            <Paper sx={{ padding: 2, width: "content"}}>
            <Stack direction="row" alignItems="center" justifyContent="space-around" gap={1}>
              <Typography variant="body1">Rows: </Typography>
              <CustomInput
                id="rows-input"
                type="number"
                value={rows}
                onChange={(e) => updateDimensions({ newRows: e.target.value })}
              />
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-around" marginTop="5px" gap={2}>
              <Typography variant="body1">Columns: </Typography>
              <CustomInput
                id="columns-input"
                type="number"
                value={columns}
                onChange={(e) => updateDimensions({ newCols: e.target.value })}
              />
            </Stack>
            </Paper>
          </Grid>
          <Grid item lg={9} justifyItems="center">
            <Grid container spacing={2} sx={{ paddingTop: "10px" }}>
              {matrix.map((row, rowIndex) => (
                <Grid key={rowIndex} item xs={12}>
                  <Grid container spacing={2}>
                    {row.map((column, colIndex) => (
                      <Grid item key={`${rowIndex}-${colIndex}`}>
                        <CustomInput
                          type="number"
                          value={matrix[rowIndex][colIndex]}
                          onChange={(e) =>
                            updateMatrix(
                              rowIndex,
                              colIndex,
                              parseInt(e.target.value)
                            )
                          }
                          endAdornment={false}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
    </Box>
  );
};

export default Creator;
