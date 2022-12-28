import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

type NavWithIconProps = {
  icon: any;
  textNav: string;
  onClick: () => void;
};

const NavWithIcon = ({ icon, textNav, onClick }: NavWithIconProps) => {
  return (
    <NavWithIconStyled onClick={onClick}>
      <span>{icon}</span>
      {textNav}
    </NavWithIconStyled>
  );
};

const NavWithIconStyled = styled.li`
  width: 170px;
  height: 40px;
  list-style: none;
  margin-top: 8px;
  color: ${theme.colors.blackLight};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  span {
    margin: 0 15px 0 10px;
  }

  &:hover {
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.primaryColor};
  }
`;

export default NavWithIcon;
