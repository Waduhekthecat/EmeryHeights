import React, { useState, useEffect } from "react";
import { IAssetData, IBoxProfile } from "../helpers/types";

import PageHeader from '../components/Home/PageHeader'
import AggregatorContainer from '../components/Aggregator/AggregatorContainer'
import ScreenWrapper from '../components/Home/ScreenWrapper'

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
      {/* <Container maxWidth="lg"> */}
      {/* <PreLoader /> */}
      <PageHeader
        isHide={isHide}
        setIsHide={(e) => _onHideMenu(e)}
      />
      {/* {!switchRouter && !switchAggregator && !switchSubgraph && <ItemList switchContent={switchContent} />}
      {switchAggregator && <AggregatorContainer />} */}
      
      <AggregatorContainer />
      {/* <ImageContainer url={chain} /> */}
      {/* <ImageContainer url={cubic} />
          <ImageContainer url={dot} /> */}
      {/* </Container> */}
      {/* <Footer /> */}

    </ScreenWrapper>
  );
}

export default App;
