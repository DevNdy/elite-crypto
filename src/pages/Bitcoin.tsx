import React from "react";
import styled from "styled-components";
import ChartBitcoin from "../components/bitcoin/ChartBitcoin";
import DescriptionBitcoin from "../components/bitcoin/DescriptionBitcoin";
import DonutsMC from "../components/bitcoin/DonutsMC";
import InfosBitcoin from "../components/bitcoin/InfosBitcoin";
import { theme } from "../theme/theme";

const Bitcoin = () => {
  return (
    <BitcoinStyled>
      <div className="top">
        <ChartBitcoin />
        <InfosBitcoin />
      </div>
      <div className="bottom">
        <DescriptionBitcoin />
        <DonutsMC />
      </div>
    </BitcoinStyled>
  );
};

const BitcoinStyled = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .top {
    display: flex;
    flex-direction: row;
  }

  .bottom {
    display: flex;
    flex-direction: row;
  }
`;

export default Bitcoin;
