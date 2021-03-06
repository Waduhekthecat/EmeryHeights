import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { IAssetData, IBoxProfile } from "../helpers/types";
import { openBox, getProfile } from "../helpers/box";
import {
  ETH_SEND_TRANSACTION,
  ETH_SIGN,
  PERSONAL_SIGN,
  BOX_GET_PROFILE,
  DAI_BALANCE_OF,
  DAI_TRANSFER,
} from "../constants";
import { callBalanceOf, callTransfer } from "../helpers/web3";

import PreLoader from "../components/Home/PreLoader";
import PageHeader from "../components/Home/PageHeader";
import ItemList from "../components/Home/ItemList";
import ImageContainer from "../components/Home/ImageContainer";
import Footer from "../components/Home/Footer";
import ScreenWrapper from "../components/Home/ScreenWrapper";
import Container from "@material-ui/core/Container";
import chain from "../assets/components/images/chain.png";
import cubic from "../assets/components/images/cubic.png";
import dot from "../assets/components/images/dot.png";

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
  isHide: true,
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [switchRouter, setSwitchRouter] = useState(false);
  const [switchAggregator, setSwitchAggregator] = useState(false);
  const [switchSubgraph, setSwitchSubgraph] = useState(false);
  const [isHide, setIsHide] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const _onHideMenu = (bool: boolean) => {
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
      <Container maxWidth="lg">
        {/* <PreLoader /> */}
        {/* <PageHeader isHide={isHide} setIsHide={(e) => _onHideMenu(e)} />
        {!switchRouter && !switchAggregator && !switchSubgraph && (
          <ItemList switchContent={switchContent} />
        )}
        {switchAggregator && <ItemList />} */}

        <ItemList />

        {/* <ImageContainer url={chain} />
        <ImageContainer url={cubic} />
        <ImageContainer url={dot} /> */}
      </Container>
    </ScreenWrapper>
  );
}

export default App;
