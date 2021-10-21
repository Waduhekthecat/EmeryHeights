import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme } from "@mui/material/styles";
import styledCom from "styled-components";
import { colors } from "../../styles";
import { makeStyles } from "@material-ui/core/styles";
import { Toggle } from "material-ui";

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

const ButtonEdits = styledCom(Button)`
    background: rgb(204, 210, 220) !important;
    border: 1px solid rgba(${colors.border}) !important;
    box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5) !important;
    border-radius: 10px !important;
    border-radius: rounded !important;
    height:47px !important;
    width:140px !important;
    display:flex !important;
    margin-right: 35px !important;
    align-items:center !important;
    justify-content:space-around !important;
    &:focusVisible {
      background: white !important;
    }
`;

export default function CallToggleButton() {
  const classes = useStyles();
  const [selectedBtn, setSelectedBtn] = React.useState(-1);
  return (
    <ButtonEdits 
    className={classes.ButtonToggle} 
    value="call"
    disabled={selectedBtn === 1 ? false : true}
    onClick={()=>setSelectedBtn(1)}
    >
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
