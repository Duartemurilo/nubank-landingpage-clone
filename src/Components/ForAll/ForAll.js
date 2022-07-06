import React from "react";
import { Container, Main, RightSide, Section } from "./style";
import Left from "./Left/Left";
import Center from "./Center/Center";
import RightTop from "./RightTop/RightTop";
import RightBottom from "./RightBottom/RightBottom";

function ForAll() {
  return (
    <Container id="forYou">
      <Main>
        <Left />
        <Section>
          <Center />
          <RightSide>
            <RightTop />
            <RightBottom />
          </RightSide>
        </Section>
      </Main>
    </Container>
  );
}

export default ForAll;
