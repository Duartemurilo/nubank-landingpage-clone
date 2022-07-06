import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #edeaef;
  @media (max-width: 1000px) {
    height: auto;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  width: 78vw;
  max-width: 1440px;
  height: 80vh;
  @media (max-width: 1000px) {
    width: 90%;
    align-items: flex-start;
    height: auto;
  }
`;

export const Section = styled.div`
  padding: 30px;
  margin-top: 10vh;
  display: flex;
  font-family: "Sora", sans-serif;
  height: 70vh;
  max-height: 686px;
  margin-left: 1vw;
  width: inherit;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 47vh;
  width: 17.5vw;
  margin-left: 2vw;
  max-width: 324px;
  position: relative;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: none;
  }
`;
