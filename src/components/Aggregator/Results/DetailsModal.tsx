import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import styledCom from "styled-components/";
import ToggleButton from "@mui/material/ToggleButton";
import { black, white } from "material-ui/styles/colors";
import PurchaseModal from "./PurchaseModal";
import IconButton from "@mui/material/IconButton";
import CancelPresentationTwoToneIcon from "@mui/icons-material/CancelPresentationTwoTone";
import { Close } from "@styled-icons/evaicons-solid";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, useTheme } from "@mui/styles";
import { render } from "blockies-ts";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { colors, styleX } from "../../../styles";
import { ModalUnstyled } from "@mui/core";
import { FormControl, Icon } from "@material-ui/core";
import { flexbox } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@mui/material/Switch";
import Slide from "@mui/material/Slide";
import { Fade } from "@material-ui/core";
import { grey, yellow } from "@material-ui/core/colors";

const HederTitle = styled.h1`
  color: black !important;
  font-style: "bold" !important;
  font-size: 34px;
`;
const Description1 = styled.p`
  color: black;
  font-size: 17px;
  text-decoration: underline;
  margin-top: -20px;
  margin-bottom: 30px;
  margin-left: 0.6em;
`;
const Description = styled.p`
  color: black;
  font-size: 22px;
  margin: 0.3em;
  font-weigh: 200;
`;
const QueryButton = styled(Button)`
  position: relative;
  width: 75%;
  background: black !important;
  box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
  height: 56px;
  &:hover {
    border: double;
    cursor: pointer;
    color: #add8e6 !important;
    transform: scale(1.1);
    text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue;
  }
`;

const XClose = styled(CancelPresentationTwoToneIcon)`
  width: 1em;
  height: 1em;
  transition: fill 200ms cubic-bezier(0.9, 0, 0.2, 1) 0ms !important;
  background-color: background: linear-gradient(90deg, rgba(68,140,175,1) 0%, rgba(219,227,231,0.9710259103641457) 0%, rgba(240,240,240,1) 0%, rgba(66,148,149,1) 48%, rgba(228,228,230,1) 97%) !important;
  border-radius: 4px !important;
  color: black;
  &:hover {
    cursor: pointer;
    transform: scale(1.4);
    color: 'white' !important;
  }
`;

const CancelButton = styled(Button)`
  position: inline-flex;
  width: 1em;
  height: 1em;
  
  }
`;

// Selected Card fills this interface to populate the Details Modal via props //
interface Props1 {
  Results: {
    platformD: String;
    optionD: String;
    chartD: String;
    underlyingD: String;
    strikeD: String;
    expiryD: String;
    amountD: String;
    gasD: String;
    countdownD: String;
    premiumD: String;
    pColor: String;
  };
}

const style1 = {
  position: "absolute" as "absolute",
  top: "25%",
  left: "22%",
  width: "900px",
  height: "350px",
  zIndex: "1400",
  borderRadius: "20px",
  color: white,
  border: "4px solid #000",
  overflow: "scrollable",
  bgcolor: colors.main,
};

const style = {
  position: "absolute" as "absolute",
  top: "37%",
  left: "2%",
  width: "22%",
  height: "38%",
  zIndex: "1300",
};

const style3 = {
  position: "absolute" as "absolute",
  top: "20%",
  left: "2%",
  width: "22%",
  height: "38%",
  zIndex: "1300",
};

