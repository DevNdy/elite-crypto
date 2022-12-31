import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/Context";
import { theme } from "../../../theme/theme";
import { CryptosProps } from "../../props/propsType";

const SelectCrypto = () => {
  const { cryptos, priceCryptoSelect, setPriceCryptoSelect } = useContext(AppContext);

  return (
    <SelectCryptoStyled>
      <select value={priceCryptoSelect} onChange={(e: any) => setPriceCryptoSelect(e.target.value)}>
        <option value="0">Choix crypto</option>
        {cryptos
          .filter((f: CryptosProps) => f.rank < 6)
          .map((e: CryptosProps) => (
            <option key={e.name} value={Number(e.price).toFixed(2)}>
              {e.symbol}
            </option>
          ))}
      </select>
      <h5>{priceCryptoSelect} $</h5>
    </SelectCryptoStyled>
  );
};

const SelectCryptoStyled = styled.div`
  height: 40px;
  border: 0.5px solid ${theme.colors.blackLight};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  select {
    height: 30px;
    width: 95px;
    border: none;
    margin-left: 10px;
    cursor: pointer;
    &:focus {
      outline-color: ${theme.colors.primaryColor};
    }
  }

  h5 {
    margin-right: 20px;
  }
`;

export default SelectCrypto;
