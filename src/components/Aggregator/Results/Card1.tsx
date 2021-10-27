import React, { Component, useState } from "react";
import styled from 'styled-components'
import { colors } from '../../../styles'
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
import styledCom from 'styled-components';
import { Grid } from '@mui/material'

//brand palette #2D93A6 green, #504798 dark purp, #5E6CFA blue, 3E4251 border shadow drop down right 

interface Props {
    //  platformD = {api.platform};
    //  underlyingD = {api.underlying};
    //  strikeD = {api.strike};
    //  expiryD = {api.expiry};
    //  amountD = {api.amount};
    //  gasD = {api.gas};
    //  premiumD = {api.premium}

   };

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
    padding:2em;
    margin-top: 10px;
`

const HederTitle = styled.p`
    color: white;
    font-size: 30px;
    font-weight:600
    background-color:
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
    font-size: 19px;
    margin:0.3em;
    font-weigh:200;
`
const PurchaseBtn = styled.button`
    height:70px;
    width:200px;
    font-size:30px;
    color: rgb(256,256,256);
    background-color:#504798;
    font-weight:bold;
    align-self:center;
    border-radius:15px;
    margin-top:30px;
    margin-bottom:30px;
    &:hover {
        cursor: pointer;
    }
`

const Card: React.FC<Props> = ({ }) => {
    return (
        <Grid container sx={{ display: { xs: 'none', md: 'none' } }}>
        <Container>
        <Grid container direction="row" xs={2} sm={3} md={4} lg={4}>
            <Grid item  xs={6} sm={3} md={4} lg={4}>
            <HederTitle>{/*api.platformD*/}</HederTitle>

            <Description1>View historical chart</Description1>
            </Grid>
            <Grid item>
            <Description>Underlying: {/*api.underlyingD*/}</Description>
            </Grid>
            <Grid item>
            <Description>Strike Price: {/*api.strikeD*/}</Description>
            </Grid>
            <Grid item>
            <Description>Expires: {/*api.expiryD*/}</Description>
            </Grid>
            <Grid item>
            <Description>Qty: {/*api.amountD*/}</Description>
            </Grid>
            <Grid item>
            <Description>Gas Fee: {/*api.gasD*/}</Description>
            </Grid>
            <Grid item>
            {<Description>({/*x*/} days left for expiry)</Description> }

            <br/>
            <br/>
            </Grid>
{/* <Grid item>
<Description>Price to Break even</Description>
</Grid> */}
            <Grid item>
            <Description>Total Cost: {/*premium from from transaction*/}</Description>
            </Grid>
            <Grid item>
            <PurchaseBtn>Purchase</PurchaseBtn>
            </Grid></Grid></Container>
        </Grid>    

)
};

export default Card