import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme } from "@mui/material/styles";
import styledCom from "styled-components";
import { colors } from "./../styles";
import { makeStyles } from "@material-ui/core/styles";

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

const ButtonEdits = styledCom.button`
    background: rgba(204, 210, 220, 0.3);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(${colors.border});
    box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
    border-radius: 10px;
    border-radius: rounded;
    height:47px;
    width:140px;
    display:flex;
    margin-right: 35px;
    align-items:center;
    justify-content:space-around;
`;

export default function CallToggleButton() {
  const classes = useStyles();
  return (
    <ButtonEdits className={classes.ButtonToggle} value="call">
      {" "}<p
      style={{
        fontSize: 17,
        color: "#ffffff",
        fontWeight: 500,
      }}
      >CALL
        </p>
    </ButtonEdits>
  );
}
