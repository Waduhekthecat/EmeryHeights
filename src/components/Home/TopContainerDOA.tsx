import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import BannerContentDOA from './BannerContentDOA'

const BannerContainer = styled.div`
    width: 90%;
    background: linear-gradient(253.59deg, rgba(${colors.gradDark}) 1.89%, rgba(${colors.gradLight}) 99.63%);
    border: 1px solid rgba(${colors.border});
    margin: 0 auto;
    border-radius: 25px;
    padding: 2em;
    min-height: 490px;
    backdrop-filter: blur(4px);
`

interface Props {
}

const TopContainerDOA:React.FC<Props> = () => {
    return (
        <BannerContainer>
            <BannerContentDOA />
        </BannerContainer>
    )
}

export default TopContainerDOA
