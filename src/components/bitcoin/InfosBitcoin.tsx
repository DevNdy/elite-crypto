import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";
import { CryptosProps } from "../props/propsType";

const InfosBitcoin = () => {
  const { cryptos } = useContext(AppContext);

  //thousand separator
  function numStr(a: any, b: any) {
    a = "" + a;
    b = b || " ";
    var c = "",
      d = 0;
    while (a.match(/^0[0-9]/)) {
      a = a.substr(1);
    }
    for (var i = a.length - 1; i >= 0; i--) {
      c = d != 0 && d % 3 == 0 ? a[i] + b + c : a[i] + c;
      d++;
    }
    return c;
  }

  return (
    <InfosBitcoinStyled>
      <h2>Fiche Bitcoin</h2>
      {cryptos
        .filter((f: CryptosProps) => f.symbol === "BTC")
        .map((e: CryptosProps) => (
          <ul key={e.uuid}>
            <li>
              Prix: <span>{numStr(Number(e.price).toFixed(0), "")} $</span>
            </li>
            <li>
              Logo: <img src={e.iconUrl} alt={e.name} />
            </li>
            <li>
              N° classement: <span>{e.rank}</span>
            </li>
            <li>
              Symbol: <span>{e.symbol}</span>
            </li>
            <li>
              Change 24h:{" "}
              <span style={{ color: e.change > "0" ? "green" : "red" }}>{e.change}%</span>
            </li>
            <li>
              MarketCap: <span>{numStr(e.marketCap, "")} $</span>
            </li>
            <li>
              Nbr de token max: <span>21 000 000</span>
            </li>
            <a href={e.coinrankingUrl} target="_blank" rel="noopener noreferrer">
              voir +
            </a>
          </ul>
        ))}
    </InfosBitcoinStyled>
  );
};

const InfosBitcoinStyled = styled.div`
  height: 384px;
  width: 304px;
  margin: 60px 0 0 20px;
  padding: 8px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  h2 {
    width: 100%;
    text-align: center;
    text-decoration: underline;
    color: ${theme.colors.black};
  }

  ul {
    li {
      margin-top: 8px;
      list-style: none;
      font-weight: 800;
      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        margin-left: 10px;
        font-weight: 100;
        color: ${theme.colors.blackLight};
      }
      img {
        margin-left: 15px;
        height: 25px;
      }
    }
    a {
      margin-left: 80px;
      text-decoration: none;
      padding: 5px;
      color: ${theme.colors.primaryColor};
      background-color: ${theme.colors.secondaryColor};
      border: 1px solid ${theme.colors.primaryColor};
      border-radius: 5px;
      position: relative;
      top: 60px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default InfosBitcoin;
