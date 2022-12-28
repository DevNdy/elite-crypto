import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

type CryptoDataProps = {
  titleData: string;
  imgCrypto: string;
  nameCrypto: string;
  priceChange: string | number;
  dataName: string;
  style: {};
  link: string;
};

const SimpleCryptoData = ({
  titleData,
  imgCrypto,
  nameCrypto,
  priceChange,
  dataName,
  style,
  link,
}: CryptoDataProps) => {
  return (
    <SimpleCryptoDataStyled href={link} target="_blank" rel="noopener noreferrer">
      <p>{titleData}</p>
      <img src={imgCrypto} alt="crypto" />
      <h4>{nameCrypto}</h4>
      <h4 className="changePrice">
        {dataName}
        <span style={style}>{priceChange}</span>{" "}
      </h4>
    </SimpleCryptoDataStyled>
  );
};

const SimpleCryptoDataStyled = styled.a`
  height: 140px;
  width: 240px;
  padding: 8px;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;
  transition: 0.5s;
  cursor: pointer;
  text-decoration: none;

  p {
    margin: 0;
    color: ${theme.colors.blackLight};
    font-weight: 500;
    font-size: 12px;
  }

  img {
    height: 40px;
    margin: 8px 0 8px;
  }

  h4 {
    margin: 0;
    font-size: 18px;
    color: black;
  }

  .changePrice {
    color: ${theme.colors.blackLight};
    font-weight: 100;
    font-size: 14px;
    span {
      margin-left: 5px;
    }
  }
`;

export default SimpleCryptoData;
