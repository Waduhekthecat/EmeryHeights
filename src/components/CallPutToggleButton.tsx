import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  makeStyles,
  styled,
  withStyles,
} from "@material-ui/core/styles";
import styledCom from 'styled-components';
import { colors } from '../styles'
import { ClassNames } from '@emotion/react';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white !important',
          backgroundColor: '#3e4251 !important',
          borderRadius: '3px !important',
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  TypeToggle: {
    width: "85% !important",
    font: "20px",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    height: "60 ",
    backgroundColor: "white",
    border: "rounded",
    borderColor: "black",
  },
}));

export default function CallPutToggleButton() {
  const [alignment, setAlignment] = React.useState('web');
  const classes = useStyles();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      className={classes.TypeToggle}
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="call">CALL</ToggleButton>
      <ToggleButton value="put">PUT</ToggleButton>
    </ToggleButtonGroup>
  );
}