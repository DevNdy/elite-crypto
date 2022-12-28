import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import logo from "../../assets/images/eliteLogo.png";
import NavMenu from "./NavMenu";
import NavSocialNetworks from "./NavSocialNetworks";

const NavBar = () => {
  return (
    <NavBarStyled>
      <img src={logo} alt="logo" />
      <NavMenu />
      <NavSocialNetworks />
    </NavBarStyled>
  );
};

const NavBarStyled = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  padding-left: 20px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    height: 40px;
    margin-top: 10px;
  }
`;

export default NavBar;
