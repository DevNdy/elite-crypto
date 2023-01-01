import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const DocCrypto = () => {
  return (
    <DocCryptoStyled>
      <h3>La cryptomonnaie c'est quoi ?</h3>
      <p>
        Les « cryptomonnaies », plutôt appelés « crypto-actifs », sont des actifs numériques
        virtuels qui reposent sur la technologie de la blockchain (chaine de bloc) à travers un
        registre décentralisé et un protocole informatique crypté. Un crypto-actif n’est pas une
        monnaie. Sa valeur se détermine uniquement en fonction de l’offre et de la demande. <br />{" "}
        <br /> Les crypto-actifs ne reposent pas sur un tiers de confiance, comme une banque
        centrale pour une monnaie. Il existe à ce jour plus de 1 300 crypto-actifs. Les plus connus
        sont le bitcoin, le ripple, l’ether, le litecoin, le nem et le dash.
      </p>
    </DocCryptoStyled>
  );
};

const DocCryptoStyled = styled.article`
  height: 250px;
  width: 500px;
  padding: 10px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    margin: 0;
    color: ${theme.colors.black};
  }

  p {
    margin: 20px 0;
    font-size: 15px;
    opacity: 0.8;
  }
`;

export default DocCrypto;
