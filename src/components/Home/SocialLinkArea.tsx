import Link from "@mui/material/Link";
import React, { useState } from "react";
import styled from "styled-components";
import menu from "../../assets/images/menu.png";
import telegram from "../../assets/images/telegram.png";
import Portal from "@mui/core/Portal";
import { withStyles } from "@mui/styles";

interface MenuProps {}

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2em;
  @media (max-width: 960px) {
    display: none;
  }
`;

const StyledIcon = styled.img`
  width: 40px;
  height: 20px;
  margin: 0 1em;
  background-size: contain;
  &:hover {
    cursor: pointer;
  }
`;

const SocialLinkArea = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);

    alert(JSON.stringify(open));
  };

  return (
    <SocialContainer>
      {" "}
      <a href="https://www.telegram.com">
        <button className="SocialIcon" style={{ background: "none" }}>
          <StyledIcon src={telegram} />
        </button>
      </a>
      <button
        className="SocialIcon"
        onClick={handleClick}
        style={{ background: "none" }}
      >
        <StyledIcon src={menu} />
      </button>
    </SocialContainer>
  );
};

export default SocialLinkArea;
