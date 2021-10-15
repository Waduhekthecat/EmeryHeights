import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

interface Props {
    // url: string;
    // text: string;
    // onClick:(num: number)=>void;
    // num:number;
}

const Container = styled.div`
    width: 100%;
    background: rgb(94,108,250);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(${colors.border});
    padding:0 1em;
    margin-top: 10px;
`
const CardImage = styled.img`
    width: 50px;
    height: 50px;
    background-size: contain;
`
const HederTitle = styled.p`
    color: white;
    font-size: 30px;
    font-weight:500
`
const Description1 = styled.p`
    color: white;
    font-size: 14px;
    text-decoration:underline;
    margin-top:-20px;
    margin-bottom:30px;
`
const Description = styled.p`
    color: white;
    font-size: 19px;
    margin:0.3em;
    font-weigh:200;
`
const PurchaseBtn = styled.button`
    height:70px;
    width:200px;
    font-size:32px;
    color:#5e6cfa;
    font-weight:bold;
    align-self:center;
    border-radius:10px;
    margin-top:30px;
    margin-bottom:30px;
    &:hover {
        cursor: pointer;
    }
`
// const Card: React.FC<Props> = ({ url, text, onClick, num }) => {
//     return (
//         <Container onClick={()=>{onClick(num)}}>
//             <CardImage src={url} />
//             <Description>{text}</Description>
//         </Container>
//     )
// }

const Card: React.FC<Props> = ({ }) => {
    return (
        <Container>
            <HederTitle>Platform Y</HederTitle>
            <Description1>View historical chart</Description1>
            <Description>Expires: 09/24/2021</Description>
            <Description>Strike Price: $48,000</Description>
            <Description>Quantity: 2</Description>
            <Description>Gas Fee: 108 Wei</Description>
            <Description style={{ marginTop: 80 }}>Price to Break even</Description>
            <Description style={{ fontSize: 25 }}>Total Cost:</Description>
            <PurchaseBtn>Purchase</PurchaseBtn>
        </Container>
    )
}

export default Card
