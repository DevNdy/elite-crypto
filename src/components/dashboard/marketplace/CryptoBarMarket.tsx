import React from "react";
import styled from "styled-components";

type CryptoBarMarketProps = {
  rank: string;
  logo: string;
  nameCrypto: string;
  change: string;
  price: string;
  url: string;
};

const CryptoBarMarket = ({ rank, logo, nameCrypto, change, price, url }: CryptoBarMarketProps) => {
  return (
    <CryptoBarMarketStyled>
      <h4>
        {rank} <img src={logo} alt="logo" />
        {nameCrypto}
      </h4>
    </CryptoBarMarketStyled>
  );
};

const CryptoBarMarketStyled = styled.div`
  width: 680px;
  height: 40px;
  margin-top: 25px;

  h4 {
    padding-left: 15px;
    width: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 0;

    img {
      margin: 0 20px 0 10px;
      height: 30px;
      width: 30px;
    }
  }
`;

export default CryptoBarMarket;
