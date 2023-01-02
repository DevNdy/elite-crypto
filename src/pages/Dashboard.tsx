import styled from "styled-components";
import CryptosOfTheDay from "../components/dashboard/CryptosOfTheDay";
import Marketplace from "../components/dashboard/marketplace/Marketplace";
import Operation from "../components/dashboard/operation/Operation";
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
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .divMarketOperation {
    display: flex;
    flex-direction: row;
    margin: 10px 0 0 240px;
  }
`;

export default Dashboard;
