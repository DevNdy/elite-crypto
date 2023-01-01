import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const SchemaDocCrypto = () => {
  return (
    <SchemaDocCryptoStyled>
      <img
        src="https://www.eanet.fr/wp-content/uploads/2018/12/schema-blockchain.jpg"
        alt="schema"
      />
    </SchemaDocCryptoStyled>
  );
};

const SchemaDocCryptoStyled = styled.div`
  height: 390px;
  width: 500px;
  margin-top: 20px;
  padding: 10px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    height: 380px;
    width: 500px;
  }
`;

export default SchemaDocCrypto;
