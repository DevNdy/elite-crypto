import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const ResponseQuestion = () => {
  return <ResponseQuestionStyled>hello</ResponseQuestionStyled>;
};

const ResponseQuestionStyled = styled.div`
  height: 640px;
  width: 600px;
  margin: 0 0 0 20px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 5px;
`;

export default ResponseQuestion;
