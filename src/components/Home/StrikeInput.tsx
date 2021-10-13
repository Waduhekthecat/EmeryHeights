import React from "react";
import styledCom from "styled-components";
import { useForm, useWatch, Control } from "react-hook-form";
import { colors } from '../../styles';
import {createTheme} from '@mui/material/styles'
import { makeStyles } from "@material-ui/core/styles";

type FormValues = {
  strike: number;
};



const StrikeFieldArea = styledCom.form`
    border-radius:10px;
    border-radius:rounded;
    height:42px;
    width:100px;
    display:flex;
`;
const StrikeField = styledCom.input`
    background: rgba(204, 210, 220, 0.3);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(${colors.border});
    box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
    border-radius:10px;
    border-radius:rounded;
    height:42px;
    width:100px;
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
  const { register} = useForm<FormValues>();

  return (
    <StrikeFieldArea>
      <StrikeField {...register("strike")} />
    </StrikeFieldArea>
  );
}

export default StrikeInput;