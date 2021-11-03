import * as React from 'react';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ButtonGroup from '@mui/material/ButtonGroup';
import styledCom from 'styled-components';
import { colors } from "../../styles";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  ButtonToggle: {
      borderWidth: "2px",
      borderColor: "white",
      color: "rgb(0,0,0) !important",
      '&:focus': {
      fontColor: "rgb(256,256,256) !important",
    }
  },
})
);

const ButtonEdits = styledCom(ToggleButton)`
  background: rgb(255, 255, 255) !important;
  backdrop-filter: blur(4px) !important;
  border-radius: 10px !important;
  border: 1px solid rgba(${colors.border}) !important;
  height:50px !important;
  width:145px !important;
  display:flex !important;
  margin-right: 35px !important;
  align-items:center !important;
  justify-content:space-around !important;
  box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5) !important;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    background: #504798 !important;
    color: rgb(256,256,256) !important;
  }

`

export default function CallPutToggle() {

const classes = useStyles();
  const [call, setCall] = React.useState(false);
  const [put, setPut] = React.useState(false);
  // const [option, setOption] = React.useState(option);
  

  return (
    <ButtonGroup>
    <ButtonEdits 
      className={classes.ButtonToggle}
      value={call}
      selected={call}
      onClick={()=> setCall(!call)}
      >{" "}<p
      style={{
        fontSize: 17,
        fontWeight: 900,
      }}
      >CALL 
        </p>
    </ButtonEdits>
    <ButtonEdits 
      className={classes.ButtonToggle}
      value={put}
      selected={put}
      onClick={()=>setPut(!put)}
      >{" "}<p
      style={{
        fontSize: 17,
        fontWeight: 900,
      }}
      >PUT
        </p>
    </ButtonEdits>
    </ButtonGroup>
  );
}