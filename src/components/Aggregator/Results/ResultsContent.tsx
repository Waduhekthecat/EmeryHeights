import React, { Component } from "react";
import styled from "styled-components";
import OptionCards from "./OptionCards";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { colors } from "../../../styles";

interface Props1 {
  Results: {
    platformD: String;
    optionD: any;
    chartD: any;
    underlyingD: String;
    strikeD: String;
    expiryD: String;
    amountD: String;
    gasD: any;
    countdownD: any;
    premiumD: String;
  };
}

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 1em;
  padding-bottom: 7em;
  margin-bottom: 10em;
  border-radius: 20px;
  box-shadow: 2px 2px 2px rgba(10, 13, 27, 0.6);
  border: 4px rgb(${colors.gradLight});
  background-color: rgb(31, 36, 54);
  @media (max-width: 1200px) {
    width: 75%;
    height: 75%;
    padding-right: 2%;
    padding-left: 2%;
  }
`;
const HeaderArea = styled.div`
  padding-top: 4em;
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-style: italic;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;
const HeaderTitle = styled.p`
  color: rgb(${colors.fontColor});
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  margin: 0;
  margin-right: 20px;
  @media (max-width: 960px) {
    font-size: 40px;
  }
  @media (max-width: 550px) {
    width: 350px;
  }
`;
const Description = styled.p`
  color: rgb(${colors.grey});
  font-size: 20px;
  text-align: center;
  margin-bottom: 5em;
`;
const HaederImage = styled.img`
  width: 550px;
  background-size: contain;
  @media (max-width: 550px) {
    width: 350px;
  }
`;

// React.FC<Props1> = ({platformD, optionD, chartD, underlyingD, strikeD, expiryD, amountD, gasD, countdownD, premiumD});
const ResultsContent: React.FC<Props1> = ({ Results }) => {
  const history = useHistory();
  return (
    <div>
      <Grid container>
        <ItemContainer>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={3} onClick={() => {}}>
              {/*blank for now*/}
            </Grid>
            <Grid item xs={12} sm={9} md={9} onClick={() => {}}>
              <OptionCards Results={Results} />
            </Grid>
          </Grid>
        </ItemContainer>
      </Grid>
    </div>
  );
};

export default ResultsContent;
