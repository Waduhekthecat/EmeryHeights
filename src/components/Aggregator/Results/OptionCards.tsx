import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import StatCard from "./DetailsModal";

// Interface for passing props to cards //
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

// Themes //
const useStyles = makeStyles((theme) => ({
  gridCont: {
    paddingTop: "0px !important",
  },
  CardContainer: {
    paddingTop: "0px !important",
  },
}));

// Styling for container to hold option cards
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3e4251;
  border-radius: 5px;
  display: fixed;
  flex-direction: row;
`;

// Takes props from data arrays and creates a grid of cards from all matching options latforms //
const Card: React.FC<Props1> = ({ Results }) => {
  const classes = useStyles();
  const data: Props1[] = [
    {
      Results: {
        platformD: "Hegic",
        optionD: " ",
        chartD: " ",
        underlyingD: "WBTC",
        strikeD: "$60,000",
        amountD: "1.0wbtc",
        expiryD: "11/01/21",
        gasD: " ",
        countdownD: " ",
        premiumD: "$1825",
      },
    },
    {
      Results: {
        platformD: "Premia",
        optionD: " ",
        chartD: " ",
        underlyingD: "WBTC",
        strikeD: "$60,000",
        amountD: "1.0wbtc",
        expiryD: "11/01/21",
        gasD: " ",
        countdownD: " ",
        premiumD: "$2000",
      },
    },
    {
      Results: {
        platformD: "Auctus",
        optionD: " ",
        chartD: " ",
        underlyingD: "WBTC",
        strikeD: "$60,000",
        amountD: "1.0wbtc",
        expiryD: "11/01/21",
        gasD: " ",
        countdownD: " ",
        premiumD: "$2350",
      },
    },
    {
      Results: {
        platformD: "Phoenix",
        optionD: " ",
        chartD: " ",
        underlyingD: "WBTC",
        strikeD: "$60,000",
        amountD: "1.0wbtc",
        expiryD: "11/01/21",
        gasD: " ",
        countdownD: " ",
        premiumD: "$2375",
      },
    },
    {
      Results: {
        platformD: "Opyn",
        optionD: " ",
        chartD: " ",
        underlyingD: "WBTC",
        strikeD: "$60,000",
        amountD: "1.0wbtc",
        expiryD: "11/01/21",
        gasD: " ",
        countdownD: " ",
        premiumD: "$2420",
      },
    },
    {
      Results: {
        platformD: "Heget",
        optionD: " ",
        chartD: " ",
        underlyingD: "WBTC",
        strikeD: "$60,000",
        amountD: "1.0wbtc",
        expiryD: "11/01/21",
        gasD: " ",
        countdownD: " ",
        premiumD: "$2500",
      },
    },
    {
      Results: {
        platformD: "Opium",
        optionD: " ",
        chartD: " ",
        underlyingD: "WBTC",
        strikeD: "$60,000",
        amountD: "1.0wbtc",
        expiryD: "11/01/21",
        gasD: " ",
        countdownD: " ",
        premiumD: "$2750",
      },
    },
    {
      Results: {
        platformD: "Finnexus",
        optionD: " ",
        chartD: " ",
        underlyingD: "WBTC",
        strikeD: "$60,000",
        amountD: "1.0wbtc",
        expiryD: "11/01/21",
        gasD: " ",
        countdownD: " ",
        premiumD: "$2950",
      },
    },
    {
      Results: {
        platformD: "Ribbon",
        optionD: " ",
        chartD: " ",
        underlyingD: "WBTC",
        strikeD: "$60,000",
        amountD: "1.0wbtc",
        expiryD: "11/01/21",
        gasD: " ",
        countdownD: " ",
        premiumD: "$3000",
      },
    },
  ];
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4} className={classes.CardContainer}>
          <StatCard xResults={data[0]} />
        </Grid>

        <Grid item xs={4} md={4} className={classes.CardContainer}>
          <StatCard xResults={data[1]} />
        </Grid>

        <Grid item xs={4} md={4} className={classes.CardContainer}>
          <StatCard xResults={data[2]} />
        </Grid>

        <Grid item xs={4} md={4} className={classes.CardContainer}>
          <StatCard xResults={data[3]} />
        </Grid>

        <Grid item xs={4} md={4} className={classes.CardContainer}>
          <StatCard xResults={data[4]} />
        </Grid>

        <Grid item xs={4} md={4} className={classes.CardContainer}>
          <StatCard xResults={data[5]} />
        </Grid>

        <Grid item xs={4} md={4} className={classes.CardContainer}>
          <StatCard xResults={data[6]} />
        </Grid>

        <Grid item xs={4} md={4} className={classes.CardContainer}>
          <StatCard xResults={data[7]} />
        </Grid>

        <Grid item xs={4} md={4} className={classes.CardContainer}>
          <StatCard xResults={data[8]} />
        </Grid>
      </Grid>
    </>
  );
};

export default Card;
