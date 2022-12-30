import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../context/Context";
import { theme } from "../../../../theme/theme";
import SelectCrypto from "../SelectCrypto";

const SellOperation = () => {
  const { priceCryptoSelect } = useContext(AppContext);

  const [numberTokenSell, setNumberTokenSell] = useState<number>(0);

  const resultDolls = (numberTokenSell * priceCryptoSelect).toFixed(2);

  return (
    <SellOperationStyled>
      <h3>Vendre du:</h3>
      <SelectCrypto />
      <h3>Combien de token(s) ?</h3>
      <input
        type="number"
        value={numberTokenSell}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNumberTokenSell(Number(e.target.value))
        }
      />
      <h5 className="tokenSell">
        *Estimation de dollar(s) reçu:{" "}
        <span>{priceCryptoSelect.toString() === "0" ? "0" : resultDolls + "$"}</span>{" "}
      </h5>
    </SellOperationStyled>
  );
};

const SellOperationStyled = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: ${theme.colors.blackLight};
    font-weight: 100;
    font-size: 14px;
    margin-top: 25px;
  }

  input {
    height: 33px;
    width: 80px;
    padding-left: 8px;
    border: 0.5px solid ${theme.colors.blackLight};
    border-radius: 5px;
    background-color: ${theme.colors.light};
    text-align: start;
    &:focus {
      outline-color: ${theme.colors.primaryColor};
    }
  }

  .tokenSell {
    color: ${theme.colors.blackLight};
    font-weight: 100;
    font-size: 14px;
    span {
      margin-left: 5px;
      color: ${theme.colors.primaryColor};
      font-weight: 700;
    }
  }

  button {
    height: 35px;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    border-radius: 5px;
    font-size: 17px;
    cursor: pointer;
  }

  .messErr {
    font-weight: 100;
    color: #7c1010;
    text-align: center;
    font-size: 14px;
    font-style: italic;
  }

  p {
    margin-top: 30px;
    font-size: 13px;
    color: ${theme.colors.blackLight};
  }
`;

export default SellOperation;
