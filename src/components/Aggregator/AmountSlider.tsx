import React, { useState } from 'react';
import { withStyles, makeStyles, createStyles } from "@material-ui/core/styles";
import {styled} from '@mui/material/styles'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiInput from '@mui/material/Input';
import MuiSlider from '@mui/material/Slider';
import Slider from '@mui/material/Slider';
import { colors } from "../../styles";
import { createTheme } from '@mui/material/styles';
import {ThemeProvider} from '@mui/material/styles';


const Input = styled(MuiInput)`
  padding-left: 0.8em;
  width: 110px;
  color: rgb(31,36,54);
  fontWeight: 900;
`;

const Amount = styled(MuiSlider)(({ theme }) => ({

  '.MuiSlider-thumb': {
    color: 'rgb(67,159,174)',
  },
  '.MuiSlider-track': {
    color: 'rgb(67,159,174)',
  },
  '.MuiSlider-rail': {
    color: 'rgb(31,36,54)',
  },
}));


export default function AmountSlider(props: { amount: number, setAmount: any}){

  const [value, setValue] = React.useState<number | string | Array<number | string>>(
    0.50,
  );
  const handleSliderChange = (e: Event, amt: number | number[]) => {
    setValue(amt);
    props.setAmount(value);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? 0.5 : Number(event.target.value));
    props.setAmount(value);
  };
  const handleBlur = () => {
    if (value < 0.00) {
      setValue (0.00);
    } else if (value > 2.00) { 
      setValue  (2.00);
    }
  };




  return (
    
    <Box sx={{ width: 380 }}>
      <Grid container flex-row spacing={2} marginLeft="1%" alignItems="center">
        <Grid item md={12}>
        <Amount
        defaultValue={0.50}
        step={0.10}
        min={0.10}
        max={2.00}
        value={typeof value === 'number' ? value : 0.01}
        onChange={handleSliderChange}
      />
      
        </Grid>
        <Grid item marginLeft="38%" marginTop="-7%" md={6}>
          <Input
            endAdornment="BTC"
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              style: { textAlign: 'center', fontSize: '36px' },
              step: 0.10,
              min: 0.10,
              max: 2.00,
              default: 0.50,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            disableUnderline={true}
          />
        </Grid>
      </Grid>
    </Box>
  );
}