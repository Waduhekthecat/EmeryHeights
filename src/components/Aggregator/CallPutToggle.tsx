import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import styledCom from 'styled-components';
import { colors } from "../../styles";
import { makeStyles } from "@material-ui/core/styles";
import CallToggleButton from './CallToggleButton';
import PutToggleButton from './PutToggleButton';


const useStyles = makeStyles((theme) => ({
  ButtonToggle: {
      borderWidth: "2px",
      borderColor: "black",
  },
})
);

const ButtonEdits = styledCom(Button)`
  background: rgba(204, 210, 220, 0.3) !important;
  backdrop-filter: blur(4px) !important;
  border-radius: 10px !important;
  border: 1px solid rgba(${colors.border}) !important;
  height:47px !important;
  width:140px !important;
  display:flex !important;
  margin-right: 35px !important;
  align-items:center !important;
  justify-content:space-around !important;
  box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5) !important;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    background: rgba(204, 210, 220, 0.1) !important;
  }

`

export default function CallPutToggle() {
const classes = useStyles();
const [selectedBtn, setSelectedBtn] = React.useState(false);
const [selectedBtn2, setSelectedBtn2] = React.useState(false);
  return (
    <ButtonGroup
    >
    <ButtonEdits 
      className={classes.ButtonToggle}
      value="call"
      //selected={selectedBtn}
      //onClick={()=>setSelectedBtn(!selectedBtn)}
      >{" "}<p
      style={{
        fontSize: 17,
        color: "#ffffff",
        fontWeight: 500,
      }}
      >CALL
        </p>
    </ButtonEdits>
    <ButtonEdits 
      className={classes.ButtonToggle}
      value="put"
      //selected={selectedBtn2}
      //onClick={()=>setSelectedBtn2(!selectedBtn2)}
      >{" "}<p
      style={{
        fontSize: 17,
        color: "#ffffff",
        fontWeight: 500,
      }}
      >PUT
        </p>
    </ButtonEdits>
    </ButtonGroup>
  );
}