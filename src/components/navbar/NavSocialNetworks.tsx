import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import NavWithIcon from "../../ui-reusable/NavWithIcon";

const NavSocialNetworks = () => {
  const listSocial = [
    {
      id: 0,
      icon: <i className="fa-brands fa-github"></i>,
      title: "Github",
    },
    {
      id: 1,
      icon: <i className="fa-brands fa-linkedin"></i>,
      title: "Linkedin",
    },
    {
      id: 2,
      icon: <i className="fa-brands fa-twitter"></i>,
      title: "Twitter",
    },
  ];

  return (
    <NavSocialNetworksStyled>
      <h6>Réseaux sociaux</h6>
      {listSocial.map((e) => (
        <NavWithIcon key={e.id} icon={e.icon} textNav={e.title} onClick={() => {}} />
      ))}
    </NavSocialNetworksStyled>
  );
};

const NavSocialNetworksStyled = styled.div`
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

export default NavSocialNetworks;
