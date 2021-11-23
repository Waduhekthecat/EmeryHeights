import React from "react";
import styled from "styled-components";
import BackImage from "../../assets/images/roadmap.jpg";

interface Props {}

const AppContainer = styled.div`
  background-image: url(${BackImage});
  background-color: rgb(80, 71, 152);
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  min-height: screen;
`;

const ScreenWrapper: React.FC<Props> = ({ children }) => {
  return <AppContainer>{children}</AppContainer>;
};

export default ScreenWrapper;
