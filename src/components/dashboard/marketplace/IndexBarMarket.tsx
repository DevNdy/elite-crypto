import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

const IndexBarMarket = () => {
  return (
    <IndexBarMarketStyled>
      <h5>Rank - Nom</h5>
      <h5>24h/change</h5>
      <h5>Prix</h5>
    </IndexBarMarketStyled>
  );
};

const IndexBarMarketStyled = styled.div`
  height: 40px;
  width: 680px;
  margin-top: 30px;
  border-top: 0.3px solid ${theme.colors.blackLight};
  border-bottom: 0.3px solid ${theme.colors.blackLight};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h5 {
    width: 100px;
    text-align: center;
    color: #6a6a6a;
  }
`;

export default IndexBarMarket;
