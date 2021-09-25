// import React, { useState, useEffect } from "react";
// import Web3 from "web3";
// import { IAssetData, IBoxProfile } from "./helpers/types";
// import { openBox, getProfile } from "./helpers/box";
// import {
//   ETH_SEND_TRANSACTION,
//   ETH_SIGN,
//   PERSONAL_SIGN,
//   BOX_GET_PROFILE,
//   DAI_BALANCE_OF,
//   DAI_TRANSFER
// } from "./constants";
// import { callBalanceOf, callTransfer } from "./helpers/web3";

// import PreLoader from './components/Home/PreLoader'
// import BuccaneerHeader from './components/Home/BuccaneerHeader'
// import AggregatorContainer from './components/Home/AggregatorContainer'
// import ItemList from './components/Home/ItemList'
// import ImageContainer from './components/Home/ImageContainer'
// import Footer from './components/Home/Footer'
// import ScreenWrapper from './components/Home/ScreenWrapper'
// import Container from '@material-ui/core/Container';
// import chain from './assets/images/chain.png';
// import cubic from './assets/images/cubic.png';
// import dot from './assets/images/dot.png';

// interface IAppState {
//   fetching: boolean;
//   address: string;
//   web3: any;
//   provider: any;
//   connected: boolean;
//   chainId: number;
//   networkId: number;
//   assets: IAssetData[];
//   showModal: boolean;
//   pendingRequest: boolean;
//   result: any | null;
//   // my state
//   isHide: boolean;
// }

// const INITIAL_STATE: IAppState = {
//   fetching: false,
//   address: "",
//   web3: null,
//   provider: null,
//   connected: false,
//   chainId: 1,
//   networkId: 1,
//   assets: [],
//   showModal: false,
//   pendingRequest: false,
//   result: null,
//   isHide: true
// };

// function App() {

//   const [showModal, setShowModal] = useState(false);
//   const [switchRouter, setSwitchRouter] = useState(false);
//   const [switchAggregator, setSwitchAggregator] = useState(false);
//   const [switchSubgraph, setSwitchSubgraph] = useState(false);
//   const [isHide, setIsHide] = useState(false);

//   const toggleModal = () =>
//     setShowModal(!showModal);

//   const _onHideMenu = (bool: boolean) => {
//     setIsHide(bool)
//   }

//   const switchContent = (num: number) => {
//     console.log("switchContent>>>>>", num)
//     switch (num) {
//       case 1:
//         setSwitchRouter(true)
//         setSwitchAggregator(false)
//         setSwitchSubgraph(false)
//         break;
//       case 2:
//         setSwitchRouter(false)
//         setSwitchAggregator(true)
//         setSwitchSubgraph(false)
//         break;
//       case 3:
//         setSwitchRouter(false)
//         setSwitchAggregator(false)
//         setSwitchSubgraph(true)
//         break;
//       default:
//         break;
//     }
//   }

//   return (
//     <ScreenWrapper>
//       {/* <Container maxWidth="lg"> */}
//       {/* <PreLoader /> */}
//       <BuccaneerHeader
//         isHide={isHide}
//         setIsHide={(e) => _onHideMenu(e)}
//       />
//       {!switchRouter && !switchAggregator && !switchSubgraph && <ItemList switchContent={switchContent} />}
//       {switchAggregator && <AggregatorContainer />}
//       {/* <ImageContainer url={chain} /> */}
//       {/* <ImageContainer url={cubic} />
//           <ImageContainer url={dot} /> */}
//       {/* </Container> */}
//       {/* <Footer /> */}

//     </ScreenWrapper>
//   );
// }

// export default App;

import { createStyles, makeStyles, Theme } from '@material-ui/core'
import * as React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import SmartOrderScreen from './pages/SmartOrderScreen'
import AdvancedScreen from './pages/AdvancedScreen'


const drawerWidth = 240

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
  }),
)

const App = () => {
  const classes = useStyles()


  //Create state hooks to track objects from various firebase collections

  /**
   * Set up update callbacks after first    render
   */
  React.useEffect(() => {

  }, [])

  return (
    <div className={classes.root}>
      <Router >
        <Switch>
          <Route exact path="/" render={() => <HomeScreen />} />
          <Route exact path="/smartOrder" render={() => <SmartOrderScreen />} />
          <Route exact path="/advanced" render={() => <AdvancedScreen />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
