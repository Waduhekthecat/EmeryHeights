import React from 'react'
import styled from 'styled-components'
import BannerContentDOA from './BannerContentDOA'

const BannerContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 2em;
    color: white;
    min-height: 490px;
    @media (max-width: 450px) {
        width: 100%;
        height:100%;
        padding: 0em;
    }
`
interface Props {
}

const AggregatorContainer:React.FC<Props> = () => {
    return (
        <BannerContainer>
            <BannerContentDOA />
        </BannerContainer>
    )
}

export default AggregatorContainer