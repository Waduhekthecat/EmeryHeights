import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

interface Props {
    url: string;
    text: string;
}

const Container = styled.div`
    width: 85%;
    height: 85%;
    padding: 3em 0em;
    background: rgb(256, 256, 256);
    backdrop-filter: blur(4px);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(${colors.border});
    box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
    &:hover {
        box-shadow: 0 1.5px 3px 0 rgba(${colors.border}), 0 1.5px 5px 0 rgba(${colors.border});
        box-shadow: 0 1.5px 3px 0 rgba(${colors.border}), 0 1.5px 5px 0 rgba(${colors.border});
        background: gradient(
            to bottom,
            rgba(192, 159, 87, 0.5),
            rgba(192, 159, 87, 0.5) 1px,
            transparent 0,
            transparent 2em
          );
    }
`
const CardImage = styled.img`
    color: black;
    width: 48px;
    height: 48px;
    background-size: contain;
    
`
const Description = styled.p`
    color: black;
    font-size: 18px;
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
