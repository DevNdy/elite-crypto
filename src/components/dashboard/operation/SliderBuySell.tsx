import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/Context";
import { theme } from "../../../theme/theme";

const SliderBuySell = () => {
  const { buyOrSell, setBuyOrSell } = useContext(AppContext);

  return (
    <SliderBuySellStyled>
      <label className="switch">
        <input type="checkbox" onClick={() => setBuyOrSell(!buyOrSell)} />
        <span className="slider round"></span>
        <span className="buy" style={{ color: buyOrSell ? "gray" : "black" }}>
          Buy
        </span>
        <span className="sell" style={{ color: buyOrSell ? "black" : "gray" }}>
          Sell
        </span>
      </label>
    </SliderBuySellStyled>
  );
};

const SliderBuySellStyled = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 130px;
    height: 35px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.secondaryColor};
    -webkit-transition: 0.6s;
    transition: 0.6s;
    border-radius: 5px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 60px;
    border-radius: 5px;
    left: 4px;
    bottom: 3px;
    background-color: ${theme.colors.white};
    -webkit-transition: 0.6s;
    transition: 0.6s;
  }

  .buy {
    position: relative;
    left: 15px;
    top: 5px;
    color: ${theme.colors.primaryColor};
    font-size: 12px;
    font-weight: 500;
  }

  .sell {
    position: relative;
    left: 60px;
    top: 5px;
    color: ${theme.colors.primaryColor};
    font-size: 12px;
    font-weight: 500;
  }

  input:checked + .slider {
    background-color: ${theme.colors.secondaryColor};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(63px);
    -ms-transform: translateX(63px);
    transform: translateX(63px);
  }
`;

export default SliderBuySell;
