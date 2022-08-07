import { InputUnstyled } from "@mui/base";
import { useState } from "react";
import { styled } from "@mui/system";
import { CustomInput } from "./CustomInput";
import { Grid } from "@mui/material";

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

  const updateRows = (newRows: string) => {
    let numberOfNewRows = parseInt(newRows) - parseInt(rows);

    setMatrix(oldMatrix => {
        let newMatrix = [...oldMatrix];
        if (numberOfNewRows > 0) {
            for (let i = 0; i < 3; i++) {
                newMatrix.push(Array(parseInt(columns)).fill(0))
                console.log(newMatrix)
            }
        }
        console.log(newMatrix)

        return newMatrix
    })
    setRows(newRows)
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
    <div
      style={{
        margin: "auto",
      }}
    >
      <CustomInput
        id="rows-input"
        type="number"
        value={rows}
        onChange={(e) => updateRows(e.target.value)}
      />
      <CustomInput
        id="columns-input"
        type="number"
        value={columns}
        onChange={(e) => setColumns(e.target.value)}
      />
      <p style={{ color: "black" }}>
        Rows: {rows}, Columns: {columns}
      </p>
      <Grid container spacing={2} />
      {matrix.map((row, rowIndex) => (
        <Grid key={rowIndex} item xs={12}>
          <Grid container spacing={2}>
            {row.map((column, colIndex) => (
              <Grid item key={`${rowIndex}-${colIndex}`}>
                <CustomInput
                  type="number"
                  value={matrix[rowIndex][colIndex]}
                  onChange={(e) =>
                    updateMatrix(rowIndex, colIndex, parseInt(e.target.value))
                  }
                  endAdornment={false}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default Creator;
