import React from "react";
import {
  Container,
  Main,
  Section,
  ListBennefits,
  ContainerCard,
} from "./style";
import CardFront from "../../Images/nubank.svg";
import CardBack from "../../Images/nubank-verse.svg";
import Bennefits from "./Bennefits";
import SlideBtn from "../SlideBtn/SlideBtn";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Cards() {
  const largura = useMediaQuery("(max-width:1350px)");
  return (
    <Container>
      <Main>
        <Section>
          <h5>Seu roxinho</h5>
          <h2>Crédito e débito.</h2>
          <p>
            Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno,
            gratuito e prático também. Facilidade e segurança para você em mais
            de 30 milhões de estabelecimentos, além dos benefícios Mastercard.
          </p>
          <ListBennefits>
            <Bennefits />
          </ListBennefits>
          <SlideBtn text={"Saiba mais"} />
        </Section>
        <ContainerCard className={largura && "hideItens"}>
          <img id="card-back" src={CardBack} alt="" />
          <img id="card-front" src={CardFront} alt="" />
        </ContainerCard>
      </Main>
    </Container>
  );
}

export default Cards;
