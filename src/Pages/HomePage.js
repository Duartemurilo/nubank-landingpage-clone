import React from "react";
import Banner from "../Components/Banner/Banner";
import Header from "../Components/Header/Header";
import { HomePageContainer } from "./styles";
import ForAll from "../Components/ForAll/ForAll.js";
import RowBenifits from "../Components/Row/RowBeniits";
import DigitalCount from "../Components/DigitalCount/DigitalCount";
import Cards from "../Components/Cards/Cards";
import Yield from "../Components/Yield/Yield";
import Footer from "../Components/Footer/Footer";

function HomePage() {
  return (
    <HomePageContainer>
      <Header />
      <Banner />
      <ForAll />
      <RowBenifits />
      <DigitalCount />
      <Cards />
      <Yield />
      <Footer />
    </HomePageContainer>
  );
}

export default HomePage;
