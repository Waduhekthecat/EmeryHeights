import * as React from "react";
import * as ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import { globalStyle } from "./styles";
const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

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

// @ts-ignore
declare global {
  // tslint:disable-next-line
  interface Window {
    web3: any;
    ethereum: any;
    Web3Modal: any;
    Box: any;
    box: any;
    space: any;
  }
}

const xResults: Props1 = {
  Results: {
    platformD: "000",
    optionD: "000",
    chartD: "000",
    underlyingD: "000",
    strikeD: "000",
    expiryD: "000",
    amountD: "000",
    gasD: "000",
    countdownD: "000",
    premiumD: "000",
    pColor: "000",
    styleX: "000",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App xResults={xResults} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
