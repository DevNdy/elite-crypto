import React from "react";
import styled from "styled-components";
import InfosSearch from "../components/search/InfosSearch";
import ResponseSearch from "../components/search/ResponseSearch";
import { theme } from "../theme/theme";

const SearchPage = () => {
  return (
    <SearchPageStyled>
      <InfosSearch />
      <ResponseSearch />
    </SearchPageStyled>
  );
};

const SearchPageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default SearchPage;
