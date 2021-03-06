import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { IAssetData, IBoxProfile } from "../helpers/types";
import PageHeader from "../components/Home/PageHeader";
import ResultsContent from "../components/Aggregator/Results/ResultsContent";
import ScreenWrapper from "../components/Home/ScreenWrapper";
import Container from "@material-ui/core/Container";
import chain from "./assets/images/chain.png";
import cubic from "./assets/images/cubic.png";
import dot from "./assets/images/dot.png";

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
interface IAppState {
  fetching: boolean;
  address: string;
  web3: any;
  provider: any;
  connected: boolean;
  chainId: number;
  networkId: number;
  assets: IAssetData[];
  showModal: boolean;
  pendingRequest: boolean;
  result: any | null;
  // my state
  isHide: boolean;
}

const INITIAL_STATE: IAppState = {
  fetching: false,
  address: "",
  web3: null,
  provider: null,
  connected: false,
  chainId: 1,
  networkId: 1,
  assets: [],
  showModal: false,
  pendingRequest: false,
  result: null,
  isHide: false,
};

function App(xResults: Props1) {
  const [showModal, setShowModal] = useState(false);
  const [switchRouter, setSwitchRouter] = useState(false);
  const [switchAggregator, setSwitchAggregator] = useState(false);
  const [switchSubgraph, setSwitchSubgraph] = useState(false);
  const [isHide, setIsHide] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const onMenuClick = (bool: boolean) => {
    setIsHide(bool);
  };

  const switchContent = (num: number) => {
    console.log("switchContent>>>>>", num);
    switch (num) {
      case 1:
        setSwitchRouter(true);
        setSwitchAggregator(false);
        setSwitchSubgraph(false);
        break;
      case 2:
        setSwitchRouter(false);
        setSwitchAggregator(true);
        setSwitchSubgraph(false);
        break;
      case 3:
        setSwitchRouter(false);
        setSwitchAggregator(false);
        setSwitchSubgraph(true);
        break;
      default:
        break;
    }
  };

  return (
    <ScreenWrapper>
      <PageHeader isHide={isHide} setIsHide={(e) => onMenuClick(e)} />
      <ResultsContent Results={xResults.Results} />
    </ScreenWrapper>
  );
}

export default App;
