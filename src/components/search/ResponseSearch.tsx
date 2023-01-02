import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";
import Loading from "../../ui-reusable/Loading";
import { FiArrowDown } from "react-icons/fi";

const ResponseSearch = () => {
  const { responseSearchData, loading } = useContext(AppContext);
  return (
    <ResponseSearchStyled>
      <h3>
        <FiArrowDown className="arrow" />
        Réponse à votre recherche <FiArrowDown className="arrow" />
      </h3>
      {loading ? <Loading heightSize="100" widthSize="100" /> : <p>{responseSearchData}</p>}
    </ResponseSearchStyled>
  );
};

const ResponseSearchStyled = styled.div`
  min-height: 150px;
  width: 650px;
  padding: 10px;
  margin-left: 180px;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${theme.colors.primaryColor};
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.black};

    .arrow {
      margin: 0 10px 0 10px;
      color: ${theme.colors.black};
      font-size: 25px;
    }
  }

  p {
    color: ${theme.colors.black};
    opacity: 0.8;
  }
`;

export default ResponseSearch;
