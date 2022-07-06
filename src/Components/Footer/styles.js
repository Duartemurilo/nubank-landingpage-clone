import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    220.94deg,
    rgb(169, 80, 196) 14.43%,
    rgb(130, 38, 158) 85.28%
  );
  .card-icon {
    gap: 2vw;
    color: white;
  }
  .icon-footer {
    font-size: 1.5rem;
    transition: 0.5s;
  }
  @media (max-width: 1000px) {
    height: auto;
  }
`;

export const Main = styled.div`
  width: 78vw;
  max-width: 1440px;
  max-height: 420px;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    display: flex;
    width: 50%;
    max-height: none;
    flex-direction: column;
    height: auto;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 230px;
  margin-top: 100px;
  max-width: 1152px;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

export const CardNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 20%;
  max-width: 250px;

  h4 {
    font-size: 24px;
    line-height: 30px;
    margin: 0;
    color: white;
    font-weight: 300;
    font-family: Sora, sans-serif;
  }
  .nav {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    p {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 16px;
      line-height: 22.4px;
      color: #bb71d2;
      margin: 0;
      cursor: pointer;
      margin-top: 8px;
      &:first-child {
        margin-top: 16px;
      }
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  width: 78vw;
  height: 30%;
  margin-top: 5vh;
  border-top: 1px solid #bb71d2;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 50px;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  img {
    width: 100px;
    height: 100px;
    max-width: 100px;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: white;
  }
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    padding: 0;
    padding-bottom: 50px;
    margin-top: 5vh;
    gap: 20px;
    .email {
      width: 80%;
      gap: 2px;
      margin-top: 5vh;
      img {
        width: 70px;
        height: 70px;
      }
    }
    .card-icon {
      justify-content: space-between;
    }
    div {
      height: 100%;
      width: 70%;
    }
  }
`;
