import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridCont: {
    },
}));

interface Props {
    // url: string;
    // text: string;
    // onClick:(num: number)=>void;
    // num:number;
}
const Description = styled.div`
    border-radius:10px;
    margin:0.5em;
    background-color:rgb(${colors.dark});
    padding:0.5em;
    padding-left:1em;
`
const HeaderTitle = styled.p`
    color: rgb(${colors.fontColor});
    font-size: 27px;
`
const DescriptionTxt = styled.p`
    color: #c5caf6;
    font-size: 20px;
`
const SnippetArea = styled.div`
    position: relative;
    top:0;
    right:0;
    width:120px;
    height:80px;
    border: 1px solid #fff;
    display:flex;
    justify-content:center;
    align-items:center;
    color: rgb(${colors.fontColor2});
    font-size:18px;
    padding:5px;
    text-align:center;
`
const HeadertArea = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
const ButtonArea = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-top:1em;
    margin-bottom:0.5em;
    margin-left:1em;
    margin-right:1em;
    @media (max-width: 1600px) {
        flex-direction:column;
    }
`
const SelectBtn = styled.button`
    padding: 0.7em 2em;
    border-radius:5px;
    font-size:18px;
    text-decoration:underline;
    &:hover {
        cursor: pointer;
    }
`

const Card: React.FC<Props> = ({ }) => {
    const classes = useStyles();
    return (
        <Description>
            <HeadertArea>
                <div>
                    <HeaderTitle>Platform X</HeaderTitle>
                    <HeaderTitle style={{color:'#c5caf6', marginTop:-10, marginBottom:30}}>Strike Price: $48,500</HeaderTitle>
                    <DescriptionTxt>Quantity: 2</DescriptionTxt>
                    <DescriptionTxt>Strike: $48,000</DescriptionTxt>
                    <DescriptionTxt>Expiry: 09/24/2021</DescriptionTxt>
                </div>
            </HeadertArea>
            <ButtonArea>
                {/* <SelectBtn>Select</SelectBtn> */}
                <SelectBtn style={{color:'#53c0ab', backgroundColor:'#5e6172'}}>Compare</SelectBtn>
                {/* <SelectBtn style={{color:'#ae5a72', backgroundColor:'#5e6172'}}>Remove</SelectBtn> */}
            </ButtonArea>
        </Description>
    )
}

export default Card
