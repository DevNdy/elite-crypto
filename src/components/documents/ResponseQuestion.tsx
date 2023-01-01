import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const ResponseQuestion = () => {
  return (
    <ResponseQuestionStyled>
      <h3>La Blockchain c'est quoi ?</h3>
      <p>
        La blockchain est une technologie de stockage et de transmission d'informations,
        transparente, sécurisée et fonctionnant sans organe central de contrôle. Elle permet de
        stocker des données de manière chronologique et sécurisée dans de nombreux ordinateurs
        simultanément. <br /> <br /> La blockchain est utilisée principalement dans le domaine des
        technologies de l'information et de la finance, mais elle peut également être utilisée dans
        d'autres domaines où il est important de maintenir une base de données fiable et sécurisée.{" "}
        <br />
        <br />
        La blockchain est souvent associée à la cryptomonnaie, car elle est utilisée pour stocker et
        suivre les transactions de ces monnaies virtuelles. Cependant, la technologie de la
        blockchain a des applications beaucoup plus larges et pourrait être utilisée dans de
        nombreux autres domaines, tels que l'enregistrement de propriété, le suivi de la chaîne
        d'approvisionnement, et même dans le vote électronique.
      </p>
      <h3>Quelle est la Blockchain la plus utilisée ?</h3>
      <p>
        La blockchain la plus connue et la plus utilisée est celle qui est utilisée pour enregistrer
        les transactions de la cryptomonnaie Bitcoin. Cette blockchain est open source, ce qui
        signifie que n'importe qui peut avoir accès au code source et peut donc créer des
        applications basées sur cette technologie. <br />
        <br />
        Il existe également d'autres blockchains qui sont largement utilisées, telles que Ethereum,
        qui est une plateforme de développement de applications décentralisées (dApps) basées sur la
        technologie de la blockchain, et Ripple, qui est une technologie de paiement et de change
        utilisée par les institutions financières.
      </p>
      <h3>Combien en existe-t-il ?</h3>
      <p>
        Il est difficile de dire exactement combien de blockchains existent, car de nouvelles
        blockchains sont constamment créées et certaines disparaissent au fil du temps. Selon
        certaines estimations, il pourrait y avoir plusieurs milliers de blockchains actives
        aujourd'hui.
      </p>
    </ResponseQuestionStyled>
  );
};

const ResponseQuestionStyled = styled.div`
  height: 680px;
  width: 580px;
  margin: 50px 0 0 20px;
  padding: 10px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 5px;

  h3 {
    margin: 0;
    color: ${theme.colors.black};
  }

  p {
    opacity: 0.8;
    font-size: 15px;
  }
`;

export default ResponseQuestion;
