import * as React from "react";
import styled from "styled-components";
import Card from "./ServiceCards";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

import routerIconblack from "../../assets/images/routerIconblack.png";
import searchIconblack from "../../assets/images/searchIconblack.png";
import chartIconblack from "../../assets/images/chartIconblack.png";
import stationImage from "../../assets/images/stationImage.png";
import { colors } from "../../styles";

interface Props {
  // switchContent: (num: number) => void;
}


const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const ItemContainer = styled.div`
  width: 900px;
  height: 500px;
  margin: auto;
  display: flex;
  margin-top: 11em;
  margin-left: 23em;
  flex-direction: column;
  padding-left: 2%;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6);
  background-color: rgb(31, 36, 54);
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
      <Grid container spacing={4} align-items-center>
        <Grid
          item
          xs={12}
          md={4}
          onClick={() => {
            history.push("/smartOrder");
          }}
        >
          <Card url={routerIconblack} text="Smart Order Router" />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          onClick={() => {
            history.push("/aggregator");
          }}
        >
          <Card url={searchIconblack} text="Derivatives Aggregator" />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          onClick={() => {
            history.push("/subgraph");
          }}
        >
          <Card url={chartIconblack} text="Subgraph" />
        </Grid>
      </Grid>
    </ItemContainer>
  );
};

export default ItemList;
