import React from "react";
import {
  Container,
  BodyBanner,
  BodyBannerLeft,
  BodyBannerRight,
  CardImage,
  BottomBannerLeft,
  CardIcon,
} from "./BannerStyle";

import playStore from "../../Images/playstore.svg";
import apple from "../../Images/appstore.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Banner() {
  const largura = useMediaQuery("(max-width:1200px)");

  return (
    <Container
      style={{
        backgroundImage: `url(/imagens/bg-home.svg)`,
      }}
    >
      <BodyBanner>
        <BodyBannerLeft>
          <h1>Ser Nubank é reinventar sua vida financeira </h1>

          <p>
            Conta com rendimento acima da poupança, cartão de crédito sem
            anuidade e o melhor: resolva tudo pelo app.
          </p>

          <BottomBannerLeft>
            <button className="btn-gradient" id="btn">
              Quero ser Nubank
            </button>
            <img src={apple} alt="" />
            <img src={playStore} alt="" />
          </BottomBannerLeft>
        </BodyBannerLeft>

        <BodyBannerRight>
          <CardIcon id="card" className={!!largura && "hideItens"}>
            <img src="/imagens/icon-card.svg" alt="" />
          </CardIcon>
          <CardIcon id="mobile" className={!!largura && "hideItens"}>
            <img src="/imagens/icon-mobile.svg" alt="" />
          </CardIcon>
          <CardIcon id="contacless" className={!!largura && "hideItens"}>
            <img src="/imagens/icon-contactless.svg" alt="" />
          </CardIcon>
          <CardImage
            src="https://fdr.com.br/wp-content/uploads/2020/04/catao.png"
            alt="seila"
          />
        </BodyBannerRight>
      </BodyBanner>
    </Container>
  );
}

export default Banner;
