import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {StatCard} from './StatefulCard';

const useStyles = makeStyles((theme) => ({
    gridCont: {
        paddingTop: '0px !important',
    },
}));


interface Props {
    // url: string;
    // text: string;
    // onClick:(num: number)=>void;
    // num:number;
}

const Container = styled.div`
    
    width: 100%;
    box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6)
    background: rgba(51, 50, 102, 0.87);
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CardImage = styled.img`
    width: 50px;
    height: 50px;
    background-size: contain;
`
const Description = styled.div`
    color: white;
    font-size: 20px;this.props.data.
    text-align: center;
    font-weight:bold;
    background-color: rgba(51, 50, 102, 0.87);
`

// const Card: React.FC<Props> = ({ url, text, onClick, num }) => {
//     return (
//         <Container onClick={()=>{onClick(num)}}>
//             <CardImage src={url} />
//             <Description>{text}</Description>
//         </Container>
//     )
// }

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
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} className={classes.gridCont}>
                    <StatCard data={data[0]} />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont} >
                    <StatCard data={data[1]} />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont}>
                    <StatCard data={data[2]} />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont} >
                    <StatCard data={data[0]}/>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont}>
                    <StatCard data={data[1]}/>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont} >
                    <StatCard data={data[2]}/>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont}>
                    <StatCard data={data[0]}/>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont} >
                    <StatCard data={data[1]}/>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont} >
                    <StatCard data={data[2]}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Card
