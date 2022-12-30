import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../context/Context";
import { theme } from "../../../../theme/theme";

const AmountBuy = () => {
  const { amountBuy, setAmountBuy } = useContext(AppContext);

  return (
    <AmountBuyStyled>
      <input
        type="number"
        value={amountBuy}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmountBuy(e.target.value)}
        required
      />
      <h3 className="symbol">$</h3>
    </AmountBuyStyled>
  );
};

const AmountBuyStyled = styled.div`
  height: 35px;
  width: 120px;
  border: 0.5px solid ${theme.colors.blackLight};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    height: 25px;
    width: 80px;
    margin-left: 10px;
    padding-right: 5px;
    border: none;
    background-color: ${theme.colors.light};
    text-align: end;
    &:focus {
      outline-color: ${theme.colors.primaryColor};
    }
  }

  .symbol {
    margin: 0 0 0 5px;
    color: ${theme.colors.black};
  }
`;

export default AmountBuy;
