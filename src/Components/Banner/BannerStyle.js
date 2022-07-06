import styled from "styled-components";
import { slideTopBottom } from "../../Constants/Animations";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;

  .hideItens {
    display: none;
  }
  background-size: cover;
  background-position: center;
  @media (max-width: 1000px) {
    background-color: #edeaef;
    background-size: 0;
    height: auto;
    box-sizing: border-box;
  }
`;

export const BodyBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78vw;
  max-width: 1440px;
  height: 882px;
  max-height: 882px;
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    height: 100%;
    padding-top: 150px;
    box-sizing: border-box;
  }
`;

export const BodyBannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #232224;
  font-family: "Sora", sans-serif;
  width: 28.5vw;
  max-width: 528px;
  height: auto;

  h1 {
    font-family: Sora, sans-serif;
    font-size: 3.4vw;
    font-weight: 700;
    line-height: 64px;
    height: 192px;
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }

  p {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22.4px;
    height: auto;
    width: 100%;
    color: #656566;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 32px;
      line-height: 32px;
      margin: 0;
      height: auto;
    }
    p {
      font-size: 16px;
    }
    width: 90%;
  }
`;

export const BottomBannerLeft = styled.div`
  display: flex;
  gap: 20px;
  height: 53px;
  width: 100%;
  margin-top: 10px;
  #btn {
    width: 170px;
    height: 45px;
  }
`;

export const BodyBannerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48vh;
  width: 46.7vw;
  max-width: 864px;
  max-height: 480px;
  position: relative;
  #card {
    position: absolute;
    left: 150px;
    animation: ${slideTopBottom} infinite 20s;
  }

  #mobile {
    position: absolute;
    top: -5px;
    animation: ${slideTopBottom} infinite 20s;
  }
  #contacless {
    position: absolute;
    bottom: 100px;
    right: 250px;
    animation: ${slideTopBottom} infinite 20s;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 2vh;
    align-items: center;
  }
`;

export const CardIcon = styled.div`
  background-color: white;
  height: 72px;
  width: 72px;
  border-radius: 8px;
`;

export const CardImage = styled.img`
  width: 80%;
  height: 100%;
  object-fit: contain;
`;
