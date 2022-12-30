import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const DescriptionBitcoin = () => {
  return <DescriptionBitcoinStyled>hello</DescriptionBitcoinStyled>;
};

const DescriptionBitcoinStyled = styled.div`
  height: 300px;
  width: 820px;
  margin: 20px 0 0 260px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 5px;
  background-color: ${theme.colors.white};
`;

export default DescriptionBitcoin;
