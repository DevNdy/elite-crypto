import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import Search from "./Search";

const SearchBar = () => {
  //date of day
  const date = new Date();
  const options: {} = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
  const dateOfDay = date.toLocaleDateString("fr-FR", options);

  return (
    <SearchBarStyled>
      <form>
        <Search />
        <button>Go</button>
      </form>
      <h3>{dateOfDay}</h3>
    </SearchBarStyled>
  );
};

const SearchBarStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 272px;
  height: 60px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      height: 38px;
      border: 1px solid ${theme.colors.blackLight};
      background-color: ${theme.colors.secondaryColor};
      border-radius: 5px;
      color: ${theme.colors.primaryColor};
      margin-left: 5px;
      cursor: pointer;
    }
  }

  h3 {
    margin-right: 50px;
    color: ${theme.colors.blackLight};
    font-size: 14px;
    font-weight: 100;
  }
`;

export default SearchBar;
