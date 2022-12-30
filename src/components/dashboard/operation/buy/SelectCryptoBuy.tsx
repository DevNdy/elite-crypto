import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../context/Context";
import { theme } from "../../../../theme/theme";

const SelectCryptoBuy = () => {
  const { cryptos, priceCryptoBuySelect, setPriceCryptoBuySelect } = useContext(AppContext);

  return (
    <SelectCryptoBuyStyled>
      <select
        value={priceCryptoBuySelect}
        onChange={(e: any) => setPriceCryptoBuySelect(e.target.value)}
      >
        <option value="0">Choix crypto</option>
        {cryptos
          .filter((f: any) => f.rank < 6)
          .map((e: any) => (
            <option key={e.name} value={Number(e.price).toFixed(2)}>
              {e.symbol}
            </option>
          ))}
      </select>
      <h5>{priceCryptoBuySelect} $</h5>
    </SelectCryptoBuyStyled>
  );
};

const SelectCryptoBuyStyled = styled.div`
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
    &:focus {
      outline-color: ${theme.colors.primaryColor};
    }
  }

  h5 {
    margin-right: 20px;
  }
`;

export default SelectCryptoBuy;
