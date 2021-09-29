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
  DAI_TRANSFER
} from "../constants";
import { callBalanceOf, callTransfer } from "../helpers/web3";

import PreLoader from '../components/Home/PreLoader'
import BuccaneerHeader from '../components/Home/BuccaneerHeader'
import SubgraphContainer from '../components/Home/SubgraphContainer'
import ItemList from '../components/Home/ItemList'
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


  const [isHide, setIsHide] = useState(false);

  const _onHideMenu = (bool: boolean) => {
    setIsHide(bool)
  }

  return (
    <ScreenWrapper>
      <BuccaneerHeader
        isHide={isHide}
        setIsHide={(e) => _onHideMenu(e)}
      />
      <SubgraphContainer />

    </ScreenWrapper>
  );
}

export default App;
