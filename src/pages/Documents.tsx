import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

const Documents = () => {
  return <DocumentsStyled>doc</DocumentsStyled>;
};

const DocumentsStyled = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Documents;
