import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const ResponseSearch = () => {
  return <ResponseSearchStyled>hello</ResponseSearchStyled>;
};

const ResponseSearchStyled = styled.div`
  height: 500px;
  width: 650px;
  padding: 10px;
  margin-left: 180px;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
`;

export default ResponseSearch;
