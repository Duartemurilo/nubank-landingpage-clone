import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  font-family: "Sora", sans-serif;
  height: 70vh;
  max-height: 686px;
  min-width: 350px;
  width: 24vw;

  h5 {
    color: #9400d3;
    font-family: Sora, sans-serif;
    font-size: 18px;
    height: 2.5vh;
    width: 100%;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2.8vw;
    font-weight: 700;
    line-height: 57.2px;
    color: rgb(22, 22, 23);
    height: 5vh;
    width: 100%;
    margin-top: 4px;
    margin-bottom: 0;
  }
  .text-title {
    margin-top: 4px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22.4px;
    text-align: start;
    color: rgb(102, 101, 102);
    width: 100%;
    margin: 16px 0px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    min-width: 0;
    height: auto;

    padding: 0;
    h2 {
      height: auto;
    }

    .text-title {
      font-size: 16px;
    }
    p {
      font-size: 16px;
    }
    h2 {
      font-size: 32px;
      line-height: 32px;
      text-align: start;
    }
  }
`;

export const ContainerBenefits = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 24.5vh;
  min-height: 24vh;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0;
  @media (max-width: 1000px) {
    height: auto;
    padding-top: 10px;
    padding-bottom: 5vh;
    box-sizing: border-box;
  }
`;
