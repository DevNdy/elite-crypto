import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../context/Context";
import { theme } from "../../../../theme/theme";
import AmountBuy from "./AmountBuy";
import SelectCryptoBuy from "./SelectCryptoBuy";

const BuyOperation = () => {
  const { amountBuy, priceCryptoBuySelect } = useContext(AppContext);
  const [messageErr, setMessageErr] = useState<string>("");

  const numberTokenBuy = (Number(amountBuy) / priceCryptoBuySelect).toFixed(4);

  function handleClickBuy() {
    if (priceCryptoBuySelect.toString() !== "0") {
      alert("Désolé, l'achat et vente de cryptomonnaies n'est pas encore disponible..");
    } else {
      setMessageErr("! veuillez selectionner une cryptomonnaie !");
    }
  }

  return (
    <BuyOperationStyled>
      <h3>Acheter du:</h3>
      <SelectCryptoBuy />
      <h3>Pour combien ?</h3>
      <AmountBuy />
      <h5 className="tokenBuy">
        *Estimation de token(s) reçu:{" "}
        <span>{priceCryptoBuySelect.toString() === "0" ? "0" : numberTokenBuy}</span>{" "}
      </h5>
      <button onClick={handleClickBuy}>valider l'achat</button>
      <p className="messErr">{messageErr}</p>
      <p>
        * Ceci est une estimation, cela peut légèrement varier pour des raisons multiples: <br /> -
        Le prix du token a changé <br /> - Des frais de transaction peuvent être appliqué
      </p>
    </BuyOperationStyled>
  );
};

const BuyOperationStyled = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: ${theme.colors.blackLight};
    font-weight: 100;
    font-size: 14px;
    margin-top: 25px;
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

export default BuyOperation;
