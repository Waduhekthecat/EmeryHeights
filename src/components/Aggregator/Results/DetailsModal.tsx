import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { colors } from "../../../styles";
import styledCom from "styled-components/";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ToggleButton from "@mui/material/ToggleButton";
import { white } from "material-ui/styles/colors";
import PurchaseModal from "./PurchaseModal";
import IconButton from "@mui/material/IconButton";
import { Close } from "@styled-icons/evaicons-solid";

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
  zIndex: "1",
  borderRadius: "20px",
  bgcolor: "#3E4251",
  color: white,
  border: "6px solid #000",
  overflow: "scrollable",
};

const style = {
  position: "absolute" as "absolute",
  top: "14%",
  left: "1.8%",
  width: "22%",
  height: "600px",
  zIndex: "1",
  borderRadius: "0px",
  
};

// Uses interface to return container with details on selected card - allows purchase //
const Details = (props: { xResults: Props1, sOpen: boolean}) => {
  const [open, setOpen] = React.useState(props.sOpen);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  

  return (
          <Grid container direction="column">
            <Container>
              <IconButton
                onClick={handleClose}
                sx={{
                  cursor: "pointer",
                  marginTop: "5px",
                  marginLeft: "93%",
                  width: "20px",
                }}
              ></IconButton>

              {/* Platform Name */}
              <Grid item xs={6} sm={3} md={3} lg={12}>
                <HederTitle>
                  {" "}
                  Platform: {props.xResults.Results.platformD}
                </HederTitle>
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
                <Description>
                  Expires: {props.xResults.Results.expiryD}
                </Description>
              </Grid>

              {/* Option amount */}
              <Grid item xs={6} sm={3} md={3} lg={12}>
                <Description>Qty: {props.xResults.Results.amountD}</Description>
              </Grid>

              {/* Gas fee */}
              <Grid item xs={6} sm={3} md={3} lg={12}>
                <Description>
                  Gas Fee: {props.xResults.Results.gasD}
                </Description>
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
                <HederTitle>
                  Total Cost: {props.xResults.Results.premiumD}
                </HederTitle>
              </Grid>

              {/* Purchase Button */}
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <QueryButton onClick={handleOpen2}>Purchase</QueryButton>
                <Modal
                  open={open2}
                  onClose={handleClose2}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style1}>
                    <PurchaseModal submit={props.xResults} />
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
const CompareButton2 = styled(ToggleButton)`
  height: 50% !important;
  width: 90% !important;
  border-radius: 7px !important;
  margin-bottom: 20px !important;
  margin-right: "3%" !important;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 3px 4px 0px rgb(10, 13, 27);
  background-color: #504798 !important;
  color: rgb(256, 256, 256) !important;
  &:hover {
    cursor: pointer;
  }
`;
const DescriptionTxt = styled.p`
  color: black;
  font-size: 18px;
  margin-left: 1em;
`;
const DescriptionTxt2 = styled.p`
  color: black;
  font-size: 32px;
  font-weight: bold;
  margin-left: 1em;
  @media (max-width: 1200px) {
    font-size: 27px;
    margin-left: 0.5em;
  }
`;
const HeadertArea = styled.div`
  width:70%;
  display: flex;
  margin-left:1em;        </Grid>
  margin-right:0em;
  background-color: #2D93A6;
  border-radius: 45px;
  border: 2px solid rgba(${colors.border});
  box-shadow: 3px 4px 0px rgb(10, 13, 27);
  @media (max-width: 1200px) {
    padding-left:0;
    width:65%;
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

// Takes props from interface and fills the fields on the option cards with data returned from API //
// *Also declares Modal for Details card on click of select button //
const StatCard = (props: { xResults: Props1 }) => {
  const [selected, setSelected] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSelected = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setSelected(!selected);
    setOpen(true);
  };

  return (
    <Grid container>
      <CardContainer>
        <Grid container direction="column">
          {/* Platform Name */}
          <Grid item xs={12} sm={12} md={6} lg={1}>
            <DescriptionTxt2>
              Platform: {props.xResults.Results.platformD}
            </DescriptionTxt2>
          </Grid>

          {/* Premium */}
          <Grid item xs={12} sm={12} md={2} lg={1}>
            <HeadertArea>
              <HeaderTitle>
                Premium: {props.xResults.Results.premiumD}
              </HeaderTitle>
            </HeadertArea>
          </Grid>

          {/* Amount, Strike Price, and Expiry */}
          <Grid item>
            <DescriptionTxt>
              Quantity: {props.xResults.Results.amountD}
              <br />
              Strike: {props.xResults.Results.strikeD}
              <br />
              Expiry: {props.xResults.Results.expiryD}
            </DescriptionTxt>
          </Grid>
        </Grid>

        <Grid container direction="row">
          {/* Select Button */}
          <Grid item xs={5} sm={5} md={5} lg={5}></Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <CompareButton2
              value="selected"
              selected={selected}
              onClick={handleSelected}
            >
              {" "}
              <p style={{ fontSize: 17, fontWeight: 900 }}>SELECT</p>
            </CompareButton2>
          </Grid>
        </Grid>
      </CardContainer>
      {/* Details Modal declaration */}
      <Grid item xs={3} sm={3} md={3} lg={3}>
      <Modal
        hideBackdrop={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Grid container sx={style}>
        <Details xResults={props.xResults} sOpen={open}/>
        </Grid>
      </Modal>
      </Grid>
    </Grid>
  );
};

export default StatCard;
