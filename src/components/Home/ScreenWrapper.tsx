import React from 'react'
import styled from 'styled-components'
import BackImage from '../../assets/images/roadmap.jpg'

interface Props {
}

const AppContainer = styled.div`
    background-image: url(${BackImage});
    background-color: rgb(80, 71, 152);
    margin-left: auto;
    margin-right: auto;
    padding-top: 2rem;
    pading-bottom: 2rem;
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100vh;
    flex:1;
`

const ScreenWrapper: React.FC<Props> = ({ children }) => {
    return <AppContainer>{children}</AppContainer>
}

export default ScreenWrapper
