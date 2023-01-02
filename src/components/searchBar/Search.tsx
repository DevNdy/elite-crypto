import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";

const Search = () => {
  const { searchData, setSearchData } = useContext(AppContext);

  return (
    <SearchStyled>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Faire une recherche quelconque..."
        value={searchData}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchData(e.target.value)}
      />
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  margin-left: 28px;
  height: 40px;
  width: 300px;
  background-color: #f5f8fa;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;

  i {
    color: ${theme.colors.blackLight};
    margin: 0 10px 0 10px;
  }

  input {
    width: 250px;
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
