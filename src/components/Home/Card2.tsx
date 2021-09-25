import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AdcancedCard from './AdcancedCard';
const useStyles = makeStyles((theme) => ({
    gridCont: {
    },
}));

interface Props {
    // url: string;
    // text: string;
    // onClick:(num: number)=>void;
    // num:number;
}

const Container = styled.div`
    margin-top:-10px;
    width: 100%;
    background: rgba(${colors.gradDark});
    backdrop-filter: blur(4px);
    border-radius: 5px;
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
    color: rgb(${colors.fontColor});
    font-size: 20px;
    text-align: center;
    font-weight:bold;
    background-color:rgb(${colors.dark});
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
    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={12} md={4} className={classes.gridCont}>
                    <AdcancedCard />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont} >
                    <AdcancedCard />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont}>
                    <AdcancedCard />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont} >
                    <AdcancedCard />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont}>
                    <AdcancedCard />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont} >
                    <AdcancedCard />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont}>
                    <AdcancedCard />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont} >
                    <AdcancedCard />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridCont} >
                    <AdcancedCard />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Card
