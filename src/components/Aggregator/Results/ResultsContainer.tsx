import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import StatCard from './StatCard';


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

      }
}));

const Container2 = styled.div`
    width: 100%;
    height: 100%;
    background-color: 3E4251;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
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
        <Container2>
            <Grid container spacing={2}>
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
        </Container2>
    )
}

export default Card
