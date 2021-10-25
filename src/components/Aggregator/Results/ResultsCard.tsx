import React, { Component, useState } from "react";
import styled from "styled-components";
import ToggleButton from '@mui/material/ToggleButton';
import { colors } from "../../../styles";
import { makeStyles } from "@material-ui/core/styles";
import styledCom from 'styled-components';
import Grid from "@material-ui/core/Grid";

 

const useStyles = makeStyles((theme) => ({
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
    
  HeaderTheme: {
    background: "rgb(67,159,174)",
    width: "80%"

  }
}));



interface Props {
  [elementId:string]: any;
  // url: string;
  // text: string;
  // onClick:(num: number)=>void;
  // num:number;
}
const CardContainer = styled.div`
    background: white;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
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
@media (max-width: 720px) {
        width: 75%;
        height:75%;
        padding-right:2%;
        padding-left:2%;
    }
    h1 {width:100%;
      display: flex;
      flex-direction: row;

    }

`;
const HeaderTitle = styled.p`
  color: white;
  font-size: 27px;
  margin-left:1em;
`;

const CompareButton = styledCom(ToggleButton)`
    display: flex;
    align-self:center;
    align-items:center;
    justify-content:center;
    border-radius: 10px;
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
const DescriptionTxt = styled.p`
  color: black;
  font-size: 25px;
  margin-left: 1em;
`;
const SnippetArea = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 120px;
  height: 80px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(${colors.fontColor2});
  font-size: 18px;
  text-align: center;
`;
const HeadertArea = styled.div`
width:100%;
  display: flex;
  flex-direction: row;
  background-color: rgba(31, 36, 54, 0.9);;
  &:focus {
    background: #504798 
    color: #000000 
  }
`;

const SelectedCard = styled.div`
width:100%;
  display: flex;
  flex-direction: row;
  background-color: rgb(67,159,174).8;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 0.5em;
  margin-left: 1em;
  margin-right: 1em;
  @media (max-width: 1600px) {
    flex-direction: column;
  }
`;
const SelectBtn = styled.button`
  padding: 0.7em 2em;
  border-radius: 5px;
  font-size: 18px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;


const Card: React.FC<Props> = ({}) => {
  const classes = useStyles();
  const [selectedBtn, setSelectedBtn] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(false);
  
  var changeColorTeal = () => {
    var teal = document.getElementById('selected');
    teal!.style.background = ("rgb(67,159,174)")
  };
  
  var changeColorBlack = () => {
    var black = document.getElementById('selected');
    black!.style.background = ("rgba(31, 36, 54, 0.9)")
  };

  const selectHandler = () => {
    setSelectedBtn(!selectedBtn);
  
    if(selectedBtn===false) {
  changeColorTeal()
 } if(selectedBtn===true) {
   changeColorBlack()
 }
};


  return (
    <CardContainer>
      <HeadertArea id="selected">
        <Grid container direction="column">
          <Grid item>
          <HeaderTitle>Platform X</HeaderTitle>
          </Grid>
          <Grid item>
           <HeaderTitle>Option Cost: $48,500</HeaderTitle>
           </Grid>
          </Grid>
          </HeadertArea>
          
          <DescriptionTxt>Quantity: 2</DescriptionTxt>
          <DescriptionTxt>Strike: $48,000</DescriptionTxt>
          <DescriptionTxt>Expiry: 09/24/2021</DescriptionTxt>

      <ButtonArea>
        {/* <SelectBtn>Select</SelectBtn> */}
        <CompareButton
        value="Select"
        className={classes.HeaderToggle}
        selected={selectedBtn}
        onClick={() => {
        selectHandler()
      }}>{" "}<p
      style={{
        fontSize: 17,
        fontWeight: 900,
      }}
      >SELECT 
        </p>
      </CompareButton>
        {/* <SelectBtn style={{color:'#ae5a72', backgroundColor:'rgb(67,159,174)'}}>Remove</SelectBtn> */}
      </ButtonArea>
      </CardContainer>
  );
};

export default Card;
