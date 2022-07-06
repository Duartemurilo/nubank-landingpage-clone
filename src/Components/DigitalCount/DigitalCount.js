import React from "react";
import { Container, Main, PhoneContainer, CardIcon, Section } from "./style";
import Smartphone from "../../Images/imageedit_1_7339400014.png";
import icon1 from "../../Images/icon-check.svg";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import iconConfig from "../../Images/icon-config.svg";
import Bennefits from "./Bennefits";
import SlideBtn from "../SlideBtn/SlideBtn";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function DigitalCount() {
  const largura = useMediaQuery("(max-width:1000px)");

  console.log(largura);
  return (
    <Container>
      <Main>
        <PhoneContainer>
          <img className="phone" src={Smartphone} alt="" />
          <CardIcon id="money">
            <AttachMoneyIcon
              style={{ fontSize: largura === false ? 38 : 38 }}
            />
          </CardIcon>
          <CardIcon id="protect">
            <img src={iconConfig} alt="" />
          </CardIcon>
          <CardIcon id="check">
            <img src={icon1} alt="" />
          </CardIcon>
        </PhoneContainer>
        <Section>
          <h5>Conta Digital</h5>
          <h2>Tudo pelo app</h2>
          <p>
            Nossa conta digital com mais de 20 milhões de clientes em todo o
            Brasil. Pague suas contas, ajuste seu limite, bloqueie e desbloqueie
            o cartão quando quiser e acompanhe cada movimentação em tempo real.
            Tudo pelo aplicativo.
          </p>
          <Bennefits />
          <SlideBtn text={"Segura e sem complicações"} />
        </Section>
      </Main>
    </Container>
  );
}

export default DigitalCount;
