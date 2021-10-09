import * as React from "react";
import styled from "styled-components";
import Card from "./ServiceCards";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

import routerIcon from "../../assets/images/routerIcon.png";
import searchIcon from "../../assets/images/searchIcon.png";
import chartIcon from "../../assets/images/chartIcon.png";
import stationImage from "../../assets/images/stationImage.png";
import { colors } from "../../styles";

interface Props {
  // switchContent: (num: number) => void;
}

const ItemContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-left: 2%;
  padding-bottom: 2%;
  margin-top: 10em;
  margin-left: 28em;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6);
  background-color: rgba(51, 50, 102, 0.87);
  @media (max-width: 720px) {
    width: 75%;
    height: 75%;
    padding-left: 2%;
    padding-right: 2%;
  }
`;

const HeaderArea = styled.div`
  padding-top: 5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
const HeaderTitle = styled.p`
  color: rgb(${colors.fontColor});
  font-size: 45px;
  text-align: center;
  font-weight: 200;
  margin: 0;
  margin-right: 15px;
  @media (max-width: 1300px) {
    font-size: 30px;
  }
  @media (max-width: 550px) {
    width: 360px;
  }
`;
const Description = styled.p`
  color: rgb(${colors.fontColor});
  font-size: 20px;
  text-align: center;
  margin-bottom: 3.5em;
`;
const HaederImage = styled.img`
  width: 450px;
  background-size: cover;
  @media (max-width: 425px) {
    width: 270px;
  }
`;

// const ItemList: React.FC<Props> = ({ switchContent }) => {
const ItemList: React.FC<Props> = ({}) => {
  const history = useHistory();

  return (
    <ItemContainer>
      <HeaderArea>
        <HeaderTitle>Welcome to</HeaderTitle>
        <HaederImage src={stationImage} />
      </HeaderArea>
      <Description>Select a service to get started</Description>
      <Grid container spacing={4} align-items>
        <Grid
          item
          xs={12}
          md={4}
          onClick={() => {
            history.push("/smartOrder");
          }}
        >
          <Card url={routerIcon} text="Smart Order Router" />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          onClick={() => {
            history.push("/aggregator");
          }}
        >
          <Card url={searchIcon} text="Derivatives Aggregator" />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          onClick={() => {
            history.push("/subgraph");
          }}
        >
          <Card url={chartIcon} text="Subgraph" />
        </Grid>
      </Grid>
    </ItemContainer>
  );
};

export default ItemList;
