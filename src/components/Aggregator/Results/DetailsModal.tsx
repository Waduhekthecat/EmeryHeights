import React from "react";
import styled from "styled-components";
import { Grid } from '@mui/material';
import { colors } from "../../../styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styledCom from "styled-components";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

// Themes //
const useStyles = makeStyles((theme) => ({
  Hidden: {
      borderWidth: "2px",
      color: "rgb(67,159,174)",
  }}));

// Styles //
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
  margin-left:0.6em;
`
const Description = styled.p`
  color: white;
  font-size: 22px;
  margin:0.3em;
  font-weigh:200;
`
const QueryButton = styledCom.a`
    display: flex;
    align-self: center;
    align-items: center;
    justify-content:center;
    border-radius: 5px;
    width: 90%;
    marginLeft:
    color:white;
    font-size:20px;
    font-weight:600;
    font-weight:600;
    box-shadow: 3px 4px 0px rgb(10, 13, 27);
    height: 56px;
    background-color:#504798;
    &:hover {
      cursor: pointer;
      background-color: 3px solid rgb(${colors.fontColor});
      text-shadow: 3px 1px 0px white, 0 2 1em white, 0 0 0.2em darkblue
  }
`

// Selected Card fills this interface to populate the Details Modal via props //
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

// Modal CSS //
const style = {
    position: 'absolute' as 'absolute',
    top: '132px',
    left: '3%',
    width: '350px',
    height: '600px',
    zIndex: '1',
    borderRadius: '15px',
    bgcolor: '#2D93A6',
    border: '2px solid #000',
  };

// Uses interface to return container with details on selected card - allows purchase // 
const Details = (props: {results: Props}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <Grid container direction="column">
      <Container>

          {/* Platform Name */}
        <Grid item  xs={6} sm={3} md={3} lg={12}>
          <HederTitle> Platform: {props.results.platformD}</HederTitle>
        </Grid>

          {/* Option type and Underlying asset */}
        <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>{props.results.optionD} on {props.results.underlyingD}</Description>
        </Grid>
        <br />
        
          {/* Historical Chart     */}
        <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description1>View historical chart {props.results.chartD}</Description1>
        </Grid>

          {/* Strike Price */}
        <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>Strike Price: {props.results.strikeD}</Description>
        </Grid>

          {/* Date of Expiry */}
        <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>Expires: {props.results.expiryD}</Description>
        </Grid>

          {/* Option amount */}
        <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>Qty: {props.results.amountD}</Description>
        </Grid>

          {/* Gas fee */}
        <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>Gas Fee: {props.results.gasD}</Description>
        </Grid>

          {/* Days left until expiry */}
        <Grid item  xs={6} sm={3} md={3} lg={12}>
          <Description>({props.results.countdownD} days left for expiry)</Description> 
        <br/>
        <br/>
        </Grid>
        
          {/* Premium  */}
        <Grid item  xs={6} sm={3} md={3} lg={12}>
          <HederTitle>Total Cost: {props.results.premiumD}</HederTitle>
        </Grid>

          {/* Purchase Button */}
        <Grid item  xs={12} sm={12} md={12} lg={12}>
            <QueryButton 
            onClick={handleOpen}>
              Purchase
            </QueryButton>
        </Grid>
      </Container>
      <Grid item>
        <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"STATION"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              Confirm your purchase of this option. 

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
      </Grid>
    </Grid>  
  )
};

export default Details