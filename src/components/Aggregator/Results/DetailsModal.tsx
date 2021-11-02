import React from "react";
import styled from "styled-components";
import { Grid } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { colors } from "../../../styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import values from '../BannerContentDOA';

//brand palette #2D93A6 green, #504798 dark purp, #5E6CFA blue, 3E4251 border shadow drop down right 


const useStyles = makeStyles((theme) => ({
  Hidden: {
      borderWidth: "2px",
      color: "rgb(67,159,174)",
  }}));

const Container = styled.div`
  width: 100%;
  background-color: rgb(67,159,174);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(${colors.border});
  padding:1em;
  @media (max-width: 950px) {
      width:1000px;
      height: 300px;
      flex-direction:row;
}; 
`

const HederTitle = styled.h1`
  color: rgb(256,256,256) !important;
  font-style: "bold" !important;
  font-size: 34px;
`
const Description1 = styled.p`
  color: black;
  font-size: 17px;
  text-decoration:underline;
  margin-top:-20px;
  margin-bottom:30px;
  margin-left: 2em;
`
const Description = styled.p`
  color: white;
  font-size: 25px;
  margin:0.3em;
  font-weigh:200;
`
const PurchaseBtn = styled.button`
  height:70px;
  width:170px;
  background-color:#504798;   
  font-size:25px;
  
  color:white;
  align-self:center;
  border-radius:10px;
  margin-top:30px;
  margin-bottom:30px;
  &:hover {
      cursor: pointer;
  }
`


interface Props {
     platformD: String, 
     optionD: String,
     chartD: String,
     underlyingD: String, 
     strikeD: String, 
     expiryD: String,
     amountD: String, 
     gasD: String,
     countdownD: String,
     premiumD: String,
  }


const Details = (props: {results: Props}) => {

  return (
      <Grid container direction="column">
      <Container>
      
          <Grid item  xs={6} sm={3} md={3} lg={12}>
          <HederTitle> Platform: {props.results.platformD}</HederTitle>
          </Grid>
          <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>{props.results.optionD} on {props.results.underlyingD}</Description>
          </Grid>
          <br></br>
          <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description1>View historical chart {props.results.chartD}</Description1>
          </Grid>
          <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>Strike Price: {props.results.strikeD}</Description>
          </Grid>
          <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>Expires: {props.results.expiryD}</Description>
          </Grid>
          <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>Qty: {props.results.amountD}</Description>
          </Grid>
          <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>Gas Fee: {props.results.gasD}</Description>
          </Grid>
          <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>({props.results.countdownD} days left for expiry)</Description> 
          <br/>
          <br/>
          </Grid>
          <Grid item  xs={6} sm={3} md={3} lg={12}>
            <HederTitle>Total Cost: {props.results.premiumD}</HederTitle>
          </Grid>
          <Grid item  xs={12} sm={12} md={12} lg={12}>
            <PurchaseBtn>Purchase</PurchaseBtn>
          </Grid>
      </Container>
    </Grid>  
    )
  };
export default Details