// Uses interface to return container with details on selected card - allows purchase //
const Details = (props: {
  xResults: Props1;
  sOpen: Boolean;
  handleSelected: () => void;
}) => {
  const [open, setOpen] = React.useState(props.sOpen);
  const [pOpen, setpOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleModal2 = () => {
    setpOpen(true);
  };
  const handleClose2 = () => setpOpen(false);

  return (
    <Container>
      <CancelButton
        style={{
          top: "1%",
          left: "90%",
          zIndex: 1,
          position: "relative",
          fontSize: "8px",
        }}
        onClick={props.handleSelected}
      >
        <XClose />
      </CancelButton>
      <Grid container direction="column">
        {/* Platform Name */}
        <Grid container direction="row">
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <HederTitle>
              {" "}
              Platform: {props.xResults.Results.platformD}
            </HederTitle>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
        </Grid>
        {/* Option type and Underlying asset */}
        <Grid item xs={6} sm={3} md={3} lg={12}>
          <Description>
            {props.xResults.Results.optionD} on{" "}
            {props.xResults.Results.underlyingD}
          </Description>
        </Grid>
        <br />

        {/* Historical Chart     */}
        <Grid item xs={6} sm={3} md={3} lg={12}>
          <Description1>
            View historical chart {props.xResults.Results.chartD}
          </Description1>
        </Grid>

        {/* Strike Price */}
        <Grid item xs={6} sm={3} md={3} lg={12}>
          <Description>
            Strike Price: {props.xResults.Results.strikeD}
          </Description>
        </Grid>

        {/* Date of Expiry */}
        <Grid item xs={6} sm={3} md={3} lg={12}>
          <Description>Expires: {props.xResults.Results.expiryD}</Description>
        </Grid>

        {/* Option amount */}
        <Grid item xs={6} sm={3} md={3} lg={12}>
          <Description>Qty: {props.xResults.Results.amountD}</Description>
        </Grid>

        {/* Gas fee */}
        <Grid item xs={6} sm={3} md={3} lg={12}>
          <Description>Gas Fee: {props.xResults.Results.gasD}</Description>
        </Grid>

        {/* Days left until expiry */}
        <Grid item xs={6} sm={3} md={3} lg={12}>
          <Description>
            ({props.xResults.Results.countdownD} days left for expiry)
          </Description>
          <br />
          <br />
        </Grid>

        {/* Premium  */}
        <Grid item xs={6} sm={3} md={3} lg={12}>
          <HederTitle>Total Cost: {props.xResults.Results.premiumD}</HederTitle>
        </Grid>

        {/* Purchase Button */}

        <Grid container direction="row" spacing={1}>
          <Grid item md={2}></Grid>
          <Grid item md={10}>
            <QueryButton
              disableRipple={true}
              disableFocusRipple={true}
              onClick={handleModal2}
            >
              Purchase
            </QueryButton>
          </Grid>
        </Grid>

        <Modal
          style={{ zIndex: 8000 }}
          open={pOpen}
          disableScrollLock={false}
          BackdropComponent={Backdrop2}
          onClose={handleClose2}
        >
          <Grid item sx={style1}>
            <PurchaseModal
              Submit={props.xResults}
              pOpen={pOpen}
              handlePurchaseModal={handleClose2}
            />
          </Grid>
        </Modal>
      </Grid>
    </Container>
  );
};

// Styling //

const CardContainer2 = styled.div`
  display: flex;
  background: green;
  width: 300px;
  height: 600px;
  border-radius: 20px;
  margin-top: 15px;
  margin-left: 8px;
  border: 4px 4px solid rgba(${colors.white});
  box-shadow: 14px 8px 0px 3e4251;
  @media (max-width: 1200px) {
  }
`;
const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(${colors.cardBg}) !important;
  border: double;
  border-color: "white";
  flex-direction: column;
`;

const CancelIconBtn = styled(Button)`
    size: medium;
    justify: 'center';
    margin-left:'210px' !important;
    margin-bottom:'150px' !important;
    background-image: close.png !important';
    color: 'Red' !important;
    &:hover {
    cursor: pointer;
    }
  
}`;
const HeaderTitle = styled.h1`
  font-weight: 900;
  color: white;
  padding-right: 1%;
  padding-top: 0%;
  padding-left: 0%;
  padding-bottom: 2%;
  font-size: 22px;
  margin-left: 1em;
  @media (max-width: 1200px) {
    margin-left: 0.6em;
  }
`;
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(${colors.border});
  padding: 1.5em;
  margin-top: 5%;
  @media (max-width: 950px) {
    width: 1000px;
    height: 300px;
    flex-direction: column;
  }
`;

const CompareButton2 = styled(ToggleButton)`
  height: 70% !important;
  width: 100% !important;
  border-radius: 5px !important;
  margin-top: 5px !important;
  margin-left: 60% !important;
  padding-left: 2px;
  padding-right: 2px;
  font-size: 100%;
  box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
  background-color: #504798 !important;
  color: #ffffff !important;
  &:hover {
    cursor: pointer;
    color: #add8e6 !important;
    transform: scale(1.1);
    border: double;
    text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue;
  }
  &.Mui-selected {
    color: white !important;
    font-size: 110%;
    border: transparent !important;
    background: transparent !important;
    margin-left: 30% !important;
    box-shadow: 0px 0px 0px transparent !important;
  }
`;

const Line = styled.div`
  width: 87%;
  height: 5px;
  justify-content: center;
`;

const DescriptionTxt2 = styled.p`
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin-left: 1em;
  @media (max-width: 1200px) {
    font-size: 27px;
    margin-left: 0.5em;
  }
`;
const DescriptionTxt3 = styled.p`
  color: "rgb(${colors.grey}) !important";
  font-size: 20px;
  padding-left: 7%;
  margin-top: 1%;
  margin-bottom: 1%;
  font-weight: 500;
`;

