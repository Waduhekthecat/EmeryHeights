import React, {useState } from 'react';
import styled from 'styled-components';
import ToggleButton from '@mui/material/ToggleButton';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import { colors } from "../../../styles";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { white } from 'material-ui/styles/colors';
import { rgbToHex } from '@mui/system';
import { ClassNames } from '@emotion/react';

//#2D93A6 green, #504798 dark purp, #5E6CFA blue, 3E4251 border shadow drop down right 


  const CardContainer = styled.div`
 background: white;
  width: 100%;
  height: 98%;
  border-radius: 20px;
  display: relative;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 8x;
  border: 9px 8px solid rgba(${colors.white});
  box-shadow: 8px 8px 0px 3E4251;
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
@media (max-width: 720px) {
      width: 75%;
      height:75%;
      padding-right:2%;
      padding-left:2%;
  }
  h1 {width:90%;
    display: flex;
    flex-direction: row;

  }

`;
const HeaderTitle = styled.h1`
font-weight: 900;
color: white;
padding-right:1%;
padding-top:2%;
padding-left:1%;
padding-bottom:2%;
font-size: 25px;
margin-left:2em;
`;

const CompareButton = styled(ToggleButton)`
  display: flex;
  border-width: 4px  border-radius: 15px;
  background-color: #504798 !important;
  color: white !important;
  border-color: rgb(${colors.selected}) !important;
  width: 100% !important;
  font-size:40px;
  font-weight:800 !important;
  height: 56px;
  &:hover {
      cursor: pointer;
  }
  &:focus {
    color: rgb(${colors.selected});
  }
`;
//ChangeStateButton
const CompareButton2 = styled(ToggleButton)` 
align-self:"right" !important;
   width:250px; 
  font-size:20px;
  font-weight:600;
margin-left: 3em;
  background-color: #504798 !important;
  color: white !important;
  &:hover {
    cursor: pointer;
}
  &:focus {
    color: rgb(${colors.selected});
  }
`;

const DescriptionTxt = styled.p`
color: black;
font-size: 23px;
margin-left: 1em;
`;

const DescriptionTxt2 = styled.p`
color: black;
font-size: 40px;
font-weight:bold;
margin-left: 1em;
`;

const HeadertArea = styled.div`
width:70%;
display: flex;
margin-left:1em;
margin-right:0em;
background-color: #2D93A6;
border-radius: 80px;
border: 2px solid rgba(${colors.border});
box-shadow: 3px 4px 0px rgb(10, 13, 27);
&:focus {
  background: #504798 
  color: #000000 
}
`;

const ButtonArea = styled.div`
width=100%;
margin-bottom: 10px;
@media (max-width: 400px) {
}
`;

interface IProps {
  data: {
    platform: string,
    premium: string,
    underlying: string,
    strike: string,
    amount: string,
    expiry: string,
  }
}

interface IState {
    selectedBtn?: boolean
}

export class StatCard extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedBtn: false
        };
        
        this.onClick = this.onClick.bind(this);
    }
    
        onClick() {
            this.setState((previousState, props) => ({
              selectedBtn: !previousState.selectedBtn,
            }));
          }
          
          useStyles = makeStyles((theme) => ({
            palette: {
              primary: 'rgbToHex(256,256,256)',
              secondary: '504798'
              }
            }));

    render(){
        return(
          <Grid container>   
          <CardContainer>
            
            <Grid container direction="column">
              <Grid item xs={6} sm={6} md={4} lg={5}>
              <DescriptionTxt2>Platform: {this.props.data.platform}</DescriptionTxt2>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={5}>
              <HeadertArea>
               <HeaderTitle>
                Premium: {this.props.data.premium}</HeaderTitle></HeadertArea>
              </Grid>
          
            <Grid item>
              <DescriptionTxt>
                   Quantity: {this.props.data.amount}
              <br/>Strike: {this.props.data.strike}
              <br/>Expiry: {this.props.data.expiry}
              </DescriptionTxt>
              </Grid>
            </Grid>
            <Grid container direction = "column" xs={6} sm={4} md={4} lg={6}>
            <ButtonArea>
              
            <CompareButton            
            value="Select"
            selected={this.state.selectedBtn}
            onClick={this.onClick}
            >{" "}<p
          style={{
            fontSize: 17,
            fontWeight: 900,
          }}
          >SELECT 
            </p>
          </CompareButton >
          
          </ButtonArea>
          </Grid>
          </CardContainer>
    </Grid>
          )
    }
}