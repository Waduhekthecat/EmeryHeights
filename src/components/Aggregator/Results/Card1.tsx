import React, { Component, useState } from "react";
import styled from 'styled-components'
import { colors } from '../../../styles'
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
import styledCom from 'styled-components';
import { Grid } from '@mui/material'

interface Props {
    // url: string;
    // text: string;
    // onClick:(num: number)=>void;
    // num:number;
};
const useStyles = makeStyles((theme) => ({
    Hidden: {
        borderWidth: "2px",
        color: "rgb(67,159,174)",
    }}));

const Container = styled.div`
    width: 100%;
    background-color: rgb(67,159,174);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(${colors.border});
    padding:3em;
    margin-top: 10px;
`

const HederTitle = styled.p`
    color: white;
    font-size: 30px;
    font-weight:500
    background-color:
`
const Description1 = styled.p`
    color: white;
    font-size: 14px;
    text-decoration:underline;
    margin-top:-20px;
    margin-bottom:30px;
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
    font-size:32px;
    color:#5e6cfa;
    font-weight:bold;
    align-self:center;
    border-radius:10px;
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
            <Grid container>
            <Grid item>
            <HederTitle>Platform Y</HederTitle>
            </Grid>
            <Grid item>
            <Description1>View historical chart</Description1>
            </Grid>
            <Grid item>
            <Description>Expires: 09/24/2021</Description>
            </Grid>
            <Grid item>
            <Description>Strike Price: $48,000</Description>
            </Grid>
            <Grid item>
            <Description>Qty: 2</Description>
            </Grid>
            <Grid item>
            <Description>Gas Fee: 108 Wei</Description>
            </Grid>
            <Grid item>
            <Description style={{ marginTop: 80 }}>Price to Break even</Description>
            </Grid>
            <Grid item>
            <Description style={{ fontSize: 25 }}>Total Cost:</Description>
            </Grid>
            <Grid item>
            <PurchaseBtn>Purchase</PurchaseBtn>
            </Grid></Grid></Container>
        </Grid>    

)
};

export default Card
