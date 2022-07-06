import React from "react";
import { ContainerText, Text, CardText } from "./style";
import iconContactless from "../../Images/icon-contactless.svg";
import iconCard from "../../Images/icon-card.svg";

function Bennefits() {
  return (
    <ContainerText>
      <CardText>
        <div className="card-icon">
          <img src={iconContactless} alt="icone" />
        </div>

        <Text>
          <strong>Tecnologia Contactless</strong>
          <p>
            Tecnologia de pagamento por aproximação. Mais agilidade no dia a
            dia.
          </p>
        </Text>
      </CardText>
      <CardText>
        <div className="card-icon">
          <img src={iconCard} alt="icone" />
        </div>

        <Text>
          <strong>Cartão virtual</strong>
          <p>
            Você pode gerar cartões virtuais no app para suas compras online.
            Mais segurança.
          </p>
        </Text>
      </CardText>
    </ContainerText>
  );
}

export default Bennefits;
