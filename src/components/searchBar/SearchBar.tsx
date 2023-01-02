import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";
import Loading from "../../ui-reusable/Loading";
import Search from "./Search";

const SearchBar = () => {
  const navigate = useNavigate();
  const { loading, setLoading, setResponseSearchData, searchData } = useContext(AppContext);

  //date of day
  const date = new Date();
  const options: {} = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
  const dateOfDay = date.toLocaleDateString("fr-FR", options);

  async function handleSubmitSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate({
      pathname: "/recherche",
    });
    setLoading(true);
    setResponseSearchData("");

    await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `dis moi ${searchData}`,
        max_tokens: 4000,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
    })
      .then((response) => response.json())
      .then((data) => setResponseSearchData(data.choices[0].text));
    setLoading(false);
  }

  return (
    <SearchBarStyled>
      <form onSubmit={handleSubmitSearch}>
        <Search />
        {loading ? <Loading heightSize="50" widthSize="50" /> : <button>Go</button>}
      </form>
      <h3>{dateOfDay}</h3>
    </SearchBarStyled>
  );
};

const SearchBarStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 232px;
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
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
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
