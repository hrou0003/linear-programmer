import * as React from 'react';
import { Input } from '@mui/material';
import { styled } from '@mui/system';

const StyledMatrixInput = styled(Input)(
    ({ theme }) => `
        width: 1.5rem; 
        height: 1.5rem;
    `
)

const MatrixInput = () => {

    return (
        <StyledMatrixInput 
            type="number" 
        />
    )
}


export default MatrixInput;
