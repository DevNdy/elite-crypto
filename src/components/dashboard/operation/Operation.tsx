import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/Context";
import { theme } from "../../../theme/theme";
import SliderBuySell from "./SliderBuySell";

const Operation = () => {
  const { buyOrSell, setBuyOrSell } = useContext(AppContext);
  return (
    <OperationStyled>
      <div className="divOperation">
        <h3>Opération</h3>
        <SliderBuySell />
      </div>
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
`;

export default Operation;
