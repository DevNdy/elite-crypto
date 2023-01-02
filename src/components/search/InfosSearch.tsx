import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const InfosSearch = () => {
  return (
    <InfosSearchStyled>
      La recherche d'EliteCrypto utilise l'API de ChatGPT de OpenAI, c'est une intelligence
      artificielle puissante. Vous pouvez lui demander ce que vous voulez, mais essayez de rester
      dans le thème des cryptomonnaies merci.
    </InfosSearchStyled>
  );
};

const InfosSearchStyled = styled.p`
  height: 80px;
  width: 650px;
  margin-left: 180px;
  padding: 10px;
  color: ${theme.colors.black};
  border-radius: 5px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;

export default InfosSearch;
