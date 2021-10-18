import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {createTheme} from '@mui/material/styles';
import styledCom from 'styled-components';
import { colors } from '../../styles'
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
      background: "rgba(204, 210, 220, 0.3) !important",
      backdropFilter: "blur(4px) !important",
      border: `1px solid rgba(${colors.border}) !important`,
      boxShadow: "3px 3px 3px rgba(10, 13, 27, 0.5) !important",
      borderRadius: "10px !important",
      height:"47px !important",
      width:"140px !important",
      display:"flex !important",
      marginRight: "35px !important",
      alignItems: "center !important",
      justifyContent: "space-around !important",
      '& .Mui-selected': {
      backgroundColor: 'rgba(33, 137, 214, 0.14)',
      color: 'rgb(26, 88, 159)',
      },
      selected: {},
  },
})
);

export default function PutToggleButton() {
  const [selected, setSelected] = React.useState(false);
  const classes = useStyles();

  return (
      <ToggleButton className={classes.ButtonToggle} 
      value="put"
      selected={selected}
      onClick={() => {
        setSelected(!selected);
      }}><p
      style={{
        fontSize: 17,
        color: "#ffffff",
        fontWeight: 500,
      }}
      >PUT
        </p>
    </ToggleButton>
  );
}