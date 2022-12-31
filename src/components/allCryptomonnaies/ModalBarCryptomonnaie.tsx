import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { CryptoBarMarketProps } from "../dashboard/marketplace/CryptoBarMarket";

const ModalBarCryptomonnaie = ({
  rank,
  logo,
  nameCrypto,
  change,
  price,
  url,
}: CryptoBarMarketProps) => {
  return (
    <ModalBarCryptomonnaieStyled href={url} target="_blank" rel="noopener noreferrer">
      <div className="left">
        <h6>{rank}</h6>
        <img src={logo} alt={nameCrypto} />
        <h6>{nameCrypto}</h6>
      </div>
      <h4 style={{ color: change > "0" ? "green" : "red" }}>
        {change > "0" ? "+" : ""}
        {change}
      </h4>
      <h4 className="price">{price} $</h4>
    </ModalBarCryptomonnaieStyled>
  );
};

const ModalBarCryptomonnaieStyled = styled.a`
  height: 35px;
  width: 530px;
  margin: 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${theme.colors.black};
  border-top: 0.5px solid ${theme.colors.white};
  border-bottom: 0.5px solid ${theme.colors.white};
  transition: 0.3s;
  font-size: 14px;

  &:hover {
    border-top: 0.5px solid ${theme.colors.blackLight};
    border-bottom: 0.5px solid ${theme.colors.blackLight};
    background-color: ${theme.colors.secondaryColor};
  }

  .left {
    width: 180px;
    height: 35px;
    margin-left: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;

    h6 {
      margin: 0;
      font-size: 14px;
    }

    img {
      height: 25px;
      margin: 0 8px 0 8px;
    }
  }

  h4 {
    width: 100px;
    text-align: start;
  }

  .price {
    text-align: end;
    margin-right: 8px;
  }
`;

export default ModalBarCryptomonnaie;
