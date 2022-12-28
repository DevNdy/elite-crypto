import React, { useContext } from "react";
import styled from "styled-components";
import CryptosOfTheDay from "../components/dashboard/CryptosOfTheDay";
import { AppContext } from "../context/Context";
import { theme } from "../theme/theme";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <CryptosOfTheDay />
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
  align-items: center;
  justify-content: flex-start;
`;

export default Dashboard;
