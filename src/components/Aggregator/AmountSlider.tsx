import * as React from 'react';
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
  width: 90px;
  color: blue;
  fontWeight: 900;
`;

const Amount = styled(MuiSlider)`
  .MuiSlider-thumb: {
    backgroundColor: rgba(#05e400);
  }
  .MuiSlider-track: {
    backgroundColor: rgba(#05e400);
  }
`;




export default function AmountSlider() {

  const [value, setValue] = React.useState<number | string | Array<number | string>>(
    0.50,
  );


  const handleSliderChange = (e: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0.00);
    } else if (value > 2.0) { 
      setValue(2.0);
    }
  };

  return (
    
    <Box sx={{ width: 380 }}>
      <Grid container flex-row spacing={2} marginLeft="1%" alignItems="center">
        <Grid item md={12}>
        <Amount
        defaultValue={0.50}
        step={0.01}
        min={0.01}
        max={2.00}
        value={typeof value === 'number' ? value : 0.01}
        onChange={handleSliderChange}
      />
      
        </Grid>
        <Grid item marginLeft="38%" marginTop="-7%" md={6}>
          <Input
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              style: { textAlign: 'center', fontSize: '40px' },
              step: 0.01,
              min: 0.01,
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