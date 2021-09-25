import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { IAssetData, IBoxProfile } from "../helpers/types";

import BuccaneerHeader from '../components/Home/BuccaneerHeader'
import AggregatorContainer from '../components/Home/AggregatorContainer'
import AdvancedContent from '../components/Home/AdvancedContent'
import ImageContainer from '../components/Home/ImageContainer'
import Footer from '../components/Home/Footer'
import ScreenWrapper from '../components/Home/ScreenWrapper'
import Container from '@material-ui/core/Container';
import chain from './assets/images/chain.png';
import cubic from './assets/images/cubic.png';
import dot from './assets/images/dot.png';

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
  isHide: true
};

function App() {

  const [showModal, setShowModal] = useState(false);
  const [switchRouter, setSwitchRouter] = useState(false);
  const [switchAggregator, setSwitchAggregator] = useState(false);
  const [switchSubgraph, setSwitchSubgraph] = useState(false);
  const [isHide, setIsHide] = useState(false);

  const toggleModal = () =>
    setShowModal(!showModal);

  const _onHideMenu = (bool: boolean) => {
    setIsHide(bool)
  }

  const switchContent = (num: number) => {
    console.log("switchContent>>>>>", num)
    switch (num) {
      case 1:
        setSwitchRouter(true)
        setSwitchAggregator(false)
        setSwitchSubgraph(false)
        break;
      case 2:
        setSwitchRouter(false)
        setSwitchAggregator(true)
        setSwitchSubgraph(false)
        break;
      case 3:
        setSwitchRouter(false)
        setSwitchAggregator(false)
        setSwitchSubgraph(true)
        break;
      default:
        break;
    }
  }

  return (
    <ScreenWrapper>
      <BuccaneerHeader
        isHide={isHide}
        setIsHide={(e) => _onHideMenu(e)}
      />
      <AdvancedContent/>  
    </ScreenWrapper>
  );
}

export default App;
