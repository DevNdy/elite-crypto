import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

export type CryptoBarMarketProps = {
  rank: number;
  logo: string;
  nameCrypto: string;
  change: string;
  price: string;
  url: string;
};

const CryptoBarMarket = ({ rank, logo, nameCrypto, change, price, url }: CryptoBarMarketProps) => {
  return (
    <CryptoBarMarketStyled href={url} target="_blank" rel="noopener noreferrer">
      <h4>
        {rank} <img src={logo} alt="logo" />
        {nameCrypto}
      </h4>
      <h5 className="change" style={{ color: change > "0" ? "green" : "red" }}>
        {change > "0" ? "+" : ""}
        {change}
      </h5>
      <h5 className="price">{price}</h5>
    </CryptoBarMarketStyled>
  );
};

const CryptoBarMarketStyled = styled.a`
  width: 730px;
  height: 40px;
  margin-top: 25px;
  text-decoration: none;
  border-top: 0.5px solid ${theme.colors.white};
  border-bottom: 0.5px solid ${theme.colors.white};
  transition: 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-top: 0.5px solid ${theme.colors.blackLight};
    border-bottom: 0.5px solid ${theme.colors.blackLight};
    background-color: ${theme.colors.secondaryColor};
  }

  h4 {
    padding-left: 15px;
    width: 250px;
    margin: 0;
    color: ${theme.colors.black};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
      margin: 0 20px 0 10px;
      height: 30px;
      width: 30px;
    }
  }

  h5 {
    margin: 0;
  }

  .change {
    width: 65px;
    margin-right: 115px;
    text-align: end;
  }

  .price {
    margin-right: 5px;
    width: 140px;
    text-align: end;
    color: ${theme.colors.black};
  }
`;

export default CryptoBarMarket;
