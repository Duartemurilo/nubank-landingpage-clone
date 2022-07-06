import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: flex-end;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    min-height: 400px;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  height: 884px;
  width: 78vw;
  @media (max-width: 1000px) {
    height: auto;
    width: 90%;
    height: 604px;
    justify-content: flex-start;
  }
`;

export const Section = styled.div`
  height: 425px;
  width: 54%;
  flex-direction: column;

  h5 {
    color: #9400d3;
    margin: 0;
    text-transform: uppercase;
    font-family: Sora, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 25.2px;
  }
  h2 {
    font-family: Sora, sans-serif;
    font-weight: 700;
    margin: 0;
    line-height: 57.2px;
    font-size: 52px;
    margin-top: 6px;
  }
  p {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    color: rgb(102, 101, 102);
  }
  @media (max-width: 1000px) {
    h2 {
      line-height: 32px;
      font-size: 32px;
    }
    width: 100%;
    height: auto;
  }
`;

export const ListBennefits = styled.div`
  color: rgb(0, 0, 0);
  height: 153px;
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 1000px) {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  height: 150px;
  width: 768px;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    gap: 8vh;
  }
`;

export const CardText = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  .card-icon {
    box-shadow: rgba(169, 80, 196, 0.2) 0px 17px 17px 0px,
      rgba(169, 80, 196, 0.086) 0px 5.125px 5.125px 0px,
      rgba(169, 80, 196, 0.067) 0px 2.12866px 2.12866px 0px,
      rgba(169, 80, 196, 0.047) 0px 0.7699px 0.7699px 0px;
  }
  @media (max-width: 1000px) {
    box-sizing: border-box;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: center;
  margin-left: 20px;
  width: 80%;
  height: 120%;
  strong {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 16px;
    margin: 0;
  }
  p {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    color: rgb(102, 101, 102);
    height: 22px;
    margin: 0;
  }
`;

export const ContainerCard = styled.div`
  height: 692px;
  width: 26vw;
  justify-content: center;
  align-items: center;
  margin-left: 4vw;
  position: relative;
  img {
    width: 18vw;
    object-fit: cover;
    border-radius: 10px;
  }
  #card-front {
    position: absolute;
    right: 0;
    bottom: 205px;
    z-index: 2;
    transform: rotate(-45deg);
  }

  #card-back {
    position: absolute;
    right: 100px;
    bottom: 350px;
    transform: scaleX(1);
    transform: scaleY(-1);
  }
  @media (max-width: 1000px) {
    z-index: 4;
    display: none;
  }
`;
