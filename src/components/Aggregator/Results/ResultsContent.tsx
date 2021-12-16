import React, { Component } from "react";
import styled from "styled-components";
import OptionCards from "./OptionCards";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { colors, styleX } from "../../../styles";
import Filter from "./AdvancedFilter";
import Collapsible from "react-collapsible";
import { Collapse } from "@mui/material";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Fade } from "@material-ui/core";
import { StylesContext } from "@material-ui/styles";

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
    pColor: String;
    styleX: String;
  };
}
{
  /* height must be adjusted for variance in stat cards returned from query */
}
const ItemContainer = styled.div`
  height: 165vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 0.5em;
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-radius: 15px;
  box-shadow: 2px 2px 2px rgba(10, 13, 27, 0.6);
  border: 4px rgb(${colors.gradLight});
  background-color: #111;
  @media (max-width: 1200px) {
  }
`;

const HeaderBgArea = styled.div`
position: absolute;
padding 2px;
background: grey;
border-radius:6px;
align-items:center;
width: 100vh;
height: 150px`;

const HeaderArea = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
  background: white;
  display: flex;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  font-style: italic;
  @media (max-width: 1400px) {
  }
`;

const CardArea = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 1em;
  padding-bottom: 5em;
  margin-bottom: 1em;
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

// React.FC<Props1> = ({platformD, optionD, chartD, underlyingD, strikeD, expiryD, amountD, gasD, countdownD, premiumD});

const ResultsContent: React.FC<Props1> = ({ Results }) => {
  const [toggled, setToggled] = React.useState(false);
  const [isHide, setIsHide] = React.useState(true);
  const [containerUp, setContainerUp] = React.useState(styleX.topx);
  const containerRef = React.useRef(null);

  const handleFilterSwitch = () => {
    setToggled(!toggled);
    setIsHide(!isHide);
    containerUp == styleX.topx
      ? setContainerUp(styleX.top)
      : setContainerUp(styleX.topx);
  };
  return (
    <div>
      <Grid container>
        <ItemContainer>
          <Box
            style={{
              borderRadius: "6px",
              background:
                "linear-gradient(to right, rgba(98, 99, 117, 0.4), rgba(174, 175, 184, 0.4))",
              padding: "10px",
              marginTop: "1%",
            }}
            ref={containerRef}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={toggled}
                  onChange={() => handleFilterSwitch()}
                />
              }
              label="Advanced Options"
              labelPlacement="start"
              sx={{ color: "white" }}
            />

            <Fade in={toggled}>
              <HeaderArea hidden={isHide}>
                <Filter></Filter>
              </HeaderArea>
            </Fade>
          </Box>

          <Grid container spacing={2} className={CardArea}>
            <Grid item xs={12} sm={3} md={3} onClick={() => {}}>
              {/*details modal area */}
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
