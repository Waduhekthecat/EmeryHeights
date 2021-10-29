import React from 'react'
import styled from 'styled-components'
import Card1 from '../Aggregator/Results/Card1'
import Modal from '../Aggregator/Results/DetailsModal'
import Card2 from '../Aggregator/Results/Card2'
import Card3 from '../Aggregator/Results/Card3'
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom'
import routerIcon from '../../assets/images/routerIcon.png'
import searchIcon from '../../assets/images/searchIcon.png'
import chartIcon from '../../assets/images/chartIcon.png'
import stationImage from '../../assets/images/stationImage.png'
import { colors } from '../../styles'
import { render } from 'react-dom';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

interface Props {
    // switchContent: (num: number) => void;
}


const ItemContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-left:1%;
    padding-right:1%;
    padding-top:1em;
    padding-bottom:7em;
    margin-bottom:10em;
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgba(10, 13, 27, 0.6);
    border:4px
     rgb(${colors.gradLight});
    background-color: rgb(31, 36, 54);
    @media (max-width: 720px) {
        width: 75%;
        height:75%;
        padding-right:2%;
        padding-left:2%;
    }
`
const HeaderArea = styled.div`
    padding-top:4em;
    margin-bottom:2em;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-style:italic;
    @media (max-width: 1400px) {
        flex-direction:column;
    }
`
const HeaderTitle = styled.p`
    color: rgb(${colors.fontColor});
    font-size: 35px;
    text-align: center;
    font-weight:bold;
    margin:0;
    margin-right:20px;
    @media (max-width: 960px) {
        font-size: 40px;
    }
    @media (max-width: 550px) {
        width:350px;
    }
`
const Description = styled.p`
    color: rgb(${colors.grey});
    font-size: 20px;
    text-align: center;
    margin-bottom:5em;
`
const HaederImage = styled.img`
    width: 550px;
    background-size: contain;
    @media (max-width: 550px) {
        width:350px;
    }
`

// const ItemList: React.FC<Props> = ({ switchContent }) => {
const ResultsContent: React.FC<Props> = ({ }) => {
    const history = useHistory()
    return (
        <div>
            <ItemContainer>
                <Grid container spacing={2}>
                <Card3 />
                    <Grid item xs={12} md={3} onClick={() => { }}>
                        <Card1 />
                    </Grid>
                    <Grid item xs={12} md={9} onClick={() => { }}>
                        <Card2/>
                    </Grid>
                </Grid>
            </ItemContainer>
        </div>
    )
}

export default ResultsContent