const Backdrop = styled("div")`
  z-index: 75;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
`;
const Backdrop2 = styled("div")`
  z-index: 500;
  position: fixed;
  background: rgba(56, 56, 56, 0.8);
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
`;

// Takes props from interface and fills the fields on the option cards with data returned from API //
// *Also declares Modal for Details card on click of select button //
const StatCard = (props: { xResults: Props1 }) => {
  const textS = ["SELECT", "SELECTED"];
  const [sText, setSText] = React.useState(textS[0]);
  const [disabled, setDisabled] = React.useState(false);
  const [tColor, setTColor] = React.useState(colors.lightGrey);
  const [bgColor, setBackground] = useState(colors.cardBg);
  const [bgColor2, setBackground2] = useState(colors.cardBg);
  const [bgColor3, setBackground3] = useState(colors.cardBg);
  const [selected, setSelected] = useState(false);
  const [sOpen, setsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [isHide, setIsHide] = React.useState(true);
  const handleSelected = () => {
    setSelected(!selected);
    setsOpen(!sOpen);
    setOpen(!open);
    setDisabled(!disabled);
    setToggled(!toggled);
    setIsHide(!isHide);
    disabled == false ? setSText(textS[1]) : setSText(textS[0]);
    // tColor == colors.black ? setTColor(colors.white) : setTColor(colors.black);
    bgColor == colors.cardBg
      ? setBackground(colors.cardBg)
      : setBackground(colors.cardBg);
    //   bgColor2 == colors.primary
    //     ? setBackground2(colors.white)
    //     : setBackground2(colors.primary);
    //   bgColor3 ==
    //   "linear-gradient(to right, rgb(98, 99, 117), rgb(174, 175, 184))"
    //     ? setBackground3(
    //         "linear-gradient(to right, rgb(89, 92, 151), rgb(88, 20, 107))"
    //       )
    //     : setBackground3(
    //         "linear-gradient(to right, rgb(98, 99, 117), rgb(174, 175, 184))"
    //       );
  };
  const containerRef = React.useRef(null);
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    handleSelected();
  };

  return (
    <Grid container>
      <Box sx={{ backgroundColor: grey, border: 1, borderColor: white }}>
        <CardContainer>
          <Grid container direction="row">
            {/* Platform Name */}
            <Grid
              item
              md={12}
              style={{
                background: bgColor3,
              }}
            >
              <DescriptionTxt2>
                Platform: {props.xResults.Results.platformD}
              </DescriptionTxt2>
              <Line style={{ background: colors.primary }}></Line>
            </Grid>

            {/* Premium, Amount, Strike Price, and Expiry */}
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ color: tColor, background: bgColor }}
            >
              <DescriptionTxt3>
                Premium: {props.xResults.Results.premiumD}
              </DescriptionTxt3>
            </Grid>
            <Grid item md={12} style={{ color: tColor, background: bgColor }}>
              <DescriptionTxt3>
                Quantity: {props.xResults.Results.amountD}
              </DescriptionTxt3>
            </Grid>
            <Grid item md={12} style={{ color: tColor, background: bgColor }}>
              <DescriptionTxt3>
                Strike: {props.xResults.Results.strikeD}
              </DescriptionTxt3>
            </Grid>
            <Grid item md={12} style={{ color: tColor, background: bgColor }}>
              <DescriptionTxt3>
                Expiry: {props.xResults.Results.expiryD}
              </DescriptionTxt3>
            </Grid>
            <Grid
              container
              direction="row"
              style={{
                height: "80px",
                background: bgColor2,
              }}
            >
              <Grid item sm={12} md={12} lg={12}>
                <FormControl
                  style={{ marginLeft: "15%", width: "45%", marginTop: "2%" }}
                >
                  <CompareButton2
                    value={sOpen}
                    selected={selected}
                    onClick={handleSelected}
                  >
                    {" "}
                    {sText}{" "}
                  </CompareButton2>
                </FormControl>

                <Box ref={containerRef}>
                  <Fade in={toggled}>
                    <Box
                      sx={style}
                      style={{ zIndex: 1500, position: "absolute" }} // top: {styleX.topX} }}
                      hidden={isHide}
                    >
                      <Details
                        xResults={props.xResults}
                        sOpen={open}
                        handleSelected={handleSelected}
                      />
                    </Box>
                  </Fade>{" "}
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Modal
            open={open}
            disableScrollLock={true}
            BackdropComponent={Backdrop}
            onClose={handleClose}
          >
            <div></div>
          </Modal>
        </CardContainer>
      </Box>
    </Grid>
  );
};

export default StatCard;
