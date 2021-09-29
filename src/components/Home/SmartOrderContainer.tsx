import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import BannerContentSOR from './BannerContentSOR'

const BannerContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 2em;
    min-height: 490px;
    background-color: rgb(${colors.main});
    @media (max-width: 450px) {
        width: 100%;
        height:100%;
        padding: 0em;
    }
`
const Description = styled.p`
    font-size: 40px;
    font-weight: 500;
    color: white;
    line-height: 1.5;
    text-align:center;
    margin-bottom:1em;
`

interface Props {
}

const TopContainerSOR:React.FC<Props> = () => {
    return (
        <BannerContainer>
            <Description>Smart Order Router</Description>
            <BannerContentSOR />
        </BannerContainer>
    )
}

export default TopContainerSOR
