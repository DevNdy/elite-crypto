import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

const Dashboard = () => {
  return <DashboardStyled>hello</DashboardStyled>;
};

const DashboardStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Dashboard;
