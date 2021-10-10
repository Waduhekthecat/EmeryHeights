import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {createTheme} from '@mui/material/styles';
import styledCom from 'styled-components';
import { colors } from './../styles'
import { makeStyles } from "@material-ui/core/styles";


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

const useStyles = makeStyles((theme) => ({
  ButtonToggle: {
      borderWidth: "2px",
      borderColor: "black",
  },
})
);

const ButtonEdits = styledCom.button`
background-color: white;
    border-radius: 10px;
    border-radius: rounded;
    backdrop-filter: blur(4px);
    border: 2px solid black;
    height:45px;
    width:170px;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
`



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
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      fullWidth={true}
    >
      <ButtonEdits className={classes.ButtonToggle} value="call">CALL</ButtonEdits>
      <ButtonEdits className={classes.ButtonToggle} value="put">PUT</ButtonEdits>
    </ToggleButtonGroup>
  );
}