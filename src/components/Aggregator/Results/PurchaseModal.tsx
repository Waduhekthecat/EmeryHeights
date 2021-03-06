import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { colors } from "../../../styles";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "material-ui/styles/typography";
import IconButton from "@mui/material/IconButton";
import { CloseOutline } from "@styled-icons/zondicons/CloseOutline";
import { Hidden } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

//rgb(75,169,156) teal rgb(108,81,152) purp rgb(73,73,74) gray//

const useStyles = makeStyles((theme) => ({
  HeaderArea: {
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    backgroundColor: "rgb(67, 159, 174)",
    boxShadow: "2px 4px 2px rgb(10, 13, 27)",
  },
  AmountArea: {
    color: "white",
    height: "70px",
    fontSize: "60px",
    Weight: 900,
    marginLeft: "10%",
    marginTop: "10%",
  },
  PlatformArea: {
    color: "white",
    textSize: "40px",
    marginLeft: "11.5%",
  },
  IconBtn: {
    color: "rgb(75,169,156)",
    cursor: "pointer",
    marginTop: "2%",
    width: "30px",
  },
}));

const Title = styled.p`
margin: 0 'auto';
color: white;
font-size: 30px;
font-weight: 600;
direction:"column"
display:"flex"
justify:"center"

`;
const Title2 = styled.p`
  margin: 0 "auto";
  color: white;
  font-size: 50px;
  font-weight: 900;
  direction: "column";
  display: "flex";
  justify: "center";
  margin-top: 75px;
`;
const Title3 = styled.p`
margin: 0 'auto';
color: white;
font-size: 22px;
font-weight: 600;
direction:"column"
display:"flex"
justify:"center"

`;

const Data = styled.p`
margin: 0 'auto';
color: white;
font-size: 22px;
font-weight: 600;
direction:"column"
display:"flex";
justify:"center";
margin-top: 50px !important;
`;
const Data2 = styled.p`
margin: 0 'auto';
color: white;
font-size: 22px;
font-weight: 600;
direction:"column"
display:"flex";
justify:"center";
margin-top: 50px !important;
`;
const Data3 = styled.p`
margin: 0 'auto';
color: white;
font-size: 22px;
font-weight: 600;
direction:"column"
display:"flex";
justify:"center";
margin-top: 40px !important;
`;
const Data4 = styled.p`
margin: 0 'auto';
color: white;
font-size: 22px;
font-weight: 600;
direction:"column"
display:"flex";
justify:"center";
margin-top: 40px !important;
`;

const XClose = styled(CloseOutline)`
color: 'black';
size="small";
`;

const CancelButton = styled(Button)`
    height: 65px; 
    width: 150px;
    size: large;
    justify: 'center';
    margin-left:210px !important;
    margin-bottom:150px !important;
    font-size: '30px' !important;
    font-weight:'900' !important;
    background-color: none !important;
    color: Red !important;
    &:hover {
    cursor: pointer;
    transform: scale(1.3);
    }
  
}`;

const ConfirmButton = styled(Button)`
  height: 150px !important;
  width: 215px !important;
  box-shadow: 8px 8px 0px 3e4251 !important;
  border-radius: 5px !important;
  margin-bottom: 150px !important;
  margin-left: 130px !important;
  font-size: 60px;
  font-weight: 600;
  background-color: #504798 !important;
  color: rgb(256, 256, 256) !important;
  box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
  &:hover {
    cursor: pointer;
    color: #add8e6 !important;
    transform: scale(1.1);
    text-shadow: 1px 1px 2px white, 0 0 1em white;
  }
`;

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

const PurchaseModal = (props: {
  Submit: Props1;
  pOpen: Boolean;
  handlePurchaseModal: () => void;
}) => {
  const classes = useStyles();

  const handleSubmit = (submitPurchase: any) => {
    alert(JSON.stringify([submitPurchase]));
  };

  const submitPurchase = [
    props.Submit.Results.platformD,
    props.Submit.Results.optionD,
    props.Submit.Results.underlyingD,
    props.Submit.Results.strikeD,
    props.Submit.Results.expiryD,
    props.Submit.Results.amountD,
  ];

  return (
    <div>
      <Grid
        container
        className={classes.HeaderArea}
        xs={12}
        sm={12}
        md={12}
        lg="auto"
      >
        <Grid item sm={4} md={4} lg={4} />
        <Grid item sm={7} md={7} lg={7}>
          <Title> Confirm your purchase </Title>
        </Grid>
      </Grid>

      <Grid container direction="row">
        <Grid
          item
          className={classes.AmountArea}
          md={4}
          direction="column"
          sx={{ fontSize: "40px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Title2 className={classes.AmountArea}>
            {props.Submit.Results.platformD}
          </Title2>
        </Grid>
        <Grid
          item
          className={classes.AmountArea}
          md={4}
          direction="column"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Data>Contract Type: {props.Submit.Results.optionD}</Data>
        </Grid>
        <Grid
          item
          className={classes.AmountArea}
          md={4}
          direction="column"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Data2>Strike Price: {props.Submit.Results.strikeD} </Data2>
        </Grid>
      </Grid>

      <Grid container direction="row">
        <Grid
          item
          className={classes.AmountArea}
          md={4}
          direction="column"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Title3 className={classes.AmountArea}>
            {props.Submit.Results.amountD}
          </Title3>
        </Grid>
        <Grid
          item
          className={classes.AmountArea}
          md={4}
          direction="column"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Data3>Order Quanitity: 2</Data3>
        </Grid>
        <Grid
          item
          className={classes.AmountArea}
          md={4}
          direction="column"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Data4>Expiry: {props.Submit.Results.expiryD}</Data4>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={1}>
        <Grid item md={4}></Grid>
        <Grid
          item
          className={classes.AmountArea}
          md={3}
          direction="column"
          display="flex"
          alignItems="center"
          sx={{ marginTop: "14%", marginLeft: "1%" }}
          justifyContent="center"
        >
          <CancelButton onClick={props.handlePurchaseModal}>
            {" "}
            Cancel{" "}
          </CancelButton>
        </Grid>
        <Grid
          item
          className={classes.AmountArea}
          md={4}
          direction="column"
          display="flex"
          alignItems="center"
          sx={{ marginTop: "14%" }}
          justifyContent="center"
        >
          <ConfirmButton
            size="large"
            style={{ minHeight: "50px", marginBottom: "50px" }}
            onClick={() => {
              handleSubmit(submitPurchase);
            }}
          >
            {" "}
            Confirm Purchase
          </ConfirmButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default PurchaseModal;
