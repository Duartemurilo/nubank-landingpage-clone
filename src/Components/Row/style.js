import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #9400d3;
  background-color: #edeaef;
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 15vh;
    margin-left: 0vw;
    justify-content: flex-start;
    height: auto;
  }
`;

export const Benefits = styled.div`
  font-family: "Times New Roman";
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  background-color: rgb(247, 242, 250);
  height: 324.781px;
  width: 79vw;
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 0;
  padding-bottom: 72px;
  box-sizing: border-box;
  border-radius: 50px;
  gap: 5vh;
  @media (max-width: 1000px) {
    height: auto;
    width: 90%;
    max-width: 350px;
    flex-direction: column;
    padding: 0;
  }
`;

export const Entail = styled.div`
  z-index: 2;
  height: 35px;
`;

export const Main = styled.div`
  display: flex;
  width: 95%;
  height: 350px;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 80%;
    width: 90%;
    gap: 5vh;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  h5 {
    font-family: Sora, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 25.2px;
    margin: 0;
    text-transform: uppercase;
  }
  h2 {
    font-family: Sora, sans-serif;
    font-size: 52px;
    font-weight: 700;
    line-height: 57.2px;
    color: rgb(22, 22, 23);
    height: 114.375px;
    margin: 0;
  }
  @media (max-width: 1000px) {
    h2 {
      margin-top: 2vh;
      text-align: center;
    }
    align-items: center;
    width: 100%;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const CardBennefits = styled.div`
  width: 200px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 15px;
    text-align: center;
    color: black;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 700;
    letter-spacing: normal;
    line-height: 22.4px;
    margin-bottom: 0;
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 20vh;
    max-height: 140px;
    gap: 10px;
    width: 100%;
    margin-top: 1px;
    p {
      text-align: start;
    }
  }
`;
export const IconBenefits = styled.div`
  display: flex;
  background-color: white;
  height: 72px;
  width: 72px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    height: 60px;
    width: 60px;
  }
`;
