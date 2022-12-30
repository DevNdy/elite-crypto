import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import NavWithIcon from "../../ui-reusable/NavWithIcon";

const NavMenu = () => {
  const navigate = useNavigate();

  const listMenu = [
    {
      id: 0,
      icon: <i className="fa-solid fa-house"></i>,
      title: "Dashboard",
      to: "/",
    },
    {
      id: 1,
      icon: <i className="fa-solid fa-chart-simple"></i>,
      title: "Bitcoin",
      to: "/bitcoin",
    },
    {
      id: 2,
      icon: <i className="fa-solid fa-folder"></i>,
      title: "Doc",
      to: "/doc",
    },
  ];

  function toRoute(route: string) {
    navigate({
      pathname: route,
    });
  }

  return (
    <NavMenuStyled>
      <h6>menu</h6>
      {listMenu.map((e) => (
        <NavWithIcon key={e.id} icon={e.icon} textNav={e.title} onClick={() => toRoute(e.to)} />
      ))}
    </NavMenuStyled>
  );
};

const NavMenuStyled = styled.nav`
  margin: 70px 0 0 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h6 {
    margin: 0;
    text-transform: uppercase;
    color: ${theme.colors.blackLight};
    font-weight: 100;
    font-size: 12px;
  }
`;

export default NavMenu;
