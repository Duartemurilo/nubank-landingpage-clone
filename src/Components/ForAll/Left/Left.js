import React from "react";

import { ContainerBenefits, Container } from "./style";
import Benefits from "./Bennefits/Benefits";
import SlideBtn from "../../SlideBtn/SlideBtn";

function Left() {
  return (
    <Container>
      <span>
        <h5>PARA TODOS</h5>
        <h2>Completo</h2>
        <p className="text-title">
          Resolva seu dia a dia pelo celular. Sem filas, sem anuidade, sem
          tarifas abusivas. Cuide do seu dinheiro de um jeito simples. Somos
          eficientes para você usar seu dinheiro com o que realmente importa,
          sem tarifas de manutenção.
        </p>
      </span>
      <ContainerBenefits>
        <Benefits
          title="100% gratuito."
          text="Isso mesmo, você não paga nada para abrir sua conta."
        />
        <Benefits
          title="Sem taxas ou cobranças."
          text="Não se preocupe com taxas adicionais ou anuidades."
        />
        <Benefits
          title="O melhor suporte de todos."
          text="Segundo pesquisas, temos o melhor suporte pra você"
        />
      </ContainerBenefits>

      <SlideBtn text={"Confira os beneficios"} />
    </Container>
  );
}

export default Left;
