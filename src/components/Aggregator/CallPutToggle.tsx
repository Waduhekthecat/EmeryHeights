import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import styledCom from 'styled-components';
import { colors } from '../../styles'
import { makeStyles } from "@material-ui/core/styles";
import CallToggleButton from './CallToggleButton';
import PutToggleButton from './PutToggleButton';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#ffffff" //button text white instead of black
    },
    background: {
      default: "#ffffff"
    }
  }
});

export default function CallPutToggle() {
  const [alignment, setAlignment] = React.useState('web');


  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ThemeProvider theme={theme}>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive={true}
      onChange={handleChange}
      fullWidth={false}
    >
        <CallToggleButton />
        <PutToggleButton />
    </ToggleButtonGroup>
    </ThemeProvider>
  );
}