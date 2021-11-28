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
import { colors } from "../../../styles";
import { ModalUnstyled } from "@mui/core";
import { FormControl, Icon } from "@material-ui/core";
import { flexbox } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@mui/material/Switch";
import Slide from "@mui/material/Slide";
import { Fade } from "@material-ui/core";

const HederTitle = styled.h1`
  color: rgb(256, 256, 256) !important;
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
  color: white;
  font-size: 22px;
  margin: 0.3em;
  font-weigh: 200;
`;
const QueryButton = styled(Button)`
  position: relative;
  border-radius: 5px;
  width: 80%;
  color: #ffffff !important;
  background-color: #504798 !important;
  box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
  height: 56px;
  &:hover {
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
  };
}

const style1 = {
  position: "absolute" as "absolute",
  top: "20%",
  left: "22%",
  width: "900px",
  height: "350px",
  zIndex: "1400",
  borderRadius: "15px",
  color: white,
  border: "4px solid #000",
  overflow: "scrollable",
  bgcolor: colors.main,
};

const style = {
  position: "absolute" as "absolute",
  top: "37%",
  left: "1.8%",
  width: "22%",
  height: "37%",
  zIndex: "1300",
  borderRadius: "0px",
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
  display: flex;
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 17px;
  flex-direction: column;
  border: 6px 6px solid "rgb(212, 212, 212)";
  @media (max-width: 1500px) {
    width: "400px" !important;
    height: "400px" !important;
  }
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
  background-color: rgb(67, 159, 174);
  border-radius: 15px;
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

// SelectedDiv = styled(div)``;

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
    text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue;
  }
  &.Mui-selected {
    color: black !important;
    font-size: 120%;
    border: transparent !important;
    background: transparent !important;
    margin-left: 30% !important;
    box-shadow: 0px 0px 0px transparent !important;
  }
`;
const DescriptionTxt = styled.p`
  color: white;
  font-size: 26px;
  margin-left: 1em;
`;
const DescriptionTxt2 = styled.p`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-left: 1em;
  @media (max-width: 1200px) {
    font-size: 27px;
    margin-left: 0.5em;
  }
`;
const DescriptionTxt3 = styled.p`
  font-size: 20px;
  padding-left: 7%;
  margin-top: 1%;
  margin-bottom: 1%;
  font-weight: 500;
`;
const DescriptionTxt4 = styled.p`
  font-size: 21px;
  background: rgba(${colors.lightGrey});
`;

//  background: rgb(68, 140, 175);
//    background: linear-gradient(
//      20deg,
//      rgba(68, 140, 175, 1) 0%,
//      rgba(0, 153, 215, 0.9710259103641457) 40%,
//      rgba(240, 240, 200, 1) 80%
//    );

const HeadertArea = styled.div`
  width: 70%;
  display: flex;
  margin-left: 1em;
  margin-right: 0em;
  background-color: ${colors.primary};
  border-radius: 45px;
  border: 2px solid rgba(${colors.border});
  box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
  @media (max-width: 1200px) {
    padding-left: 0;
    width: 65%;
  }
`;
const ButtonArea = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  justify-content: flex-end;
  margin-top: 1em;
  margin-bottom: 0.5em;
  margin-left: 1em;
  margin-right: 0.5em;
  @media (max-width: 400px) {
  }
  @media (max-height: 500px) {
  }
`;

// -webkit-tap-highlight-color: ;

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
  const [tColor, setTColor] = React.useState(colors.black);
  const [bgColor, setBackground] = useState(colors.white);
  const [bgColor2, setBackground2] = useState(colors.primary);
  const [bgColor3, setBackground3] = useState(
    "linear-gradient(to right, rgb(98, 99, 117), rgb(174, 175, 184))"
  );
  const [bgColor4, setBackground4] = useState(colors.secondary);
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
    tColor == colors.black ? setTColor(colors.white) : setTColor(colors.black);
    bgColor == colors.white
      ? setBackground(colors.primary)
      : setBackground(colors.white);
    bgColor2 == colors.primary
      ? setBackground2(colors.white)
      : setBackground2(colors.primary);
    bgColor3 ==
    "linear-gradient(to right, rgb(98, 99, 117), rgb(174, 175, 184))"
      ? setBackground3(
          "linear-gradient(to right, rgb(89, 92, 151), rgb(88, 20, 107))"
        )
      : setBackground3(
          "linear-gradient(to right, rgb(98, 99, 117), rgb(174, 175, 184))"
        );
  };
  const containerRef = React.useRef(null);
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    handleSelected();
  };

  return (
    <Grid container style={{ paddingBottom: "5px" }}>
      <CardContainer
        style={{ boxShadow: "10px 5px 2px 2px rgba(117 , 121, 129, 0.6)" }}
      >
        <Grid container direction="row">
          {/* Platform Name */}
          <Grid
            item
            md={12}
            style={{
              background: bgColor3,
              borderTopLeftRadius: "18px",
              borderTopRightRadius: "18px",
            }}
          >
            <DescriptionTxt2>
              Platform: {props.xResults.Results.platformD}
            </DescriptionTxt2>
          </Grid>
          {/* Premium, Amount, Strike Price, and Expiry */}
          <Grid item md={12} style={{ color: tColor, background: bgColor }}>
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
              borderBottomLeftRadius: "18px",
              borderBottomRightRadius: "18px",
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
                    style={{ zIndex: 1500, position: "absolute" }}
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
    </Grid>
  );
};

export default StatCard;
