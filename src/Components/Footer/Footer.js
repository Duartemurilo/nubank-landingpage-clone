import React from "react";
import { Container, Main, Section, ContainerSocialMedia } from "./styles";
import NavComponent from "./NavComponent";
import { ExploreMais, FaleConosco, nubankLinks, Produtos } from "./Link";
import nubankWhite from "../../Images/logonu-white.svg";
import Socialmedia from "./Socialmedia";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <Container>
      <Main>
        <Section>
          <NavComponent title={"Nubank"} text={nubankLinks} />
          <NavComponent title={"Produtos"} text={Produtos} />
          <NavComponent title={"Fale conosco"} text={FaleConosco} />
          <NavComponent title={"Explore mais"} text={ExploreMais} />
        </Section>
      </Main>
      <ContainerSocialMedia>
        <div className="email">
          <img src={nubankWhite} alt="logonu" />
          <a href="mailto:duartemurilom@gmail.com">
            <p>duartemurilom@gmail.com</p>
          </a>
        </div>
        <div className="card-icon">
          <p>Encontre-me em:</p>
          <Socialmedia
            href={"https://www.linkedin.com/in/duartemurilo/"}
            icon={<BsLinkedin />}
          />
          <Socialmedia
            href={"https://github.com/Duartemurilo"}
            icon={<BsGithub />}
          />
          <Socialmedia
            href={"https://www.instagram.com/muriloduarte700/"}
            icon={<BsInstagram />}
          />
        </div>
      </ContainerSocialMedia>
    </Container>
  );
}

export default Footer;
