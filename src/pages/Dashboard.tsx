import React, { useContext } from "react";
import styled from "styled-components";
import CryptosOfTheDay from "../components/dashboard/CryptosOfTheDay";
import Marketplace from "../components/dashboard/marketplace/Marketplace";
import Operation from "../components/dashboard/operation/Operation";
import { AppContext } from "../context/Context";
import { theme } from "../theme/theme";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <CryptosOfTheDay />
      <div className="divMarketOperation">
        <Marketplace />
        <Operation />
      </div>
    </DashboardStyled>
  );
};

const DashboardStyled = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .divMarketOperation {
    display: flex;
    flex-direction: row;
    margin: 10px 0 0 300px;
  }
`;

export default Dashboard;
