import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const WithStylesTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  }
})(TextField);

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;
export default function StrikeField() {
  return (
    <div>
      <WithStylesTextField variant="standard" label="standard withStyles" />
      <WithStylesTextField variant="outlined" label="outlined withStyles" />
      <br />
      <StyledTextField variant="standard" label="standard styled-comp" />
      <StyledTextField variant="outlined" label="outlined styled-comp" />
    </div>
  );
}