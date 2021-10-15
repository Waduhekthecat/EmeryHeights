import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha, styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@mui/material/FormControl";
import { colors } from "../../styles";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import styledCom from "styled-components";

const theme = createTheme({
    
    palette: {
      primary: {
        main: "#ffffff",
      },
      background: {
        default: "#ffffff",
      },
    },
  });
  
  const useStyles = makeStyles((theme) => ({
      StrikeField: {
        borderWidth: "1px",
        borderColor: "white",
    },
  }));

  const StrikeArea = styledCom(TextField)`
    background: rgba(204, 210, 220, 0.3);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(${colors.border});
    box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
    border-radius: 10px;
    border-radius: rounded;
    height:47px;
    width:180px;
    display:flex;
    margin-right: 35px;
    align-items:center;
    justify-content:space-around;
`;

export default function StrikeInput2() {
    const classes = useStyles();
  return (
    <Box
      component="form"
      sx={{
        display: "grid",
      }}
    >
     <ThemeProvider theme={theme}>
      <StrikeArea
        color="primary"
        label="StrikePrice"
        variant="outlined"
        defaultValue="55,000.00"
        id="strike-outlined-input"
      />
       </ThemeProvider>
    </Box>
  );
}