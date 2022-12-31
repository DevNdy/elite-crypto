import React from "react";
import styled from "styled-components";
import TopTenCrypto from "../components/allCryptomonnaies/TopTenCrypto";
import TopTwentyCrypto from "../components/allCryptomonnaies/TopTwentyCrypto";
import { theme } from "../theme/theme";

const AllCryptos = () => {
  return (
    <AllCryptosStyled>
      <TopTenCrypto />
      <TopTwentyCrypto />
    </AllCryptosStyled>
  );
};

const AllCryptosStyled = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default AllCryptos;
