import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/Context";
import { theme } from "../../../theme/theme";
import BuyOperation from "./buy/BuyOperation";
import SellOperation from "./sell/SellOperation";
import SliderBuySell from "./SliderBuySell";

const Operation = () => {
  const { buyOrSell, priceCryptoSelect } = useContext(AppContext);

  const [messageErr, setMessageErr] = useState<string>("");

  function handleClickBuy() {
    if (priceCryptoSelect.toString() !== "0") {
      alert("Désolé, l'achat et vente de cryptomonnaie ne sont pas encore disponibles...");
      setMessageErr("");
    } else {
      setMessageErr("! veuillez selectionner une cryptomonnaie !");
    }
  }
  return (
    <OperationStyled>
      <div className="divOperation">
        <h3>Opération</h3>
        <SliderBuySell />
      </div>
      {buyOrSell ? <SellOperation /> : <BuyOperation />}
      <button onClick={handleClickBuy}>{buyOrSell ? "valider la vente" : "valider l'achat"}</button>
      <p className="messErr">{messageErr}</p>
      <p>
        * Ceci est une estimation, cela peut légèrement varier pour des raisons multiples: <br /> -
        Le prix du token a changé. <br /> - Des frais de transaction peuvent être appliqué.
      </p>
    </OperationStyled>
  );
};

const OperationStyled = styled.div`
  height: 64vh;
  width: 350px;
  margin-left: 20px;
  padding: 10px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  .divOperation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h3 {
      margin-top: 10px;
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
    &:hover {
      opacity: 0.95;
    }
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

export default Operation;
