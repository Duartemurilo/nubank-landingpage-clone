import React from "react";
import { ContainerText, Text, CardText } from "./style";
import iconMobile from "../../Images/icon-mobile.svg";
import iconConfig from "../../Images/icon-config.svg";
import iconTime from "../../Images/icon-time.svg";

function Bennefits() {
  return (
    <ContainerText>
      <CardText>
        <div>
          <img src={iconMobile} alt="icone" />
        </div>

        <Text>
          <strong>Tudo na Palma da dua mão</strong>
          <p>Conta digital. Você resolve tudo pelo App. Tudo.</p>
        </Text>
      </CardText>
      <CardText>
        <div>
          <img src={iconTime} alt="icone" />
        </div>

        <Text>
          <strong>Sem filas ou burocracias</strong>
          <p>
            Investimos no melhor suporte pra isso. Não tem filas. Economia de
            tempo.
          </p>
        </Text>
      </CardText>
      <CardText>
        <div>
          <img src={iconConfig} alt="icone" />
        </div>

        <Text>
          <strong>Configure tudo no app</strong>
          <p>
            Toda a configuração e acesso aos novos recursos a um clique de
            distância.
          </p>
        </Text>
      </CardText>
    </ContainerText>
  );
}

export default Bennefits;
