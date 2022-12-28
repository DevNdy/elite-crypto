import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const Search = () => {
  return (
    <SearchStyled>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Faire une recherche quelconque..." />
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  margin-left: 20px;
  height: 40px;
  width: 300px;
  background-color: #f5f8fa;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  i {
    color: ${theme.colors.blackLight};
    margin: 0 10px 0 10px;
  }

  input {
    width: 100%;
    height: 25px;
    background-color: #f5f8fa;
    border: none;
    padding-left: 5px;
    &:focus {
      outline-color: #f5f8fa;
    }
    &::placeholder {
      font-style: italic;
    }
  }
`;

export default Search;