import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';

const Input = styled(MuiInput)`
  width: 100px;
  color: white;
  align-items: center;
`;

export default function AmountSlider() {
  const [value, setValue] = React.useState<number | string | Array<number | string>>(
    30,
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box sx={{ width: 400 }}>
      <Grid container flex-row spacing={2} alignItems="center" marginLeft="10px">
        <Grid item md={12}>
        <Slider
        aria-labelledby="input-slider"
        defaultValue={0.50}
        step={0.01}
        marks
        min={0.01}
        max={2.00}
        value={typeof value === 'number' ? value : 0}
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