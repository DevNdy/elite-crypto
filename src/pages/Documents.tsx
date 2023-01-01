import React from "react";
import styled from "styled-components";
import DocCrypto from "../components/documents/DocCrypto";
import ModalQuestion from "../components/documents/ModalQuestion";
import ResponseQuestion from "../components/documents/ResponseQuestion";
import SchemaDocCrypto from "../components/documents/SchemaDocCrypto";
import { theme } from "../theme/theme";

const Documents = () => {
  return (
    <DocumentsStyled>
      <div className="topDoc">
        <ModalQuestion question="C'est quoi une Blockchain ?" />
        <ModalQuestion question="Quelle est la Blockchain la plus utilisée ?" />
        <ModalQuestion question="Combien y a-t-il de Blockchain ?" />
      </div>
      <div className="bottomDoc">
        <div className="leftDoc">
          <DocCrypto />
          <SchemaDocCrypto />
        </div>
        <ResponseQuestion />
      </div>
    </DocumentsStyled>
  );
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

  .topDoc {
    margin: 40px 0 0 210px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .bottomDoc {
    margin-left: 210px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    .leftDoc {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
`;

export default Documents;
