import React from "react";
import styled from "styled-components";
import { colors } from "../../styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridCont: {},
}));

interface Props {
  // url: string;
  // text: string;
  // onClick:(num: number)=>void;
  // num:number;
}
const Description = styled.div`
    background: rgba(204, 210, 220, 0.3);
    width: 343px;
    height: 294px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border: 1px solid rgba(${colors.border});
    justify-content: space-between;
    box-shadow: 2px 2px 2px rgba(10, 13, 27, 0.5);
&:hover {
    box-shadow: 0 1px 2px 0 rgba(${colors.border}), 0 1px 3px 0 rgba(${colors.border});
    box-shadow: 0 1px 2px 0 rgba(${colors.border}), 0 1px 3px 0 rgba(${colors.border});
    background: gradient(
        to bottom,
        rgba(192, 159, 87, 0.5),
        rgba(192, 159, 87, 0.5) 1px,
        transparent 0,
        transparent 2em
      );
`;
const HeaderTitle = styled.p`
  color: white;
  font-size: 27px;
`;
const CompareButton = styled.a`
    margin-top:-1em;
    display: flex;
    align-self:center;
    align-items:center;
    justify-content:center;
    border-radius: 10px;
    width: 60%;
    color:white;
    font-size:20px;
    font-weight:600;
    height: 56px;
    background-color:rgb(94,108,250);
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        background-color:rgb(94,108,250)
    }
`;
const DescriptionTxt = styled.p`
  color: white;
  font-size: 20px;
`;
const SnippetArea = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 120px;
  height: 80px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(${colors.fontColor2});
  font-size: 18px;
  text-align: center;
`;
const HeadertArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 0.5em;
  margin-left: 1em;
  margin-right: 1em;
  @media (max-width: 1600px) {
    flex-direction: column;
  }
`;
const SelectBtn = styled.button`
  padding: 0.7em 2em;
  border-radius: 5px;
  font-size: 18px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

const Card: React.FC<Props> = ({}) => {
  const classes = useStyles();
  return (
    <Description>
      <HeadertArea>
        <div>
          <HeaderTitle>Platform X</HeaderTitle>
          <HeaderTitle
            style={{ color: "white", marginTop: -10, marginBottom: 30 }}
          >
            Strike Price: $48,500
          </HeaderTitle>
          <DescriptionTxt>Quantity: 2</DescriptionTxt>
          <DescriptionTxt>Strike: $48,000</DescriptionTxt>
          <DescriptionTxt>Expiry: 09/24/2021</DescriptionTxt>
        </div>
      </HeadertArea>
      <ButtonArea>
        {/* <SelectBtn>Select</SelectBtn> */}
        <CompareButton>
          Compare
        </CompareButton>
        {/* <SelectBtn style={{color:'#ae5a72', backgroundColor:'#5e6172'}}>Remove</SelectBtn> */}
      </ButtonArea>
    </Description>
  );
};

export default Card;
