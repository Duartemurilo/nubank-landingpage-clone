import React, { useEffect, useState } from "react";
import {
  Container,
  HeaderLeft,
  HeaderRight,
  Main,
  Nav,
  HeaderBody,
} from "./style";
import nuLogo from "../../Images/logonu.svg";
import NavLink from "./NavLink";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const [whiteBackground, setBackground] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 9) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <Container>
      <HeaderBody className={!!whiteBackground && "white"}>
        <Main>
          <HeaderLeft>
            <MenuIcon className="btn-menu" style={{ fontSize: 40 }} />
            <img src={nuLogo} alt="logo" />
            <Nav>
              <NavLink text={"Nubank"} />
              <NavLink text={"Conta"} />
              <NavLink text={"Para você"} />
            </Nav>
          </HeaderLeft>
          <HeaderRight>
            <button className="btn-gradient">Quero ser um Nubank</button>
            <p>Login</p>
          </HeaderRight>
        </Main>
      </HeaderBody>
    </Container>
  );
}

export default Header;
