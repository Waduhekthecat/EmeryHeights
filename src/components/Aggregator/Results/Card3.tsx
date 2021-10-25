import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@mui/material'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styledCom from 'styled-components';

import { colors } from "../../../styles";

interface Props {
  // url: string;
  // text: string;
  // onClick:(num: number)=>void;
  // num:number;
};

// Material ui style
const useStyles = makeStyles((theme) => ({
  checkGroup: {
    display: "flex",
  },
  ButtonToggle: {
    borderWidth: "2px",
    borderColor: "gray",
    color: "rgb(256,256,256) !important",
    '&:focus': {
    fontColor: "rgb(256,256,256) !important",
  }},
  Container: {
    width:'100%',
    background:"#fff8e0",
    color: "black",
    borderRadius: '5px',
    display: 'flex',
    flexDirection:'row',
    marginTop: '25px',
    marginLeft:'0.5em',
    marginRight:'0.5em',
    marginBottom: '5px',
    paddingLeft:'3em',
    paddingTop:'.75em',
    paddingBottom: '.75em',
    paddingRight: '.75em'
  },
  Advanced: {
    borderColor: "black",
    marginBottom:'15px',
    float:'left'
  }}))

const CheckboxButton = styledCom(Button)`
  




background: #485778 !important;
  backdrop-filter: blur(4px) !important;
  border-radius: 10px !important;
  border: 2px solid rgba(${colors.border}) !important;
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
    background: #504798 !important;
    color: rgb(256,256,256) !important;
  }

`
const Container = styled.div`
  width: 100%;
  background: rgb(256,256,256);
  color:"black";
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    margin-left:0.5em;
    margin-right:0.5em;
    margin-bottom: 5px;
    padding-left: 3em;
    padding-top: .75em;
    padding-bottom: .75em;
    padding-right: .75em;
    border: 1px solid rgba(${colors.border});
    box-shadow: 2px 2px 2px rgba(10, 13, 27, 0.5);
    &:hover {
        box-shadow: 0 1px 2px 0 rgba(${colors.border}), 0 1px 3px 0 rgba(${colors.border});
        box-shadow: 0 1px 2px 0 rgba(${colors.border}), 0 1px 3px 0 rgba(${colors.border});
        background: gradient(
            to bottom,
            rgba(192, 159, 87, 0.5),
            rgba(192, 159, 87, 0.5) 1px,
            transparent 0,
            transparent 2em
          );
    }
    @media (max-width: 720px) {
      width: 75%;
      height:75%;
      padding-right:2%;
      padding-left:2%;
  }
`;
const Description = styled.p`
  color: black;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 0;
`;
const Description1 = styled.p`
  color: black;
  font-size: 25px;
  font-weight: 400;
  margin-right: 20px;
  padding: 0;
`;
const FormGroupArea = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
`;




const Card: React.FC<Props> = ({}) => {
  const classes = useStyles();
  const [selectedBtn, setSelectedBtn] = React.useState(false);
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
  <Grid container 
    direction="row"
    className={classes.Container}>
      
    <Grid container 
    className={classes.Advanced}
    direction="row">
        <Grid item sm={2} md={2}><Description>
          <CheckboxButton
          className={classes.ButtonToggle}
      value="call"
      selected={selectedBtn}
      onClick={()=> setSelectedBtn(!selectedBtn)}
      >{" "}<p
      style={{
        fontSize: 17,
        fontWeight: 800,
      }}
      >Advanced 
        </p>
  </CheckboxButton>
  </Description>
  </Grid></Grid>
  {/* hidden */}
  <Grid container sx={{ display: { xs: 'none', md: 'none' } }}>
        <Grid item sm={2} md={2}><Description1>Expiration Filters:</Description1></Grid>
      <Grid item>
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
      </Grid>
      <Grid item>
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
      </Grid><Grid item sm={8} md={1}></Grid>
        <Grid item sm={2} md={2}><Description1>Strike Price:</Description1></Grid>
          <Grid item>
          <FormControlLabel 
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      name="exact match"
                    />
                  }
                  label="Exact Match"
                  />
          </Grid>
          <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={unchecked}
                      onChange={handleChange}
                      name="round up"
                    />
                  }
                  label="Round Up"
                  />
          </Grid>
          <Grid item sm={7} md={9}/>
          <Grid item>
          <FormControlLabel
                  control={
                    <Checkbox
                      checked={unchecked}
                      onChange={handleChange}
                      name="round down"
                    />
                  }
                  label="Round Down"
                  />
          </Grid>
          <Grid item>
          <FormControlLabel
                  control={
                    <Checkbox
                      checked={unchecked}
                      onChange={handleChange}
                      name="display all"
                    />
                  }
                  label="Display All"
                  />
                </Grid>
          </Grid>
        </Grid>
    );
    };

export default Card;


{/* <FormControlLabel
                  control={
                    <Checkbox
                      checked={dunchecked}
                      onChange={handleChange}
                      name="disable unchecked"
                    />
                  }
                  label="disabled unchecked"
                  /> */}
                //   <Grid item>
                // <FormControlLabel
                //   control={
                //     <Checkbox
                //       checked={dchecked}
                //       onChange={handleChange}
                //       name="dchecked"
                //     />
                //   }
                //   label="Disable Checked"
                //   />