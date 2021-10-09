import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo07.png'
import { colors } from '../../styles'

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const LogoTitle = styled.h3`
    font-weight: 700;
    color: rgb(${colors.fontColor});
    font-size: 22px;
    margin: 0 1em;
`

const imgStyle = {
    width: 200,
    height: 40
}

function LogoArea() {
    return (
        <LogoContainer>
            <img src={logo} style={imgStyle} alt="logo" />
            {/* <LogoTitle>Buccaneer V3</LogoTitle> */}
        </LogoContainer>
    )
}

export default LogoArea
