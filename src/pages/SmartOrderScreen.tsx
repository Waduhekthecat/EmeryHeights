import { useState } from "react";
import PageHeader from '../components/Home/PageHeader'
import SmartOrderContainer from '../components/Home/SmartOrderContainer'
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
      <SmartOrderContainer />
    </ScreenWrapper>
  );
}

export default App;
