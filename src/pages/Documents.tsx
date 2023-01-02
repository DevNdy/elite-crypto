import React from "react";
import styled from "styled-components";
import DocCrypto from "../components/documents/DocCrypto";
import ResponseQuestion from "../components/documents/ResponseQuestion";
import SchemaDocCrypto from "../components/documents/SchemaDocCrypto";
import { theme } from "../theme/theme";

const Documents = () => {
  return (
    <DocumentsStyled>
      <div className="leftDoc">
        <DocCrypto />
        <SchemaDocCrypto />
      </div>
      <ResponseQuestion />
    </DocumentsStyled>
  );
};

const DocumentsStyled = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  margin-left: 210px;
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .leftDoc {
    margin: 40px 0 0 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export default Documents;
