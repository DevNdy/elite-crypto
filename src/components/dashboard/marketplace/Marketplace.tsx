import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/Context";
import { theme } from "../../../theme/theme";
import CryptoBarMarket from "./CryptoBarMarket";
import IndexBarMarket from "./IndexBarMarket";

const Marketplace = () => {
  const { cryptos } = useContext(AppContext);
  return (
    <MarketplaceStyled>
      <div className="divMarketplace">
        <h3>Marketplace</h3>
        <button>voir +</button>
      </div>
      <IndexBarMarket />
      {cryptos.map((e: any) =>
        e.rank < 8 ? (
          <CryptoBarMarket
            key={e.uuid}
            nameCrypto={e.name}
            rank={e.rank}
            logo={e.iconUrl}
            change={e.change + " %"}
            price={Number(e.price).toFixed(3) + " $"}
            url={e.coinrankingUrl}
          />
        ) : (
          <span key={e.uuid}></span>
        )
      )}
    </MarketplaceStyled>
  );
};

const MarketplaceStyled = styled.div`
  height: 64vh;
  width: 750px;
  padding: 10px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .divMarketplace {
    width: 750px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h3 {
      margin: 8px 0 0 0;
      font-size: 18px;
    }
    button {
      padding: 5px;
      color: ${theme.colors.primaryColor};
      background-color: ${theme.colors.secondaryColor};
      border: 1px solid ${theme.colors.primaryColor};
      border-radius: 8px;
      cursor: pointer;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default Marketplace;
