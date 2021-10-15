import React from 'react'
import styled from 'styled-components'
import BackImage from '../../assets/images/roadmap.jpg'

interface Props {
}

const AppContainer = styled.div`
    background-image: url(${BackImage});
    background-color: rgba(80, 71, 152, 1);
    margin-left: auto;
    margin-right: auto;
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    flex:1;
`

const ScreenWrapper2: React.FC<Props> = ({ children }) => {
    return <AppContainer>{children}</AppContainer>
}

export default ScreenWrapper2
