import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import StatCard from './StatefulCard';
import Data from './Data';

//brand palette #2D93A6 green, #504798 dark purp, #5E6CFA blue, 3E4251 border shadow drop down right 

interface Props {
    // data: {
    //  platform: 'String';
    //  underlying: 'String';
    //  strike: 'String';
    //  expiry: 'String';
    //  amount:'String';
    //  gas: 'String';
    //  premium: 'String';
    // };
   };


const useStyles = makeStyles((theme) => ({
    gridCont: {
        paddingTop: '0px !important',
    },
    CardContainer: {
        paddingTop: '0px !important',
    },
    primary: {
        background: "rgbToHex(256,256,256)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px"
    },
      secondary: {
        background: "#504798",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px"
      }
}));

const HederTitle = styled.h1`
   color: rgb(256,256,256) !important;
   font-style: bold !important;
   font-size: 34px;
   font-weight:600
`

const Container = styled.div`
    
    width: 100%;
    height: 100%;
    box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6)
    background: rgba(51, 50, 102, 0.87);
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Container2 = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(67,159,174);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    border: 1px solid rgba(${colors.border});
    padding:2em;
    margin-top: 10px;
`
const CardContainer = styled.div`
@media (min-height: 300px) {
    text-size: 20px
    flex-direction: column;
  }
`
const CardImage = styled.img`
    width: 50px;
    height: 50px;
    background-size: contain;
`
const Description = styled.div`
    color: white;
    font-size: 20px;
    text-align: center;
    font-weight:bold;
    background-color: rgba(51, 50, 102, 0.87);
`
const Description1 = styled.p`
    color: black;
    font-size: 17px;
    text-decoration:underline;
    margin-top:-20px;
    margin-bottom:30px;
`
const Description2 = styled.p`
    color: white;
    font-size: 19px;
    margin:0.3em;
    font-weigh:200;
`
const PurchaseBtn = styled.button`
justify-content: center;
    background-color:#504798;   
    height:70px;
    width:80%;
    font-size:30px;
    color:white;
    align-self:center;
    border-radius:10px;
    margin-top:30px;
    margin-bottom:30px;
    &:hover {
        cursor: pointer;
    }
`


const Card: React.FC<Props> = ({ }) => {

    const data = [
        { platform: 'Hegic', underlying: 'WBTC', strike: '$60,000', amount: '1.0wbtc', expiry: '11/01/21', premium: '$1825'},
        { platform: 'Premia', underlying: 'WBTC', strike: '$60,000', amount: '1.0wbtc', expiry: '11/01/21', premium: '$2000'},
        { platform: 'Auctus', underlying: 'WBTC', strike: '$60,000', amount: '1.0wbtc', expiry: '11/01/21', premium: '$2350'},
        { platform: 'Phoenix', underlying: 'WBTC', strike: '$60,000', amount: '1.0wbtc', expiry: '11/01/21', premium: '$2375'},
        { platform: 'Opyn', underlying: 'WBTC', strike: '$60,000', amount: '1.0wbtc', expiry: '11/01/21', premium: '$2420'},
        { platform: 'Heget', underlying: 'WBTC', strike: '$60,000', amount: '1.0wbtc', expiry: '11/01/21', premium: '$2500'},
        { platform: 'Opium', underlying: 'WBTC', strike: '$60,000', amount: '1.0wbtc', expiry: '11/01/21', premium: '$2750'},
        { platform: 'Finnexus', underlying: 'WBTC', strike: '$60,000', amount: '1.0wbtc', expiry: '11/01/21', premium: '$2950'},
        { platform: 'Ribbon', underlying: 'WBTC', strike: '$60,000', amount: '1.0wbtc', expiry: '11/01/21', premium: '$3000'},
    ];


    const classes = useStyles();
    
    return (
        <Container>
            <Grid container className={classes.primary} spacing={2}>
                <Grid item xs={4} md={4} className={classes.CardContainer}>
                    <StatCard data={data[0]} />
                </Grid>
                <Grid item xs={4} md={4} className={classes.CardContainer} >
                    <StatCard data={data[1]} />
                </Grid>
                <Grid item xs={4} md={4} className={classes.CardContainer}>
                    <StatCard data={data[2]} />
                </Grid>
                <Grid item xs={4} md={4} className={classes.CardContainer} >
                    <StatCard data={data[3]}/>
                </Grid>
                <Grid item xs={4} md={4} className={classes.CardContainer}>
                    <StatCard data={data[4]}/>
                </Grid>
                <Grid item xs={4} md={4} className={classes.CardContainer} >
                    <StatCard data={data[5]}/>
                </Grid>
                <Grid item xs={4} md={4} className={classes.CardContainer}>
                    <StatCard data={data[6]}/>
                </Grid>
                <Grid item xs={4} md={4} className={classes.CardContainer} >
                    <StatCard data={data[7]}/>
                </Grid>
                <Grid item xs={4} md={4} className={classes.CardContainer} >
                    <StatCard data={data[8]}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Card
