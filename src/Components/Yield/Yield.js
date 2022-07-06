import React, { useState } from "react";
import CardInvestComponent from "./CardInvestComponent";

import {
  Main,
  Container,
  Section,
  ContainerInvest,
  ContainerValue,
} from "./style";
import ComponentValue from "./ComponentValue";

function Yield() {
  const [inicialValue, setInicialValue] = useState(500);
  const [monthValue, setMonthValue] = useState(100);
  const [year, setYearValue] = useState(1);

  let y = monthValue * 12;

  let totalvalue = inicialValue + y;

  const porcetagem = totalvalue * 1.3;

  const format = porcetagem.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleValue = (operator, value, type) => {
    if (operator === "-") {
      if (type === "initialValue") {
        setInicialValue(value - 100);
        if (value <= 0) {
          setInicialValue(0);
        }
      }
      if (type === "monthValue") {
        setMonthValue(value - 100);
        if (value <= 0) {
          setMonthValue(0);
        }
      }
      if (type === "year") {
        setYearValue(value - 1);
        if (value <= 1) {
          setYearValue(1);
        }
      }
    } else if (operator === "+") {
      if (type === "initialValue") {
        setInicialValue(value + 100);
      }
      if (type === "monthValue") {
        setMonthValue(value + 100);
      }
      if (type === "year") {
        setYearValue(value + 1);
      }
    }
  };

  return (
    <Container>
      <Main>
        <Section>
          <h5>Dinheiro</h5>
          <h2 id="title">Seu dinheiro pode virar mais dinheiro.</h2>
          <p>
            Na conta do Nubank, seu dinheiro tem rendimento a 100% do CDI e fica
            disponível para ser usado a qualquer momento.
          </p>
          <ContainerInvest>
            <CardInvestComponent
              title={"Depósito inicial"}
              value={inicialValue}
              fun={handleValue}
              type={"initialValue"}
            />
            <CardInvestComponent
              title={"Todo mes depositado"}
              value={monthValue}
              fun={handleValue}
              type={"monthValue"}
            />
            <CardInvestComponent
              title={"resgate em"}
              value={year}
              complement={year <= 1 ? "ano" : "anos"}
              fun={handleValue}
              type={"year"}
            />
          </ContainerInvest>
        </Section>
        <Section>
          <ContainerValue>
            <ComponentValue value={format} />
          </ContainerValue>
        </Section>
      </Main>
    </Container>
  );
}

export default Yield;

/*  <h5>DINHEIRO</h5>
        <h2>Seu dinheiro pode virar mais dinheiro.</h2>
        <p>
          Na conta do Nubank, seu dinheiro tem rendimento a 100% do CDI e fica
          disponível para ser usado a qualquer momento.
        </p>
        <CardYield
          title="Depósito inicial"
          value={inicialValue}
          handleValueChange={handleMonthValue}
        />
        <CardYield
          title="Todo mês depositando"
          value={monthValue}
          handleValueChange={handleMonthValue}
        />
        <CardYield
          title="Resgate em"
          time={year}
          handleValueChange={handleYearValue}
        />

        <YieldRight>
          <YieldValus>
            {year === 1 ? (
              <h5>Em {year} ano você teria</h5>
            ) : (
              <h5>Em {year} anos você teria</h5>
            )}
            <TotalValue>{format}</TotalValue>
            <BorderBottomYiel></BorderBottomYiel>
            <Text>
              Esses valores não são uma garantia de rentabilidade futura, mas
              uma estimativa projetada na taxa do CDI de hoje para todo o
              período em que seu depósito permanecer na Conta do Nubank.
            </Text>
          </YieldValus
        </YieldRight>*/
