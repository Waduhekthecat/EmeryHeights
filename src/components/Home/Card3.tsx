import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

import { colors } from "../../styles";

interface Props {
  // url: string;
  // text: string;
  // onClick:(num: number)=>void;
  // num:number;
}

// Material ui style
const useStyles = makeStyles((theme) => ({
  checkGroup: {
    display: "flex",
  },
}));

const Container = styled.div`
  width: 100%;
  background: white;
  backdrop-filter: blur(4px);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(${colors.border});
  padding: 0 0.7em;
  margin-bottom: 2em;
`;
const Description = styled.p`
  color: rgb(${colors.fontColor1});
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 0;
`;
const Description1 = styled.p`
  color: rgb(${colors.fontColor3});
  font-size: 25px;
  font-weight: 400;
  margin-right: 20px;
  padding: 0;
`;
const FormGroupArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Card: React.FC<Props> = ({}) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    date: true,
    period: false,
    unchecked: false,
    checked: false,
    dunchecked: false,
    dchecked: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { date, period, unchecked, checked, dunchecked, dchecked } = state;

  return (
    <Container>
      <Description>Advanced Search Options</Description>
      <FormGroupArea>
        <Description1>Expiration Filters</Description1>
        <Box sx={{ display: "flex" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup row className={classes.checkGroup}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={date}
                    onChange={handleChange}
                    name="date"
                  />
                }
                label="Date"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={period}
                    onChange={handleChange}
                    name="period"
                  />
                }
                label="Period"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={unchecked}
                    onChange={handleChange}
                    name="unchecked"
                  />
                }
                label="Unchecked"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    name="checked"
                  />
                }
                label="Checked"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dunchecked}
                    onChange={handleChange}
                    name="dunchecked"
                  />
                }
                label="Disabled Unchecked"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dchecked}
                    onChange={handleChange}
                    name="dchecked"
                  />
                }
                label="Disabled Checked"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </FormGroupArea>
    </Container>
  );
};

export default Card;
