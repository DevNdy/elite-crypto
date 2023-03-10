import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

interface ChartBitcoinProps {
  timestamp: number;
  price: string;
}

const ChartBitcoin = () => {
  const [bitcoin, setBitcoin] = useState<[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${import.meta.env.VITE_CRYPTO_API_KEY}`,
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    fetch(
      "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=1h",
      options
    )
      .then((response) => response.json())
      .then((response) => setBitcoin(response.data.history))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ChartBitcoinStyled>
      <Line
        datasetIdKey="id"
        data={{
          labels: bitcoin
            .map(
              (e: ChartBitcoinProps) =>
                ` ${
                  new Date(e.timestamp * 1000).getHours() +
                  ":" +
                  new Date(e.timestamp * 1000).getMinutes()
                }`
            )
            .reverse(),
          datasets: [
            {
              label: "Prix",
              data: bitcoin.map((e: ChartBitcoinProps) => e.price).reverse(),
              borderColor: "#247378",
              backgroundColor: "#E0F2F2",
              borderWidth: 3,
              pointBorderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            y: {
              border: {
                color: "black",
              },
              ticks: {
                stepSize: 3,
              },
              type: "linear",
              title: {
                display: true,
                text: "Prix BTC $",
                font: {
                  weight: "bold",
                },
              },
            },

            x: {
              border: {
                color: "black",
              },
              title: {
                display: true,
                text: "Heure",
                font: {
                  weight: "bold",
                },
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Graphique Bitcoin 1h",
              color: "#262730",
              font: {
                size: 20,
              },
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </ChartBitcoinStyled>
  );
};

const ChartBitcoinStyled = styled.div`
  height: 400px;
  width: 820px;
  margin: 60px 0 0 240px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  background-color: ${theme.colors.white};
`;

export default ChartBitcoin;
