import React, { useState, useEffect } from "react";
import PageHeader from '../components/Home/PageHeader'
import SubgraphContainer from '../components/Home/SubgraphContainer'

import ScreenWrapper from '../components/Home/ScreenWrapper'


function App() {

  const [isHide, setIsHide] = useState(false);
  const _onHideMenu = (bool: boolean) => {
    setIsHide(bool)
  }
  return (
    <ScreenWrapper>
      <PageHeader
        isHide={isHide}
        setIsHide={(e) => _onHideMenu(e)}
      />
      <SubgraphContainer />
    </ScreenWrapper>
  );
}

export default App;
