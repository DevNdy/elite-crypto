import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";
import { Doughnut } from "react-chartjs-2";

const DonutsMC = () => {
  const { cryptos } = useContext(AppContext);

  return (
    <DonutsMCStyled>
      <Doughnut
        datasetIdKey="id"
        data={{
          labels: ["BTC", "ETH", "USDT", "USDC", "BNB"],
          datasets: [
            {
              label: "marketCap",
              data: cryptos
                .filter(
                  (f: any) =>
                    f.name === "Bitcoin" ||
                    f.name === "Ethereum" ||
                    f.name === "Tether USD" ||
                    f.name === "USDC" ||
                    f.name === "BNB"
                )
                .map((e: any) => e.marketCap),
              borderColor: "white",
              backgroundColor: cryptos
                .filter(
                  (f: any) =>
                    f.name === "Bitcoin" ||
                    f.name === "Ethereum" ||
                    f.name === "Tether USD" ||
                    f.name === "USDC" ||
                    f.name === "BNB"
                )
                .map((e: any) => e.color),
              hoverOffset: 7,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "MarketCap Top 5",
              color: "#262730",
              font: {
                size: 20,
              },
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </DonutsMCStyled>
  );
};

const DonutsMCStyled = styled.div`
  height: 300px;
  width: 320px;
  margin: 20px 0 0 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 5px;
  background-color: ${theme.colors.white};
`;

export default DonutsMC;
