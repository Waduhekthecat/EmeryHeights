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
  const [selected, setSelected] = React.useState(false);
  
  return (
    <ThemeProvider theme={theme}>
    <ToggleButtonGroup
      color="primary"
    >
        <CallToggleButton />
        <PutToggleButton />
    </ToggleButtonGroup>
    </ThemeProvider>
  );
}