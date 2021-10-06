import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

interface Props {
    url: string;
    text: string;
}

const Container = styled.div`
    width: 100%;
    padding: 3em 0em;
    background: white;
    backdrop-filter: blur(4px);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(${colors.border});
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(${colors.border}), 0 6px 20px 0 rgba(${colors.border});
        background: rgb(93,109,248);
    }
`
const CardImage = styled.img`
    width: 50px;
    height: 50px;
    background-size: contain;
`
const Description = styled.p`
    color: rgb(31,36,54);
    font-size: 20px;
    text-align: center;
    font-weight:bold
`

const Card: React.FC<Props> = ({ url, text }) => {
    return (
        <Container onClick={()=>{}}>
            <CardImage src={url} />
            <Description>{text}</Description>
        </Container>
    )
}

export default Card
