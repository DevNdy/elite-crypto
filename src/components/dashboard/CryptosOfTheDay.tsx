import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import SimpleCryptoData from "./SimpleCryptoData";

const CryptosOfTheDay = () => {
  const { cryptos, cryptoHighChange } = useContext(AppContext);
  console.log(cryptos);

  return (
    <CryptosOfTheDayStyled>
      <SimpleCryptoData
        titleData="Top Gainer"
        imgCrypto={cryptoHighChange.iconUrl}
        nameCrypto={cryptoHighChange.name}
        priceChange={cryptoHighChange.change + "%"}
      />
    </CryptosOfTheDayStyled>
  );
};

const CryptosOfTheDayStyled = styled.div`
  height: 180px;
  width: 75vw;
  margin: 70px 0 0 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default CryptosOfTheDay;
