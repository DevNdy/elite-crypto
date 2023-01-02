import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import SimpleCryptoData from "./SimpleCryptoData";

const CryptosOfTheDay = () => {
  const { cryptos, cryptoHighChange, cryptoLowChange, lastListingCrypto, topVolume } =
    useContext(AppContext);

  return (
    <CryptosOfTheDayStyled>
      <SimpleCryptoData
        titleData="Top Gagnant"
        imgCrypto={cryptoHighChange.iconUrl}
        nameCrypto={cryptoHighChange.name}
        priceChange={cryptoHighChange.change + "%"}
        dataName="Price change:"
        style={{ color: cryptoHighChange.change > "0" ? "green" : "red" }}
        link={cryptoHighChange.coinrankingUrl}
      />
      <SimpleCryptoData
        titleData="Top Perdant"
        imgCrypto={cryptoLowChange.iconUrl}
        nameCrypto={cryptoLowChange.name}
        priceChange={cryptoLowChange.change + "%"}
        dataName="Price change:"
        style={{ color: cryptoLowChange.change > "0" ? "green" : "red" }}
        link={cryptoLowChange.coinrankingUrl}
      />
      <SimpleCryptoData
        titleData="Dernier ajout"
        imgCrypto={lastListingCrypto.iconUrl}
        nameCrypto={lastListingCrypto.name}
        priceChange={Number(lastListingCrypto.price).toFixed(4) + "$"}
        dataName="Price:"
        style={{ color: "black" }}
        link={lastListingCrypto.coinrankingUrl}
      />
      <SimpleCryptoData
        titleData="Top trade"
        imgCrypto={topVolume.iconUrl}
        nameCrypto={topVolume.name}
        priceChange={Number(topVolume.price).toFixed(4) + "$"}
        dataName="Price:"
        style={{ color: "black" }}
        link={topVolume.coinrankingUrl}
      />
    </CryptosOfTheDayStyled>
  );
};

const CryptosOfTheDayStyled = styled.div`
  height: 180px;
  width: 1160px;
  margin: 50px 0 0 240px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default CryptosOfTheDay;
