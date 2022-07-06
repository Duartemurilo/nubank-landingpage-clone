import styled from "styled-components";
import { SlideLeft, slideTopBottom } from "../../Constants/Animations";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: #edeaef;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: auto;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 5vw;
  height: 951px;
  width: 78vw;
  margin: 0px 196.5px;
  padding: 96px 24px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    height: 40%;
    margin: 0;
    gap: 0vh;
  }
`;

export const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 760px;
  max-height: 760px;
  width: 500px;
  .phone {
    object-fit: cover;
    width: 330px;
  }

  #money {
    top: 60px;
    right: 15px;
    animation: ${slideTopBottom} infinite 20s;
  }

  #protect {
    left: 15px;
    top: 200px;
    animation: ${slideTopBottom} infinite 18s;
  }

  #check {
    bottom: 150px;
    right: 15px;
    animation: ${slideTopBottom} infinite 27s;
  }

  @media (max-width: 1000px) {
    width: 350px;
    height: 400px;
    margin-bottom: 20%;
    #check {
      bottom: 50px;
    }
  }
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  background-color: white;
  height: 120px;
  width: 120px;
  border-radius: 28px;
  box-shadow: rgba(169, 80, 196, 0.13) 0px 17px 17px 0px,
    rgba(169, 80, 196, 0.086) 0px 5.125px 5.125px 0px,
    rgba(169, 80, 196, 0.067) 0px 2.12866px 2.12866px 0px,
    rgba(169, 80, 196, 0.047) 0px 0.7699px 0.7699px 0px;
  color: #9400d3;
  img {
    object-fit: cover;
    height: 90px;
    width: 90px;
  }
  @media (max-width: 1000px) {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  max-height: 700px;
  justify-content: center;
  width: 41vw;
  h5 {
    color: #9400d3;
    margin: 0;
    text-transform: uppercase;
    font-family: Sora, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 25.2px;
    width: 100%;
  }
  h2 {
    font-family: Sora, sans-serif;
    font-weight: 700;
    margin: 0;
    line-height: 57.2px;
    font-size: 52px;
    margin-top: 6px;
    width: 100%;
  }
  p {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    color: rgb(102, 101, 102);
    width: 100%;
  }
  @media (max-width: 1000px) {
    width: 90%;
    height: auto;
    h2 {
      font-size: 32px;
      line-height: 32px;
    }
  }
`;
export const ContainerText = styled.div`
  display: flex;
  height: 50vh;
  max-height: 250px;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`;

export const CardText = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: center;
  margin-left: 10px;
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

export const CardIconRow = styled.div`
  height: inherit;
`;

export const ContainerBtn = styled.div`
  width: 260px;
  height: 58px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s ease;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    height: inherit;
    width: 100%;
    :hover {
      margin-left: 20px;
      .border {
        opacity: 1;
        animation: ${SlideLeft} ease 0.5s;
      }
      p {
        transition: 0.5s ease;
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease;
        transition-delay: 0s;
      }
    }
  }

  .text-container {
    margin-left: 12px;
    font-family: "Source Sans Pro", sans-serif;
    width: inherit;
    p {
      margin: 0;
      font-size: 17px;
      color: #82269e;
      height: auto;
      width: 260px;
    }
    .border {
      width: 220px;
      height: 1px;
      background-color: #82269e;
      opacity: 0;
    }
  }
`;
