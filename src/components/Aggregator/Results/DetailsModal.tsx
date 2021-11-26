import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import styledCom from "styled-components/";
import ToggleButton from "@mui/material/ToggleButton";
import { black, white } from "material-ui/styles/colors";
import PurchaseModal from "./PurchaseModal";
import IconButton from "@mui/material/IconButton";
import { Close } from "@styled-icons/evaicons-solid";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, useTheme, makeStyles } from "@mui/styles";
import { render } from "blockies-ts";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { colors } from "../../../styles";
import { ModalUnstyled } from "@mui/core";

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
const QueryButton = styledCom.a`

    display: flex;
    align-self: center;
    align-items: center;
    justify-content:center;
    border-radius: 5px;
    width: 90%;
    color:white;
    font-size:20px;
    font-weight:600;
    box-shadow: 3px 4px 0px rgb(10, 13, 27);
    height: 56px;
    background-color:#504798;
    &:hover {
      cursor: pointer;
      background-color: 3px solid rgb(${colors.primary});
      text-shadow: 3px 1px 0px white, 0 2 1em white, 0 0 0.2em darkblue
  }
`;
const XClose = styled(Close)`
  color: "black";
  width: "15px" !important;
  height: "15px" !important;
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
  borderRadius: "20px",
  color: white,
  border: "6px solid #000",
  overflow: "scrollable",
  bgcolor: colors.main,
};

const style = {
  position: "absolute" as "absolute",
  top: "14%",
  left: "1.8%",
  width: "22%",
  height: "600px",
  zIndex: "1300",
  borderRadius: "0px",
};

// Uses interface to return container with details on selected card - allows purchase //
const Details = (props: { xResults: Props1; sOpen: Boolean }) => {
  const [open, setOpen] = React.useState(props.sOpen);
  const [pOpen, setpOpen] = React.useState(false);
 
  const handleClose = () => setOpen(false);
  const handleModal2 = () => {
    setpOpen(true);
  };
  const handleClose2 = () => setpOpen(false);
  
  return (
    <Grid container direction="column">
      <Container>
        {/* Platform Name */}
        <Grid item xs={6} sm={3} md={3} lg={12}>
          <HederTitle> Platform: {props.xResults.Results.platformD}</HederTitle>
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
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <QueryButton onClick={handleModal2}>Purchase</QueryButton>
          <Modal
            open={pOpen}
            disableScrollLock={false}
            hideBackdrop={false}
            BackdropComponent={Backdrop}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style1}>
              <PurchaseModal Submit={props.xResults} pOpen={pOpen} handlePurchaseModal={handleClose2}/>
            </Box>
          </Modal>
        </Grid>
        <Grid item></Grid>
      </Container>
    </Grid>
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
  box-shadow: 40px 40px 0px "rgb(212, 212, 212)" !important;
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
  background-color: rgb(67, 159, 174);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(${colors.border});
  padding: 1.5em;
  margin-top: 5%;
  </Grid > @media (max-width: 950px) {
    width: 1000px;
    height: 300px;
    flex-direction: row;
  }
`;

// SelectedDiv = styled(div)``;

const CompareButton2 = styled(ToggleButton)`
  height: 50% !important;
  width: 90% !important;
  border-radius: 8px !important;

  font-size: 20px;
  font-weight: 600;
  box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
  background-color: #504798 !important;
  color: rgb(256, 256, 256) !important;
  &:hover {
    cursor: pointer;
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
  color: black;
  font-size: 22px;
  padding-left: 5%;
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
  background-color: ;
`;
const Backdrop2 = styled("div")`
  z-index: 100;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: ;
`;
// Takes props from interface and fills the fields on the option cards with data returned from API //
// *Also declares Modal for Details card on click of select button //
const StatCard = (props: { xResults: Props1 }) => {
  const [visible, setVisible] = React.useState(false);
  const [bgColor, setBackground] = useState(colors.white);
  const [bgColor2, setBackground2] = useState(colors.primary);
  const [bgColor3, setBackground3] = useState(
    "linear-gradient(to right, rgb(98, 99, 117), rgb(174, 175, 184))"
  );
  const [selected, setSelected] = useState(false);
  const [sOpen, setsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const key = (String: any) => "";
  const handleSelected = () => {
    setSelected(!selected);
    setsOpen(!sOpen);
    setOpen(!open);
    selected == true ? setVisible(true) : setVisible(false);
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
    visible == false ? key("none") : key("visible");
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    handleSelected();
  };
  return (
    <Grid container>
      <CardContainer style={{ background: bgColor }}>
        <Grid container direction="column">
          {/* Platform Name */}
          <Grid
            item
            style={{
              background: bgColor3,
              borderTopLeftRadius: "18px",
              borderTopRightRadius: "18px",
            }}
            xs={12}
            sm={12}
            md={6}
            lg={1}
          >
            <DescriptionTxt2>
              Platform: {props.xResults.Results.platformD}
            </DescriptionTxt2>
          </Grid>
          {/* Premium, Amount, Strike Price, and Expiry */}
          <Grid item>
            <DescriptionTxt3>
              Premium: {props.xResults.Results.premiumD}
              <br />
              Quantity: {props.xResults.Results.amountD}
              <br />
              Strike: {props.xResults.Results.strikeD}
              <br />
              Expiry: {props.xResults.Results.expiryD}
            </DescriptionTxt3>
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ boxShadow: "10, 10, 10, 5" }}>
          {/* Select Button */}
          <ButtonGroup
            style={{
              background: bgColor2,
              borderBottomLeftRadius: "18px",
              borderBottomRightRadius: "18px",
            }}
          >
            <Grid item xs={5} sm={5} md={5} lg={5}>
              <div style={{ display: "none" }}>Selected</div>
            </Grid>
            <Grid
              item
              sx={{ display: { lg: "key", md: "key" } }}
              xs={6}
              sm={6}
              md={6}
              lg={6}
            >
              <CompareButton2
                sx={{ display: { lg: "key", md: "key" } }}
                value={sOpen}
                selected={selected}
                onClick={handleSelected}
              >
                <p style={{ fontSize: 17, fontWeight: 900 }}>SELECT</p>
              </CompareButton2>
            </Grid>
          </ButtonGroup>
        </Grid>
      </CardContainer>
      <Grid item xs={3} sm={3} md={3} lg={3}>
        <Modal
          open={open}
          disableScrollLock={true}
          hideBackdrop={false}
          BackdropComponent={Backdrop}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid sx={style}>
            <Details xResults={props.xResults} sOpen={open} />
          </Grid>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default StatCard;
