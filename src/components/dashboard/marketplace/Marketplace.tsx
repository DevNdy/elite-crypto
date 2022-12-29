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
      <h3>Marketplace</h3>
      <IndexBarMarket />
      {cryptos.map((e: any) =>
        e.rank < 8 ? (
          <CryptoBarMarket
            key={e.name}
            nameCrypto={e.name}
            rank={e.rank}
            logo={e.iconUrl}
            change={e.change + " %"}
            price={Number(e.price).toFixed(3) + " $"}
            url={e.coinrankingUrl}
          />
        ) : (
          <></>
        )
      )}
    </MarketplaceStyled>
  );
};

const MarketplaceStyled = styled.div`
  height: 64vh;
  width: 700px;
  padding: 10px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  h3 {
    margin: 8px 0 0 0;
    font-size: 18px;
  }
`;

export default Marketplace;
