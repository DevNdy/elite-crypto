import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";
import ModalBarCryptomonnaie from "./ModalBarCryptomonnaie";

const TopTenCrypto = () => {
  const { cryptos } = useContext(AppContext);

  return (
    <TopTenCryptoStyled>
      {cryptos
        .filter((f: any) => f.rank < 14)
        .map((e: any) => (
          <ModalBarCryptomonnaie
            key={e.uuid}
            nameCrypto={e.name}
            rank={e.rank}
            logo={e.iconUrl}
            change={e.change + " %"}
            price={Number(e.price).toFixed(3)}
            url={e.coinrankingUrl}
          />
        ))}
    </TopTenCryptoStyled>
  );
};

const TopTenCryptoStyled = styled.div`
  height: 705px;
  width: 545px;
  margin: 80px 0 0 260px;
  padding: 10px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TopTenCrypto;
