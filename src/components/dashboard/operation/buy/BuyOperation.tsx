import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../context/Context";
import { theme } from "../../../../theme/theme";
import AmountBuy from "./AmountBuy";
import SelectCrypto from "../SelectCrypto";

const BuyOperation = () => {
  const { amountBuy, priceCryptoSelect } = useContext(AppContext);

  const numberTokenBuy = (amountBuy / priceCryptoSelect).toFixed(4);

  return (
    <BuyOperationStyled>
      <h3>Acheter du:</h3>
      <SelectCrypto />
      <h3>Pour combien ?</h3>
      <AmountBuy />
      <h5 className="tokenBuy">
        *Estimation de token(s) reçu:{" "}
        <span>{priceCryptoSelect.toString() === "0" ? "0" : numberTokenBuy}</span>{" "}
      </h5>
    </BuyOperationStyled>
  );
};

const BuyOperationStyled = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 25px;
    color: ${theme.colors.blackLight};
    font-weight: 100;
    font-size: 14px;
  }

  .tokenBuy {
    color: ${theme.colors.blackLight};
    font-weight: 100;
    font-size: 14px;
    span {
      margin-left: 5px;
      color: ${theme.colors.primaryColor};
      font-weight: 700;
    }
  }
`;

export default BuyOperation;
