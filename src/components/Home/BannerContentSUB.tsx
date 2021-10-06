import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import styledCom from "styled-components";
import {
  makeStyles,
  createTheme,
} from "@material-ui/core/styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 300,
  bgcolor: "#1f2436",
  border: "0px solid #000",
  borderRadius: 5,
  boxShadow: 24,
};

// Material ui style
const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    height: "70%",
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "15%",
    fontSize: "500rem",
    borderRadius: "20px",
    backgroundColor: "#1f2436",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#6fc3db",
    },
  },
});

// styled-components
const Description = styledCom.p`
    font-size: 50px;
    font-style: bold;
    font-weight: 800;
    color: #05e400;
    line-height: 1.5;
`;

interface Props {}

const BannerContentSUB: React.FC<Props> = () => {

  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Description>Subgraph Coming Soon!</Description>
    </Grid>
  );
};

export default BannerContentSUB;
