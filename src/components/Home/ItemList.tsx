import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom'

import routerIcon from '../../assets/images/routerIcon.png'
import searchIcon from '../../assets/images/searchIcon.png'
import chartIcon from '../../assets/images/chartIcon.png'
import stationImage from '../../assets/images/stationImage.png'
import { colors } from '../../styles'

interface Props {
    // switchContent: (num: number) => void;
}

const ItemContainer = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-left:5%;
    padding-right:5%;
    margin-top:7em;
    border-radius:20px;
    padding-bottom:7em;
    margin-bottom:10em;
    background-color: rgb(31,36,54);
    @media (max-width: 960px) {
        width: 100%;
        height:100%;
        padding-left:3%;
        padding-right:3%;
    }
`

const HeaderArea = styled.div`
    padding-top:7em;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    @media (max-width: 1400px) {
        flex-direction:column;
    }
`
const HeaderTitle = styled.p`
    color: rgb(${colors.fontColor});
    font-size: 60px;
    text-align: center;
    font-weight:300;
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
const ItemList: React.FC<Props> = ({ }) => {
    const history = useHistory()
    return (
        <ItemContainer>
            <HeaderArea>
                <HeaderTitle>Welcome to</HeaderTitle>
                <HaederImage src={stationImage} />
            </HeaderArea>
            <Description>Select a service to get started</Description>
            <Grid container spacing={4} style={{ backgroundColor: '#1f2436'}}>
                <Grid item xs={12} md={4} onClick={() => { history.push('/smartOrder') }}>
                <Card url={routerIcon} text="Smart Order Router" />
                </Grid>
                <Grid item xs={12} md={4} onClick={() => { history.push('/aggregator')}}>
                    <Card url={searchIcon} text="Derivatives Aggregator" />
                </Grid>
                <Grid item xs={12} md={4} onClick={() => { history.push('/subgraph') }}>
                    <Card url={chartIcon} text="Subgraph" />
                </Grid>
            </Grid>
        </ItemContainer>
    )
}

export default ItemList
