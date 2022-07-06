import React from "react";
import {
  Container,
  Benefits,
  Entail,
  Left,
  Main,
  ContainerCards,
} from "./style";
import entail from "../../Images/entail.svg";
import BoxBenefits from "./BoxBenefits";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CachedIcon from "@material-ui/icons/Cached";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import HeadsetIcon from "@material-ui/icons/Headset";

function RowBenifits() {
  return (
    <Container>
      <Benefits>
        <Entail>
          <img src={entail} alt="" />
        </Entail>
        <Main>
          <Left>
            <h5>O melhor</h5>
            <h2>Por que Nubank?</h2>
          </Left>
          <ContainerCards>
            <BoxBenefits
              Icon={AttachMoneyIcon}
              text={"Conta rende mais que a poupança"}
            />
            <BoxBenefits
              Icon={CachedIcon}
              text={"Transferências e TEDs ilimitadas"}
            />
            <BoxBenefits
              Icon={CreditCardIcon}
              text={"Conta e cartão 100% gratuitos"}
            />
            <BoxBenefits
              Icon={HeadsetIcon}
              text={"O melhor suporte 24h do Brasil"}
            />
          </ContainerCards>
        </Main>
      </Benefits>
    </Container>
  );
}

export default RowBenifits;
