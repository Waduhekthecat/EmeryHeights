import React, {useState } from 'react';
import styled from 'styled-components';
import ToggleButton from '@mui/material/ToggleButton';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import { colors } from "../../../styles";

//#2D93A6 green, #504798 dark purp, #5E6CFA blue, 3E4251 border shadow drop down right 

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  },
  textarea: {
    resize: "both"
  },
  HeaderToggle: {
        borderWidth: "2px",
        color: "rgb(67,159,174)",
        borderColor: "black",
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:"10px",
        fontSize:'20px',
        fontWeight:600,
        height: '56px',
      },
    Cards: {
      height: '400px',
      width:"300px",
      alignSelf: 'center',
    }, 
    HeaderTheme: {
      background: "rgb(67,159,174)",
      width: "80%"
  
    }
  }));
  const CardContainer = styled.div`
  display: flex;
  background: white;
  width: 98%;
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
  border-width: 2px;
  border-radius: 10px;
  background: rgb(80,71,152);
  border-color: black;
  width: 80%;
  font-size:20px;
  font-weight:600;
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
align-content: flex-end
   height: 65%; 
   width: 50%;
   box-shadow: 8px 8px 0px 3E4251 !important;
   border-radius: 7px !important;
  font-size:20px;
  font-weight:600;
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
width:100%;
display: flex;
background-color: #2D93A6;
&:focus {
  background: #504798 
  color: #000000 
}
`;

const ButtonArea = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-top: 1em;
margin-bottom: 0.5em;
margin-left: 1em;
margin-right: 1em;
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
          
    render(){
        return(
          <Grid container>   
      <CardContainer>
        
        <Grid container direction="column">
          <Grid item xs={12} sm={12} md={6} lg={1}>
          <DescriptionTxt2>Platform: {this.props.data.platform}</DescriptionTxt2>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={1}>
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
        
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
        <CompareButton2
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
      </CompareButton2 >
        {/* <SelectBtn style={{color:'#ae5a72', backgroundColor:'rgb(67,159,174)'}}>Remove</SelectBtn> */}
      </Grid></Grid>
      </CardContainer>
</Grid>
      )

    }
}