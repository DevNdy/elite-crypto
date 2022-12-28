import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

type CryptoDataProps = {
  titleData: string;
  imgCrypto: string;
  nameCrypto: string;
  priceChange: string;
};

const SimpleCryptoData = ({ titleData, imgCrypto, nameCrypto, priceChange }: CryptoDataProps) => {
  return (
    <SimpleCryptoDataStyled>
      <p>{titleData}</p>
      <img src={imgCrypto} alt="crypto" />
      <h4>{nameCrypto}</h4>
      <h4 className="changePrice">
        price change:{" "}
        <span style={{ color: priceChange > "0" ? "green" : "red" }}>{priceChange}</span>{" "}
      </h4>
    </SimpleCryptoDataStyled>
  );
};

const SimpleCryptoDataStyled = styled.div`
  height: 120px;
  width: 200px;
  margin-left: 20px;
  padding: 8px;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;

  p {
    margin: 0;
    color: ${theme.colors.blackLight};
    font-weight: 500;
    font-size: 12px;
  }

  img {
    height: 30px;
    margin: 8px 0 8px;
  }

  h4 {
    margin: 0;
    font-size: 14px;
  }

  .changePrice {
    color: ${theme.colors.blackLight};
    font-weight: 100;
    span {
      margin-left: 5px;
    }
  }
`;

export default SimpleCryptoData;
