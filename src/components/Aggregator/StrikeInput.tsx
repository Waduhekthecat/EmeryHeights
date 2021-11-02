import React, {useState} from "react";
import styledCom from "styled-components";
import { useForm, useWatch, Control } from "react-hook-form";
import { colors } from "../../styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles, styled } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
import InputBase from "@mui/material/InputBase";
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';

type FormValues = {
  strike: number;
};

const StrikeArea = styled(MuiInput)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    background: "#3E4251 !important",
    color: "white !important",
    borderRadius: "5px !important",
    border: `1px solid rgba(${colors.border}) !important`,
    height: "45px",
    width: "260px",
    fontSize: 26,
    type: "number",
    paddingLeft: "0.5em",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));

const StrikeFieldArea = styledCom.form`
  background: rgba(31, 36, 54, .85);
  backdrop-filter: blur(4px);
  border: 0px solid rgba(${colors.border});
  border-radius:3px;
  height:33.2px;
  width:230px;
  font-size:28px !important;
  font-color: white;
  font-weight: '600'
`;
const StrikeField = styledCom.input`
    background: #3E4251;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(${colors.border});
    box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
    border-radius:5px;
    border-radius:rounded;
    height:40px;
    width:200px; !important;
    font-size:20px !important;
    color: white;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#ffffff", //button text white instead of black
    },
    background: {
      default: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  ButtonToggle: {
    borderWidth: "2px",
    borderColor: "black",
  },
}));

interface Props {}

const StrikeInput: React.FC<Props> = () => {
  const classes = useStyles();
  const [strike, setStrike] = useState("");
  const handleChange3 = (event: { target: { value: string } }) =>{
    setStrike(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
    <StrikeArea 
    onChange={handleChange3}
    disableUnderline
    style={{
      width: "110px",
    }}
    inputProps={{
              defaultValue: 60000,
              step: 100,
              min: 1000,
              max: 100000,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }} />
    </ThemeProvider>
  );
};


export default StrikeInput;
