import React from "react";
import styled from "styled-components";
import ChartBitcoin from "../components/bitcoin/ChartBitcoin";
import { theme } from "../theme/theme";

const Bitcoin = () => {
  return (
    <BitcoinStyled>
      <ChartBitcoin />
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
  align-items: flex-start;
  justify-content: flex-start;
`;

export default Bitcoin;
