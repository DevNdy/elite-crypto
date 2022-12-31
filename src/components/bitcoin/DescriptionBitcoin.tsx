import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const DescriptionBitcoin = () => {
  return (
    <DescriptionBitcoinStyled>
      <h3>Le Bitcoin c'est quoi ?</h3>
      <p>
        Le Bitcoin est une cryptomonnaie autrement appelée monnaie cryptographique. L'idée fut
        présentée pour la première fois en novembre 2008 par une personne, ou un groupe de
        personnes, sous le pseudonyme de Satoshi Nakamoto. Le code source de l'implémentation de
        référence fut quant à lui publié en 2009. L'objectif est de créer un système décentralisé et
        pair-à-pair afin d'échanger de la valeur monétaire en s'affranchissant de tout organisme
        tiers, tel que les institutions financières. <br /> <br /> Le G20 considère que le Bitcoin
        est un « crypto-actif ». Ce terme « crypto-actif » désigne « des actifs virtuels stockés sur
        un support électronique permettant à une communauté d'utilisateurs les acceptant en paiement
        de réaliser des transactions sans avoir à recourir à la monnaie légale ».
        <br />
        <br />
        <span> (source wikipedia)</span>
      </p>
    </DescriptionBitcoinStyled>
  );
};

const DescriptionBitcoinStyled = styled.article`
  height: 300px;
  width: 820px;
  margin: 20px 0 0 260px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 5px;
  background-color: ${theme.colors.white};

  h3 {
    margin: 20px 0 0 15px;
    font-size: 21px;
  }

  p {
    margin: 25px 15px 0 15px;
    color: ${theme.colors.black};
    opacity: 0.8;

    span {
      font-style: italic;
      color: ${theme.colors.blackLight};
      font-size: 13px;
      position: relative;
      left: 660px;
    }
  }
`;

export default DescriptionBitcoin;
