import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/Context";
import { theme } from "../../../theme/theme";

const BuyOperation = () => {
  const { cryptos } = useContext(AppContext);
  const [priceSelect, setRankSelect] = useState<number>(0);
  return (
    <BuyOperationStyled>
      <h3>Acheter du:</h3>
      <div className="selectBuy">
        <select value={priceSelect} onChange={(e: any) => setRankSelect(e.target.value)}>
          <option value="0">Choix crypto</option>
          {cryptos
            .filter((f: any) => f.rank < 6)
            .map((e: any) => (
              <option key={e.name} value={Number(e.price).toFixed(2)}>
                {e.symbol}
              </option>
            ))}
        </select>

        <h5>{priceSelect} $</h5>
      </div>
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
  }

  .selectBuy {
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    select {
      height: 30px;
      width: 95px;
      border: none;
      margin-left: 10px;
    }

    h5 {
      margin-right: 20px;
    }
  }
`;

export default BuyOperation;
